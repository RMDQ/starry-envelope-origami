import * as THREE from 'three';

const ENVELOPE_THEMES = {
  'pearl-ivory': {
    laceThread: '#ffffff',
    laceFill: '#f4f7ff',
    laceShadow: '#c3cde0',
    laceEmissive: '#ffffff',
    laceEmissiveIntensity: 0.52,
    backTint: '#d8e0ef',
    letterPaper: '#efe6d2',
    letterPaperEdge: '#e4d8be',
    letterInk: 'rgba(112, 95, 72, 0.30)',
  },
  'midnight-gold': {
    laceThread: '#fff6da',
    laceFill: '#f2d996',
    laceShadow: '#9a732a',
    laceEmissive: '#fff0c7',
    laceEmissiveIntensity: 0.42,
    backTint: '#d2b470',
    letterPaper: '#eee3cb',
    letterPaperEdge: '#e2d4b5',
    letterInk: 'rgba(105, 86, 54, 0.30)',
  },
  'lavender-mist': {
    laceThread: '#ffffff',
    laceFill: '#ede4ff',
    laceShadow: '#a38ed0',
    laceEmissive: '#f4ecff',
    laceEmissiveIntensity: 0.48,
    backTint: '#d3c4ed',
    letterPaper: '#efe8f5',
    letterPaperEdge: '#e2d7ec',
    letterInk: 'rgba(100, 84, 124, 0.28)',
  },
};

/**
 * Deterministic PRNG so floral lace motifs render identically and cleanly across runs.
 */
function createRng(seed = 1337) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/**
 * Draws a corded embroidery path simultaneously onto colorCanvas (with relief shading)
 * and alphaCanvas (crisp solid white on black for smooth openwork cutouts).
 */
function strokeCord(cCtx, aCtx, drawPath, width, theme) {
  cCtx.save();
  cCtx.lineCap = 'round';
  cCtx.lineJoin = 'round';
  cCtx.translate(1.2, 1.2);
  cCtx.strokeStyle = theme.laceShadow;
  cCtx.lineWidth = width + 0.8;
  drawPath(cCtx);
  cCtx.stroke();
  cCtx.restore();

  cCtx.save();
  cCtx.lineCap = 'round';
  cCtx.lineJoin = 'round';
  cCtx.strokeStyle = theme.laceThread;
  cCtx.lineWidth = width;
  drawPath(cCtx);
  cCtx.stroke();
  cCtx.restore();

  aCtx.save();
  aCtx.lineCap = 'round';
  aCtx.lineJoin = 'round';
  aCtx.strokeStyle = '#ffffff';
  aCtx.lineWidth = width;
  drawPath(aCtx);
  aCtx.stroke();
  aCtx.restore();
}

/**
 * Draws a clear, recognizable openwork lace rose medallion with scalloped petals,
 * crisp open petal eyelets, and a spoked eyelet wheel center.
 */
