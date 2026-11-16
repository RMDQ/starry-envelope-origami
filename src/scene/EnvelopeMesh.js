import * as THREE from 'three';
import { CARD_WIDTH, CARD_HEIGHT } from './OrigamiGeometry.js';

export const POCKET_CARD_SCALE = 0.62;
export const POCKET_CARD_CLOSED_Y = -0.155;
export const POCKET_CARD_OPEN_Y = 0.48;

const ENVELOPE_THEMES = {
  'pearl-ivory': {
    paperTint: '#ffffff',
    paperShadow: '#d8dce4',
    linerTop: '#a3b7c9',
    linerMid: '#96aec2',
    linerBottom: '#869fb5',
    inkColor: '#1b4978',
    emissiveColor: '#ffffff',
    emissiveIntensity: 0.76,
    diffuseColor: '#303642',
  },
  'midnight-gold': {
    paperTint: '#fffcf5',
    paperShadow: '#dfd5c0',
    linerTop: '#9fb4c7',
    linerMid: '#90a8be',
    linerBottom: '#7f98b0',
    inkColor: '#1b4978',
    emissiveColor: '#fffaf0',
    emissiveIntensity: 0.76,
    diffuseColor: '#33302a',
  },
  'lavender-mist': {
    paperTint: '#fcfaff',
    paperShadow: '#dad4e6',
    linerTop: '#a2b5ca',
    linerMid: '#94aac0',
    linerBottom: '#859cb4',
    inkColor: '#1b4978',
    emissiveColor: '#faf7ff',
    emissiveIntensity: 0.76,
    diffuseColor: '#302e3a',
  },
};

// Source crop rectangles in /assets/images/cover.png (970x1260) and /assets/images/opened.png (995x1260)
const COVER_SRC = {
  bodyX: 73,
  bodyY: 492,
  bodyW: 828,
  bodyH: 650,
  flapH: 415,
};

const OPENED_SRC = {
  bodyX: 37,
  hingeY: 510,
  bodyW: 864,
  bodyH: 604,
  flapY: 114,
  flapH: 396,
  cardX: 127,
  cardY: 348,
  cardW: 678,
  cardH: 448,
};

const imageCache = {
  cover: null,
  opened: null,
  coverUrl: './assets/images/cover.png',
  openedUrl: './assets/images/opened.png',
  loadingStarted: false,
  listeners: new Set(),
};

function notifyImageListeners() {
  for (const fn of imageCache.listeners) {
    try {
      fn();
    } catch (err) {
      console.warn('EnvelopeMesh texture refresh listener failed:', err);
    }
  }
}

function isOriginCleanImage(img) {
  if (typeof document === 'undefined') return true;
  try {
    const testCanvas = document.createElement('canvas');
    testCanvas.width = 1;
    testCanvas.height = 1;
    const tCtx = testCanvas.getContext('2d');
    tCtx.drawImage(img, 0, 0, 1, 1);
    tCtx.getImageData(0, 0, 1, 1);
    return true;
  } catch {
    return false;
  }
}

function loadEnvelopeAsset(url, key) {
  if (typeof Image === 'undefined' || !url) return;
  const img = new Image();
  if (!url.startsWith('data:')) {
    img.crossOrigin = 'anonymous';
  }
  img.onload = () => {
    if (isOriginCleanImage(img)) {
      imageCache[key] = img;
      notifyImageListeners();
    }
  };
  img.onerror = () => {};
  img.src = url;
}

function ensureEnvelopeImagesLoaded() {
  if (imageCache.loadingStarted || typeof Image === 'undefined') {
    return;
  }
  imageCache.loadingStarted = true;
  loadEnvelopeAsset(imageCache.coverUrl, 'cover');
  loadEnvelopeAsset(imageCache.openedUrl, 'opened');
}

/**
 * Draws the "YOUTH 罗马东区青年团契" emblem (house + olive branch + cross) matching cover.png & opened.png.
 */
