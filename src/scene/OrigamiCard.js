import * as THREE from 'three';
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  getOrigamiGeometryData,
  interpolateOrigamiPositions,
} from './OrigamiGeometry.js';

export class OrigamiCard {
  constructor({ texture, shape = 'plane', index = 0 }) {
    this.shape = shape;
    this.index = index;
    this.texture = texture;
    this.data = getOrigamiGeometryData(shape);

    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(this.data.stages[0]);
    this.positionAttr = new THREE.BufferAttribute(this.positions, 3);
    this.geometry.setAttribute('position', this.positionAttr);
    this.geometry.setAttribute('uv', new THREE.BufferAttribute(this.data.uvs, 2));
    this.geometry.setIndex(new THREE.BufferAttribute(this.data.indices, 1));
    this.geometry.computeVertexNormals();

    // Front-and-back paper material:
    // At foldProgress = 0 (showcase), color=#000000 + emissive=#ffffff * emissiveMap * 1.0
    // guarantees 100% true-color, un-clipped, zero-seam display of uploaded photos & text.
    // As it folds (0 -> 1), diffuse shading ramps in and emissive settles so 3D facets pop.
    this.material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#000000'),
      map: texture,
      emissiveMap: texture,
      emissive: new THREE.Color('#ffffff'),
      emissiveIntensity: 1.0,
      roughness: 0.72,
      metalness: 0.04,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 1,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = false;

    this.group = new THREE.Group();
    this.group.add(this.mesh);

    this._foldProgress = 0;
    this._glowStrength = 0;
    this._breezeFlex = 0;
    this._pocketDim = 0;
    this._wingPhase = index * 1.7;
    this._lastFlapAngle = 0;
  }

  _syncShading() {
    const foldShade = Math.min(1, this._foldProgress * 1.65);
    if (this._glowStrength > 0.01) {
      const g = Math.min(1.4, this._glowStrength);
      // Warm golden-cyan starlight glow while preserving crisp origami crease contrast
      this.material.color.set('#ffffff').multiplyScalar(0.48);
      this.material.emissive.set('#ffffff').lerp(new THREE.Color('#ffe0ad'), Math.min(1, g * 0.78));
      this.material.emissiveIntensity = 0.30 + g * 0.78;
    } else if (this._foldProgress <= 0.001 && this._pocketDim > 0.001) {
      // Match the exact unlit true-color brightness of the waiting card in the pocket
      this.material.color.setRGB(0, 0, 0);
      this.material.emissive.set('#ffffff');
      this.material.emissiveIntensity = 1.0;
    } else {
      // At foldProgress=0: color=0, emissive=1.0 -> exact 1:1 true-color card artwork
      // At foldProgress=1: color=1, emissive=0.26 -> crisp, luminous sculpted paper creases
      this.material.color.setRGB(foldShade, foldShade, foldShade);
      this.material.emissive.set(this._foldProgress <= 0.001 ? '#ffffff' : '#fffbf2');
      this.material.emissiveIntensity = 1.0 - foldShade * 0.74;
    }
  }

  get foldProgress() {
    return this._foldProgress;
  }

  set foldProgress(v) {
    this._foldProgress = Math.max(0, Math.min(1, v));
    this._updateGeometry(this._lastFlapAngle);
    this._syncShading();
  }

  get glowStrength() {
    return this._glowStrength;
  }

  set glowStrength(v) {
    this._glowStrength = Math.max(0, v);
    this._syncShading();
  }

  get pocketDim() {
    return this._pocketDim;
  }

  set pocketDim(v) {
    this._pocketDim = Math.max(0, Math.min(1, v));
    this._syncShading();
  }

  get breezeFlex() {
    return this._breezeFlex;
  }

  set breezeFlex(v) {
    this._breezeFlex = Math.max(-1, Math.min(1, v));
    if (this._foldProgress <= 0.001) {
      this._updateGeometry(0);
    }
  }

  updateWingFlap(time) {
    if (this._foldProgress < 0.54) return;
    let angle = 0;
    if (this.shape === 'plane') {
      // Gentle, poised aerodynamic air-current flex (no jittery buzz)
      angle =
        Math.sin(time * 2.0 + this._wingPhase) * 0.052 +
        Math.sin(time * 3.8 + this._wingPhase * 1.3) * 0.014;
    } else if (this.shape === 'butterfly') {
      // Expressive butterfly wingbeat with buoyant soaring glide pauses
      const p = time * 5.6 + this._wingPhase;
      const glideMod = 0.72 + 0.28 * Math.sin(time * 1.15 + this._wingPhase);
      angle = (Math.sin(p) + 0.30 * Math.sin(2 * p - 0.55) + 0.10) * 0.50 * glideMod;
    } else {
      // Unhurried, graceful crane wingbeat with poised soaring intervals
      const p = time * 3.6 + this._wingPhase;
      const glideMod = 0.72 + 0.28 * Math.sin(time * 0.95 + this._wingPhase);
      angle = (Math.sin(p) + 0.24 * Math.sin(2 * p - 0.4)) * 0.42 * glideMod;
    }
    this._lastFlapAngle = angle;
    this._updateGeometry(angle);
  }

  _updateGeometry(wingFlapAngle) {
    interpolateOrigamiPositions(this.data, this._foldProgress, this.positions, wingFlapAngle);
    if (this._foldProgress <= 0.001 && Math.abs(this._breezeFlex) > 1e-4) {
      const invHalfW = 2 / CARD_WIDTH;
      const invHalfH = 2 / CARD_HEIGHT;
      const count = this.data.vertexCount;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const nx = this.positions[i3] * invHalfW;
        const ny = this.positions[i3 + 1] * invHalfH;
        const trail = (1 - ny) * 0.5;
        const arch = Math.sin(trail * Math.PI) * 0.058 + trail * trail * 0.064;
        const edgeCup = 0.68 + 0.32 * Math.cos(nx * Math.PI * 0.5);
        this.positions[i3 + 2] -= this._breezeFlex * arch * edgeCup;
      }
    }
    this.positionAttr.needsUpdate = true;
    this.geometry.computeVertexNormals();
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