function drawLaceRose(cCtx, aCtx, cx, cy, radius, rot, petals, theme) {
  cCtx.save();
  cCtx.translate(cx, cy);
  cCtx.rotate(rot);
  aCtx.save();
  aCtx.translate(cx, cy);
  aCtx.rotate(rot);

  const outerCount = petals;
  const cordW = Math.max(2.7, radius * 0.088);

  for (let i = 0; i < outerCount; i++) {
    const a = (i / outerCount) * Math.PI * 2;
    cCtx.save();
    cCtx.rotate(a);
    aCtx.save();
    aCtx.rotate(a);

    const pLen = radius * 0.96;
    const pWid = radius * 0.45;
    const drawPetal = (ctx) => {
      ctx.beginPath();
      ctx.moveTo(radius * 0.24, 0);
      ctx.bezierCurveTo(radius * 0.42, -pWid, pLen * 0.94, -pWid * 0.76, pLen, 0);
      ctx.bezierCurveTo(pLen * 0.94, pWid * 0.76, radius * 0.42, pWid, radius * 0.24, 0);
      ctx.closePath();
    };

    drawPetal(cCtx);
    cCtx.fillStyle = theme.laceFill;
    cCtx.fill();

    drawPetal(aCtx);
    aCtx.fillStyle = '#ffffff';
    aCtx.fill();

    strokeCord(cCtx, aCtx, drawPetal, cordW, theme);

    // Clean open eyelet inside each petal so starry sky & cream letters shine through
    const drawHole = (ctx) => {
      ctx.beginPath();
      ctx.ellipse(radius * 0.63, 0, radius * 0.22, radius * 0.14, 0, 0, Math.PI * 2);
    };
    drawHole(aCtx);
    aCtx.fillStyle = '#000000';
    aCtx.fill();

    cCtx.strokeStyle = theme.laceShadow;
    cCtx.lineWidth = 1.2;
    drawHole(cCtx);
    cCtx.stroke();

    // Fine picot pearl at petal tip
    cCtx.fillStyle = theme.laceThread;
    cCtx.beginPath();
    cCtx.arc(pLen + 2.6, 0, 1.9, 0, Math.PI * 2);
    cCtx.fill();
    aCtx.fillStyle = '#ffffff';
    aCtx.beginPath();
    aCtx.arc(pLen + 2.6, 0, 1.9, 0, Math.PI * 2);
    aCtx.fill();

    cCtx.restore();
    aCtx.restore();
  }

  // Inner overlapping scalloped petals
  const innerCount = Math.max(5, outerCount - 2);
  for (let i = 0; i < innerCount; i++) {
    const a = ((i + 0.5) / innerCount) * Math.PI * 2;
    cCtx.save();
    cCtx.rotate(a);
    aCtx.save();
    aCtx.rotate(a);

    const drawInner = (ctx) => {
      ctx.beginPath();
      ctx.moveTo(radius * 0.18, 0);
      ctx.quadraticCurveTo(radius * 0.42, -radius * 0.22, radius * 0.54, 0);
      ctx.quadraticCurveTo(radius * 0.42, radius * 0.22, radius * 0.18, 0);
      ctx.closePath();
    };
    strokeCord(cCtx, aCtx, drawInner, cordW * 0.85, theme);

    cCtx.restore();
    aCtx.restore();
  }

  // Openwork center wheel with radial spokes
  const ringR = radius * 0.22;
  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.arc(0, 0, ringR, 0, Math.PI * 2);
    },
    cordW * 0.88,
    theme
  );

  aCtx.fillStyle = '#000000';
  aCtx.beginPath();
  aCtx.arc(0, 0, ringR * 0.56, 0, Math.PI * 2);
  aCtx.fill();

  for (let i = 0; i < 6; i++) {
    const sa = (i / 6) * Math.PI * 2;
    strokeCord(
      cCtx,
      aCtx,
      (ctx) => {
        ctx.beginPath();
        ctx.moveTo(Math.cos(sa) * 2.4, Math.sin(sa) * 2.4);
        ctx.lineTo(Math.cos(sa) * ringR, Math.sin(sa) * ringR);
      },
      1.6,
      theme
    );
  }
  cCtx.fillStyle = theme.laceThread;
  cCtx.beginPath();
  cCtx.arc(0, 0, 2.8, 0, Math.PI * 2);
  cCtx.fill();
  aCtx.fillStyle = '#ffffff';
  aCtx.beginPath();
  aCtx.arc(0, 0, 2.8, 0, Math.PI * 2);
  aCtx.fill();

  cCtx.restore();
  aCtx.restore();
}

/**
 * Draws an airy 5- or 6-petal openwork lace blossom (hollow corded loops + central vein).
 */
function drawLaceBlossom(cCtx, aCtx, cx, cy, radius, rot, petals, theme) {
  cCtx.save();
  cCtx.translate(cx, cy);
  cCtx.rotate(rot);
  aCtx.save();
  aCtx.translate(cx, cy);
  aCtx.rotate(rot);

  const cordW = Math.max(2.5, radius * 0.115);
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2;
    cCtx.save();
    cCtx.rotate(a);
    aCtx.save();
    aCtx.rotate(a);

    const drawLoop = (ctx) => {
      ctx.beginPath();
      ctx.moveTo(radius * 0.22, 0);
      ctx.bezierCurveTo(radius * 0.36, -radius * 0.34, radius * 0.96, -radius * 0.28, radius, 0);
      ctx.bezierCurveTo(radius * 0.96, radius * 0.28, radius * 0.36, radius * 0.34, radius * 0.22, 0);
      ctx.closePath();
    };
    strokeCord(cCtx, aCtx, drawLoop, cordW, theme);

    strokeCord(
      cCtx,
      aCtx,
      (ctx) => {
        ctx.beginPath();
        ctx.moveTo(radius * 0.28, 0);
        ctx.lineTo(radius * 0.72, 0);
      },
      1.6,
      theme
    );

    cCtx.restore();
    aCtx.restore();
  }

  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.20, 0, Math.PI * 2);
    },
    cordW * 0.9,
    theme
  );

  aCtx.fillStyle = '#000000';
  aCtx.beginPath();
  aCtx.arc(0, 0, radius * 0.11, 0, Math.PI * 2);
  aCtx.fill();

  cCtx.restore();
  aCtx.restore();
}

/**
 * Draws a delicate miniature 5-petal floret tucked between hero roses and blossoms.
 */
function drawLaceFloret(cCtx, aCtx, cx, cy, radius, rot, theme) {
  cCtx.save();
  cCtx.translate(cx, cy);
  cCtx.rotate(rot);
  aCtx.save();
  aCtx.translate(cx, cy);
  aCtx.rotate(rot);

  const petals = 5;
  const cordW = Math.max(2.1, radius * 0.16);
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2;
    cCtx.save();
    cCtx.rotate(a);
    aCtx.save();
    aCtx.rotate(a);

    const drawP = (ctx) => {
      ctx.beginPath();
      ctx.arc(radius * 0.56, 0, radius * 0.34, 0, Math.PI * 2);
    };
    strokeCord(cCtx, aCtx, drawP, cordW, theme);

    cCtx.restore();
    aCtx.restore();
  }

  aCtx.fillStyle = '#000000';
  aCtx.beginPath();
  aCtx.arc(0, 0, radius * 0.18, 0, Math.PI * 2);
  aCtx.fill();

  cCtx.restore();
  aCtx.restore();
}

