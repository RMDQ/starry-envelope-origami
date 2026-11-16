import { CardStore } from './store/CardStore.js';
import { loadConfigFromBrowser, saveConfigToBrowser } from './store/ConfigStorage.js';
import { createCardPreviewUrl, createCardTexture } from './scene/CardTextureGenerator.js';
import { StarryNightScene } from './scene/StarryNightScene.js';
import { EnvelopeMesh } from './scene/EnvelopeMesh.js';
import { MeteorShower } from './scene/MeteorShower.js';
import { AnimationDirector } from './scene/AnimationDirector.js';
import coverAssetUrl from '../assets/images/cover.png';
import openedAssetUrl from '../assets/images/opened.png';

EnvelopeMesh.setAssetUrls(coverAssetUrl, openedAssetUrl);

const PHASE_LABELS = {
  idle: '准备就绪',
  intro: '星夜启封 · 蕾丝信封飞入',
  extracting: '展信升起',
  showcasing: '高清展示中',
  folding: '折纸幻化中',
  finale_orbit: '折纸环绕共舞',
  finale_glow: '星光汇聚点亮',
  finale_shower: '化作流星雨飞向深空',
  finale_blessing: '星河献礼 · 祝福浮现',
  complete: '播放完成',
};

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

function initApp() {
  const appShell = document.getElementById('app-shell');
  const stageRoot = document.getElementById('stage-root');
  const studioPanel = document.getElementById('studio-panel');
  const canvas = document.getElementById('scene-canvas');
  const ratioBadge = document.getElementById('ratio-badge');
  const endingOverlay = document.getElementById('ending-overlay');
  const endingTitleDisplay = document.getElementById('ending-title-display');
  const endingSignatureDisplay = document.getElementById('ending-signature-display');

  const phaseLabelEl = document.getElementById('phase-label');
  const cardCounterEl = document.getElementById('card-counter');

  const imageUploadInput = document.getElementById('image-upload-input');
  const dropzone = document.getElementById('dropzone');
  const textCardForm = document.getElementById('text-card-form');
  const newCardTitle = document.getElementById('new-card-title');
  const newCardBody = document.getElementById('new-card-body');
  const newCardTone = document.getElementById('new-card-tone');
  const newCardShape = document.getElementById('new-card-shape');

  const loadDemoBtn = document.getElementById('load-demo-btn');
  const clearCardsBtn = document.getElementById('clear-cards-btn');
  const cardListEl = document.getElementById('card-list');
  const queueCountEl = document.getElementById('queue-count');
  const emptyQueueMsg = document.getElementById('empty-queue-msg');

  const holdDurationSelect = document.getElementById('hold-duration');
  const globalShapeSelect = document.getElementById('global-shape');
  const envelopeThemeSelect = document.getElementById('envelope-theme');
  const aspectRatioSelect = document.getElementById('aspect-ratio-select');
  const endingTitleInput = document.getElementById('ending-title-input');
  const endingSignatureInput = document.getElementById('ending-signature-input');
  const cinemaHideToggle = document.getElementById('cinema-hide-toggle');
  const autoFullscreenToggle = document.getElementById('auto-fullscreen-toggle');

  const formErrorMsg = document.getElementById('form-error-msg');
  const configStatusMsg = document.getElementById('config-status-msg');
  const saveConfigBtn = document.getElementById('save-config-btn');
  const exportConfigBtn = document.getElementById('export-config-btn');
  const importConfigBtn = document.getElementById('import-config-btn');
  const importConfigInput = document.getElementById('import-config-input');
  const startPlayBtn = document.getElementById('start-play-btn');
  const playbackBar = document.getElementById('playback-bar');
  const togglePauseBtn = document.getElementById('toggle-pause-btn');
  const replayBtn = document.getElementById('replay-btn');
  const ratioToggleBtn = document.getElementById('ratio-toggle-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const backEditBtn = document.getElementById('back-edit-btn');

  const openHelpBtn = document.getElementById('open-help-btn');
  const helpDialog = document.getElementById('help-dialog');

  const store = new CardStore();
  const scene = new StarryNightScene(canvas);
  const envelope = new EnvelopeMesh(store.settings.envelopeTheme);
  scene.bgScene.add(envelope.group);
  const meteorShower = new MeteorShower(scene.bgScene);

  let activeTextures = [];
  let cinemaIdleTimer = null;

  const director = new AnimationDirector({
    scene,
    envelope,
    meteorShower,
    onPhaseChange: (phase, current, total) => {
      phaseLabelEl.textContent = PHASE_LABELS[phase] || phase;
      cardCounterEl.textContent = total > 0 && current > 0 ? `${current} / ${total}` : '';
    },
    onEndingToggle: (visible) => {
      endingOverlay.classList.toggle('is-visible', visible);
      endingOverlay.setAttribute('aria-hidden', visible ? 'false' : 'true');
    },
    onComplete: () => {
      togglePauseBtn.textContent = '重播';
    },
  });

  let configStatusTimer = null;

  function clearError() {
    formErrorMsg.hidden = true;
    formErrorMsg.textContent = '';
  }

  function showError(msg) {
    formErrorMsg.textContent = msg;
    formErrorMsg.hidden = false;
  }

  function showConfigStatus(msg) {
    clearTimeout(configStatusTimer);
    if (!configStatusMsg) return;
    configStatusMsg.textContent = msg;
    configStatusMsg.hidden = false;
    configStatusTimer = setTimeout(() => {
      configStatusMsg.hidden = true;
    }, 4000);
  }

  function syncSettingsFromUI() {
    store.settings.holdDuration = Number(holdDurationSelect.value) || 3.0;
    store.settings.origamiShape = globalShapeSelect.value;
    store.settings.envelopeTheme = envelopeThemeSelect.value;
    applyAspectRatio(aspectRatioSelect.value);
    store.settings.endingTitle = endingTitleInput.value.trim() || '愿所有温柔与星光，都奔你而来';
    store.settings.endingSignature = endingSignatureInput.value.trim();
    store.settings.cinemaHideControls = cinemaHideToggle.checked;
    store.settings.autoFullscreen = autoFullscreenToggle.checked;
  }

  function applySettingsToUI() {
    holdDurationSelect.value = String(store.settings.holdDuration);
    globalShapeSelect.value = store.settings.origamiShape;
    envelopeThemeSelect.value = store.settings.envelopeTheme;
    envelope.setTheme(store.settings.envelopeTheme);
    applyAspectRatio(store.settings.aspectRatio);
    endingTitleInput.value = store.settings.endingTitle;
    endingSignatureInput.value = store.settings.endingSignature;
    cinemaHideToggle.checked = Boolean(store.settings.cinemaHideControls);
    autoFullscreenToggle.checked = Boolean(store.settings.autoFullscreen);
  }

  async function hydrateCardImages(cards) {
    await Promise.allSettled(
      cards.map(async (card) => {
        if (card.imageDataUrl && !card.imageElement) {
          try {
            card.imageElement = await loadImageElement(card.imageDataUrl);
          } catch (err) {
            console.warn('Failed to hydrate saved card image:', card.id, err);
          }
        }
      })
    );
  }

  function releaseActiveTextures() {
    for (const tex of activeTextures) {
      tex.dispose();
    }
    activeTextures = [];
  }

  function renderCardList() {
    queueCountEl.textContent = String(store.cards.length);
    emptyQueueMsg.hidden = store.cards.length > 0;
    cardListEl.replaceChildren();
    if (!director.isPlaying) {
      envelope.setLetterStack?.(store.cards.length);
    }

    store.cards.forEach((card, index) => {
      const li = document.createElement('li');
      li.className = 'card-item';

      // Preview thumbnail
      const thumb = document.createElement('img');
      thumb.className = 'card-thumb';
      thumb.alt = card.title || `卡片 ${index + 1}`;
      if (!card._thumbUrl) {
        card._thumbUrl = createCardPreviewUrl(card);
      }
      thumb.src = card._thumbUrl;

      const refreshThumb = () => {
        card._thumbUrl = createCardPreviewUrl(card);
        thumb.src = card._thumbUrl;
        thumb.alt = card.title || `卡片 ${index + 1}`;
      };

      // Editable metadata fields
      const meta = document.createElement('div');
      meta.className = 'card-meta';

      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.value = card.title || '';
      titleInput.placeholder = `卡片 ${index + 1} 标题（可选）`;
      titleInput.setAttribute('aria-label', `第 ${index + 1} 张卡片标题`);
      titleInput.addEventListener('input', () => {
        card = store.updateCard(card.id, { title: titleInput.value.trim() }) || card;
      });
      titleInput.addEventListener('change', refreshThumb);

      const bodyInput = document.createElement('input');
      bodyInput.type = 'text';
      bodyInput.value = card.text || '';
      bodyInput.placeholder = '卡片配文 / 祝福语（可选）';
      bodyInput.setAttribute('aria-label', `第 ${index + 1} 张卡片内容`);
      bodyInput.addEventListener('input', () => {
        card = store.updateCard(card.id, { text: bodyInput.value.trim() }) || card;
      });
      bodyInput.addEventListener('change', refreshThumb);

      const row = document.createElement('div');
      row.className = 'card-meta-row';

      const shapeSel = document.createElement('select');
      shapeSel.setAttribute('aria-label', `第 ${index + 1} 张折纸形态`);
      const shapeOpts = [
        ['inherit', '跟随全局折纸'],
        ['plane', '折成纸飞机'],
        ['butterfly', '折成蝴蝶'],
        ['crane', '折成千纸鹤'],
      ];
      for (const [val, label] of shapeOpts) {
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = label;
        opt.selected = card.origamiShape === val;
        shapeSel.appendChild(opt);
      }
      shapeSel.addEventListener('change', () => {
        store.updateCard(card.id, { origamiShape: shapeSel.value });
      });

      row.appendChild(shapeSel);

      if (card.imageElement) {
        const fitSel = document.createElement('select');
        fitSel.setAttribute('aria-label', `第 ${index + 1} 张图片填充模式`);
        const fitOpts = [
          ['contain', '完整不裁切'],
          ['cover', '铺满画面'],
        ];
        for (const [val, label] of fitOpts) {
          const opt = document.createElement('option');
          opt.value = val;
          opt.textContent = label;
          opt.selected = (card.imageFit || 'contain') === val;
          fitSel.appendChild(opt);
        }
        fitSel.addEventListener('change', () => {
          card = store.updateCard(card.id, { imageFit: fitSel.value }) || card;
          refreshThumb();
        });
        row.appendChild(fitSel);
      }

      meta.append(titleInput, bodyInput, row);

      // Reorder & delete buttons
      const actions = document.createElement('div');
      actions.className = 'card-actions';

      const upBtn = document.createElement('button');
      upBtn.type = 'button';
      upBtn.className = 'mini-btn';
      upBtn.textContent = '上移';
      upBtn.disabled = index === 0;
      upBtn.addEventListener('click', () => {
        store.moveCard(card.id, -1);
        renderCardList();
      });

      const downBtn = document.createElement('button');
      downBtn.type = 'button';
      downBtn.className = 'mini-btn';
      downBtn.textContent = '下移';
      downBtn.disabled = index === store.cards.length - 1;
      downBtn.addEventListener('click', () => {
        store.moveCard(card.id, 1);
        renderCardList();
      });

      const delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'mini-btn danger';
      delBtn.textContent = '删除';
      delBtn.addEventListener('click', () => {
        store.removeCard(card.id);
        renderCardList();
      });

      actions.append(upBtn, downBtn, delBtn);
      li.append(thumb, meta, actions);
      cardListEl.appendChild(li);
    });
  }

  async function handleFiles(fileList) {
    clearError();
    const files = Array.from(fileList || []).filter(
      (f) => f.type.startsWith('image/') || /\.(png|jpe?g|webp|gif|bmp|avif|svg)$/i.test(f.name)
    );
    if (files.length === 0) {
      showError('请选择图片格式文件（JPG、PNG、WebP 等）。');
      return;
    }

    for (const file of files) {
      try {
        const dataUrl = await readFileAsDataUrl(file);
        const img = await loadImageElement(dataUrl);
        store.addImageCard({
          imageDataUrl: dataUrl,
          imageElement: img,
          title: '',
          text: '',
          layout: 'polaroid',
          paperTone: 'ivory',
          imageFit: 'contain',
          origamiShape: 'inherit',
        });
      } catch (err) {
        console.error('Failed to load image file:', file.name, err);
        showError(`部分图片未能读取：${file.name}`);
      }
    }
    renderCardList();
  }

  function updateRatioBadge() {
    if (!ratioBadge || store.settings.aspectRatio !== '9:16') return;
    const w = Math.round(stageRoot.clientWidth);
    const h = Math.round(stageRoot.clientHeight);
    ratioBadge.textContent = w > 0 && h > 0 ? `Instagram 9:16 · ${w} × ${h}` : 'Instagram 9:16';
  }

  function applyAspectRatio(ratio) {
    const nextRatio = ratio === '9:16' ? '9:16' : 'auto';
    store.settings.aspectRatio = nextRatio;
    if (aspectRatioSelect) aspectRatioSelect.value = nextRatio;

    const isPortrait916 = nextRatio === '9:16';
    appShell.classList.toggle('is-ratio-9-16', isPortrait916);
    if (ratioToggleBtn) {
      ratioToggleBtn.classList.toggle('is-active', isPortrait916);
      ratioToggleBtn.textContent = isPortrait916 ? '9:16 竖屏 ✓' : '9:16 竖屏';
    }
    if (ratioBadge) {
      ratioBadge.hidden = !isPortrait916;
    }

    scene.resize();
    requestAnimationFrame(() => {
      scene.resize();
      updateRatioBadge();
    });
  }

  function scheduleCinemaIdle() {
    clearTimeout(cinemaIdleTimer);
    appShell.classList.remove('is-cinema-idle');
    stageRoot.classList.remove('is-cinema-idle');
    if (store.settings.cinemaHideControls && director.isPlaying) {
      cinemaIdleTimer = setTimeout(() => {
        appShell.classList.add('is-cinema-idle');
        stageRoot.classList.add('is-cinema-idle');
      }, 1800);
    }
  }

  function startPlayback() {
    clearError();
    if (store.cards.length === 0) {
      showError('请先上传至少一张卡片图片或添加文字卡片。');
      return;
    }

    // Sync latest settings
    syncSettingsFromUI();

    endingTitleDisplay.textContent = store.settings.endingTitle;
    endingSignatureDisplay.textContent = store.settings.endingSignature;
    endingSignatureDisplay.hidden = !store.settings.endingSignature;

    releaseActiveTextures();
    const maxAniso = scene.renderer.capabilities.getMaxAnisotropy();
    const preparedCards = store.cards.map((card) => {
      const { texture } = createCardTexture(card, maxAniso);
      activeTextures.push(texture);
      return {
        texture,
        origamiShape: card.origamiShape,
      };
    });

    if (studioPanel?.contains(document.activeElement)) {
      document.activeElement.blur?.();
    }
    if (studioPanel) {
      studioPanel.inert = true;
    }

    appShell.classList.add('is-playing');
    stageRoot.classList.add('is-playing');
    playbackBar.hidden = false;
    togglePauseBtn.textContent = '暂停';

    if (store.settings.autoFullscreen && !document.fullscreenElement) {
      appShell.requestFullscreen?.()
        .then(() => {
          if (!director.isPlaying && document.fullscreenElement === appShell) {
            document.exitFullscreen?.().catch(() => {});
          }
        })
        .catch(() => {});
    }

    director.play(preparedCards, {
      holdDuration: store.settings.holdDuration,
      origamiShape: store.settings.origamiShape,
    });
    scheduleCinemaIdle();
  }

  function exitPlaybackToEditor() {
    clearTimeout(cinemaIdleTimer);
    appShell.classList.remove('is-playing', 'is-cinema-idle');
    stageRoot.classList.remove('is-playing', 'is-cinema-idle');
    if (studioPanel) {
      studioPanel.inert = false;
    }
    playbackBar.hidden = true;
    director.resetToIdle();
    envelope.setLetterStack?.(store.cards.length);
    releaseActiveTextures();
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
  }

  // Event listeners
  imageUploadInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
    imageUploadInput.value = '';
  });

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('is-dragover');
  });
  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('is-dragover');
  });
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('is-dragover');
    handleFiles(e.dataTransfer?.files);
  });

  textCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError();
    const title = newCardTitle.value.trim();
    const text = newCardBody.value.trim();
    if (!title && !text) {
      showError('请输入卡片标题或正文内容后再添加。');
      return;
    }
    store.addTextCard({
      title,
      text,
      paperTone: newCardTone.value,
      origamiShape: newCardShape.value,
    });
    newCardTitle.value = '';
    newCardBody.value = '';
    renderCardList();
  });

  loadDemoBtn.addEventListener('click', () => {
    clearError();
    store.loadDemoCards();
    renderCardList();
  });

  clearCardsBtn.addEventListener('click', () => {
    clearError();
    store.clearCards();
    renderCardList();
  });

  envelopeThemeSelect.addEventListener('change', () => {
    envelope.setTheme(envelopeThemeSelect.value);
  });

  aspectRatioSelect.addEventListener('change', () => {
    applyAspectRatio(aspectRatioSelect.value);
  });

  ratioToggleBtn.addEventListener('click', () => {
    const next = store.settings.aspectRatio === '9:16' ? 'auto' : '9:16';
    applyAspectRatio(next);
    scheduleCinemaIdle();
  });

  saveConfigBtn.addEventListener('click', async () => {
    clearError();
    syncSettingsFromUI();
    try {
      const cfg = store.exportConfig();
      await saveConfigToBrowser(cfg);
      showConfigStatus(`已保存当前配置（含 ${cfg.cards.length} 张卡片），刷新页面自动恢复。`);
    } catch (err) {
      console.error('Failed to save config:', err);
      showError('保存配置失败，可尝试使用“导出配置”保存为本地文件。');
    }
  });

  exportConfigBtn.addEventListener('click', () => {
    clearError();
    syncSettingsFromUI();
    const cfg = store.exportConfig();
    const blob = new Blob([JSON.stringify(cfg, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
    const a = document.createElement('a');
    a.href = url;
    a.download = `starry-envelope-config-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showConfigStatus(`已导出配置文件（含 ${cfg.cards.length} 张卡片）。`);
  });

  importConfigBtn.addEventListener('click', () => {
    importConfigInput.click();
  });

  importConfigInput.addEventListener('change', async (e) => {
    clearError();
    const file = e.target.files?.[0];
    importConfigInput.value = '';
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!store.importConfig(parsed)) {
        showError('配置文件格式无效，请选择导出的 JSON 配置文件。');
        return;
      }
      await hydrateCardImages(store.cards);
      applySettingsToUI();
      renderCardList();
      showConfigStatus(`已导入配置（含 ${store.cards.length} 张卡片）。`);
    } catch (err) {
      console.error('Failed to import config:', err);
      showError('读取配置文件失败，请确认文件为有效的 JSON 配置。');
    }
  });

  startPlayBtn.addEventListener('click', startPlayback);

  togglePauseBtn.addEventListener('click', () => {
    if (togglePauseBtn.textContent === '重播') {
      startPlayback();
      return;
    }
    const paused = director.togglePause();
    togglePauseBtn.textContent = paused ? '继续' : '暂停';
    scheduleCinemaIdle();
  });

  replayBtn.addEventListener('click', startPlayback);

  fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    } else {
      appShell.requestFullscreen?.().catch(() => {});
    }
  });

  document.addEventListener('fullscreenchange', () => {
    fullscreenBtn.textContent = document.fullscreenElement ? '退出全屏' : '全屏';
    requestAnimationFrame(() => {
      scene.resize();
      updateRatioBadge();
    });
  });

  window.addEventListener('resize', updateRatioBadge);

  backEditBtn.addEventListener('click', exitPlaybackToEditor);

  appShell.addEventListener('mousemove', scheduleCinemaIdle);
  appShell.addEventListener('pointerdown', scheduleCinemaIdle);

  document.addEventListener('keydown', (e) => {
    if (!director.isPlaying || helpDialog.open) return;
    if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    scheduleCinemaIdle();
    if (e.code === 'Space') {
      e.preventDefault();
      togglePauseBtn.click();
    } else if (e.key === 'r' || e.key === 'R') {
      startPlayback();
    } else if (e.key === 'Escape' && !document.fullscreenElement) {
      exitPlaybackToEditor();
    }
  });

  // Native <dialog> modal management
  openHelpBtn.addEventListener('click', () => {
    helpDialog.showModal();
  });
  helpDialog.addEventListener('close', () => {
    helpDialog.returnValue = '';
  });
  // Progressive enhancement fallback for browsers lacking <dialog closedby="any">
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, dialog) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    helpDialog.addEventListener('pointerdown', (e) => {
      pressedOutside = outside(e, helpDialog);
    });
    helpDialog.addEventListener('pointerup', (e) => {
      if (pressedOutside && outside(e, helpDialog)) helpDialog.close();
    });
  }

  // Initial render + restore saved configuration if present
  renderCardList();
  loadConfigFromBrowser()
    .then(async (saved) => {
      if (saved && store.importConfig(saved)) {
        await hydrateCardImages(store.cards);
        applySettingsToUI();
        renderCardList();
        showConfigStatus(`已自动恢复上次保存的配置（含 ${store.cards.length} 张卡片）。`);
      }
    })
    .catch((err) => {
      console.warn('Could not restore saved config:', err);
    });

  // Animation render loop (pauses cleanly when tab is hidden)
  let rafId = null;
  function tick(ts) {
    if (!document.hidden) {
      director.update(ts);
    }
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);

  document.addEventListener('visibilitychange', () => {
    director.setHiddenPaused(document.hidden);
  });

  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(rafId);
    releaseActiveTextures();
    envelope.dispose();
    meteorShower.dispose();
    scene.dispose();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
