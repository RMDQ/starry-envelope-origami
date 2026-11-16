import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CardStore } from '../src/store/CardStore.js';
import { wrapTextLines } from '../src/scene/CardTextureGenerator.js';
import { AnimationDirector, resolveCardShape } from '../src/scene/AnimationDirector.js';
import { OrigamiCard } from '../src/scene/OrigamiCard.js';

// Mock CanvasRenderingContext2D.measureText using character-width approximation
const mockCtx = {
  measureText(str) {
    let w = 0;
    for (const ch of str) {
      w += ch.charCodeAt(0) > 255 ? 20 : 11;
    }
    return { width: w };
  },
};

test('wrapTextLines handles empty, multiline, mixed CJK/Latin, and emojis', () => {
  assert.deepEqual(wrapTextLines(mockCtx, '', 200), []);
  assert.deepEqual(wrapTextLines(mockCtx, null, 200), []);

  const multi = wrapTextLines(mockCtx, '第一行\n\n第三行', 200);
  assert.deepEqual(multi, ['第一行', '', '第三行']);

  const wrapped = wrapTextLines(mockCtx, '这是一段很长的中文测试文本✨🌙用来验证自动换行是否完整保留文字', 120);
  assert.ok(wrapped.length >= 4);
  assert.equal(wrapped.join(''), '这是一段很长的中文测试文本✨🌙用来验证自动换行是否完整保留文字');

  const english = wrapTextLines(mockCtx, 'Starry night origami memories flying across the sky', 160);
  assert.ok(english.length >= 2);
  for (const line of english) {
    assert.ok(mockCtx.measureText(line).width <= 160);
  }
});

test('CardStore CRUD, boundary moves, and validation', () => {
  const store = new CardStore();
  assert.equal(store.cards.length, 3);

  // Reject empty text card
  assert.equal(store.addTextCard({ title: '  ', text: '' }), null);
  assert.equal(store.cards.length, 3);

  // Add valid text card
  const added = store.addTextCard({ title: '新卡片', text: '内容' });
  assert.ok(added);
  assert.equal(store.cards.length, 4);

  // Boundary move checks
  assert.equal(store.moveCard(store.cards[0].id, -1), false);
  assert.equal(store.moveCard(added.id, 1), false);
  assert.equal(store.moveCard(added.id, -1), true);
  assert.equal(store.cards[2].id, added.id);

  // Add image card validation
  assert.equal(store.addImageCard({ imageDataUrl: '' }), null);
  const imgCard = store.addImageCard({ imageDataUrl: 'data:image/png;base64,abc', title: '照片' });
  assert.ok(imgCard);
  assert.equal(imgCard.imageFit, 'contain');

  // Update and remove
  store.updateCard(imgCard.id, { title: '更新照片' });
  assert.equal(store.cards.find((c) => c.id === imgCard.id).title, '更新照片');
  assert.equal(store.removeCard(imgCard.id), true);
  assert.equal(store.removeCard('nonexistent'), false);

  store.clearCards();
  assert.equal(store.cards.length, 0);
  store.loadDemoCards();
  assert.equal(store.cards.length, 3);
});

test('resolveCardShape respects overrides and ensures butterfly/crane finale on auto', () => {
  assert.equal(resolveCardShape('crane', 'plane', 0, 3), 'crane');
  assert.equal(resolveCardShape('inherit', 'butterfly', 0, 3), 'butterfly');
  assert.equal(resolveCardShape('inherit', 'auto', 0, 3), 'plane');
  assert.equal(resolveCardShape('inherit', 'auto', 1, 3), 'butterfly');
  const last = resolveCardShape('inherit', 'auto', 2, 3);
  assert.ok(last === 'butterfly' || last === 'crane');
});