/**
 * Draws an openwork veined lace leaf along `angle`.
 */
function drawLaceLeaf(cCtx, aCtx, cx, cy, len, angle, theme) {
  cCtx.save();
  cCtx.translate(cx, cy);
  cCtx.rotate(angle);
  aCtx.save();
  aCtx.translate(cx, cy);
  aCtx.rotate(angle);

  const w = len * 0.36;
  const drawLeafOutline = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(len * 0.45, -w, len, 0);
    ctx.quadraticCurveTo(len * 0.45, w, 0, 0);
    ctx.closePath();
  };

  strokeCord(cCtx, aCtx, drawLeafOutline, 2.6, theme);

  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(len * 0.88, 0);
      ctx.moveTo(len * 0.32, 0);
      ctx.lineTo(len * 0.56, -w * 0.46);
      ctx.moveTo(len * 0.32, 0);
      ctx.lineTo(len * 0.56, w * 0.46);
    },
    1.7,
    theme
  );

  cCtx.restore();
  aCtx.restore();
}

/**
 * Draws an organic S-scroll tendril spiral connecting floral motifs cleanly.
 */
function drawLaceScroll(cCtx, aCtx, cx, cy, size, rot, flip, theme) {
  cCtx.save();
  cCtx.translate(cx, cy);
  cCtx.rotate(rot);
  cCtx.scale(flip ? -1 : 1, 1);
  aCtx.save();
  aCtx.translate(cx, cy);
  aCtx.rotate(rot);
  aCtx.scale(flip ? -1 : 1, 1);

  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.moveTo(-size, size * 0.25);
      ctx.bezierCurveTo(-size * 0.4, -size * 0.78, size * 0.5, -size * 0.62, size * 0.72, 0);
      ctx.bezierCurveTo(size * 0.85, size * 0.46, size * 0.25, size * 0.66, size * 0.18, size * 0.22);
      ctx.bezierCurveTo(size * 0.15, 0.02, size * 0.36, -0.02, size * 0.38, size * 0.14);
    },
    2.4,
    theme
  );

  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.arc(-size * 0.42, size * 0.38, Math.max(3.8, size * 0.2), 0, Math.PI * 2);
    },
    2.0,
    theme
  );

  cCtx.restore();
  aCtx.restore();
}

/**
 * Draws refined Chantilly/guipure bridging arches with crisp open cells
 * (spacious enough so floral motifs and dark-sky/cream-letter cutouts read clearly).
 */
function drawTulleBridges(cCtx, aCtx, w, h, theme, densityScale = 1) {
  const stepX = Math.round(74 / densityScale);
  const stepY = Math.round(64 / densityScale);

  cCtx.save();
  aCtx.save();
  cCtx.strokeStyle = theme.laceFill;
  cCtx.lineWidth = 2.0;
  cCtx.globalAlpha = 0.82;
  aCtx.strokeStyle = '#ffffff';
  aCtx.lineWidth = 2.0;

  for (let row = -1; row <= Math.ceil(h / stepY) + 1; row++) {
    const y = row * stepY;
    const xOff = (row % 2) * (stepX * 0.5);
    for (let col = -1; col <= Math.ceil(w / stepX) + 1; col++) {
      const x = col * stepX + xOff;
      const drawArcs = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x + stepX * 0.28, y + stepY * 0.38, x + stepX * 0.5, y + stepY);
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x - stepX * 0.28, y + stepY * 0.38, x - stepX * 0.5, y + stepY);
      };
      drawArcs(cCtx);
      cCtx.stroke();
      drawArcs(aCtx);
      aCtx.stroke();

      cCtx.fillStyle = theme.laceThread;
      cCtx.beginPath();
      cCtx.arc(x, y, 2.0, 0, Math.PI * 2);
      cCtx.fill();

      aCtx.fillStyle = '#ffffff';
      aCtx.beginPath();
      aCtx.arc(x, y, 2.0, 0, Math.PI * 2);
      aCtx.fill();
    }
  }

  cCtx.restore();
  aCtx.restore();
}

/**
 * Stamps a refined, delicate scalloped picot lace trim along border samples {x, y, nx, ny}.
 */
