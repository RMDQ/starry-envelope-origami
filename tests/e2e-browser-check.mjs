import http from 'node:http';
import net from 'node:net';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
    srv.on('error', reject);
  });
}

const ROOT = path.resolve(import.meta.dirname, '..');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const SHOT_DIR = path.join(ROOT, 'tests', 'artifacts');
fs.mkdirSync(SHOT_DIR, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const reqPath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
      const fullPath = path.join(ROOT, reqPath);
      if (!fullPath.startsWith(ROOT) || !fs.existsSync(fullPath)) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(fullPath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(fullPath).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, url: `http://127.0.0.1:${port}/index.html` });
    });
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.seq = 0;
    this.pending = new Map();
    this.events = [];
    this.ready = new Promise((res, rej) => {
      this.ws.addEventListener('open', res);
      this.ws.addEventListener('error', rej);
    });
    this.ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id) {
        const p = this.pending.get(msg.id);
        if (p) {
          this.pending.delete(msg.id);
          if (msg.error) p.rej(new Error(msg.error.message));
          else p.res(msg.result);
        }
      } else {
        this.events.push(msg);
      }
    });
  }
  async call(method, params = {}) {
    await this.ready;
    const id = ++this.seq;
    return new Promise((res, rej) => {
      this.pending.set(id, { res, rej });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  close() {
    this.ws.close();
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  const { server, url } = await startStaticServer();
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-profile-'));
  const port = await getFreePort();

  const edge = spawn(
    EDGE_PATH,
    [
      '--headless=new',
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${userDataDir}`,
      '--window-size=1280,800',
      '--enable-webgl',
      '--use-gl=angle',
      '--use-angle=swiftshader',
      '--enable-unsafe-swiftshader',
      '--ignore-gpu-blocklist',
      '--no-first-run',
      '--mute-audio',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--disable-background-timer-throttling',
      '--disable-features=CalculateNativeWinOcclusion',
      url,
    ],
    { stdio: 'ignore' }
  );

  let client;
  try {
    let target = null;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${port}/json/list`);
        const list = await res.json();
        target = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
        if (target) break;
      } catch {}
      await sleep(200);
    }
    assert.ok(target, 'Edge CDP page target did not start');

    client = new CDPClient(target.webSocketDebuggerUrl);
    await client.call('Runtime.enable');
    await client.call('Page.enable');
    await client.call('DOM.enable');
    await client.call('Page.bringToFront');
    await client.call('Emulation.setFocusEmulationEnabled', { enabled: true });

    const waitForCondition = async (expression, timeoutMs = 15000, label = expression) => {
      const start = Date.now();
      let lastVal;
      while (Date.now() - start < timeoutMs) {
        const res = await client.call('Runtime.evaluate', {
          expression,
          returnByValue: true,
        });
        lastVal = res.result?.value;
        if (lastVal) return lastVal;
        await sleep(80);
      }
      throw new Error(`Timed out waiting for condition (${label}), last=${JSON.stringify(lastVal)}`);
    };

    // Helper to wait until phase-label matches target text (deterministic across SwiftShader speed)
    const waitForPhase = async (targetPhase, timeoutMs = 15000) => {
      const expected = Array.isArray(targetPhase) ? targetPhase : [targetPhase];
      const start = Date.now();
      let lastPhase = '';
      while (Date.now() - start < timeoutMs) {
        const res = await client.call('Runtime.evaluate', {
          expression: `document.getElementById('phase-label')?.textContent || ''`,
          returnByValue: true,
        });
        lastPhase = res.result?.value || '';
        if (expected.includes(lastPhase)) return lastPhase;
        await sleep(80);
      }
      throw new Error(`Timed out waiting for phase "${expected.join(' | ')}" (last="${lastPhase}")`);
    };

    await client.call('Page.navigate', { url });
    await waitForCondition(
      `document.readyState === 'complete' && document.querySelectorAll('#card-list .card-item').length === 3`,
      15000,
      'initial studio cards ready'
    );
    await sleep(300);

    // Check zero runtime errors and verify studio UI
    const initCheck = await client.call('Runtime.evaluate', {
      expression: `({
        title: document.title,
        cardCount: document.querySelectorAll('#card-list .card-item').length,
        hasCanvas: !!document.getElementById('scene-canvas'),
        webglOk: !!document.getElementById('scene-canvas')?.getContext('webgl2') || !!document.getElementById('scene-canvas')?.getContext('webgl'),
        bodyText: document.body?.innerText?.slice(0, 120)
      })`,
      returnByValue: true,
    });
    console.log('Init check:', JSON.stringify(initCheck));
    assert.ok(initCheck.result?.value, 'initCheck value missing: ' + JSON.stringify(initCheck));
    assert.equal(initCheck.result.value.cardCount, 3);
    assert.equal(initCheck.result.value.webglOk, true);

    // Screenshot 1: Studio editor view
    const s1 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '01-studio.png'), Buffer.from(s1.data, 'base64'));

    // Test empty validation edge case: clear cards, click play, verify error alert shown
    await client.call('Runtime.evaluate', {
      expression: `
        document.getElementById('clear-cards-btn').click();
        document.getElementById('start-play-btn').click();
        ({
          cards: document.querySelectorAll('#card-list .card-item').length,
          errorText: document.getElementById('form-error-msg').textContent,
          errorHidden: document.getElementById('form-error-msg').hidden
        })
      `,
      returnByValue: true,
    }).then((r) => {
      console.log('Empty validation:', r.result.value);
      assert.equal(r.result.value.cards, 0);
      assert.equal(r.result.value.errorHidden, false);
    });

    // Reload demo cards, test native <dialog>, upload a real PNG image via file input, and start playback
    const samplePngPath = path.join(SHOT_DIR, 'sample-upload.png');
    // Minimal valid 2x2 golden-blue PNG
    const samplePngBase64 =
      'iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mP8z8BQzwAEjFAMAA8MAgT9qO8/AAAAAElFTkSuQmCC';
    fs.writeFileSync(samplePngPath, Buffer.from(samplePngBase64, 'base64'));

    await client.call('Runtime.evaluate', {
      expression: `
        document.getElementById('load-demo-btn').click();
        document.getElementById('open-help-btn').click();
      `,
    });
    await sleep(250);
    const dlgOpen = await client.call('Runtime.evaluate', {
      expression: `document.getElementById('help-dialog').open`,
      returnByValue: true,
    });
    assert.equal(dlgOpen.result.value, true);

    await client.call('Runtime.evaluate', {
      expression: `document.getElementById('help-dialog').close();`,
    });

    // Test batch file upload via CDP DOM.setFileInputFiles (landscape 4x2 PNG to test contain framing)
    const doc = await client.call('DOM.getDocument');
    const fileNode = await client.call('DOM.querySelector', {
      nodeId: doc.root.nodeId,
      selector: '#image-upload-input',
    });
    await client.call('DOM.setFileInputFiles', {
      nodeId: fileNode.nodeId,
      files: [samplePngPath],
    });
    await sleep(400);

    const afterUpload = await client.call('Runtime.evaluate', {
      expression: `document.querySelectorAll('#card-list .card-item').length`,
      returnByValue: true,
    });
    console.log('Cards after image upload:', afterUpload.result.value);
    assert.equal(afterUpload.result.value, 4);

    // Test inline title edit immediately followed by clicking delete button on the next card
    // (verifies blur/change does not rebuild the list and swallow the click)
    await client.call('Runtime.evaluate', {
      expression: `(() => {
        const items = document.querySelectorAll('#card-list .card-item');
        const firstTitle = items[0].querySelector('input[type="text"]');
        firstTitle.focus();
        firstTitle.value = '夜空来信';
        firstTitle.dispatchEvent(new Event('input', { bubbles: true }));
        firstTitle.dispatchEvent(new Event('change', { bubbles: true }));
        // Click delete on 2nd card immediately after change
        items[1].querySelector('.mini-btn.danger').click();
        return {
          remaining: document.querySelectorAll('#card-list .card-item').length,
          firstVal: document.querySelector('#card-list .card-item input[type="text"]').value
        };
      })()`,
      returnByValue: true,
    }).then((r) => {
      console.log('Inline edit + delete check:', r.result.value);
      assert.equal(r.result.value.remaining, 3);
      assert.equal(r.result.value.firstVal, '夜空来信');
    });

    // Keep 2 cards (1 demo text + 1 uploaded image) for faster full-timeline E2E run
    await client.call('Runtime.evaluate', {
      expression: `
        document.querySelectorAll('#card-list .mini-btn.danger')[1].click();
        document.getElementById('cinema-hide-toggle').checked = false;
        document.getElementById('hold-duration').value = '2';
        document.getElementById('start-play-btn').click();
      `,
    });

    // Wait for envelope entrance + open + first card showcase
    await waitForPhase('高清展示中');
    await sleep(350);
    const s2 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '02-showcase-dof.png'), Buffer.from(s2.data, 'base64'));

    // Test Space shortcut to pause & resume
    await client.call('Input.dispatchKeyEvent', { type: 'keyDown', code: 'Space', key: ' ' });
    await client.call('Input.dispatchKeyEvent', { type: 'keyUp', code: 'Space', key: ' ' });
    await sleep(120);
    const pausedLabel = await client.call('Runtime.evaluate', {
      expression: `document.getElementById('toggle-pause-btn').textContent`,
      returnByValue: true,
    });
    assert.equal(pausedLabel.result.value, '继续');
    await client.call('Input.dispatchKeyEvent', { type: 'keyDown', code: 'Space', key: ' ' });
    await client.call('Input.dispatchKeyEvent', { type: 'keyUp', code: 'Space', key: ' ' });

    // Wait for first card origami folding
    await waitForPhase('折纸幻化中');
    await sleep(450);
    const s3 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '03-folding.png'), Buffer.from(s3.data, 'base64'));

    // Wait for finale orbit/glow
    await waitForPhase(['折纸环绕共舞', '星光汇聚点亮'], 20000);
    await sleep(400);
    const s4 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '04-finale.png'), Buffer.from(s4.data, 'base64'));

    // Wait for meteor shower + closing blessing fade-in
    await waitForPhase('星河献礼 · 祝福浮现', 15000);
    await waitForCondition(
      `document.getElementById('ending-overlay').classList.contains('is-visible')`,
      5000,
      'ending-overlay visible'
    );
    await sleep(600);
    const s5 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '05-blessing.png'), Buffer.from(s5.data, 'base64'));

    const finalState = await client.call('Runtime.evaluate', {
      expression: `({
        phase: document.getElementById('phase-label').textContent,
        endingVisible: document.getElementById('ending-overlay').classList.contains('is-visible')
      })`,
      returnByValue: true,
    });
    console.log('Finale state:', finalState.result.value);
    assert.equal(finalState.result.value.endingVisible, true);

    // Test Esc returns cleanly to editor, verify midnight-gold & lavender-mist themes on desktop open-flap + mobile viewport
    await client.call('Input.dispatchKeyEvent', { type: 'keyDown', code: 'Escape', key: 'Escape' });
    await client.call('Input.dispatchKeyEvent', { type: 'keyUp', code: 'Escape', key: 'Escape' });
    await waitForPhase('准备就绪', 5000);
    const backState = await client.call('Runtime.evaluate', {
      expression: `({
        isPlaying: document.getElementById('stage-root').classList.contains('is-playing'),
        endingVisible: document.getElementById('ending-overlay').classList.contains('is-visible')
      })`,
      returnByValue: true,
    });
    assert.equal(backState.result.value.isPlaying, false);
    assert.equal(backState.result.value.endingVisible, false);

    // Desktop open-flap capture for midnight-gold (during '展信升起', flap open & DOF=0)
    await client.call('Runtime.evaluate', {
      expression: `
        document.getElementById('envelope-theme').value = 'midnight-gold';
        document.getElementById('envelope-theme').dispatchEvent(new Event('change'));
        document.getElementById('hold-duration').value = '2';
        document.getElementById('start-play-btn').click();
      `,
    });
    await waitForPhase('展信升起');
    await sleep(320);
    const s7 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '07-desktop-midnight-open.png'), Buffer.from(s7.data, 'base64'));

    await client.call('Input.dispatchKeyEvent', { type: 'keyDown', code: 'Escape', key: 'Escape' });
    await client.call('Input.dispatchKeyEvent', { type: 'keyUp', code: 'Escape', key: 'Escape' });
    await waitForPhase('准备就绪', 5000);

    // Desktop open-flap capture for lavender-mist
    await client.call('Runtime.evaluate', {
      expression: `
        document.getElementById('envelope-theme').value = 'lavender-mist';
        document.getElementById('envelope-theme').dispatchEvent(new Event('change'));
        document.getElementById('start-play-btn').click();
      `,
    });
    await waitForPhase('展信升起');
    await sleep(320);
    const s8 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '08-desktop-lavender-open.png'), Buffer.from(s8.data, 'base64'));

    await client.call('Input.dispatchKeyEvent', { type: 'keyDown', code: 'Escape', key: 'Escape' });
    await client.call('Input.dispatchKeyEvent', { type: 'keyUp', code: 'Escape', key: 'Escape' });
    await waitForPhase('准备就绪', 5000);

    await client.call('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await client.call('Runtime.evaluate', {
      expression: `
        document.getElementById('envelope-theme').value = 'midnight-gold';
        document.getElementById('envelope-theme').dispatchEvent(new Event('change'));
        document.getElementById('global-shape').value = 'crane';
      `,
    });
    await sleep(350);
    const s6 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '06-mobile-midnight.png'), Buffer.from(s6.data, 'base64'));

    // Also capture mobile mid-extraction frame
    await client.call('Runtime.evaluate', {
      expression: `document.getElementById('start-play-btn').click();`,
    });
    await waitForPhase('展信升起');
    await sleep(420);
    const s9 = await client.call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOT_DIR, '09-mobile-extract.png'), Buffer.from(s9.data, 'base64'));

    // Check for any runtime exceptions in CDP events
    const exceptions = client.events.filter((e) => e.method === 'Runtime.exceptionThrown');
    assert.equal(exceptions.length, 0, `Unexpected runtime exceptions: ${JSON.stringify(exceptions)}`);
    console.log('E2E browser check passed with 0 exceptions!');
  } finally {
    client?.close();
    if (process.platform === 'win32' && edge.pid) {
      spawnSync('taskkill', ['/PID', String(edge.pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      edge.kill();
    }
    server.closeAllConnections?.();
    server.close();
    await sleep(300);
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true });
    } catch {}
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