test('OrigamiCard keeps exact 1:1 unwashed shading at foldProgress=0 and transitions when folding', () => {
  const tex = new THREE.Texture();
  const card = new OrigamiCard({ texture: tex, shape: 'crane', index: 0 });
  assert.equal(card.material.color.r, 0);
  assert.equal(card.material.color.g, 0);
  assert.equal(card.material.color.b, 0);
  assert.equal(card.material.emissiveIntensity, 1.0);

  card.foldProgress = 1.0;
  assert.equal(card.material.color.r, 1);
  assert.ok(card.material.emissiveIntensity < 0.3);

  card.glowStrength = 1.0;
  assert.ok(card.material.emissiveIntensity > 1.0 && card.material.emissiveIntensity < 1.5);
  card.dispose();
  tex.dispose();
});

test('AnimationDirector schedules all cards in synchronized 0.14s stagger during finaleAscend', () => {
  const dummyScene = {
    camera: { fov: 42, aspect: 1.6 },
    bgScene: new THREE.Scene(),
    fgContentGroup: new THREE.Group(),
    dofAmount: 0,
    milkyWayIntensity: 0,
    update() {},
    render() {},
  };
  const dummyEnvelope = {
    group: new THREE.Group(),
    setFlapOpen() {},
  };
  const dummyMeteor = {
    emitSparkleBurst() {},
    emitTrailDot() {},
    startShower() {},
    stopAndClear() {},
    spawnMeteor() {},
    update() {},
  };

  const director = new AnimationDirector({
    scene: dummyScene,
    envelope: dummyEnvelope,
    meteorShower: dummyMeteor,
  });

  const cards = Array.from({ length: 5 }, (_, i) => ({
    texture: new THREE.Texture(),
    origamiShape: i % 2 === 0 ? 'butterfly' : 'crane',
  }));
  director.play(cards, { holdDuration: 1.0, origamiShape: 'auto' });

  const ascendTime = director.masterTl.labels.finaleAscend;
  assert.ok(Number.isFinite(ascendTime) && ascendTime > 0);
  // Total timeline duration after finaleAscend should be ~0.56s stagger + ~2s blessing + 4.5s hold (< 8s),
  // NOT 5 * 1.6s sequential cascade.
  const tailDuration = director.masterTl.duration() - ascendTime;
  assert.ok(tailDuration < 8.5, `Expected synchronized finale tail < 8.5s, got ${tailDuration}`);

  director.resetToIdle();
  cards.forEach((c) => c.texture.dispose());
});

test('CardStore exportConfig and importConfig preserve settings and all added cards', () => {
  const store = new CardStore([]);
  store.settings.holdDuration = 4;
  store.settings.origamiShape = 'butterfly';
  store.settings.envelopeTheme = 'midnight-gold';
  store.settings.aspectRatio = '9:16';
  store.settings.endingTitle = '星光不问赶路人';
  store.settings.endingSignature = '—— 2026';
  store.settings.cinemaHideControls = false;
  store.settings.autoFullscreen = true;

  store.addTextCard({ title: 'T1', text: 'Body 1', paperTone: 'sky', origamiShape: 'plane' });
  store.addImageCard({
    imageDataUrl: 'data:image/png;base64,iVBORw0KGgo=',
    title: 'Photo',
    text: 'Caption',
    paperTone: 'blush',
    origamiShape: 'crane',
  });

  const exported = JSON.parse(JSON.stringify(store.exportConfig()));
  assert.equal(exported.version, 1);
  assert.equal(exported.cards.length, 2);
  assert.equal(exported.cards[1].imageDataUrl, 'data:image/png;base64,iVBORw0KGgo=');

  const restored = new CardStore([]);
  assert.equal(restored.importConfig(null), false);
  assert.equal(restored.importConfig({}), false);

  assert.equal(restored.importConfig(exported), true);
  assert.equal(restored.settings.aspectRatio, '9:16');
  assert.equal(restored.settings.envelopeTheme, 'midnight-gold');
  assert.equal(restored.settings.holdDuration, 4);
  assert.equal(restored.settings.autoFullscreen, true);
  assert.equal(restored.cards.length, 2);
  assert.equal(restored.cards[0].title, 'T1');
  assert.equal(restored.cards[1].imageDataUrl, 'data:image/png;base64,iVBORw0KGgo=');
  assert.equal(restored.cards[1].origamiShape, 'crane');
});