function drawFineLaceBorder(cCtx, aCtx, samples, radius, theme) {
  for (let i = 0; i < samples.length; i++) {
    const { x, y, nx, ny } = samples[i];
    const angle = Math.atan2(ny, nx);

    cCtx.save();
    cCtx.translate(x, y);
    cCtx.rotate(angle);
    aCtx.save();
    aCtx.translate(x, y);
    aCtx.rotate(angle);

    const drawFan = (ctx) => {
      ctx.beginPath();
      ctx.arc(0, 0, radius, -Math.PI * 0.6, Math.PI * 0.6);
      ctx.closePath();
    };

    drawFan(cCtx);
    cCtx.fillStyle = theme.laceFill;
    cCtx.fill();
    drawFan(aCtx);
    aCtx.fillStyle = '#ffffff';
    aCtx.fill();

    strokeCord(
      cCtx,
      aCtx,
      (ctx) => {
        ctx.beginPath();
        ctx.arc(0, 0, radius, -Math.PI * 0.58, Math.PI * 0.58);
      },
      2.3,
      theme
    );

    aCtx.fillStyle = '#000000';
    aCtx.beginPath();
    aCtx.arc(radius * 0.34, 0, radius * 0.28, 0, Math.PI * 2);
    aCtx.fill();

    cCtx.strokeStyle = theme.laceShadow;
    cCtx.lineWidth = 1.1;
    cCtx.beginPath();
    cCtx.arc(radius * 0.34, 0, radius * 0.29, 0, Math.PI * 2);
    cCtx.stroke();

    const px = radius + 2.0;
    cCtx.fillStyle = theme.laceThread;
    cCtx.beginPath();
    cCtx.arc(px, 0, 1.7, 0, Math.PI * 2);
    cCtx.fill();
    aCtx.fillStyle = '#ffffff';
    aCtx.beginPath();
    aCtx.arc(px, 0, 1.7, 0, Math.PI * 2);
    aCtx.fill();

    cCtx.restore();
    aCtx.restore();
  }
}

/**
 * Fills a clipped canvas region with balanced, legible guipure floral openwork lace.
 */
function paintFloralTapestry(cCtx, aCtx, w, h, theme, seed, density = 1.0) {
  const rng = createRng(seed);

  // 1. Spacious connecting Chantilly lattice bridges
  drawTulleBridges(cCtx, aCtx, w, h, theme, density);

  // 2. Flowing botanical S-curve vines weaving organically across the panel
  const vineRows = Math.max(4, Math.round(h / 180));
  for (let r = 0; r < vineRows; r++) {
    const yBase = (r + 0.5) * (h / vineRows);
    strokeCord(
      cCtx,
      aCtx,
      (ctx) => {
        ctx.beginPath();
        ctx.moveTo(-16, yBase);
        ctx.bezierCurveTo(w * 0.25, yBase - 72, w * 0.48, yBase + 72, w * 0.72, yBase - 46);
        ctx.bezierCurveTo(w * 0.85, yBase - 90, w * 0.95, yBase + 36, w + 16, yBase - 12);
      },
      2.8,
      theme
    );
  }

  // 3. Balanced multi-scale floral motifs with clean negative-space cutouts
  const cellX = 136 / density;
  const cellY = 124 / density;
  const cols = Math.ceil(w / cellX) + 1;
  const rows = Math.ceil(h / cellY) + 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const jitterX = (rng() - 0.5) * cellX * 0.36;
      const jitterY = (rng() - 0.5) * cellY * 0.36;
      const cx = (c + (r % 2) * 0.5) * cellX + jitterX;
      const cy = r * cellY + jitterY;

      const roseR = 30 + rng() * 12;
      const rot = rng() * Math.PI * 2;
      const petals = rng() > 0.42 ? 8 : 7;

      const leafCount = 3;
      for (let l = 0; l < leafCount; l++) {
        const la = rot + (l / leafCount) * Math.PI * 2 + (rng() - 0.5) * 0.45;
        const lx = cx + Math.cos(la) * (roseR * 0.80);
        const ly = cy + Math.sin(la) * (roseR * 0.80);
        drawLaceLeaf(cCtx, aCtx, lx, ly, 26 + rng() * 12, la + (rng() - 0.5) * 0.4, theme);
      }

      drawLaceRose(cCtx, aCtx, cx, cy, roseR, rot, petals, theme);

      const bx = cx + cellX * 0.48 + (rng() - 0.5) * 20;
      const by = cy + cellY * 0.46 + (rng() - 0.5) * 18;
      drawLaceBlossom(cCtx, aCtx, bx, by, 19 + rng() * 7, rng() * Math.PI * 2, rng() > 0.4 ? 5 : 6, theme);

      const fx = cx - cellX * 0.34 + (rng() - 0.5) * 16;
      const fy = cy + cellY * 0.36 + (rng() - 0.5) * 16;
      drawLaceFloret(cCtx, aCtx, fx, fy, 11 + rng() * 4, rng() * Math.PI * 2, theme);

      drawLaceScroll(
        cCtx,
        aCtx,
        cx + cellX * 0.26,
        cy - cellY * 0.30,
        18 + rng() * 6,
        rng() * Math.PI * 2,
        rng() > 0.5,
        theme
      );
    }
  }
}

/**
 * Generates full-body floral openwork lace textures for the Back Panel.
 */
