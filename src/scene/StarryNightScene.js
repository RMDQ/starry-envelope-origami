import * as THREE from 'three';

const BLUR_VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const BLUR_FRAGMENT = `
  uniform sampler2D tDiffuse;
  uniform vec2 uDirection;
  uniform vec2 uResolution;
  uniform float uBlurRadius;
  uniform float uVignette;
  uniform int uFinalPass;
  varying vec2 vUv;

  void main() {
    vec2 texel = uDirection * (uBlurRadius / uResolution);
    vec4 color = vec4(0.0);

    // 9-tap Gaussian kernel
    color += texture2D(tDiffuse, vUv - texel * 4.0) * 0.051;
    color += texture2D(tDiffuse, vUv - texel * 3.0) * 0.091;
    color += texture2D(tDiffuse, vUv - texel * 2.0) * 0.122;
    color += texture2D(tDiffuse, vUv - texel * 1.0) * 0.153;
    color += texture2D(tDiffuse, vUv)                * 0.166;
    color += texture2D(tDiffuse, vUv + texel * 1.0) * 0.153;
    color += texture2D(tDiffuse, vUv + texel * 2.0) * 0.122;
    color += texture2D(tDiffuse, vUv + texel * 3.0) * 0.091;
    color += texture2D(tDiffuse, vUv + texel * 4.0) * 0.051;

    if (uFinalPass == 1) {
      float dist = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.32, 0.95, dist) * uVignette;
      color.rgb *= (1.0 - vig);
      gl_FragColor = color;
      #include <colorspace_fragment>
    } else {
      gl_FragColor = color;
    }
  }
`;

const SKY_VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAGMENT = `
  uniform float uTime;
  uniform float uMilkyWay;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.05;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    // Deep velvet midnight-blue starry sky vertical gradient (linear space)
    vec3 zenith = vec3(0.0022, 0.0055, 0.022);
    vec3 midSky = vec3(0.0055, 0.014, 0.046);
    vec3 horizon = vec3(0.011, 0.026, 0.076);

    float h = clamp(vUv.y, 0.0, 1.0);
    vec3 col = mix(horizon, midSky, smoothstep(0.0, 0.52, h));
    col = mix(col, zenith, smoothstep(0.45, 1.0, h));

    // Subtle diagonal Milky Way nebula cloud
    vec2 diagUv = vec2(vUv.x * 1.4 - vUv.y * 0.9, vUv.y * 1.2 + vUv.x * 0.4);
    float band = exp(-pow((vUv.y - (0.35 + vUv.x * 0.42)) * 3.2, 2.0));
    float neb = fbm(diagUv * 3.8 + vec2(uTime * 0.012, 0.0));
    float neb2 = fbm(diagUv * 7.2 - vec2(0.0, uTime * 0.008));
    vec3 nebulaColor = mix(vec3(0.025, 0.065, 0.19), vec3(0.11, 0.22, 0.48), neb2);

    float milkyStrength = 0.22 + uMilkyWay * 0.65;
    col += nebulaColor * band * neb * milkyStrength;

    // Soft moonlit atmospheric glow near bottom-center behind envelope
    float glow = exp(-length((vUv - vec2(0.5, 0.26)) * vec2(1.4, 2.2)) * 2.6);
    col += vec3(0.018, 0.042, 0.11) * glow * 0.55;

    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`;

function createStarSpriteTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const cx = size / 2;
  const grad = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.2, 'rgba(235,245,255,0.9)');
  grad.addColorStop(0.5, 'rgba(155,205,255,0.28)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class StarryNightScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.clientWidth || window.innerWidth;
    this.height = canvas.clientHeight || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(this.width, this.height, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.autoClear = false;

    this.camera = new THREE.PerspectiveCamera(42, this.width / this.height, 0.1, 140);
    this.cameraBasePos = new THREE.Vector3(0, 0.35, 7.6);
    this.cameraBaseLook = new THREE.Vector3(0, 0.2, 0);
    this.cameraOffset = new THREE.Vector3(0, 0, 0);
    this.cameraLookOffset = new THREE.Vector3(0, 0, 0);
    this.cameraBreath = 1.0;
    this.camera.position.copy(this.cameraBasePos);
    this.camera.lookAt(this.cameraBaseLook);

    // Two scenes: background (sky, stars, envelope, orbiting origami, meteors)
    // and foreground (active showcased card kept 100% sharp during DOF blur)
    this.bgScene = new THREE.Scene();
    this.fgScene = new THREE.Scene();
    this.fgContentGroup = new THREE.Group();
    this.fgScene.add(this.fgContentGroup);

    this.dofAmount = 0;
    this.milkyWayIntensity = 0;

    this._setupLighting(this.bgScene);
    this._setupLighting(this.fgScene, true);
    this._setupSkyBackdrop();
    this._setupStarfield();
    this._setupAmbientMotes();
    this._setupBlurPipeline();

    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(() => this.resize());
      this._resizeObserver.observe(this.canvas);
    }
  }

  _setupLighting(scene, isForeground = false) {
    const ambient = new THREE.AmbientLight('#dce8ff', isForeground ? 1.35 : 1.15);
    scene.add(ambient);

    if (!isForeground) {
      const hemi = new THREE.HemisphereLight('#eef5ff', '#5d7ab8', 0.85);
      scene.add(hemi);
    }

    const keyLight = new THREE.DirectionalLight('#fff7ea', isForeground ? 1.1 : 1.55);
    keyLight.position.set(3.5, 5.5, 6.5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight('#7cb6ff', isForeground ? 0.55 : 1.05);
    rimLight.position.set(-4.5, 2.5, -3.5);
    scene.add(rimLight);

    if (!isForeground) {
      const frontFill = new THREE.DirectionalLight('#e8f1ff', 0.65);
      frontFill.position.set(-1.5, -0.5, 6.0);
      scene.add(frontFill);

      const warmUnderGlow = new THREE.PointLight('#ffdca8', 1.25, 13);
      warmUnderGlow.position.set(0, -1.5, 2.5);
      scene.add(warmUnderGlow);
    }
  }

  _setupSkyBackdrop() {
    const geo = new THREE.PlaneGeometry(66, 40);
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMilkyWay: { value: 0 },
      },
      vertexShader: SKY_VERTEX,
      fragmentShader: SKY_FRAGMENT,
      depthWrite: false,
    });
    this.skyMesh = new THREE.Mesh(geo, this.skyMat);
    this.skyMesh.position.set(0, 0.8, -28);
    this.bgScene.add(this.skyMesh);
  }

  _setupStarfield() {
    this.starTex = createStarSpriteTexture();
    this.starLayers = [];

    const createLayer = (count, spreadX, spreadY, zMin, zMax, size, baseOpacity) => {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const baseColors = new Float32Array(count * 3);
      const phases = new Float32Array(count);

      const palette = [
        new THREE.Color('#ffffff'),
        new THREE.Color('#cbe4ff'),
        new THREE.Color('#ffe7bd'),
        new THREE.Color('#a8c8ff'),
      ];

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * spreadX;
        positions[i * 3 + 1] = -6 + Math.random() * spreadY;
        positions[i * 3 + 2] = zMin + Math.random() * (zMax - zMin);
        const c = palette[i % palette.length];
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        baseColors[i * 3] = c.r;
        baseColors[i * 3 + 1] = c.g;
        baseColors[i * 3 + 2] = c.b;
        phases[i] = Math.random() * Math.PI * 2;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size,
        map: this.starTex,
        vertexColors: true,
        transparent: true,
        opacity: baseOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const points = new THREE.Points(geo, mat);
      this.bgScene.add(points);
      this.starLayers.push({ points, geo, mat, baseColors, phases, count });
    };

    createLayer(580, 46, 30, -2, -22, 0.28, 0.95);
    createLayer(260, 40, 26, -1.5, -19, 0.48, 0.85);
    createLayer(80, 34, 22, -1.5, -16, 0.78, 0.75);
  }

  _setupAmbientMotes() {
    const count = 72;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const meta = [];

    const warm = new THREE.Color('#ffe8b8');
    const cool = new THREE.Color('#a8d4ff');

    for (let i = 0; i < count; i++) {
      const bx = (Math.random() - 0.5) * 11;
      const by = -3.6 + Math.random() * 8.2;
      const bz = -3.5 + Math.random() * 6.0;
      positions[i * 3] = bx;
      positions[i * 3 + 1] = by;
      positions[i * 3 + 2] = bz;
      const c = i % 2 === 0 ? warm : cool;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      meta.push({
        bx,
        by,
        bz,
        speed: 0.12 + Math.random() * 0.22,
        swayFreq: 0.5 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.14,
      map: this.starTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.motesPoints = new THREE.Points(geo, mat);
    this.motesPoints.frustumCulled = false;
    this.motesMeta = meta;
    this.bgScene.add(this.motesPoints);
  }

  _setupBlurPipeline() {
    const w = Math.max(1, Math.floor(this.width * this.dpr * 0.5));
    const h = Math.max(1, Math.floor(this.height * this.dpr * 0.5));

    const rtOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: true,
    };

    this.rtA = new THREE.WebGLRenderTarget(w, h, rtOptions);
    this.rtB = new THREE.WebGLRenderTarget(w, h, rtOptions);

    this.blurScene = new THREE.Scene();
    this.blurCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.blurMat = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        uDirection: { value: new THREE.Vector2(1, 0) },
        uResolution: { value: new THREE.Vector2(w, h) },
        uBlurRadius: { value: 2.2 },
        uVignette: { value: 0.35 },
        uFinalPass: { value: 0 },
      },
      vertexShader: BLUR_VERTEX,
      fragmentShader: BLUR_FRAGMENT,
      depthTest: false,
      depthWrite: false,
    });

    this.blurQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.blurMat);
    this.blurScene.add(this.blurQuad);
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    if (w <= 0 || h <= 0) return;

    this.width = w;
    this.height = h;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(w, h, false);

    const rtw = Math.max(1, Math.floor(w * this.dpr * 0.5));
    const rth = Math.max(1, Math.floor(h * this.dpr * 0.5));
    this.rtA.setSize(rtw, rth);
    this.rtB.setSize(rtw, rth);
    this.blurMat.uniforms.uResolution.value.set(rtw, rth);
  }

  update(time) {
    this.skyMat.uniforms.uTime.value = time;
    this.skyMat.uniforms.uMilkyWay.value = this.milkyWayIntensity;

    // Gentle cinematic camera breathing + director-driven parallax/tilt
    const breathAmp = this.cameraBreath;
    const bx = Math.sin(time * 0.42) * 0.08 * breathAmp;
    const by = Math.cos(time * 0.31) * 0.045 * breathAmp;
    const bz = Math.sin(time * 0.24) * 0.06 * breathAmp;

    this.camera.position.set(
      this.cameraBasePos.x + this.cameraOffset.x + bx,
      this.cameraBasePos.y + this.cameraOffset.y + by,
      this.cameraBasePos.z + this.cameraOffset.z + bz
    );
    this.camera.lookAt(
      this.cameraBaseLook.x + this.cameraLookOffset.x,
      this.cameraBaseLook.y + this.cameraLookOffset.y,
      this.cameraBaseLook.z + this.cameraLookOffset.z
    );

    // Gentle parallax drift & star twinkling
    for (let l = 0; l < this.starLayers.length; l++) {
      const layer = this.starLayers[l];
      layer.points.rotation.z = Math.sin(time * 0.04 + l) * 0.018;
      layer.points.position.x = Math.sin(time * 0.06 + l * 1.4) * 0.14;
      const colAttr = layer.geo.attributes.color;
      // Subtle twinkle on a rotating subset for lightweight CPU budget
      const stride = 3;
      const offset = Math.floor(time * 20) % stride;
      for (let i = offset; i < layer.count; i += stride) {
        const twinkle = 0.62 + 0.38 * Math.sin(time * 2.2 + layer.phases[i]);
        colAttr.setXYZ(
          i,
          layer.baseColors[i * 3] * twinkle,
          layer.baseColors[i * 3 + 1] * twinkle,
          layer.baseColors[i * 3 + 2] * twinkle
        );
      }
      colAttr.needsUpdate = true;
    }

    // Floating night-air starlight motes
    if (this.motesPoints && this.motesMeta) {
      const posAttr = this.motesPoints.geo ? this.motesPoints.geo.attributes.position : this.motesPoints.geometry.attributes.position;
      const count = this.motesMeta.length;
      for (let i = 0; i < count; i++) {
        const m = this.motesMeta[i];
        const yRange = 8.2;
        const wrappedY = ((((m.by + time * m.speed) + 3.6) % yRange) + yRange) % yRange - 3.6;
        const wx = m.bx + Math.sin(time * m.swayFreq + m.phase) * 0.35;
        const wz = m.bz + Math.cos(time * m.swayFreq * 0.8 + m.phase) * 0.25;
        posAttr.setXYZ(i, wx, wrappedY, wz);
      }
      posAttr.needsUpdate = true;
    }
  }

  render() {
    this.renderer.setRenderTarget(null);
    this.renderer.clear();

    if (this.dofAmount <= 0.008) {
      this.renderer.render(this.bgScene, this.camera);
    } else {
      // Pass 1: Render bgScene into rtA
      this.renderer.setRenderTarget(this.rtA);
      this.renderer.clear();
      this.renderer.render(this.bgScene, this.camera);

      // Two-stage separable Gaussian blur keeps tap spacing <= 1.85 texels so point stars
      // produce smooth, creamy bokeh with zero grid aliasing artifacts.
      const pass1Radius = this.dofAmount * 1.25;
      const pass2Radius = this.dofAmount * 1.85;

      // Stage 1: H (rtA -> rtB) then V (rtB -> rtA)
      this.blurMat.uniforms.tDiffuse.value = this.rtA.texture;
      this.blurMat.uniforms.uDirection.value.set(1, 0);
      this.blurMat.uniforms.uBlurRadius.value = pass1Radius;
      this.blurMat.uniforms.uFinalPass.value = 0;
      this.renderer.setRenderTarget(this.rtB);
      this.renderer.clear();
      this.renderer.render(this.blurScene, this.blurCamera);

      this.blurMat.uniforms.tDiffuse.value = this.rtB.texture;
      this.blurMat.uniforms.uDirection.value.set(0, 1);
      this.blurMat.uniforms.uBlurRadius.value = pass1Radius;
      this.blurMat.uniforms.uFinalPass.value = 0;
      this.renderer.setRenderTarget(this.rtA);
      this.renderer.clear();
      this.renderer.render(this.blurScene, this.blurCamera);

      // Stage 2: H (rtA -> rtB) then V (rtB -> screen + subtle bokeh vignette)
      this.blurMat.uniforms.tDiffuse.value = this.rtA.texture;
      this.blurMat.uniforms.uDirection.value.set(1, 0);
      this.blurMat.uniforms.uBlurRadius.value = pass2Radius;
      this.blurMat.uniforms.uFinalPass.value = 0;
      this.renderer.setRenderTarget(this.rtB);
      this.renderer.clear();
      this.renderer.render(this.blurScene, this.blurCamera);

      this.blurMat.uniforms.tDiffuse.value = this.rtB.texture;
      this.blurMat.uniforms.uDirection.value.set(0, 1);
      this.blurMat.uniforms.uBlurRadius.value = pass2Radius;
      this.blurMat.uniforms.uVignette.value = this.dofAmount * 0.34;
      this.blurMat.uniforms.uFinalPass.value = 1;
      this.renderer.setRenderTarget(null);
      this.renderer.render(this.blurScene, this.blurCamera);
    }

    // Pass 4: Render crisp foreground card on top
    if (this.fgContentGroup.children.length > 0) {
      this.renderer.clearDepth();
      this.renderer.render(this.fgScene, this.camera);
    }
  }

  dispose() {
    window.removeEventListener('resize', this._onResize);
    this._resizeObserver?.disconnect();
    this.rtA.dispose();
    this.rtB.dispose();
    this.blurMat.dispose();
    this.blurQuad.geometry.dispose();
    this.skyMat.dispose();
    this.skyMesh.geometry.dispose();
    this.starTex.dispose();
    for (const l of this.starLayers) {
      l.geo.dispose();
      l.mat.dispose();
    }
    if (this.motesPoints) {
      this.motesPoints.geometry.dispose();
      this.motesPoints.material.dispose();
    }
    this.renderer.dispose();
  }
}
