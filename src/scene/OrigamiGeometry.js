/**
 * Pure geometry generator for multi-stage morphing origami cards.
 * Every origami shape starts from an exact flat rectangle [-W/2, W/2] x [-H/2, H/2]
 * with planar UV coordinates [0, 1]^2, and defines intermediate + final 3D fold positions.
 */

export const CARD_WIDTH = 2.84;
export const CARD_HEIGHT = 2.28;

/**
 * Helper to mirror right-half triangles cleanly across x = 0.
 * Vertices are defined in normalized card coords nx in [0, 1], ny in [-1, 1].
 */
function buildSymmetricGrid(nxStops, nyStops, stageTransforms) {
  const cols = nxStops.length;
  const rows = nyStops.length;

  // Build mirrored x stops: [-1 ... 0 ... +1]
  const fullX = [];
  for (let i = cols - 1; i > 0; i--) fullX.push(-nxStops[i]);
  for (let i = 0; i < cols; i++) fullX.push(nxStops[i]);

  const totalCols = fullX.length;
  const vertCount = totalCols * rows;

  const uvs = new Float32Array(vertCount * 2);
  const stages = stageTransforms.map(() => new Float32Array(vertCount * 3));

  for (let r = 0; r < rows; r++) {
    const ny = nyStops[r];
    const v = (ny + 1) * 0.5;
    for (let c = 0; c < totalCols; c++) {
      const nx = fullX[c];
      const u = (nx + 1) * 0.5;
      const idx = r * totalCols + c;

      uvs[idx * 2] = u;
      uvs[idx * 2 + 1] = v;

      // Stage 0 is always the exact flat card
      stages[0][idx * 3] = nx * (CARD_WIDTH * 0.5);
      stages[0][idx * 3 + 1] = ny * (CARD_HEIGHT * 0.5);
      stages[0][idx * 3 + 2] = 0;

      // Subsequent stages from transform callback
      for (let s = 1; s < stageTransforms.length; s++) {
        const sign = nx < 0 ? -1 : nx > 0 ? 1 : 0;
        const absNx = Math.abs(nx);
        const [px, py, pz] = stageTransforms[s](absNx, ny, sign);
        stages[s][idx * 3] = px;
        stages[s][idx * 3 + 1] = py;
        stages[s][idx * 3 + 2] = pz;
      }
    }
  }

  // Triangulate grid cells cleanly; choose diagonal for symmetry
  const indices = [];
  const centerCol = cols - 1;
  for (let r = 0; r < rows - 1; r++) {
    for (let c = 0; c < totalCols - 1; c++) {
      const bl = r * totalCols + c;
      const br = bl + 1;
      const tl = (r + 1) * totalCols + c;
      const tr = tl + 1;

      if (c < centerCol) {
        // Left side: mirror diagonal
        indices.push(bl, br, tl);
        indices.push(br, tr, tl);
      } else {
        // Right side
        indices.push(bl, br, tr);
        indices.push(bl, tr, tl);
      }
    }
  }

  return {
    indices: new Uint16Array(indices),
    uvs,
    stages,
    vertexCount: vertCount,
    triangleCount: indices.length / 3,
    nxStops,
    nyStops,
    fullX,
  };
}

/**
 * Paper Plane ("plane"):
 * Step 1: Upper corners fold cleanly inward into a pointed arrow nose tuck.
 * Step 2: Sleek, elongated swept-back dart paper airplane (length > wingspan)
 *         with crisp center fuselage keel, folded deck, and subtle upturned wingtips.
 */
