import * as THREE from 'three';

export const CARD_CANVAS_WIDTH = 1200;
export const CARD_CANVAS_HEIGHT = 1664;

const PAPER_PALETTES = {
  ivory: {
    bgTop: '#fffdf8',
    bgBot: '#f7f1e3',
    border: '#d9c8a9',
    accent: '#b8945a',
    title: '#242b42',
    body: '#3a425c',
    muted: '#7a8096',
  },
  blush: {
    bgTop: '#fff9fb',
    bgBot: '#f8e9f0',
    border: '#dfc0ce',
    accent: '#b97895',
    title: '#3a2434',
    body: '#553a4d',
    muted: '#8f6f85',
  },
  sky: {
    bgTop: '#f8fbff',
    bgBot: '#e8f1fb',
    border: '#bfd1e8',
    accent: '#5f84b8',
    title: '#1b2c47',
    body: '#314666',
    muted: '#6c82a3',
  },
  lavender: {
    bgTop: '#faf8ff',
    bgBot: '#ece7f8',
    border: '#cbc0e6',
    accent: '#7c69b5',
    title: '#272146',
    body: '#413a66',
    muted: '#7b739e',
  },
};

/**
 * Pure line-wrapping function supporting mixed CJK, Latin words, and explicit newlines.
 */
export function wrapTextLines(ctx, text, maxWidth) {
  if (!text || typeof text !== 'string') return [];
  const paragraphs = text.replace(/\r\n/g, '\n').split('\n');
  const lines = [];

  for (const para of paragraphs) {
    if (para === '') {
      lines.push('');
      continue;
    }
    let currentLine = '';
    // Iterate by Unicode code points so surrogate pairs (emoji) stay intact
    for (const char of para) {
      const testLine = currentLine + char;
      if (ctx.measureText(testLine).width > maxWidth && currentLine.length > 0) {
        // Prefer breaking at last ASCII space if one exists near the end
        const lastSpace = currentLine.lastIndexOf(' ');
        if (lastSpace > currentLine.length * 0.45 && /[A-Za-z0-9]/.test(char)) {
          lines.push(currentLine.slice(0, lastSpace));
          currentLine = currentLine.slice(lastSpace + 1) + char;
        } else {
          lines.push(currentLine);
          currentLine = char === ' ' ? '' : char;
        }
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine.length > 0 || para.length === 0) {
      lines.push(currentLine);
    }
  }
  return lines;
}

function drawPaperBackground(ctx, w, h, palette) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, palette.bgTop);
  grad.addColorStop(1, palette.bgBot);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Subtle fiber speckles
  ctx.save();
  ctx.globalAlpha = 0.035;
  for (let i = 0; i < 650; i++) {
    const x = ((i * 7919) % 1000) / 1000 * w;
    const y = ((i * 6271) % 1000) / 1000 * h;
    ctx.fillStyle = i % 2 === 0 ? '#5c4d3c' : '#ffffff';
    ctx.fillRect(x, y, 2, 2);
  }
  ctx.restore();

  // Outer fine frame
  ctx.save();
  ctx.strokeStyle = palette.border;
  ctx.lineWidth = 4;
  ctx.strokeRect(32, 32, w - 64, h - 64);

  ctx.strokeStyle = palette.accent;
  ctx.globalAlpha = 0.42;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(46, 46, w - 92, h - 92);

  // Corner star ornaments
  const corners = [
    [46, 46],
    [w - 46, 46],
    [46, h - 46],
    [w - 46, h - 46],
  ];
  ctx.fillStyle = palette.accent;
  ctx.globalAlpha = 0.65;
  for (const [cx, cy] of corners) {
    drawFourPointStar(ctx, cx, cy, 8);
  }
  ctx.restore();
}

function drawFourPointStar(ctx, cx, cy, r) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.quadraticCurveTo(cx, cy, cx + r, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy + r);
  ctx.quadraticCurveTo(cx, cy, cx - r, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy - r);
  ctx.closePath();
  ctx.fill();
}

function computeContainedBox(img, boxX, boxY, boxW, boxH) {
  const imgW = img.naturalWidth || img.width || 1;
  const imgH = img.naturalHeight || img.height || 1;
  const imgRatio = imgW / imgH;
  const boxRatio = boxW / boxH;

  let drawW, drawH;
  if (imgRatio > boxRatio) {
    drawW = boxW;
    drawH = boxW / imgRatio;
  } else {
    drawH = boxH;
    drawW = boxH * imgRatio;
  }
  const dx = boxX + (boxW - drawW) * 0.5;
  const dy = boxY + (boxH - drawH) * 0.5;
  return { dx, dy, drawW, drawH };
}

