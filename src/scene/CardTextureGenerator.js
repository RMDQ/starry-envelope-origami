import * as THREE from 'three';

export const CARD_CANVAS_WIDTH = 1600;
export const CARD_CANVAS_HEIGHT = 1284;

const PAPER_PALETTES = {
  ivory: {
    bgTop: '#f6f6fa',
    bgBot: '#eeeef3',
    border: '#cfd6e4',
    accent: '#143a63',
    title: '#0a1e38',
    body: '#122847',
    muted: '#4e637e',
  },
  blush: {
    bgTop: '#f8f5f8',
    bgBot: '#f1ecef',
    border: '#d6c8d1',
    accent: '#59324c',
    title: '#24111f',
    body: '#361b2f',
    muted: '#6e4f64',
  },
  sky: {
    bgTop: '#f5f7fb',
    bgBot: '#edeff6',
    border: '#c9d3e4',
    accent: '#143a63',
    title: '#0a1e38',
    body: '#122847',
    muted: '#4e637e',
  },
  lavender: {
    bgTop: '#f6f5fa',
    bgBot: '#eeeef5',
    border: '#cfcae0',
    accent: '#2a3764',
    title: '#14193b',
    body: '#212752',
    muted: '#575c82',
  },
};

function drawCrispText(ctx, text, x, y, strokeWidth = 1.15, strokeAlpha = 0.42, maxWidth = undefined) {
  if (maxWidth !== undefined) {
    ctx.fillText(text, x, y, maxWidth);
  } else {
    ctx.fillText(text, x, y);
  }
  if (strokeWidth > 0 && strokeAlpha > 0 && typeof ctx.strokeText === 'function') {
    ctx.save();
    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineWidth = strokeWidth;
    ctx.lineJoin = 'round';
    ctx.globalAlpha = (ctx.globalAlpha || 1) * strokeAlpha;
    if (maxWidth !== undefined) {
      ctx.strokeText(text, x, y, maxWidth);
    } else {
      ctx.strokeText(text, x, y);
    }
    ctx.restore();
  }
}

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

  // Subtle paper fiber grain matching the waiting card in opened.png
  ctx.save();
  ctx.globalAlpha = 0.018;
  for (let i = 0; i < 650; i++) {
    const x = (((i * 7919) % 1000) / 1000) * w;
    const y = (((i * 6271) % 1000) / 1000) * h;
    ctx.fillStyle = i % 2 === 0 ? '#6e7688' : '#ffffff';
    ctx.fillRect(x, y, 2, 2);
  }
  ctx.restore();

  // Crisp white outer paper rim highlight matching opened.png waiting card
  ctx.save();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, w - 4, h - 4);

  // Subtle inner stationery hairline
  ctx.strokeStyle = palette.border;
  ctx.lineWidth = 2.5;
  ctx.strokeRect(36, 36, w - 72, h - 72);
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
    ctx.roundRect(boxX, boxY, boxW, boxH, 16);
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
  const rect = computeContainedBox(img, boxX, boxY, boxW, boxH);
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(rect.dx, rect.dy, rect.drawW, rect.drawH, 14);
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
    const pad = 56;
    const boxW = CARD_CANVAS_WIDTH - pad * 2;
    const boxH = title || body ? CARD_CANVAS_HEIGHT - 250 : CARD_CANVAS_HEIGHT - pad * 2;
    drawContainedOrCoveredImage(ctx, card.imageElement, pad, pad, boxW, boxH, fitMode);

    if (title || body) {
      const textTop = pad + boxH + 26;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      if (title) {
        ctx.fillStyle = palette.title;
        ctx.font = '700 42px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif';
        drawCrispText(ctx, title, CARD_CANVAS_WIDTH / 2, textTop, 1.1, 0.42, boxW);
      }
      if (body) {
        ctx.fillStyle = palette.body;
        ctx.font = '600 32px "PingFang SC", "Microsoft YaHei", sans-serif';
        const lines = wrapTextLines(ctx, body, boxW - 40).slice(0, 2);
        const startY = title ? textTop + 54 : textTop + 10;
        lines.forEach((line, i) => {
          drawCrispText(ctx, line, CARD_CANVAS_WIDTH / 2, startY + i * 44, 0.9, 0.36, boxW);
        });
      }
    }
    return canvas;
  }

  if (hasImage) {
    // Polaroid / stationery frame: generous crisp image + elegant caption block below
    const padX = 84;
    const imgY = 76;
    const boxW = CARD_CANVAS_WIDTH - padX * 2;
    const boxH = title || body ? 860 : CARD_CANVAS_HEIGHT - 152;

    const frameRect =
      fitMode === 'cover'
        ? { dx: padX, dy: imgY, drawW: boxW, drawH: boxH }
        : computeContainedBox(card.imageElement, padX, imgY, boxW, boxH);

    // Subtle photo shadow mat tightly hugging the actual image bounds
    ctx.save();
    ctx.fillStyle = 'rgba(20, 28, 48, 0.095)';
    ctx.beginPath();
    ctx.roundRect(frameRect.dx + 4, frameRect.dy + 6, frameRect.drawW, frameRect.drawH, 14);
    ctx.fill();
    ctx.restore();

    drawContainedOrCoveredImage(ctx, card.imageElement, padX, imgY, boxW, boxH, fitMode);

    // Subtle photo border hugging the rendered image
    ctx.save();
    ctx.strokeStyle = palette.border;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(frameRect.dx, frameRect.dy, frameRect.drawW, frameRect.drawH, 14);
    ctx.stroke();
    ctx.restore();

    // Caption area
    const textAreaTop = imgY + boxH + 38;
    const maxTextW = boxW - 24;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    let cursorY = textAreaTop;
    if (title) {
      ctx.fillStyle = palette.title;
      ctx.font = '700 48px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif';
      const titleLines = wrapTextLines(ctx, title, maxTextW).slice(0, 2);
      titleLines.forEach((line) => {
        drawCrispText(ctx, line, CARD_CANVAS_WIDTH / 2, cursorY, 1.15, 0.42);
        cursorY += 60;
      });
      cursorY += 10;
    }

    if (body) {
      ctx.fillStyle = palette.body;
      ctx.font = '600 36px "PingFang SC", "Microsoft YaHei", sans-serif';
      const maxLines = title ? 3 : 5;
      const lines = wrapTextLines(ctx, body, maxTextW).slice(0, maxLines);
      lines.forEach((line) => {
        drawCrispText(ctx, line, CARD_CANVAS_WIDTH / 2, cursorY, 0.95, 0.36);
        cursorY += 50;
      });
    }
    return canvas;
  }

  // Pure text stationery letter card
  const marginX = 140;
  const maxTextW = CARD_CANVAS_WIDTH - marginX * 2;

  // Decorative top header emblem
  ctx.save();
  ctx.fillStyle = palette.accent;
  ctx.globalAlpha = 0.85;
  drawFourPointStar(ctx, CARD_CANVAS_WIDTH / 2, 128, 15);
  ctx.strokeStyle = palette.accent;
  ctx.globalAlpha = 0.42;
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  ctx.moveTo(marginX + 140, 128);
  ctx.lineTo(CARD_CANVAS_WIDTH / 2 - 32, 128);
  ctx.moveTo(CARD_CANVAS_WIDTH / 2 + 32, 128);
  ctx.lineTo(CARD_CANVAS_WIDTH - marginX - 140, 128);
  ctx.stroke();
  ctx.restore();

  ctx.textBaseline = 'top';

  const bodyFontSize = body.length > 140 ? 40 : body.length > 70 ? 46 : 52;
  const lineHeight = Math.round(bodyFontSize * 1.55);

  ctx.font = `700 62px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif`;
  const titleLines = title ? wrapTextLines(ctx, title, maxTextW).slice(0, 3) : [];

  ctx.font = `600 ${bodyFontSize}px "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif`;
  const bodyLines = body ? wrapTextLines(ctx, body, maxTextW).slice(0, 11) : [];

  const titleHeight = titleLines.length * 80 + (titleLines.length ? 40 : 0);
  const bodyHeight = bodyLines.length * lineHeight;
  const totalHeight = titleHeight + bodyHeight;
  const availableTop = 190;
  const availableHeight = CARD_CANVAS_HEIGHT - 300;
  let cursorY = availableTop + Math.max(0, (availableHeight - totalHeight) * 0.45);

  ctx.textAlign = 'center';
  if (titleLines.length > 0) {
    ctx.fillStyle = palette.title;
    ctx.font = '700 62px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif';
    for (const line of titleLines) {
      drawCrispText(ctx, line, CARD_CANVAS_WIDTH / 2, cursorY, 1.35, 0.45);
      cursorY += 80;
    }
    ctx.fillStyle = palette.accent;
    ctx.fillRect(CARD_CANVAS_WIDTH / 2 - 34, cursorY + 8, 68, 3.2);
    cursorY += 48;
  }

  if (bodyLines.length > 0) {
    ctx.fillStyle = palette.body;
    ctx.font = `600 ${bodyFontSize}px "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif`;
    for (const line of bodyLines) {
      drawCrispText(ctx, line, CARD_CANVAS_WIDTH / 2, cursorY, 1.05, 0.38);
      cursorY += lineHeight;
    }
  }

  return canvas;
}

export function createCardPreviewUrl(card) {
  const full = renderCardToCanvas(card);
  const thumb = document.createElement('canvas');
  thumb.width = 260;
  thumb.height = 208;
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