function createBackLaceTextures(theme) {
  const w = 1024;
  const h = 896;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = w;
  colorCanvas.height = h;
  const cCtx = colorCanvas.getContext('2d');

  const alphaCanvas = document.createElement('canvas');
  alphaCanvas.width = w;
  alphaCanvas.height = h;
  const aCtx = alphaCanvas.getContext('2d');

  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  const margin = 10;
  const clipRect = (ctx) => {
    ctx.beginPath();
    ctx.roundRect(margin, margin, w - margin * 2, h - margin * 2, 14);
  };

  cCtx.save();
  aCtx.save();
  clipRect(cCtx);
  cCtx.clip();
  clipRect(aCtx);
  aCtx.clip();

  paintFloralTapestry(cCtx, aCtx, w, h, { ...theme, laceThread: theme.backTint }, 4242, 0.92);

  cCtx.restore();
  aCtx.restore();

  // Seamless top hinge corded edge so open flap meets back wall with zero slit
  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.moveTo(margin, margin + 2);
      ctx.lineTo(w - margin, margin + 2);
    },
    3.6,
    { ...theme, laceThread: theme.backTint }
  );

  // Fine lace edging along left, right, and bottom
  const samples = [];
  const step = 18;
  for (let x = margin + 10; x <= w - margin - 10; x += step) {
    samples.push({ x, y: h - margin, nx: 0, ny: 1 });
  }
  for (let y = margin + 14; y <= h - margin - 10; y += step) {
    samples.push({ x: margin, y, nx: -1, ny: 0 });
    samples.push({ x: w - margin, y, nx: 1, ny: 0 });
  }
  drawFineLaceBorder(cCtx, aCtx, samples, 7.8, { ...theme, laceThread: theme.backTint });

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;
  const alphaMap = new THREE.CanvasTexture(alphaCanvas);
  alphaMap.anisotropy = 8;
  return { map, alphaMap };
}

/**
 * Generates full-body floral openwork lace textures for the Front Pocket
 * (gentle concave envelope dip at top rim + fine lace border so cream letters glow through).
 */
function createFrontPocketLaceTextures(theme) {
  const w = 1024;
  const h = 896;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = w;
  colorCanvas.height = h;
  const cCtx = colorCanvas.getContext('2d');

  const alphaCanvas = document.createElement('canvas');
  alphaCanvas.width = w;
  alphaCanvas.height = h;
  const aCtx = alphaCanvas.getContext('2d');

  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  const margin = 10;
  const yRimEdge = 40;
  const yRimCtrl = 152;

  const tracePocket = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(margin, yRimEdge);
    ctx.quadraticCurveTo(w * 0.5, yRimCtrl, w - margin, yRimEdge);
    ctx.lineTo(w - margin, h - margin - 12);
    ctx.quadraticCurveTo(w - margin, h - margin, w - margin - 12, h - margin);
    ctx.lineTo(margin + 12, h - margin);
    ctx.quadraticCurveTo(margin, h - margin, margin, h - margin - 12);
    ctx.closePath();
  };

  cCtx.save();
  aCtx.save();
  tracePocket(cCtx);
  cCtx.clip();
  tracePocket(aCtx);
  aCtx.clip();

  paintFloralTapestry(cCtx, aCtx, w, h, theme, 9001, 1.04);

  cCtx.restore();
  aCtx.restore();

  // Delicate corded structural trim along the gentle pocket V-dip
  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.moveTo(margin, yRimEdge);
      ctx.quadraticCurveTo(w * 0.5, yRimCtrl, w - margin, yRimEdge);
    },
    4.0,
    theme
  );

  // Fine miniature picot scallops along rim, sides, and bottom
  const rimSamples = [];
  const rimSteps = 52;
  for (let i = 1; i < rimSteps; i++) {
    const t = i / rimSteps;
    const x = margin + t * (w - margin * 2);
    const y = (1 - t) * (1 - t) * yRimEdge + 2 * (1 - t) * t * yRimCtrl + t * t * yRimEdge;
    const dy = 2 * (1 - t) * (yRimCtrl - yRimEdge) + 2 * t * (yRimEdge - yRimCtrl);
    const dx = w - margin * 2;
    const len = Math.hypot(dx, dy);
    rimSamples.push({ x, y, nx: dy / len, ny: -dx / len });
  }
  drawFineLaceBorder(cCtx, aCtx, rimSamples, 5.6, theme);

  const outerSamples = [];
  const sideStep = 18;
  for (let y = yRimEdge + 10; y <= h - margin - 10; y += sideStep) {
    outerSamples.push({ x: margin, y, nx: -1, ny: 0 });
    outerSamples.push({ x: w - margin, y, nx: 1, ny: 0 });
  }
  for (let x = margin + 10; x <= w - margin - 10; x += sideStep) {
    outerSamples.push({ x, y: h - margin, nx: 0, ny: 1 });
  }
  drawFineLaceBorder(cCtx, aCtx, outerSamples, 7.8, theme);

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;
  const alphaMap = new THREE.CanvasTexture(alphaCanvas);
  alphaMap.anisotropy = 8;
  return { map, alphaMap };
}