function drawContainedOrCoveredImage(ctx, img, boxX, boxY, boxW, boxH, fitMode) {
  const imgW = img.naturalWidth || img.width || 1;
  const imgH = img.naturalHeight || img.height || 1;
  const imgRatio = imgW / imgH;
  const boxRatio = boxW / boxH;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  if (fitMode === 'cover') {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 18);
    ctx.clip();

    let drawW, drawH, dx, dy;
    if (imgRatio > boxRatio) {
      drawH = boxH;
      drawW = boxH * imgRatio;
      dx = boxX - (drawW - boxW) * 0.5;
      dy = boxY;
    } else {
      drawW = boxW;
      drawH = boxW / imgRatio;
      dx = boxX;
      dy = boxY - (drawH - boxH) * 0.5;
    }
    ctx.drawImage(img, dx, dy, drawW, drawH);
    ctx.restore();
    return { dx: boxX, dy: boxY, drawW: boxW, drawH: boxH };
  }

  // 'contain' — guarantees 100% of uploaded image & embedded text stays visible
  // without awkward gray letterbox bars around landscape/square photos.
  const rect = computeContainedBox(img, boxX, boxY, boxW, boxH);
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(rect.dx, rect.dy, rect.drawW, rect.drawH, 16);
  ctx.clip();
  ctx.drawImage(img, rect.dx, rect.dy, rect.drawW, rect.drawH);
  ctx.restore();
  return rect;
}

/**
 * Render a card object onto an offscreen HTMLCanvasElement.
 * @param {object} card - { title, text, imageElement, layout, paperTone, imageFit }
 * @returns {HTMLCanvasElement}
 */