function createPlaneData() {
  const nxStops = [0, 0.08, 0.22, 0.42, 0.62, 0.82, 1.0];
  const nyStops = [-1.0, -0.68, -0.35, 0.0, 0.35, 0.66, 0.86, 1.0];

  const stage0 = () => [0, 0, 0];

  // Stage 1: Classic paper-plane nose fold — upper outer corners tuck smoothly inward
  const stage1 = (ax, ny, sign) => {
    const baseW = CARD_WIDTH * 0.46;
    const baseH = CARD_HEIGHT * 0.46;
    const spineDip = -0.10 * (1 - Math.max(0, ny - 0.5) * 0.6);

    if (ax === 0) {
      return [0, ny * baseH + 0.04, spineDip];
    }

    // Upper region folds inward toward the nose centerline
    const upperBlend = Math.max(0, Math.min(1, (ny - 0.15) / 0.85));
    const tuckFactor = 1 - upperBlend * 0.68;
    const x = sign * ax * baseW * tuckFactor;
    const y = ny * baseH * (1 - upperBlend * ax * 0.16) + 0.04;
    const z = spineDip + ax * 0.14 + upperBlend * ax * 0.06;
    return [x, y, z];
  };

  // Stage 2: Sleek 3D swept-delta dart paper plane (nose +Y, keel -Z, dorsal +Z)
  const stage2 = (ax, ny, sign) => {
    // Nose tip at +1.08, tail at -0.88 (sleek dart proportion: length 1.96 vs span 1.54)
    const y = ny * 0.98 + 0.10;
    const fromNose = (1 - ny) * 0.5; // 0 at nose, 1 at tail

    if (ax === 0) {
      // Crisp central fuselage keel tapering to sharp nose tip
      const keel = -0.23 * Math.sin(Math.pow(fromNose, 0.72) * Math.PI * 0.92) + 0.02;
      return [0, y, keel];
    }

    if (ax <= 0.12) {
      // Inner fuselage wall rising from keel up to wing fold crease
      const x = sign * (0.012 + fromNose * 0.042);
      const z = 0.025 + fromNose * 0.015;
      return [x, y - 0.015, z];
    }

    // Swept wing span from fuselage crease outward
    const wingT = (ax - 0.12) / 0.88; // 0 at fuselage crease, 1 at outer wingtip
    const maxHalfSpan = 0.032 + Math.pow(fromNose, 0.94) * 0.74;
    const x = sign * (0.018 + wingT * maxHalfSpan);
    const sweepBack = wingT * (0.14 + (1 - fromNose) * 0.06);
    // Gentle aerodynamic dihedral + subtle upturned outer winglet
    const dihedral = 0.032 + wingT * 0.105 + (wingT > 0.78 ? (wingT - 0.78) * 0.24 : 0);
    return [x, y - sweepBack, dihedral];
  };

  return buildSymmetricGrid(nxStops, nyStops, [stage0, stage1, stage2]);
}

/**
 * Origami Butterfly ("butterfly"):
 * Step 1: Accordion pleats gather gracefully inward toward center thorax.
 * Step 2: Sculpted sweeping forewings, deeply pinched waist, graceful swallowtail hindwings.
 */
function createButterflyData() {
  const nxStops = [0, 0.10, 0.28, 0.50, 0.76, 1.0];
  const nyStops = [-1.0, -0.72, -0.44, -0.14, 0.12, 0.44, 0.74, 1.0];

  const stage0 = () => [0, 0, 0];

  // Stage 1: Smooth accordion pleat inward along vertical axis
  const stage1 = (ax, ny, sign) => {
    const x = sign * ax * 0.44;
    const y = ny * 0.66;
    const pleat = Math.sin(ax * Math.PI * 2.5) * 0.055;
    const z = ax === 0 ? -0.09 : pleat + ax * 0.08;
    return [x, y, z];
  };

  // Stage 2: Sculpted origami butterfly (nose +Y, dorsal +Z)
  const stage2 = (ax, ny, sign) => {
    // Wing silhouette envelope as a smooth function of ny in [-1, 1]
    let spanW;
    let wingY;
    if (ny >= 0.70) {
      // Sweeping rounded upper forewing tip
      const u = (ny - 0.70) / 0.30;
      spanW = THREE_LERP(1.02, 0.86, u * u);
      wingY = THREE_LERP(0.56, 0.72, u) - ax * 0.04;
    } else if (ny >= 0.10) {
      // Broad arched forewing body
      const u = (ny - 0.10) / 0.60;
      spanW = THREE_LERP(0.76, 1.02, Math.sin(u * Math.PI * 0.5));
      wingY = THREE_LERP(0.12, 0.56, u);
    } else if (ny >= -0.20) {
      // Deeply pinched waist notch
      const u = (ny + 0.20) / 0.30;
      spanW = THREE_LERP(0.50, 0.76, u) - Math.sin(u * Math.PI) * 0.14;
      wingY = THREE_LERP(-0.14, 0.12, u);
    } else if (ny >= -0.68) {
      // Graceful flared hindwing
      const u = (ny + 0.68) / 0.48;
      spanW = THREE_LERP(0.66, 0.50, u) + Math.sin(u * Math.PI) * 0.08;
      wingY = THREE_LERP(-0.48, -0.14, u);
    } else {
      // Swallowtail tips
      const u = (ny + 1.0) / 0.32;
      spanW = THREE_LERP(0.34, 0.66, u);
      wingY = THREE_LERP(-0.76, -0.48, u);
    }

    if (ax === 0) {
      // Sculpted narrow thorax & abdomen
      return [0, ny * 0.34, -0.095 + Math.abs(ny) * 0.035];
    }

    if (ax <= 0.14) {
      const x = sign * (0.04 + ax * 0.32);
      const y = ny * 0.38;
      const z = 0.025 + ax * 0.14;
      return [x, y, z];
    }

    const wingT = (ax - 0.14) / 0.86;
    const x = sign * (0.085 + wingT * (spanW - 0.085));
    const y = THREE_LERP(ny * 0.38, wingY, Math.pow(wingT, 0.85));
    // Graceful curved dihedral + subtle forewing lift
    const z = 0.045 + Math.pow(wingT, 1.1) * 0.26 + Math.max(0, ny) * wingT * 0.05;
    return [x, y, z];
  };

  return buildSymmetricGrid(nxStops, nyStops, [stage0, stage1, stage2]);
}