function drawYouthLogo(ctx, cx, cy, scale = 1, ink = '#1b4978') {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.strokeStyle = ink;
  ctx.fillStyle = ink;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Roof & house walls
  ctx.lineWidth = 4.2;
  ctx.beginPath();
  ctx.moveTo(-42, -4);
  ctx.lineTo(-2, -42);
  ctx.lineTo(38, -4);
  ctx.stroke();

  ctx.lineWidth = 3.6;
  ctx.beginPath();
  ctx.moveTo(-34, -8);
  ctx.lineTo(-34, 14);
  ctx.moveTo(32, -8);
  ctx.lineTo(32, 14);
  ctx.stroke();

  // Diagonal cross & olive stem sweeping from bottom-left to top-right
  ctx.lineWidth = 4.2;
  ctx.beginPath();
  ctx.moveTo(-26, 12);
  ctx.quadraticCurveTo(2, -12, 24, -52);
  ctx.stroke();

  // Cross bar near top-right of roof
  ctx.lineWidth = 3.8;
  ctx.beginPath();
  ctx.moveTo(10, -42);
  ctx.lineTo(30, -24);
  ctx.stroke();

  // Olive leaves along the stem
  const leaves = [
    { x: -16, y: -2, a: -0.9, rx: 7.5, ry: 3.3 },
    { x: -4, y: -14, a: -0.8, rx: 8.0, ry: 3.4 },
    { x: 8, y: -25, a: -0.7, rx: 7.5, ry: 3.2 },
    { x: -6, y: -2, a: 0.25, rx: 7.5, ry: 3.2 },
    { x: 6, y: -12, a: 0.3, rx: 7.5, ry: 3.2 },
  ];
  for (const lf of leaves) {
    ctx.save();
    ctx.translate(lf.x, lf.y);
    ctx.rotate(lf.a);
    ctx.beginPath();
    ctx.ellipse(0, 0, lf.rx, lf.ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // "YOUTH" bold italic sans-serif
  ctx.font = 'italic 900 26px "Arial Black", "Helvetica Neue", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('YOUTH', -1, 39);

  // Small ribbon tail at bottom-left of YOUTH
  ctx.lineWidth = 3.8;
  ctx.beginPath();
  ctx.moveTo(-37, 43);
  ctx.quadraticCurveTo(-41, 51, -37, 57);
  ctx.stroke();

  // Subtitle "罗马东区青年团契"
  ctx.font = 'bold 8.5px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText('罗马东区青年团契', 10, 49);

  ctx.restore();
}

/**
 * Draws the "From: ? / To: You" calligraphy script on the closed top flap matching cover.png.
 */
function drawCoverCalligraphy(ctx, cx, cy, scale = 1, ink = '#1b4978') {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.fillStyle = ink;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'italic 68px "Snell Roundhand", "Brush Script MT", "Lucida Handwriting", "Georgia", serif';
  ctx.fillText('From : ?', -12, -46);
  ctx.fillText('To : You', 10, 44);
  ctx.restore();
}

/**
 * Traces the closed top flap silhouette in normalized [0..w, 0..h] coordinates matching cover.png.
 */
function traceClosedFlapShape(ctx, w, h, margin = 8) {
  ctx.beginPath();
  ctx.moveTo(margin, 2);
  ctx.lineTo(w - margin, 2);
  ctx.quadraticCurveTo(w - margin - 2, h * 0.125, w * 0.952, h * 0.212);
  ctx.lineTo(w * 0.556, h * 0.938);
  ctx.quadraticCurveTo(w * 0.495, h * 1.032, w * 0.435, h * 0.942);
  ctx.lineTo(w * 0.048, h * 0.218);
  ctx.quadraticCurveTo(margin + 2, h * 0.132, margin, 2);
  ctx.closePath();
}

/**
 * Traces the opened top flap silhouette in normalized [0..w, 0..h] coordinates matching opened.png
 * (hinge at y = h, rounded apex at y = h * 0.015).
 */
function traceOpenedFlapShape(ctx, w, h, margin = 8) {
  ctx.beginPath();
  ctx.moveTo(margin, h - 2);
  ctx.quadraticCurveTo(margin + 4, h * 0.84, w * 0.052, h * 0.735);
  ctx.lineTo(w * 0.422, h * 0.048);
  ctx.quadraticCurveTo(w * 0.485, -h * 0.015, w * 0.548, h * 0.055);
  ctx.lineTo(w * 0.948, h * 0.785);
  ctx.quadraticCurveTo(w - margin - 4, h * 0.89, w - margin, h - 2);
  ctx.closePath();
}

/**
 * Traces the front pocket silhouette with the upper trapezoidal V-opening cut out matching opened.png.
 */
function traceFrontPocketShape(ctx, w, h, margin = 8) {
  const rimY = h * 0.475;
  const rCorner = 12;
  ctx.beginPath();
  ctx.moveTo(margin, 4);
  ctx.lineTo(w * 0.338, rimY - 12);
  ctx.quadraticCurveTo(w * 0.364, rimY + 2, w * 0.392, rimY + 2);
  ctx.lineTo(w * 0.618, rimY + 2);
  ctx.quadraticCurveTo(w * 0.646, rimY + 2, w * 0.672, rimY - 12);
  ctx.lineTo(w - margin, 4);
  ctx.lineTo(w - margin, h - margin - rCorner);
  ctx.quadraticCurveTo(w - margin, h - margin, w - margin - rCorner, h - margin);
  ctx.lineTo(margin + rCorner, h - margin);
  ctx.quadraticCurveTo(margin, h - margin, margin, h - margin - rCorner);
  ctx.closePath();
}

/**
 * Renders the full closed envelope texture (cover.png) onto cCtx & aCtx.
 */
function paintClosedCoverCanvases(cCtx, aCtx, w, h, theme, coverImg) {
  const margin = 8;
  cCtx.clearRect(0, 0, w, h);
  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  const traceBody = (ctx) => {
    ctx.beginPath();
    ctx.roundRect(margin, margin, w - margin * 2, h - margin * 2, 10);
  };

  aCtx.save();
  traceBody(aCtx);
  aCtx.fillStyle = '#ffffff';
  aCtx.fill();
  aCtx.restore();

  cCtx.save();
  traceBody(cCtx);
  cCtx.clip();

  if (coverImg) {
    cCtx.drawImage(
      coverImg,
      COVER_SRC.bodyX,
      COVER_SRC.bodyY,
      COVER_SRC.bodyW,
      COVER_SRC.bodyH,
      margin,
      margin,
      w - margin * 2,
      h - margin * 2
    );
  } else {
    const grad = cCtx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#f7f7f9');
    grad.addColorStop(0.5, '#f2f2f5');
    grad.addColorStop(1, '#eaeaf0');
    cCtx.fillStyle = grad;
    cCtx.fillRect(0, 0, w, h);

    cCtx.strokeStyle = 'rgba(205, 206, 212, 0.85)';
    cCtx.lineWidth = 3.2;
    cCtx.beginPath();
    cCtx.moveTo(margin, h - margin - 40);
    cCtx.lineTo(w * 0.38, h * 0.475);
    cCtx.moveTo(w - margin, h - margin - 40);
    cCtx.lineTo(w * 0.62, h * 0.475);
    cCtx.stroke();

    const flapH = h * (COVER_SRC.flapH / COVER_SRC.bodyH);
    cCtx.save();
    cCtx.shadowColor = 'rgba(60, 64, 74, 0.24)';
    cCtx.shadowBlur = 14;
    cCtx.shadowOffsetY = 6;
    traceClosedFlapShape(cCtx, w, flapH, margin);
    cCtx.fillStyle = '#f8f8fa';
    cCtx.fill();
    cCtx.restore();

    drawCoverCalligraphy(cCtx, w * 0.485, flapH * 0.38, 1.0, theme.inkColor);
    drawYouthLogo(cCtx, w * 0.49, h * 0.855, 1.05, theme.inkColor);
  }

  cCtx.restore();
}

/**
 * Renders the outer face of the top flap (from cover.png) onto cCtx & aCtx.
 */
function paintOuterFlapCanvases(cCtx, aCtx, w, h, theme, coverImg) {
  const margin = 8;
  cCtx.clearRect(0, 0, w, h);
  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  aCtx.save();
  traceClosedFlapShape(aCtx, w, h * 0.96, margin);
  aCtx.fillStyle = '#ffffff';
  aCtx.fill();
  aCtx.restore();

  cCtx.save();
  traceClosedFlapShape(cCtx, w, h * 0.96, margin);
  cCtx.clip();

  if (coverImg) {
    cCtx.drawImage(
      coverImg,
      COVER_SRC.bodyX,
      COVER_SRC.bodyY,
      COVER_SRC.bodyW,
      COVER_SRC.flapH,
      margin,
      0,
      w - margin * 2,
      h * 0.965
    );
  } else {
    const grad = cCtx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#f9f9fb');
    grad.addColorStop(1, '#f0f0f4');
    cCtx.fillStyle = grad;
    cCtx.fillRect(0, 0, w, h);
    drawCoverCalligraphy(cCtx, w * 0.485, h * 0.37, 1.0, theme.inkColor);
  }

  cCtx.strokeStyle = '#e5e6ec';
  cCtx.lineWidth = 3.0;
  traceClosedFlapShape(cCtx, w, h * 0.96, margin);
  cCtx.stroke();
  cCtx.restore();
}

/**
 * Renders the inner face of the top flap (dusty slate-blue lining from opened.png) onto cCtx & aCtx.
 */
function paintInnerFlapCanvases(cCtx, aCtx, w, h, theme, openedImg) {
  const margin = 8;
  cCtx.clearRect(0, 0, w, h);
  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  aCtx.save();
  traceOpenedFlapShape(aCtx, w, h, margin);
  aCtx.fillStyle = '#ffffff';
  aCtx.fill();
  aCtx.restore();

  cCtx.save();
  traceOpenedFlapShape(cCtx, w, h, margin);
  cCtx.clip();

  if (openedImg) {
    cCtx.drawImage(
      openedImg,
      OPENED_SRC.bodyX,
      OPENED_SRC.flapY,
      OPENED_SRC.bodyW,
      OPENED_SRC.flapH,
      margin,
      0,
      w - margin * 2,
      h
    );

    // Seamless dusty-blue continuation over the lower center where the white card overlaps in opened.png
    const patchX = w * 0.085;
    const patchY = h * 0.56;
    const patchW = w * 0.83;
    const patchH = h - patchY;
    const linerGrad = cCtx.createLinearGradient(0, patchY - 24, 0, h);
    linerGrad.addColorStop(0, 'rgba(147, 170, 190, 0.0)');
    linerGrad.addColorStop(0.18, 'rgb(142, 165, 185)');
    linerGrad.addColorStop(0.88, 'rgb(132, 156, 176)');
    linerGrad.addColorStop(1.0, 'rgb(154, 176, 195)');
    cCtx.fillStyle = linerGrad;
    cCtx.fillRect(patchX, patchY - 24, patchW, patchH + 24);
  } else {
    const grad = cCtx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, theme.linerTop);
    grad.addColorStop(0.55, theme.linerMid);
    grad.addColorStop(1, theme.linerBottom);
    cCtx.fillStyle = grad;
    cCtx.fillRect(0, 0, w, h);
  }

  cCtx.strokeStyle = '#eef2f8';
  cCtx.lineWidth = 6.5;
  traceOpenedFlapShape(cCtx, w, h, margin);
  cCtx.stroke();
  cCtx.restore();
}

/**
 * Renders the interior back wall of the envelope body (dusty slate-blue lining from opened.png).
 */
function paintBackWallCanvases(cCtx, aCtx, w, h) {
  const margin = 8;
  cCtx.clearRect(0, 0, w, h);
  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  const traceRect = (ctx) => {
    ctx.beginPath();
    ctx.roundRect(margin, margin, w - margin * 2, h - margin * 2, 10);
  };

  aCtx.save();
  traceRect(aCtx);
  aCtx.fillStyle = '#ffffff';
  aCtx.fill();
  aCtx.restore();

  cCtx.save();
  traceRect(cCtx);
  cCtx.clip();

  const grad = cCtx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#9cb3c6');
  grad.addColorStop(0.03, '#88a1b6');
  grad.addColorStop(0.35, '#839cb2');
  grad.addColorStop(1, '#738ca3');
  cCtx.fillStyle = grad;
  cCtx.fillRect(0, 0, w, h);

  cCtx.fillStyle = 'rgba(182, 199, 214, 0.55)';
  cCtx.fillRect(margin, margin, w - margin * 2, 5);
  cCtx.fillStyle = 'rgba(95, 118, 138, 0.38)';
  cCtx.fillRect(margin, margin + 5, w - margin * 2, 4);

  cCtx.strokeStyle = '#eef2f7';
  cCtx.lineWidth = 6;
  traceRect(cCtx);
  cCtx.stroke();

  cCtx.restore();
}

/**
 * Renders the front white pocket (left/right diagonal flaps + bottom flap with YOUTH logo from opened.png)
 * with the upper V-opening cut out cleanly in alphaCanvas.
 */
function paintFrontPocketCanvases(cCtx, aCtx, w, h, theme, openedImg, coverImg) {
  const margin = 8;
  cCtx.clearRect(0, 0, w, h);
  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  aCtx.save();
  traceFrontPocketShape(aCtx, w, h, margin);
  aCtx.fillStyle = '#ffffff';
  aCtx.fill();
  aCtx.restore();

  cCtx.save();
  traceFrontPocketShape(cCtx, w, h, margin);
  cCtx.clip();

  if (openedImg) {
    cCtx.drawImage(
      openedImg,
      OPENED_SRC.bodyX,
      OPENED_SRC.hingeY,
      OPENED_SRC.bodyW,
      OPENED_SRC.bodyH,
      margin,
      0,
      w - margin * 2,
      h - margin
    );
  } else if (coverImg) {
    cCtx.drawImage(
      coverImg,
      COVER_SRC.bodyX,
      COVER_SRC.bodyY,
      COVER_SRC.bodyW,
      COVER_SRC.bodyH,
      margin,
      0,
      w - margin * 2,
      h - margin
    );
  } else {
    const grad = cCtx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#f7f7fa');
    grad.addColorStop(1, '#ececf1');
    cCtx.fillStyle = grad;
    cCtx.fillRect(0, 0, w, h);

    const rimY = h * 0.475;
    cCtx.strokeStyle = 'rgba(208, 209, 215, 0.9)';
    cCtx.lineWidth = 3.2;
    cCtx.beginPath();
    cCtx.moveTo(margin, h - margin - 36);
    cCtx.lineTo(w * 0.36, rimY);
    cCtx.moveTo(w - margin, h - margin - 36);
    cCtx.lineTo(w * 0.64, rimY);
    cCtx.stroke();

    drawYouthLogo(cCtx, w * 0.49, h * 0.84, 1.05, theme.inkColor);
  }

  cCtx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
  cCtx.lineWidth = 2.8;
  traceFrontPocketShape(cCtx, w, h, margin);
  cCtx.stroke();

  cCtx.restore();
}

/**
 * Renders the waiting card face edge-to-edge (zero margin inset) using the exact same
 * paper gradient and border as CardTextureGenerator so the waiting card and extracted
 * OrigamiCard match 1:1 in size and color.
 */
function paintWaitingCardCanvases(cCtx, aCtx, w, h) {
  cCtx.clearRect(0, 0, w, h);
  aCtx.fillStyle = '#ffffff';
  aCtx.fillRect(0, 0, w, h);

  const grad = cCtx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#f6f6fa');
  grad.addColorStop(1, '#eeeef3');
  cCtx.fillStyle = grad;
  cCtx.fillRect(0, 0, w, h);

  // Subtle paper fiber grain matching CardTextureGenerator
  cCtx.save();
  cCtx.globalAlpha = 0.018;
  for (let i = 0; i < 400; i++) {
    const x = (((i * 7919) % 1000) / 1000) * w;
    const y = (((i * 6271) % 1000) / 1000) * h;
    cCtx.fillStyle = i % 2 === 0 ? '#6e7688' : '#ffffff';
    cCtx.fillRect(x, y, 2, 2);
  }
  cCtx.restore();

  // Crisp white outer paper rim highlight
  cCtx.strokeStyle = '#ffffff';
  cCtx.lineWidth = 3;
  cCtx.strokeRect(1.5, 1.5, w - 3, h - 3);
}

/**
 * Renders a soft ambient drop shadow behind the waiting card onto the dusty-blue lining.
 */
function createCardShadowTextures() {
  const w = 512;
  const h = 512;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = w;
  colorCanvas.height = h;
  const cCtx = colorCanvas.getContext('2d');
  cCtx.fillStyle = '#3d4f63';
  cCtx.fillRect(0, 0, w, h);

  const alphaCanvas = document.createElement('canvas');
  alphaCanvas.width = w;
  alphaCanvas.height = h;
  const aCtx = alphaCanvas.getContext('2d');
  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  aCtx.save();
  aCtx.shadowColor = '#ffffff';
  aCtx.shadowBlur = 22;
  aCtx.fillStyle = 'rgba(255, 255, 255, 0.42)';
  aCtx.fillRect(28, 28, w - 56, h - 56);
  aCtx.restore();

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  const alphaMap = new THREE.CanvasTexture(alphaCanvas);
  return { map, alphaMap };
}

function createSideStripTextures() {
  const w = 64;
  const h = 512;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = w;
  colorCanvas.height = h;
  const cCtx = colorCanvas.getContext('2d');
  cCtx.fillStyle = '#eceef3';
  cCtx.fillRect(0, 0, w, h);

  const alphaCanvas = document.createElement('canvas');
  alphaCanvas.width = w;
  alphaCanvas.height = h;
  const aCtx = alphaCanvas.getContext('2d');
  aCtx.fillStyle = '#ffffff';
  aCtx.fillRect(0, 0, w, h);

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  const alphaMap = new THREE.CanvasTexture(alphaCanvas);
  return { map, alphaMap };
}

function createDynamicCanvasPair(w, h) {
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = w;
  colorCanvas.height = h;
  const cCtx = colorCanvas.getContext('2d');

  const alphaCanvas = document.createElement('canvas');
  alphaCanvas.width = w;
  alphaCanvas.height = h;
  const aCtx = alphaCanvas.getContext('2d');

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;

  const alphaMap = new THREE.CanvasTexture(alphaCanvas);
  alphaMap.anisotropy = 8;

  return { colorCanvas, cCtx, alphaCanvas, aCtx, map, alphaMap };
}

export class EnvelopeMesh {
  static setAssetUrls(coverUrl, openedUrl) {
    if (coverUrl) {
      imageCache.coverUrl = coverUrl;
      loadEnvelopeAsset(coverUrl, 'cover');
    }
    if (openedUrl) {
      imageCache.openedUrl = openedUrl;
      loadEnvelopeAsset(openedUrl, 'opened');
    }
    imageCache.loadingStarted = true;
  }

  constructor(themeKey = 'pearl-ivory') {
    this.width = 2.28;
    this.height = 1.78;
    this.group = new THREE.Group();
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);
    this.disposables = [];
    this.letterSheets = [];
    this._stackCount = 3;
    this._waitingCardVisible = true;
    this._pulseLevel = 0;
    this._flapOpenProgress = 0;
    this._themeKey = themeKey;

    this._onImagesUpdated = () => {
      this._refreshImageTextures();
    };
    imageCache.listeners.add(this._onImagesUpdated);
    ensureEnvelopeImagesLoaded();

    this._build(themeKey);
  }

  _refreshImageTextures() {
    if (!this._texBundles) return;
    const theme = ENVELOPE_THEMES[this._themeKey] || ENVELOPE_THEMES['pearl-ivory'];
    const { closedCover, flapOuter, flapInner, backWall, frontPocket, innerCard } = this._texBundles;

    paintClosedCoverCanvases(
      closedCover.cCtx,
      closedCover.aCtx,
      closedCover.colorCanvas.width,
      closedCover.colorCanvas.height,
      theme,
      imageCache.cover
    );
    closedCover.map.needsUpdate = true;
    closedCover.alphaMap.needsUpdate = true;

    paintOuterFlapCanvases(
      flapOuter.cCtx,
      flapOuter.aCtx,
      flapOuter.colorCanvas.width,
      flapOuter.colorCanvas.height,
      theme,
      imageCache.cover
    );
    flapOuter.map.needsUpdate = true;
    flapOuter.alphaMap.needsUpdate = true;

    paintInnerFlapCanvases(
      flapInner.cCtx,
      flapInner.aCtx,
      flapInner.colorCanvas.width,
      flapInner.colorCanvas.height,
      theme,
      imageCache.opened
    );
    flapInner.map.needsUpdate = true;
    flapInner.alphaMap.needsUpdate = true;

    paintBackWallCanvases(
      backWall.cCtx,
      backWall.aCtx,
      backWall.colorCanvas.width,
      backWall.colorCanvas.height
    );
    backWall.map.needsUpdate = true;
    backWall.alphaMap.needsUpdate = true;

    paintFrontPocketCanvases(
      frontPocket.cCtx,
      frontPocket.aCtx,
      frontPocket.colorCanvas.width,
      frontPocket.colorCanvas.height,
      theme,
      imageCache.opened,
      imageCache.cover
    );
    frontPocket.map.needsUpdate = true;
    frontPocket.alphaMap.needsUpdate = true;

    paintWaitingCardCanvases(
      innerCard.cCtx,
      innerCard.aCtx,
      innerCard.colorCanvas.width,
      innerCard.colorCanvas.height
    );
    innerCard.map.needsUpdate = true;
    innerCard.alphaMap.needsUpdate = true;
  }

  _build(themeKey) {
    this._themeKey = themeKey;
    const theme = ENVELOPE_THEMES[themeKey] || ENVELOPE_THEMES['pearl-ivory'];

    const closedCover = createDynamicCanvasPair(1024, 804);
    const flapOuter = createDynamicCanvasPair(1024, 520);
    const flapInner = createDynamicCanvasPair(1024, 520);
    const backWall = createDynamicCanvasPair(1024, 804);
    const frontPocket = createDynamicCanvasPair(1024, 804);
    const innerCard = createDynamicCanvasPair(800, 642);
    const cardShadowTex = createCardShadowTextures();
    const sideTex = createSideStripTextures();

    this._texBundles = {
      closedCover,
      flapOuter,
      flapInner,
      backWall,
      frontPocket,
      innerCard,
    };

    this._refreshImageTextures();

    this.disposables.push(
      closedCover.map,
      closedCover.alphaMap,
      flapOuter.map,
      flapOuter.alphaMap,
      flapInner.map,
      flapInner.alphaMap,
      backWall.map,
      backWall.alphaMap,
      frontPocket.map,
      frontPocket.alphaMap,
      innerCard.map,
      innerCard.alphaMap,
      cardShadowTex.map,
      cardShadowTex.alphaMap,
      sideTex.map,
      sideTex.alphaMap
    );

    const makeEnvelopeMaterial = (tex, side = THREE.DoubleSide, alphaTest = 0.12) =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(theme.diffuseColor),
        map: tex.map,
        alphaMap: tex.alphaMap,
        alphaTest,
        transparent: true,
        depthWrite: true,
        roughness: 0.82,
        metalness: 0.02,
        emissive: new THREE.Color(theme.emissiveColor),
        emissiveMap: tex.map,
        emissiveIntensity: theme.emissiveIntensity,
        side,
      });

    const backMat = makeEnvelopeMaterial(backWall, THREE.DoubleSide, 0.12);
    const pocketMat = makeEnvelopeMaterial(frontPocket, THREE.DoubleSide, 0.12);
    const flapOuterMat = makeEnvelopeMaterial(flapOuter, THREE.FrontSide, 0.12);
    const flapInnerMat = makeEnvelopeMaterial(flapInner, THREE.FrontSide, 0.12);
    const sideMat = makeEnvelopeMaterial(sideTex, THREE.DoubleSide, 0.12);
    this.closedCoverMat = makeEnvelopeMaterial(closedCover, THREE.FrontSide, 0.08);

    // Waiting card uses the exact same unlit true-color shader settings as OrigamiCard (foldProgress=0)
    // so the waiting card and the extracting card have 100% identical color and brightness.
    const innerCardMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#000000'),
      map: innerCard.map,
      emissiveMap: innerCard.map,
      emissive: new THREE.Color('#ffffff'),
      emissiveIntensity: 1.0,
      roughness: 0.72,
      metalness: 0.04,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1,
    });

    const cardShadowMat = new THREE.MeshBasicMaterial({
      map: cardShadowTex.map,
      alphaMap: cardShadowTex.alphaMap,
      transparent: true,
      depthWrite: false,
      opacity: 0.48,
      side: THREE.FrontSide,
    });

    this.disposables.push(
      backMat,
      pocketMat,
      flapOuterMat,
      flapInnerMat,
      sideMat,
      innerCardMat,
      cardShadowMat,
      this.closedCoverMat
    );

    // 1. Dusty Slate-Blue Interior Back Wall (z = -0.054)
    const backGeo = new THREE.PlaneGeometry(this.width, this.height);
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.set(0, 0, -0.054);
    backMesh.renderOrder = 1;
    this.bodyGroup.add(backMesh);

    // 2. Waiting Card inside Pocket — exact same dimensions (CARD_WIDTH * 0.62 x CARD_HEIGHT * 0.62)
    // and position as the OrigamiCard in the pocket!
    const innerCardW = CARD_WIDTH * POCKET_CARD_SCALE;
    const innerCardH = CARD_HEIGHT * POCKET_CARD_SCALE;
    const innerCardGeo = new THREE.PlaneGeometry(innerCardW, innerCardH);
    const cardShadowGeo = new THREE.PlaneGeometry(innerCardW + 0.11, innerCardH + 0.09);

    this.innerCardShadowMesh = new THREE.Mesh(cardShadowGeo, cardShadowMat);
    this.innerCardShadowMesh.position.set(0, POCKET_CARD_CLOSED_Y, -0.036);
    this.innerCardShadowMesh.renderOrder = 1;
    this.bodyGroup.add(this.innerCardShadowMesh);

    this.innerCardMesh = new THREE.Mesh(innerCardGeo, innerCardMat);
    this.innerCardMesh.position.set(0, POCKET_CARD_CLOSED_Y, 0.015);
    this.innerCardMesh.renderOrder = 2;
    this.bodyGroup.add(this.innerCardMesh);

    // Backing sheets controlled by setLetterStack()
    this.letterSheets = [];
    const sheetConfigs = [
      { x: 0, yOff: -0.012, z: -0.016, rz: 0 },
      { x: 0, yOff: -0.008, z: -0.010, rz: 0 },
      { x: 0, yOff: -0.004, z: -0.004, rz: 0 },
    ];
    for (const cfg of sheetConfigs) {
      const sheetMesh = new THREE.Mesh(innerCardGeo, innerCardMat);
      sheetMesh.position.set(cfg.x, POCKET_CARD_CLOSED_Y + cfg.yOff, cfg.z);
      sheetMesh.rotation.z = cfg.rz;
      sheetMesh.renderOrder = 2;
      this.bodyGroup.add(sheetMesh);
      this.letterSheets.push(sheetMesh);
    }

    // 3. Paper Side Gussets
    const sideGeo = new THREE.PlaneGeometry(0.104, this.height * 0.96);
    const hw = this.width * 0.5 - 0.016;
    const leftSide = new THREE.Mesh(sideGeo, sideMat);
    leftSide.position.set(-hw, 0, 0.004);
    leftSide.rotation.y = Math.PI * 0.5;
    leftSide.renderOrder = 3;
    this.bodyGroup.add(leftSide);

    const rightSide = new THREE.Mesh(sideGeo, sideMat);
    rightSide.position.set(hw, 0, 0.004);
    rightSide.rotation.y = -Math.PI * 0.5;
    rightSide.renderOrder = 3;
    this.bodyGroup.add(rightSide);

    // 4. White Paper Front Pocket with V-Opening & YOUTH Emblem (z = +0.058)
    const frontGeo = new THREE.PlaneGeometry(this.width, this.height);
    const frontPocketMesh = new THREE.Mesh(frontGeo, pocketMat);
    frontPocketMesh.position.set(0, 0, 0.058);
    frontPocketMesh.renderOrder = 4;
    this.bodyGroup.add(frontPocketMesh);

    // 5. Dual-Sided Top Flap Hinged at Top Edge (y = +this.height * 0.5)
    this.flapPivot = new THREE.Group();
    this.flapPivot.position.set(0, this.height * 0.5 - 0.012, 0.072);

    const flapH = this.height * 0.648;
    const flapOuterGeo = new THREE.PlaneGeometry(this.width, flapH);
    flapOuterGeo.translate(0, -flapH * 0.5, 0.001);
    this.flapOuterMesh = new THREE.Mesh(flapOuterGeo, flapOuterMat);
    this.flapOuterMesh.renderOrder = 5;
    this.flapPivot.add(this.flapOuterMesh);

    const flapInnerGeo = new THREE.PlaneGeometry(this.width, flapH);
    flapInnerGeo.translate(0, flapH * 0.5, 0.001);
    this.flapInnerMesh = new THREE.Mesh(flapInnerGeo, flapInnerMat);
    this.flapInnerMesh.rotation.x = Math.PI;
    this.flapInnerMesh.renderOrder = 5;
    this.flapPivot.add(this.flapInnerMesh);

    this.bodyGroup.add(this.flapPivot);

    // 6. Seamless Closed Cover Overlay (z = +0.075)
    const closedCoverGeo = new THREE.PlaneGeometry(this.width, this.height);
    this.closedCoverMesh = new THREE.Mesh(closedCoverGeo, this.closedCoverMat);
    this.closedCoverMesh.position.set(0, 0, 0.075);
    this.closedCoverMesh.renderOrder = 6;
    this.bodyGroup.add(this.closedCoverMesh);

    this.disposables.push(
      backGeo,
      innerCardGeo,
      cardShadowGeo,
      sideGeo,
      frontGeo,
      flapOuterGeo,
      flapInnerGeo,
      closedCoverGeo
    );

    this.setFlapOpen(this._flapOpenProgress);
    this.setLetterStack(this._stackCount);
    this.setWaitingCardVisible(this._waitingCardVisible);
  }

  triggerExtractPulse(strength = 1.0) {
    this._pulseLevel = Math.max(this._pulseLevel, Math.max(0.2, Math.min(1.2, strength)));
  }

  updateIdleMotion(time, dt = 0.016) {
    if (this._pulseLevel > 0) {
      this._pulseLevel = Math.max(0, this._pulseLevel - dt * 1.55);
    }
    const pulse = Math.sin(Math.min(1, this._pulseLevel) * Math.PI);
    this.bodyGroup.position.y = Math.sin(time * 1.15) * 0.042 - pulse * 0.078;
    this.bodyGroup.position.x = Math.cos(time * 0.72) * 0.022;
    this.bodyGroup.rotation.x = Math.sin(time * 0.95 + 0.5) * 0.028 + pulse * 0.095;
    this.bodyGroup.rotation.y = Math.sin(time * 0.68) * 0.045;
    this.bodyGroup.rotation.z = Math.cos(time * 0.84) * 0.022;

    if (this.flapPivot) {
      const idleBreeze = this._flapOpenProgress * Math.sin(time * 2.1 + 0.4) * 0.024;
      const flutter = this._flapOpenProgress * pulse * Math.sin(time * 11.5) * 0.062;
      this.flapPivot.rotation.x =
        -this._flapOpenProgress * Math.PI + idleBreeze + flutter;
    }
  }

  /**
   * Shows or hides the waiting card inside the pocket (hidden as the final card is drawn).
   */
  setWaitingCardVisible(visible) {
    this._waitingCardVisible = Boolean(visible);
    if (this.innerCardMesh) {
      this.innerCardMesh.visible = this._waitingCardVisible;
    }
    if (this.innerCardShadowMesh) {
      this.innerCardShadowMesh.visible = this._waitingCardVisible;
    }
  }

  /**
   * Controls how many stacked stationery sheets sit inside the pocket (0..3+).
   */
  setLetterStack(remainingCount) {
    this._stackCount = Math.max(0, Math.floor(remainingCount || 0));
    const visibleSheets = Math.min(this.letterSheets.length, this._stackCount);
    for (let i = 0; i < this.letterSheets.length; i++) {
      const fromTop = this.letterSheets.length - 1 - i;
      this.letterSheets[i].visible = this._waitingCardVisible && fromTop < visibleSheets;
    }
  }

  /**
   * 0 = sealed closed downward matching cover.png;
   * 1 = opened upward/back with waiting card risen to POCKET_CARD_OPEN_Y (+0.48) matching opened.png.
   */
  setFlapOpen(progress) {
    const p = Math.max(0, Math.min(1, progress));
    this._flapOpenProgress = p;

    if (this.flapPivot) {
      this.flapPivot.rotation.x = -p * Math.PI;
      this.flapPivot.position.z = 0.072 - p * 0.126;
      const order = p > 0.5 ? 1 : 5;
      if (this.flapOuterMesh) this.flapOuterMesh.renderOrder = order;
      if (this.flapInnerMesh) this.flapInnerMesh.renderOrder = order;
    }

    if (this.closedCoverMesh && this.closedCoverMat) {
      const coverOpacity = 1 - THREE.MathUtils.smoothstep(p, 0.005, 0.12);
      this.closedCoverMat.opacity = coverOpacity;
      this.closedCoverMesh.visible = coverOpacity > 0.01;
    }

    const cardRise = THREE.MathUtils.smoothstep(p, 0.12, 0.92);
    const cardY = THREE.MathUtils.lerp(POCKET_CARD_CLOSED_Y, POCKET_CARD_OPEN_Y, cardRise);
    if (this.innerCardMesh) {
      this.innerCardMesh.position.y = cardY;
    }
    if (this.innerCardShadowMesh) {
      this.innerCardShadowMesh.position.y = cardY;
    }
    for (let i = 0; i < this.letterSheets.length; i++) {
      this.letterSheets[i].position.y = cardY - (this.letterSheets.length - i) * 0.004;
    }
  }

  setTheme(themeKey) {
    const nextKey = ENVELOPE_THEMES[themeKey] ? themeKey : 'pearl-ivory';
    if (nextKey === this._themeKey && this.bodyGroup.children.length > 0) {
      this._refreshImageTextures();
      this.setFlapOpen(this._flapOpenProgress);
      this.setWaitingCardVisible(this._waitingCardVisible);
      this.setLetterStack(this._stackCount);
      return;
    }
    while (this.bodyGroup.children.length > 0) {
      this.bodyGroup.remove(this.bodyGroup.children[0]);
    }
    for (const d of this.disposables) {
      d.dispose?.();
    }
    this.disposables = [];
    this.letterSheets = [];
    this._build(nextKey);
  }

  dispose() {
    imageCache.listeners.delete(this._onImagesUpdated);
    for (const d of this.disposables) {
      d.dispose?.();
    }
    this.disposables = [];
    this.letterSheets = [];
  }
}
