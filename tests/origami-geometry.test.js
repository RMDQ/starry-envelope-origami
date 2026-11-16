import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  getOrigamiGeometryData,
  interpolateOrigamiPositions,
} from '../src/scene/OrigamiGeometry.js';

const SHAPES = ['plane', 'butterfly', 'crane'];

function triangleArea2D(ax, ay, bx, by, cx, cy) {
  return 0.5 * ((bx - ax) * (cy - ay) - (cx - ax) * (by - ay));
}

for (const shape of SHAPES) {
  test(`OrigamiGeometry(${shape}): flat stage covers exact card area with valid triangles and UVs`, () => {
    const data = getOrigamiGeometryData(shape);
    assert.ok(data.vertexCount > 8);
    assert.ok(data.triangleCount > 8);
    assert.equal(data.stages.length, 3);

    const flat = data.stages[0];
    let totalArea = 0;

    for (let t = 0; t < data.triangleCount; t++) {
      const i0 = data.indices[t * 3];
      const i1 = data.indices[t * 3 + 1];
      const i2 = data.indices[t * 3 + 2];

      const area = triangleArea2D(
        flat[i0 * 3],
        flat[i0 * 3 + 1],
        flat[i1 * 3],
        flat[i1 * 3 + 1],
        flat[i2 * 3],
        flat[i2 * 3 + 1]
      );
      assert.ok(area > 1e-6, `Triangle ${t} in ${shape} should have positive area, got ${area}`);
      totalArea += area;
    }

    const expectedArea = CARD_WIDTH * CARD_HEIGHT;
    assert.ok(
      Math.abs(totalArea - expectedArea) < 1e-4,
      `Expected total area ${expectedArea}, got ${totalArea}`
    );

    for (let i = 0; i < data.vertexCount; i++) {
      const u = data.uvs[i * 2];
      const v = data.uvs[i * 2 + 1];
      assert.ok(u >= -1e-6 && u <= 1 + 1e-6, `UV u out of range: ${u}`);
      assert.ok(v >= -1e-6 && v <= 1 + 1e-6, `UV v out of range: ${v}`);
    }
  });

  test(`OrigamiGeometry(${shape}): all morph stages contain finite coordinates and interpolate cleanly`, () => {
    const data = getOrigamiGeometryData(shape);
    for (let s = 0; s < data.stages.length; s++) {
      const arr = data.stages[s];
      assert.equal(arr.length, data.vertexCount * 3);
      for (let i = 0; i < arr.length; i++) {
        assert.ok(Number.isFinite(arr[i]), `Non-finite coord at stage ${s} index ${i}`);
      }
    }

    const out = new Float32Array(data.vertexCount * 3);
    for (const progress of [-0.2, 0, 0.25, 0.42, 0.75, 1.0, 1.5]) {
      interpolateOrigamiPositions(data, progress, out, progress >= 0.7 ? 0.35 : 0);
      for (let i = 0; i < out.length; i++) {
        assert.ok(Number.isFinite(out[i]), `Non-finite interpolated value at t=${progress}`);
      }
    }

    // At t <= 0 it must match stage 0 exactly
    interpolateOrigamiPositions(data, 0, out, 0);
    for (let i = 0; i < out.length; i++) {
      assert.ok(Math.abs(out[i] - data.stages[0][i]) < 1e-5);
    }

    // At t >= 1 with wingFlapAngle = 0 it must match stage 2 exactly
    interpolateOrigamiPositions(data, 1, out, 0);
    for (let i = 0; i < out.length; i++) {
      assert.ok(Math.abs(out[i] - data.stages[2][i]) < 1e-5);
    }
  });
}