/**
 * Generates full-body floral openwork lace textures for the Triangular Flap
 * (classic tapered envelope triangle with softly rounded apex, matching the reference video).
 */
function createLaceFlapTextures(theme) {
  const w = 1024;
  const h = 640;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = w;
  colorCanvas.height = h;
  const cCtx = colorCanvas.getContext('2d');

  const alphaCanvas = document.createElement('canvas');
  alphaCanvas.width = w;
  alphaCanvas.height = h;
  const aCtx = alphaCanvas.getContext('2d');

  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  const marginX = 10;
  const tipX = w * 0.5;
  const tipY = h - 36;
  const ctrlLeftX = (marginX + (tipX - 38)) * 0.5 - 12;
  const ctrlRightX = (w - marginX + (tipX + 38)) * 0.5 + 12;
  const ctrlY = tipY * 0.52;

  const traceFlap = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(marginX, 2);
    ctx.lineTo(w - marginX, 2);
    ctx.quadraticCurveTo(ctrlRightX, ctrlY, tipX + 38, tipY - 14);
    ctx.quadraticCurveTo(tipX, tipY + 14, tipX - 38, tipY - 14);
    ctx.quadraticCurveTo(ctrlLeftX, ctrlY, marginX, 2);
    ctx.closePath();
  };

  cCtx.save();
  aCtx.save();
  traceFlap(cCtx);
  cCtx.clip();
  traceFlap(aCtx);
  aCtx.clip();

  paintFloralTapestry(cCtx, aCtx, w, h, theme, 2026, 1.08);

  // Focal lace rose medallion near the flap apex
  drawLaceRose(cCtx, aCtx, tipX, tipY - 76, 38, 0.25, 8, theme);

  cCtx.restore();
  aCtx.restore();

  const samples = [];
  const sampleQuadratic = (p0, p1, p2, steps, outSign) => {
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const omt = 1 - t;
      const x = omt * omt * p0.x + 2 * omt * t * p1.x + t * t * p2.x;
      const y = omt * omt * p0.y + 2 * omt * t * p1.y + t * t * p2.y;
      const dx = 2 * omt * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
      const dy = 2 * omt * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
      const len = Math.hypot(dx, dy) || 1;
      samples.push({ x, y, nx: (outSign * dy) / len, ny: (-outSign * dx) / len });
    }
  };

  sampleQuadratic(
    { x: marginX, y: 4 },
    { x: ctrlLeftX, y: ctrlY },
    { x: tipX - 38, y: tipY - 14 },
    34,
    -1
  );
  sampleQuadratic(
    { x: tipX - 38, y: tipY - 14 },
    { x: tipX, y: tipY + 14 },
    { x: tipX + 38, y: tipY - 14 },
    7,
    -1
  );
  sampleQuadratic(
    { x: tipX + 38, y: tipY - 14 },
    { x: ctrlRightX, y: ctrlY },
    { x: w - marginX, y: 4 },
    34,
    -1
  );

  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.moveTo(marginX, 3);
      ctx.lineTo(w - marginX, 3);
    },
    3.8,
    theme
  );

  strokeCord(
    cCtx,
    aCtx,
    (ctx) => {
      ctx.beginPath();
      ctx.moveTo(marginX, 4);
      ctx.quadraticCurveTo(ctrlLeftX, ctrlY, tipX - 38, tipY - 14);
      ctx.quadraticCurveTo(tipX, tipY + 14, tipX + 38, tipY - 14);
      ctx.quadraticCurveTo(ctrlRightX, ctrlY, w - marginX, 4);
    },
    3.8,
    theme
  );

  drawFineLaceBorder(cCtx, aCtx, samples, 7.6, theme);

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;
  const alphaMap = new THREE.CanvasTexture(alphaCanvas);
  alphaMap.anisotropy = 8;
  return { map, alphaMap };
}

/**
 * Generates a narrow lace gusset strip texture so 3D spin edges stay delicate.
 */
function createSideLaceTextures(theme) {
  const w = 128;
  const h = 896;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = w;
  colorCanvas.height = h;
  const cCtx = colorCanvas.getContext('2d');

  const alphaCanvas = document.createElement('canvas');
  alphaCanvas.width = w;
  alphaCanvas.height = h;
  const aCtx = alphaCanvas.getContext('2d');

  aCtx.fillStyle = '#000000';
  aCtx.fillRect(0, 0, w, h);

  drawTulleBridges(cCtx, aCtx, w, h, { ...theme, laceThread: theme.backTint }, 1.2);
  for (let y = 44; y < h - 40; y += 84) {
    drawLaceBlossom(cCtx, aCtx, w * 0.5, y, 24, y * 0.05, 5, { ...theme, laceThread: theme.backTint });
  }

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  const alphaMap = new THREE.CanvasTexture(alphaCanvas);
  return { map, alphaMap };
}

/**
 * Generates a warm antique-cream stationery card texture for the inner stack
 * softly visible through the front floral lace cutouts in idle preview.
 */