export function renderCardToCanvas(card) {
  const canvas = document.createElement('canvas');
  canvas.width = CARD_CANVAS_WIDTH;
  canvas.height = CARD_CANVAS_HEIGHT;
  const ctx = canvas.getContext('2d');
  const palette = PAPER_PALETTES[card.paperTone] || PAPER_PALETTES.ivory;

  drawPaperBackground(ctx, CARD_CANVAS_WIDTH, CARD_CANVAS_HEIGHT, palette);

  const hasImage = Boolean(card.imageElement);
  const title = (card.title || '').trim();
  const body = (card.text || '').trim();
  const layout = hasImage ? (card.layout || 'polaroid') : 'letter';
  const fitMode = card.imageFit || 'contain';

  if (hasImage && layout === 'full') {
    // Full-bleed crisp photo inside clean thin stationery border
    const pad = 60;
    const boxW = CARD_CANVAS_WIDTH - pad * 2;
    const boxH = title || body ? CARD_CANVAS_HEIGHT - 290 : CARD_CANVAS_HEIGHT - pad * 2;
    drawContainedOrCoveredImage(ctx, card.imageElement, pad, pad, boxW, boxH, fitMode);

    if (title || body) {
      const textTop = pad + boxH + 34;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      if (title) {
        ctx.fillStyle = palette.title;
        ctx.font = '600 42px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif';
        ctx.fillText(title, CARD_CANVAS_WIDTH / 2, textTop, boxW);
      }
      if (body) {
        ctx.fillStyle = palette.body;
        ctx.font = '400 31px "PingFang SC", "Microsoft YaHei", sans-serif';
        const lines = wrapTextLines(ctx, body, boxW - 40).slice(0, 3);
        const startY = title ? textTop + 58 : textTop + 12;
        lines.forEach((line, i) => {
          ctx.fillText(line, CARD_CANVAS_WIDTH / 2, startY + i * 44, boxW);
        });
      }
    }
    return canvas;
  }

  if (hasImage) {
    // Polaroid / stationery frame: generous crisp image + elegant caption block below
    const padX = 88;
    const imgY = 96;
    const boxW = CARD_CANVAS_WIDTH - padX * 2;
    const boxH = title || body ? 1020 : CARD_CANVAS_HEIGHT - 192;

    const frameRect =
      fitMode === 'cover'
        ? { dx: padX, dy: imgY, drawW: boxW, drawH: boxH }
        : computeContainedBox(card.imageElement, padX, imgY, boxW, boxH);

    // Subtle photo shadow mat tightly hugging the actual image bounds
    ctx.save();
    ctx.fillStyle = 'rgba(20, 28, 48, 0.085)';
    ctx.beginPath();
    ctx.roundRect(frameRect.dx + 5, frameRect.dy + 7, frameRect.drawW, frameRect.drawH, 16);
    ctx.fill();
    ctx.restore();

    drawContainedOrCoveredImage(ctx, card.imageElement, padX, imgY, boxW, boxH, fitMode);

    // Subtle photo border hugging the rendered image
    ctx.save();
    ctx.strokeStyle = palette.border;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(frameRect.dx, frameRect.dy, frameRect.drawW, frameRect.drawH, 16);
    ctx.stroke();
    ctx.restore();

    // Caption area
    const textAreaTop = imgY + boxH + 52;
    const maxTextW = boxW - 24;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    let cursorY = textAreaTop;
    if (title) {
      ctx.fillStyle = palette.title;
      ctx.font = '600 52px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif';
      const titleLines = wrapTextLines(ctx, title, maxTextW).slice(0, 2);
      titleLines.forEach((line) => {
        ctx.fillText(line, CARD_CANVAS_WIDTH / 2, cursorY);
        cursorY += 66;
      });
      cursorY += 14;
    }

    if (body) {
      ctx.fillStyle = palette.body;
      ctx.font = '400 38px "PingFang SC", "Microsoft YaHei", sans-serif';
      const maxLines = title ? 5 : 7;
      const lines = wrapTextLines(ctx, body, maxTextW).slice(0, maxLines);
      lines.forEach((line) => {
        ctx.fillText(line, CARD_CANVAS_WIDTH / 2, cursorY);
        cursorY += 56;
      });
    }
    return canvas;
  }

  // Pure text stationery letter card
  const marginX = 128;
  const maxTextW = CARD_CANVAS_WIDTH - marginX * 2;

  // Decorative top header emblem
  ctx.save();
  ctx.fillStyle = palette.accent;
  ctx.globalAlpha = 0.72;
  drawFourPointStar(ctx, CARD_CANVAS_WIDTH / 2, 152, 16);
  ctx.strokeStyle = palette.accent;
  ctx.globalAlpha = 0.3;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(marginX + 90, 152);
  ctx.lineTo(CARD_CANVAS_WIDTH / 2 - 32, 152);
  ctx.moveTo(CARD_CANVAS_WIDTH / 2 + 32, 152);
  ctx.lineTo(CARD_CANVAS_WIDTH - marginX - 90, 152);
  ctx.stroke();
  ctx.restore();

  ctx.textBaseline = 'top';

  // Auto-size body font cleanly so short quotes look bold/poetic and longer letters fit cleanly
  const bodyFontSize = body.length > 140 ? 40 : body.length > 70 ? 46 : 54;
  const lineHeight = Math.round(bodyFontSize * 1.55);

  ctx.font = `600 64px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif`;
  const titleLines = title ? wrapTextLines(ctx, title, maxTextW).slice(0, 3) : [];

  ctx.font = `400 ${bodyFontSize}px "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif`;
  const bodyLines = body ? wrapTextLines(ctx, body, maxTextW).slice(0, 15) : [];

  const titleHeight = titleLines.length * 84 + (titleLines.length ? 42 : 0);
  const bodyHeight = bodyLines.length * lineHeight;
  const totalHeight = titleHeight + bodyHeight;
  const availableTop = 228;
  const availableHeight = CARD_CANVAS_HEIGHT - 375;
  let cursorY = availableTop + Math.max(0, (availableHeight - totalHeight) * 0.42);

  ctx.textAlign = 'center';
  if (titleLines.length > 0) {
    ctx.fillStyle = palette.title;
    ctx.font = '600 64px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif';
    for (const line of titleLines) {
      ctx.fillText(line, CARD_CANVAS_WIDTH / 2, cursorY);
      cursorY += 84;
    }
    // Small divider dot
    ctx.fillStyle = palette.accent;
    ctx.fillRect(CARD_CANVAS_WIDTH / 2 - 30, cursorY + 10, 60, 2.5);
    cursorY += 52;
  }

  if (bodyLines.length > 0) {
    ctx.fillStyle = palette.body;
    ctx.font = `400 ${bodyFontSize}px "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif`;
    for (const line of bodyLines) {
      ctx.fillText(line, CARD_CANVAS_WIDTH / 2, cursorY);
      cursorY += lineHeight;
    }
  }

  return canvas;
}

export function createCardPreviewUrl(card) {
  const full = renderCardToCanvas(card);
  const thumb = document.createElement('canvas');
  thumb.width = 216;
  thumb.height = 300;
  const tctx = thumb.getContext('2d');
  tctx.imageSmoothingEnabled = true;
  tctx.imageSmoothingQuality = 'high';
  tctx.drawImage(full, 0, 0, thumb.width, thumb.height);
  return thumb.toDataURL('image/jpeg', 0.85);
}

export function createCardTexture(card, maxAnisotropy = 8) {
  const canvas = renderCardToCanvas(card);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(16, maxAnisotropy || 8);
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return { texture };
}