function THREE_LERP(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Origami Paper Crane ("crane"):
 * Step 1: Diamond bird-base compression.
 * Step 2: Raised angular neck + beak, upturned tail, pyramid back, wide soaring wings.
 */
function createCraneData() {
  const nxStops = [0, 0.10, 0.28, 0.50, 0.75, 1.0];
  const nyStops = [-1.0, -0.68, -0.35, -0.06, 0.24, 0.55, 0.80, 1.0];

  const stage0 = () => [0, 0, 0];

  // Stage 1: Bird-base elongated diamond tuck
  const stage1 = (ax, ny, sign) => {
    const taper = 1 - Math.abs(ny) * 0.66;
    const x = sign * ax * 0.46 * taper;
    const y = ny * 0.80;
    const z = ax === 0 ? 0.11 : ax < 0.25 ? 0.05 : 0.01;
    return [x, y, z];
  };

  // Stage 2: Classic origami paper crane (flying toward +Y, dorsal +Z)
  const stage2 = (ax, ny, sign) => {
    const spinePos = (n) => {
      if (n >= 0.80) {
        const u = (n - 0.80) / 0.20;
        return [THREE_LERP(0.56, 0.78, u), THREE_LERP(0.48, 0.35, u)]; // Head crest -> forward beak
      }
      if (n >= 0.24) {
        const u = (n - 0.24) / 0.56;
        return [THREE_LERP(0.24, 0.56, u), THREE_LERP(0.15, 0.48, u)]; // Neck base -> crest
      }
      if (n >= -0.35) {
        const u = (n + 0.35) / 0.59;
        const arch = Math.sin(u * Math.PI) * 0.11;
        return [THREE_LERP(-0.34, 0.24, u), 0.14 + arch]; // Pyramid back
      }
      const u = (n + 1.0) / 0.65;
      return [THREE_LERP(-0.78, -0.34, u), THREE_LERP(0.50, 0.14, u)]; // Upturned tail
    };

    const [sy, sz] = spinePos(ny);

    if (ax === 0) {
      return [0, sy, sz];
    }

    if (ax <= 0.14) {
      // Narrow neck / tail / body fold crease
      const taper = ny > 0.55 || ny < -0.55 ? 0.22 : 1.0;
      return [sign * (0.018 + 0.08 * taper), sy * 0.90, sz * 0.82];
    }

    // Wide soaring tapered wings spanning out from body sides
    const wingT = (ax - 0.14) / 0.86;
    const wingChordProfile = Math.exp(-Math.pow((ny - 0.06) / 0.68, 2));
    const maxSpan = 0.24 + wingChordProfile * 0.88;
    const x = sign * (0.09 + wingT * (maxSpan - 0.09));
    // Leading edge sweeps gracefully back toward wingtip
    const y = THREE_LERP(sy * 0.72, ny * 0.24 - wingT * 0.08, Math.pow(wingT, 0.75));
    const z = THREE_LERP(sz * 0.68, 0.16 + wingT * 0.16, Math.pow(wingT, 0.6));
    return [x, y, z];
  };

  return buildSymmetricGrid(nxStops, nyStops, [stage0, stage1, stage2]);
}

export function getOrigamiGeometryData(shape) {
  switch (shape) {
    case 'butterfly':
      return createButterflyData();
    case 'crane':
      return createCraneData();
    case 'plane':
    default:
      return createPlaneData();
  }
}

/**
 * Interpolate positions smoothly between stage 0 -> stage 1 -> stage 2.
 * Includes organic center-outward crease timing, subtle mid-fold paper camber,
 * and spanwise flexible wing bending.
 * foldProgress in [0, 1].
 */
export function interpolateOrigamiPositions(data, foldProgress, outPositions, wingFlapAngle = 0) {
  const t = Math.max(0, Math.min(1, foldProgress));
  const [s0, s1, s2] = data.stages;
  const count = data.vertexCount;
  const split = 0.42;
  const totalCols = data.fullX.length;
  const flapStrength = Math.max(0, (t - 0.52) / 0.48);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const col = i % totalCols;
    const row = Math.floor(i / totalCols);
    const nx = data.fullX[col];
    const ny = data.nyStops[row];
    const absNx = Math.abs(nx);

    // Center spine creases slightly ahead of outer wings when 0 < t < 1,
    // strictly preserving exact 0 at t=0 and exact 1 at t=1.
    const vt =
      t <= 0
        ? 0
        : t >= 1
          ? 1
          : Math.max(0, Math.min(1, t + (0.5 - absNx) * 0.13 * Math.sin(Math.PI * t)));

    let x, y, z;
    if (vt <= 0) {
      x = s0[i3];
      y = s0[i3 + 1];
      z = s0[i3 + 2];
    } else if (vt >= 1) {
      x = s2[i3];
      y = s2[i3 + 1];
      z = s2[i3 + 2];
    } else {
      // Continuous C1 piecewise cubic Hermite through stage 0 -> stage 1 -> stage 2
      // (eliminates the mid-fold dead stop while keeping start & end tangents smooth)
      const p0x = s0[i3], p0y = s0[i3 + 1], p0z = s0[i3 + 2];
      const p1x = s1[i3], p1y = s1[i3 + 1], p1z = s1[i3 + 2];
      const p2x = s2[i3], p2y = s2[i3 + 1], p2z = s2[i3 + 2];
      const m1x = (p2x - p0x) * 0.55;
      const m1y = (p2y - p0y) * 0.55;
      const m1z = (p2z - p0z) * 0.55;

      if (vt <= split) {
        const u = vt / split;
        const u2 = u * u;
        const u3 = u2 * u;
        const h00 = 2 * u3 - 3 * u2 + 1;
        const h01 = -2 * u3 + 3 * u2;
        const h11 = (u3 - u2) * split;
        x = h00 * p0x + h01 * p1x + h11 * m1x;
        y = h00 * p0y + h01 * p1y + h11 * m1y;
        z = h00 * p0z + h01 * p1z + h11 * m1z;
      } else {
        const d1 = 1 - split;
        const u = (vt - split) / d1;
        const u2 = u * u;
        const u3 = u2 * u;
        const h00 = 2 * u3 - 3 * u2 + 1;
        const h10 = (u3 - 2 * u2 + u) * d1;
        const h01 = -2 * u3 + 3 * u2;
        x = h00 * p1x + h10 * m1x + h01 * p2x;
        y = h00 * p1y + h10 * m1y + h01 * p2y;
        z = h00 * p1z + h10 * m1z + h01 * p2z;
      }
    }

    // Gentle paper camber arch during active folding (vanishes at t=0 and t=1)
    if (t > 0 && t < 1) {
      z += Math.sin(Math.PI * t) * Math.sin(Math.PI * absNx) * 0.055;
    }

    if (wingFlapAngle !== 0 && flapStrength > 0 && absNx > 0.14) {
      const spanNorm = (absNx - 0.14) / 0.86;
      const wingFactor = Math.pow(spanNorm, 1.08) * flapStrength;
      // Subtle chordwise feather twist so wings slice gracefully through air
      const angle = wingFlapAngle * wingFactor * (1 + (1 - ny) * 0.09);
      const sign = nx < 0 ? -1 : 1;
      const pivotX = sign * 0.10;
      const dx = x - pivotX;
      const dz = z - 0.06;
      const cos = Math.cos(angle * sign);
      const sin = Math.sin(angle * sign);
      x = pivotX + dx * cos - dz * sin;
      z = 0.06 + dx * sin + dz * cos;
    }

    outPositions[i3] = x;
    outPositions[i3 + 1] = y;
    outPositions[i3 + 2] = z;
  }
}