function createLetterSheetTexture(theme, variant = 0) {
  const w = 512;
  const h = 704;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, theme.letterPaper);
  grad.addColorStop(1, theme.letterPaperEdge);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(172, 150, 118, 0.28)';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(20, 20, w - 40, h - 40);

  ctx.strokeStyle = 'rgba(172, 150, 118, 0.16)';
  ctx.lineWidth = 1.2;
  ctx.strokeRect(30, 30, w - 60, h - 60);

  // Subtle four-point star emblem near top header
  ctx.fillStyle = 'rgba(164, 138, 98, 0.34)';
  const cx = w * 0.5;
  const cy = 96;
  const r = 10;
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.quadraticCurveTo(cx, cy, cx + r, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy + r);
  ctx.quadraticCurveTo(cx, cy, cx - r, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy - r);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = theme.letterInk;
  const rng = createRng(700 + variant * 97);
  for (let row = 0; row < 9; row++) {
    const y = 160 + row * 40;
    const lineW = row === 8 ? 140 + rng() * 100 : 280 + rng() * 64;
    ctx.fillRect((w - lineW) * 0.5, y, lineW, 2.5);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class EnvelopeMesh {
  constructor(themeKey = 'pearl-ivory') {
    this.width = 2.24;
    this.height = 1.88;
    this.group = new THREE.Group();
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);
    this.disposables = [];
    this.letterSheets = [];
    this._stackCount = 3;
    this._pulseLevel = 0;
    this._flapOpenProgress = 0;

    this._build(themeKey);
  }

  _build(themeKey) {
    const theme = ENVELOPE_THEMES[themeKey] || ENVELOPE_THEMES['pearl-ivory'];

    const backTex = createBackLaceTextures(theme);
    const pocketTex = createFrontPocketLaceTextures(theme);
    const flapTex = createLaceFlapTextures(theme);
    const sideTex = createSideLaceTextures(theme);
    const sheetTex0 = createLetterSheetTexture(theme, 0);
    const sheetTex1 = createLetterSheetTexture(theme, 1);

    this.disposables.push(
      backTex.map,
      backTex.alphaMap,
      pocketTex.map,
      pocketTex.alphaMap,
      flapTex.map,
      flapTex.alphaMap,
      sideTex.map,
      sideTex.alphaMap,
      sheetTex0,
      sheetTex1
    );

    // Smooth anti-aliased openwork cutouts: transparent: true + low alphaTest + depthWrite: true
    // preserves silky lace threads at screen scale while avoiding stippled mipmap holes.
    const makeLaceMaterial = (tex, emissiveScale = 1) =>
      new THREE.MeshStandardMaterial({
        map: tex.map,
        alphaMap: tex.alphaMap,
        alphaTest: 0.10,
        transparent: true,
        depthWrite: true,
        roughness: 0.50,
        metalness: 0.02,
        emissive: new THREE.Color(theme.laceEmissive),
        emissiveMap: tex.map,
        emissiveIntensity: theme.laceEmissiveIntensity * emissiveScale,
        side: THREE.DoubleSide,
      });

    const backMat = makeLaceMaterial(backTex, 0.65);
    const pocketMat = makeLaceMaterial(pocketTex, 1.0);
    const flapMat = makeLaceMaterial(flapTex, 1.0);
    const sideMat = makeLaceMaterial(sideTex, 0.70);

    const makeSheetMat = (tex) =>
      new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.88,
        metalness: 0.0,
        emissive: new THREE.Color('#e6dcc6'),
        emissiveMap: tex,
        emissiveIntensity: 0.16,
        side: THREE.DoubleSide,
      });

    const sheetMat0 = makeSheetMat(sheetTex0);
    const sheetMat1 = makeSheetMat(sheetTex1);

    this.disposables.push(backMat, pocketMat, flapMat, sideMat, sheetMat0, sheetMat1);

    // 1. All-Over Floral Lace Back Wall (z = -0.054)
    const backGeo = new THREE.PlaneGeometry(this.width, this.height);
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.set(0, 0, -0.054);
    backMesh.renderOrder = 1;
    this.bodyGroup.add(backMesh);

    // 2. Stacked Cream Stationery Cards tucked cleanly inside the back of the pocket (z = -0.032 .. -0.014)
    this.letterSheets = [];
    const sheetW = 0.98;
    const sheetH = 1.36;
    const sheetGeo = new THREE.PlaneGeometry(sheetW, sheetH);
    const sheetConfigs = [
      { x: -0.026, y: -0.175, z: -0.032, rz: 0.024, mat: sheetMat1 },
      { x: 0.022, y: -0.165, z: -0.023, rz: -0.020, mat: sheetMat0 },
      { x: 0.0, y: -0.155, z: -0.014, rz: 0.004, mat: sheetMat0 },
    ];
    for (const cfg of sheetConfigs) {
      const sheetMesh = new THREE.Mesh(sheetGeo, cfg.mat);
      sheetMesh.position.set(cfg.x, cfg.y, cfg.z);
      sheetMesh.rotation.z = cfg.rz;
      sheetMesh.renderOrder = 2;
      this.bodyGroup.add(sheetMesh);
      this.letterSheets.push(sheetMesh);
    }

    // 3. Delicate Lace Side Gussets
    const sideGeo = new THREE.PlaneGeometry(0.104, this.height * 0.94);
    const hw = this.width * 0.5 - 0.018;
    const leftSide = new THREE.Mesh(sideGeo, sideMat);
    leftSide.position.set(-hw, -0.01, 0.006);
    leftSide.rotation.y = Math.PI * 0.5;
    leftSide.renderOrder = 3;
    this.bodyGroup.add(leftSide);

    const rightSide = new THREE.Mesh(sideGeo, sideMat);
    rightSide.position.set(hw, -0.01, 0.006);
    rightSide.rotation.y = -Math.PI * 0.5;
    rightSide.renderOrder = 3;
    this.bodyGroup.add(rightSide);

    // 4. All-Over Floral Lace Front Pocket (z = +0.058)
    const frontGeo = new THREE.PlaneGeometry(this.width, this.height);
    const frontPocket = new THREE.Mesh(frontGeo, pocketMat);
    frontPocket.position.set(0, 0, 0.058);
    frontPocket.renderOrder = 4;
    this.bodyGroup.add(frontPocket);

    // 5. All-Over Floral Lace Triangular Flap (hinged seamlessly at top edge y = +this.height/2)
    this.flapPivot = new THREE.Group();
    this.flapPivot.position.set(0, this.height * 0.5 - 0.018, 0.072);

    const flapH = 1.06;
    const flapGeo = new THREE.PlaneGeometry(this.width, flapH);
    flapGeo.translate(0, -flapH * 0.5, 0);
    const flapMesh = new THREE.Mesh(flapGeo, flapMat);
    flapMesh.renderOrder = 5;
    this.flapPivot.add(flapMesh);

    this.bodyGroup.add(this.flapPivot);

    this.disposables.push(backGeo, sheetGeo, frontGeo, sideGeo, flapGeo);

    this.setFlapOpen(0);
    this.setLetterStack(this._stackCount);
  }

  triggerExtractPulse(strength = 1.0) {
    this._pulseLevel = Math.max(this._pulseLevel, Math.max(0.2, Math.min(1.2, strength)));
  }

  updateIdleMotion(time, dt = 0.016) {
    if (this._pulseLevel > 0) {
      this._pulseLevel = Math.max(0, this._pulseLevel - dt * 1.55);
    }
    const pulse = Math.sin(Math.min(1, this._pulseLevel) * Math.PI);
    // Gentle weightless levitation, breathing tilt & responsive extract recoil
    this.bodyGroup.position.y = Math.sin(time * 1.15) * 0.042 - pulse * 0.078;
    this.bodyGroup.position.x = Math.cos(time * 0.72) * 0.022;
    this.bodyGroup.rotation.x = Math.sin(time * 0.95 + 0.5) * 0.028 + pulse * 0.095;
    this.bodyGroup.rotation.y = Math.sin(time * 0.68) * 0.045;
    this.bodyGroup.rotation.z = Math.cos(time * 0.84) * 0.022;

    if (this.flapPivot) {
      const idleBreeze = this._flapOpenProgress * Math.sin(time * 2.1 + 0.4) * 0.028;
      const flutter = this._flapOpenProgress * pulse * Math.sin(time * 11.5) * 0.068;
      this.flapPivot.rotation.x =
        -0.025 - this._flapOpenProgress * (Math.PI * 1.02) + idleBreeze + flutter;
    }
  }

  /**
   * Controls how many stacked cream letters sit inside the lace pocket (0..3+).
   * Letters remain tucked behind the front floral lace so they softly show through cutouts.
   */
  setLetterStack(remainingCount) {
    this._stackCount = Math.max(0, Math.floor(remainingCount || 0));
    const visibleSheets = Math.min(this.letterSheets.length, this._stackCount);
    for (let i = 0; i < this.letterSheets.length; i++) {
      const fromTop = this.letterSheets.length - 1 - i;
      this.letterSheets[i].visible = fromTop < visibleSheets;
    }
  }

  /**
   * 0 = sealed closed downward over front pocket; 1 = gracefully opened upward/back.
   */
  setFlapOpen(progress) {
    const p = Math.max(0, Math.min(1, progress));
    this._flapOpenProgress = p;
    this.flapPivot.rotation.x = -0.025 - p * (Math.PI * 1.02);
    this.flapPivot.position.z = 0.072 - p * 0.098;
  }

  setTheme(themeKey) {
    while (this.bodyGroup.children.length > 0) {
      this.bodyGroup.remove(this.bodyGroup.children[0]);
    }
    for (const d of this.disposables) {
      d.dispose?.();
    }
    this.disposables = [];
    this.letterSheets = [];
    this._build(themeKey);
  }

  dispose() {
    for (const d of this.disposables) {
      d.dispose?.();
    }
    this.disposables = [];
    this.letterSheets = [];
  }
}
