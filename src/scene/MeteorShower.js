import * as THREE from 'three';

function createSoftGlowSpriteTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.22, 'rgba(220, 240, 255, 0.85)');
  grad.addColorStop(0.55, 'rgba(130, 190, 255, 0.28)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createMeteorStreakTexture() {
  const w = 128;
  const h = 32;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  // Horizontal gradient: transparent tail (left) -> bright luminous head (right)
  const hGrad = ctx.createLinearGradient(0, 0, w, 0);
  hGrad.addColorStop(0, 'rgba(110, 180, 255, 0)');
  hGrad.addColorStop(0.55, 'rgba(175, 222, 255, 0.35)');
  hGrad.addColorStop(0.88, 'rgba(255, 248, 224, 0.92)');
  hGrad.addColorStop(1, 'rgba(255, 255, 255, 1)');

  ctx.fillStyle = hGrad;
  ctx.fillRect(0, 0, w, h);

  // Multiply vertical Gaussian-like beam falloff so edges are razor-soft
  ctx.globalCompositeOperation = 'destination-in';
  const vGrad = ctx.createLinearGradient(0, 0, 0, h);
  vGrad.addColorStop(0, 'rgba(0,0,0,0)');
  vGrad.addColorStop(0.32, 'rgba(0,0,0,0.55)');
  vGrad.addColorStop(0.5, 'rgba(0,0,0,1)');
  vGrad.addColorStop(0.68, 'rgba(0,0,0,0.55)');
  vGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = vGrad;
  ctx.fillRect(0, 0, w, h);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class MeteorShower {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.spriteTex = createSoftGlowSpriteTexture();
    this.meteorTex = createMeteorStreakTexture();
    this.meteorPlaneGeo = new THREE.PlaneGeometry(1, 1);
    // Anchor at head (x = 0) extending backward to x = -1
    this.meteorPlaneGeo.translate(-0.5, 0, 0);

    // Pool of burst sparkles
    this.sparkles = [];
    this.maxSparkles = 320;
    this.sparklePositions = new Float32Array(this.maxSparkles * 3);
    this.sparkleColors = new Float32Array(this.maxSparkles * 3);
    this.sparkleGeo = new THREE.BufferGeometry();
    this.sparkleGeo.setAttribute('position', new THREE.BufferAttribute(this.sparklePositions, 3));
    this.sparkleGeo.setAttribute('color', new THREE.BufferAttribute(this.sparkleColors, 3));

    this.sparkleMat = new THREE.PointsMaterial({
      size: 0.24,
      map: this.spriteTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.sparklePoints = new THREE.Points(this.sparkleGeo, this.sparkleMat);
    this.sparklePoints.frustumCulled = false;
    this.group.add(this.sparklePoints);

    // Meteors (streaking lines + glowing head)
    this.meteors = [];
    this.activeShower = false;
    this.showerTime = 0;
    this.spawnAccumulator = 0;
  }

  emitSparkleBurst(origin, count = 28, colorHex = '#ffe7ad') {
    const baseColor = new THREE.Color(colorHex);
    const altColor = new THREE.Color('#9ad8ff');

    for (let i = 0; i < count; i++) {
      if (this.sparkles.length >= this.maxSparkles) {
        this.sparkles.shift();
      }
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = 0.45 + Math.random() * 2.15;
      const c = baseColor.clone().lerp(altColor, Math.random());

      this.sparkles.push({
        x: origin.x + (Math.random() - 0.5) * 0.22,
        y: origin.y + (Math.random() - 0.5) * 0.22,
        z: origin.z + (Math.random() - 0.5) * 0.22,
        vx: Math.sin(phi) * Math.cos(theta) * speed,
        vy: Math.sin(phi) * Math.sin(theta) * speed + 0.45,
        vz: Math.cos(phi) * speed,
        sway: (Math.random() - 0.5) * 0.65,
        life: 0,
        maxLife: 1.2 + Math.random() * 1.4,
        color: c,
      });
    }
  }

  emitTrailDot(origin, colorHex = '#c9e8ff') {
    if (this.sparkles.length >= this.maxSparkles) {
      this.sparkles.shift();
    }
    this.sparkles.push({
      x: origin.x + (Math.random() - 0.5) * 0.1,
      y: origin.y + (Math.random() - 0.5) * 0.1,
      z: origin.z + (Math.random() - 0.5) * 0.1,
      vx: (Math.random() - 0.5) * 0.18,
      vy: 0.12 + Math.random() * 0.16,
      vz: (Math.random() - 0.5) * 0.18,
      sway: (Math.random() - 0.5) * 0.45,
      life: 0,
      maxLife: 0.85 + Math.random() * 0.55,
      color: new THREE.Color(colorHex),
    });
  }

  spawnMeteor(startPos = null, customDir = null) {
    const start = startPos
      ? startPos.clone()
      : new THREE.Vector3(
          -9 + Math.random() * 23,
          5.2 + Math.random() * 6.8,
          -11 - Math.random() * 15
        );

    const dir = customDir
      ? customDir.clone().normalize()
      : new THREE.Vector3(
          -0.72 - Math.random() * 0.65,
          -0.46 - Math.random() * 0.42,
          0.12 + (Math.random() - 0.5) * 0.26
        ).normalize();

    const speed = 10 + Math.random() * 10;
    const tailLen = 2.6 + Math.random() * 3.8;
    const beamWidth = 0.075 + Math.random() * 0.085;
    const palette = ['#fff3d6', '#cbe8ff', '#ffe2b3', '#d8dcff'];
    const color = palette[Math.floor(Math.random() * palette.length)];

    const mat = new THREE.MeshBasicMaterial({
      map: this.meteorTex,
      color,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const streak = new THREE.Mesh(this.meteorPlaneGeo, mat);
    streak.position.copy(start);
    const camAxis = new THREE.Vector3(0, 0, 1);
    const sideAxis = new THREE.Vector3().crossVectors(camAxis, dir);
    if (sideAxis.lengthSq() < 1e-5) {
      sideAxis.set(0, 1, 0);
    } else {
      sideAxis.normalize();
    }
    const normalAxis = new THREE.Vector3().crossVectors(dir, sideAxis).normalize();
    const rotMat = new THREE.Matrix4().makeBasis(dir, sideAxis, normalAxis);
    streak.quaternion.setFromRotationMatrix(rotMat);
    streak.scale.set(tailLen, beamWidth, 1);
    this.group.add(streak);

    const headMat = new THREE.SpriteMaterial({
      map: this.spriteTex,
      color,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const head = new THREE.Sprite(headMat);
    const headScale = 0.30 + Math.random() * 0.28;
    head.scale.set(headScale, headScale, 1);
    head.position.copy(start);
    this.group.add(head);

    this.meteors.push({
      pos: start,
      dir,
      speed,
      tailLen,
      beamWidth,
      streak,
      mat,
      head,
      headMat,
      life: 0,
      maxLife: 1.35 + Math.random() * 1.15,
    });
  }

  startShower() {
    this.activeShower = true;
    this.showerTime = 0;
    this.spawnAccumulator = 0;
    // Initial dramatic wave
    for (let i = 0; i < 6; i++) {
      this.spawnMeteor();
    }
  }

  stopAndClear() {
    this.activeShower = false;
    this.sparkles = [];
    this.sparklePositions.fill(0);
    this.sparkleColors.fill(0);
    this.sparkleGeo.attributes.position.needsUpdate = true;
    this.sparkleGeo.attributes.color.needsUpdate = true;

    for (const m of this.meteors) {
      this.group.remove(m.streak);
      this.group.remove(m.head);
      m.mat.dispose();
      m.headMat.dispose();
    }
    this.meteors = [];
  }

  update(dt) {
    // Update sparkles
    for (let i = this.sparkles.length - 1; i >= 0; i--) {
      const s = this.sparkles[i];
      s.life += dt;
      if (s.life >= s.maxLife) {
        this.sparkles.splice(i, 1);
        continue;
      }
      s.x += (s.vx + Math.sin(s.life * 4.5) * (s.sway || 0)) * dt;
      s.y += s.vy * dt;
      s.z += s.vz * dt;
      s.vx *= 0.975;
      s.vy = s.vy * 0.975 + 0.18 * dt;
      s.vz *= 0.975;
    }

    this.sparklePositions.fill(0);
    this.sparkleColors.fill(0);
    for (let i = 0; i < this.sparkles.length; i++) {
      const s = this.sparkles[i];
      const fade = Math.sin((s.life / s.maxLife) * Math.PI);
      const i3 = i * 3;
      this.sparklePositions[i3] = s.x;
      this.sparklePositions[i3 + 1] = s.y;
      this.sparklePositions[i3 + 2] = s.z;
      this.sparkleColors[i3] = s.color.r * fade;
      this.sparkleColors[i3 + 1] = s.color.g * fade;
      this.sparkleColors[i3 + 2] = s.color.b * fade;
    }
    this.sparkleGeo.attributes.position.needsUpdate = true;
    this.sparkleGeo.attributes.color.needsUpdate = true;

    // Spawn meteor waves when finale shower is active
    if (this.activeShower) {
      this.showerTime += dt;
      this.spawnAccumulator += dt;
      const interval = this.showerTime < 4.5 ? 0.14 : 0.38;
      if (this.spawnAccumulator >= interval) {
        this.spawnAccumulator = 0;
        this.spawnMeteor();
      }
    }

    // Update active meteors
    for (let i = this.meteors.length - 1; i >= 0; i--) {
      const m = this.meteors[i];
      m.life += dt;
      if (m.life >= m.maxLife) {
        this.group.remove(m.streak);
        this.group.remove(m.head);
        m.mat.dispose();
        m.headMat.dispose();
        this.meteors.splice(i, 1);
        continue;
      }

      m.pos.addScaledVector(m.dir, m.speed * dt);
      m.streak.position.copy(m.pos);
      m.head.position.copy(m.pos);
      const fade = Math.min(1, m.life * 4) * Math.max(0, 1 - m.life / m.maxLife);
      m.mat.opacity = fade;
      m.headMat.opacity = fade;
    }
  }

  dispose() {
    this.stopAndClear();
    this.sparkleGeo.dispose();
    this.sparkleMat.dispose();
    this.meteorPlaneGeo.dispose();
    this.meteorTex.dispose();
    this.spriteTex.dispose();
  }
}
