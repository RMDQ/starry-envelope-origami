import * as THREE from 'three';
import gsap from 'gsap';
import { OrigamiCard } from './OrigamiCard.js';
import { CARD_WIDTH, CARD_HEIGHT } from './OrigamiGeometry.js';
import {
  POCKET_CARD_SCALE,
  POCKET_CARD_CLOSED_Y,
  POCKET_CARD_OPEN_Y,
} from './EnvelopeMesh.js';

// Prevent GSAP's default 500ms/33ms lag-smoothing from freezing timeline progress on
// software WebGL (SwiftShader) or low-FPS frames while still capping multi-second stalls
// so brief phases (e.g. card extraction) are never skipped in a single frame jump.
gsap.ticker.lagSmoothing(1000, 200);

const SHAPES = ['plane', 'butterfly', 'crane'];

export function resolveCardShape(cardShapeSetting, globalShapeSetting, index, totalCards) {
  const chosen = cardShapeSetting && cardShapeSetting !== 'inherit' ? cardShapeSetting : globalShapeSetting;
  if (chosen === 'plane' || chosen === 'butterfly' || chosen === 'crane') {
    return chosen;
  }
  // 'auto': cycle gracefully, and ensure the last card is butterfly or crane for the Starry Finale
  if (index === totalCards - 1 && totalCards >= 2) {
    return index % 2 === 0 ? 'butterfly' : 'crane';
  }
  return SHAPES[index % SHAPES.length];
}

function evalQuadBezier(p0, p1, p2, t, out) {
  const omt = 1 - t;
  out.set(
    omt * omt * p0.x + 2 * omt * t * p1.x + t * t * p2.x,
    omt * omt * p0.y + 2 * omt * t * p1.y + t * t * p2.y,
    omt * omt * p0.z + 2 * omt * t * p1.z + t * t * p2.z
  );
  return out;
}

function evalCubicHermite(p0, v0, p1, v1, t, out) {
  const t2 = t * t;
  const t3 = t2 * t;
  const h00 = 2 * t3 - 3 * t2 + 1;
  const h10 = t3 - 2 * t2 + t;
  const h01 = -2 * t3 + 3 * t2;
  const h11 = t3 - t2;
  out.set(
    h00 * p0.x + h10 * v0.x + h01 * p1.x + h11 * v1.x,
    h00 * p0.y + h10 * v0.y + h01 * p1.y + h11 * v1.y,
    h00 * p0.z + h10 * v0.z + h01 * p1.z + h11 * v1.z
  );
  return out;
}

export class AnimationDirector {
  constructor({ scene, envelope, meteorShower, onPhaseChange, onEndingToggle, onComplete }) {
    this.scene = scene;
    this.envelope = envelope;
    this.meteorShower = meteorShower;
    this.onPhaseChange = onPhaseChange || (() => {});
    this.onEndingToggle = onEndingToggle || (() => {});
    this.onComplete = onComplete || (() => {});

    this.masterTl = null;
    this.activeOrigamis = [];
    this.pocketEntries = [];
    this.orbitEntries = [];
    this.showcasingEntry = null;
    this.isPlaying = false;
    this.isPaused = false;
    this._hiddenPaused = false;
    this.orbitTime = 0;
    this._lastUpdateTs = null;
    this._trailTimer = 0;
    this._flapOpenProgress = 0;

    // Envelope starts hovering gently in lower frame until Play begins
    this.envelope.group.position.set(0, -1.48, 0.2);
    this.envelope.group.rotation.set(0.14, 0, 0);
    this.envelope.group.visible = true;
    this.envelope.setFlapOpen(0);
    this.envelope.setWaitingCardVisible?.(true);
    this.envelope.setLetterStack?.(3);
  }

  _getEnvelopeAnchor() {
    return this.envelope.bodyGroup || this.envelope.group;
  }

  _pocketToWorld(localPos, localQuat, localScale, outPos, outQuat, outScale) {
    this.envelope.group?.updateMatrixWorld?.(true);
    const anchor = this._getEnvelopeAnchor();
    anchor.updateMatrixWorld?.(true);
    const anchorPos = new THREE.Vector3();
    const anchorQuat = new THREE.Quaternion();
    const anchorScale = new THREE.Vector3(1, 1, 1);
    anchor.matrixWorld?.decompose(anchorPos, anchorQuat, anchorScale);
    outPos.copy(localPos).multiply(anchorScale).applyQuaternion(anchorQuat).add(anchorPos);
    outQuat.copy(anchorQuat).multiply(localQuat);
    outScale.copy(anchorScale).multiplyScalar(localScale);
  }

  _applyPocketSlotPose(entry) {
    const slot = Math.max(0, Math.min(2.8, entry.pocketSlot));
    const cardRise = THREE.MathUtils.smoothstep(this._flapOpenProgress, 0.12, 0.92);
    const baseY = THREE.MathUtils.lerp(POCKET_CARD_CLOSED_Y, POCKET_CARD_OPEN_Y, cardRise);
    const localPos = new THREE.Vector3(
      0,
      baseY - slot * 0.004,
      -0.022 - slot * 0.006
    );
    const localQuat = new THREE.Quaternion();
    const localScale = POCKET_CARD_SCALE;
    entry.card.pocketDim = 0.62 + Math.min(1.6, slot) * 0.16;
    entry.card.breezeFlex = 0;
    this._pocketToWorld(
      localPos,
      localQuat,
      localScale,
      entry.card.group.position,
      entry.card.group.quaternion,
      entry.card.group.scale
    );
  }

  _evalExtractPocketLocal(entry, p) {
    const pSplit = 0.44;
    const u1 = Math.max(0, Math.min(1, p / pSplit));
    const lift = u1 * u1 * (1.42 - 0.42 * u1);
    const startY = POCKET_CARD_OPEN_Y;
    const localY = startY + (1.65 - startY) * lift;
    const localX = entry.launchSide * 0.024 * lift * Math.sin(u1 * Math.PI * 0.85);
    const localZ = 0.028;
    const localScale = THREE.MathUtils.lerp(POCKET_CARD_SCALE, 0.67, lift);
    const localRz = entry.launchSide * 0.032 * lift;
    const pocketDim = THREE.MathUtils.lerp(0.62, 0.06, THREE.MathUtils.smoothstep(u1, 0.22, 1.0));
    return { localX, localY, localZ, localRz, localScale, pocketDim };
  }

  _applyExtractPocketPose(entry, p) {
    const st = this._evalExtractPocketLocal(entry, p);
    const localPos = new THREE.Vector3(st.localX, st.localY, st.localZ);
    const localQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, st.localRz));
    this._pocketToWorld(
      localPos,
      localQuat,
      st.localScale,
      entry.card.group.position,
      entry.card.group.quaternion,
      entry.card.group.scale
    );
    entry.card.pocketDim = st.pocketDim;
    entry.card.breezeFlex = 0;
  }

  _capturePocketExitState(entry) {
    const pSplit = 0.44;
    const eps = 0.01;
    const prevPos = new THREE.Vector3();
    const prevQuat = new THREE.Quaternion();
    const prevScale = new THREE.Vector3();

    const evalAt = (pVal, outPos, outQuat, outScale) => {
      const st = this._evalExtractPocketLocal(entry, pVal);
      this._pocketToWorld(
        new THREE.Vector3(st.localX, st.localY, st.localZ),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, st.localRz)),
        st.localScale,
        outPos,
        outQuat,
        outScale
      );
    };

    evalAt(pSplit - eps, prevPos, prevQuat, prevScale);
    const exitScaleVec = new THREE.Vector3();
    evalAt(pSplit, entry.extractExitPos, entry.extractExitQuat, exitScaleVec);
    entry.extractExitScale = exitScaleVec.x;
    entry.extractExitVel
      .subVectors(entry.extractExitPos, prevPos)
      .multiplyScalar((1 - pSplit) / eps);
    // Gentle forward release velocity so the card peels effortlessly into open starry air
    entry.extractExitVel.z += 0.85;
    entry.extractExitCaptured = true;
  }

  _clearCards() {
    if (this.masterTl) {
      this.masterTl.kill();
      this.masterTl = null;
    }
    gsap.killTweensOf(this.scene);
    if (this.scene.cameraOffset) gsap.killTweensOf(this.scene.cameraOffset);
    if (this.scene.cameraLookOffset) gsap.killTweensOf(this.scene.cameraLookOffset);
    gsap.killTweensOf(this.envelope.group.position);
    gsap.killTweensOf(this.envelope.group.rotation);
    gsap.killTweensOf(this.envelope.group.scale);

    for (const entry of this.activeOrigamis) {
      this.scene.bgScene.remove(entry.card.group);
      this.scene.fgContentGroup.remove(entry.card.group);
      entry.card.dispose();
    }
    this.activeOrigamis = [];
    this.pocketEntries = [];
    this.orbitEntries = [];
    this.showcasingEntry = null;
    this.scene.dofAmount = 0;
    this.scene.milkyWayIntensity = 0;
    this.scene.cameraOffset?.set(0, 0, 0);
    this.scene.cameraLookOffset?.set(0, 0, 0);
    if ('cameraBreath' in this.scene) this.scene.cameraBreath = 1.0;
    this.meteorShower.stopAndClear();
    this.onEndingToggle(false);
  }

  resetToIdle() {
    this._clearCards();
    this.isPlaying = false;
    this.isPaused = false;
    this._hiddenPaused = false;
    this.orbitTime = 0;
    this._flapOpenProgress = 0;
    this.envelope.group.visible = true;
    this.envelope.group.position.set(0, -1.48, 0.2);
    this.envelope.group.rotation.set(0.14, 0, 0);
    this.envelope.group.scale.setScalar(1);
    this.envelope.setFlapOpen(0);
    this.envelope.setWaitingCardVisible?.(true);
    this.envelope.setLetterStack?.(3);
    this.onPhaseChange('idle', 0, 0);
  }

  /**
   * Evaluates an expansive multi-harmonic 3D soaring trajectory across the upper starry sky.
   */
  _evalFlightPoint(entry, t, out) {
    const speedScale = 1 + (entry.speedBoost || 0);
    const angle = entry.baseAngle + t * entry.angularSpeed * entry.dir * speedScale;
    const radialBreath = Math.sin(t * 0.72 + entry.phase) * 0.42;
    const r = entry.radius + radialBreath;

    const x =
      (Math.cos(angle) * r + Math.sin(angle * 2 + entry.phase) * 0.34) * (entry.xSpread || 1);
    const z =
      entry.centerZ +
      Math.sin(angle) * (r * 0.64) +
      Math.cos(t * 0.64 + entry.phase) * 0.38;
    const y =
      entry.baseY +
      (entry.liftBoost || 0) +
      Math.sin(t * 1.05 + entry.phase) * 0.46 +
      Math.sin(angle + entry.tiltPhase) * 0.36;

    out.set(x, y, z);
    return out;
  }

  /**
   * Evaluates a C1-continuous accelerating spiral vortex into the Milky Way
   * (zero braking at p=0: smoothly preserves entry momentum while curving upward).
   */
  _evalAscendPoint(entry, p, out) {
    const clampedP = Math.max(0, Math.min(1.05, p));
    const linX = entry.ascendStartPos.x + entry.ascendStartVel.x * (clampedP * entry.ascendDuration);
    const linY = entry.ascendStartPos.y + entry.ascendStartVel.y * (clampedP * entry.ascendDuration);
    const linZ = entry.ascendStartPos.z + entry.ascendStartVel.z * (clampedP * entry.ascendDuration);

    const spiralRadius = Math.sin(Math.PI * Math.min(1, clampedP)) * (1.35 + entry.index * 0.16);
    const spiralAngle = entry.phase + clampedP * Math.PI * 2.25 * entry.dir;
    const targetX =
      THREE.MathUtils.lerp(entry.ascendStartPos.x, entry.ascendTargetPos.x, clampedP) +
      Math.cos(spiralAngle) * spiralRadius;
    const targetY = THREE.MathUtils.lerp(entry.ascendStartPos.y, entry.ascendTargetPos.y, clampedP);
    const targetZ =
      THREE.MathUtils.lerp(entry.ascendStartPos.z, entry.ascendTargetPos.z, clampedP) +
      Math.sin(spiralAngle) * spiralRadius * 0.72;

    // blendS(0)=0, blendS'(0)=0, blendS(1)=1 -> preserves exact entry velocity at p=0
    const blendS = clampedP * clampedP * (1.6 - 0.6 * clampedP);
    out.set(
      THREE.MathUtils.lerp(linX, targetX, blendS),
      THREE.MathUtils.lerp(linY, targetY, blendS),
      THREE.MathUtils.lerp(linZ, targetZ, blendS)
    );
    return out;
  }

  /**
   * Computes smooth aerodynamic orientation along a tangent with inward banking & pole safety.
   */
  _orientAlongFlight(posPrev, posCurr, posNext, time, phase, outQuat) {
    const tCurr = new THREE.Vector3().subVectors(posNext, posCurr);
    const tPrev = new THREE.Vector3().subVectors(posCurr, posPrev);
    if (tCurr.lengthSq() < 1e-8) tCurr.set(0, 1, 0);
    tCurr.normalize();
    if (tPrev.lengthSq() < 1e-8) tPrev.copy(tCurr);
    tPrev.normalize();

    // Pole-safe up reference so steep vertical climbs never trigger a 180-deg roll flip
    const absY = Math.abs(tCurr.y);
    const poleBlend = THREE.MathUtils.smoothstep(absY, 0.88, 0.995);
    const worldUp = new THREE.Vector3(0, 1 - poleBlend, poleBlend).normalize();

    const right = new THREE.Vector3().crossVectors(tCurr, worldUp);
    if (right.lengthSq() < 1e-5) {
      right.set(1, 0, 0);
    } else {
      right.normalize();
    }
    const correctedUp = new THREE.Vector3().crossVectors(right, tCurr).normalize();

    // Basis: X=right, Y=forward(tangent), Z=dorsal(up)
    const m = new THREE.Matrix4().makeBasis(right, tCurr, correctedUp);
    outQuat.setFromRotationMatrix(m);

    // Positive lateralCurvature (turning right) produces positive Y-axis roll -> banks INTO turns
    const turnVec = new THREE.Vector3().subVectors(tCurr, tPrev);
    const lateralCurvature = turnVec.dot(right);
    const bankAngle = THREE.MathUtils.clamp(lateralCurvature * 16.0, -0.78, 0.78);
    const windSway = Math.sin(time * 1.85 + phase) * 0.085;

    const bankQuat = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      bankAngle + windSway
    );
    outQuat.multiply(bankQuat);
  }

  /**
   * Computes smooth 3D soaring orbit pose for an origami item.
   */
  _computeOrbitPose(entry, t, outPos, outQuat) {
    const dt = 0.055;
    const prevPos = new THREE.Vector3();
    const nextPos = new THREE.Vector3();
    this._evalFlightPoint(entry, t - dt, prevPos);
    this._evalFlightPoint(entry, t, outPos);
    this._evalFlightPoint(entry, t + dt, nextPos);
    this._orientAlongFlight(prevPos, outPos, nextPos, t, entry.phase, outQuat);
  }

  play(preparedCards, options = {}) {
    if (!preparedCards || preparedCards.length === 0) {
      return;
    }

    this._clearCards();
    this.isPlaying = true;
    this.isPaused = false;
    this._hiddenPaused = false;
    this.orbitTime = 0;
    this._lastUpdateTs = performance.now();

    const holdDuration = Math.max(1.0, Math.min(8.0, Number(options.holdDuration) || 3.0));
    const globalShape = options.origamiShape || 'auto';

    // Responsive showcase scale & horizontal orbit spread so cards never clip on mobile portrait
    const camDist = 7.6 - 3.25;
    const vFovRad = THREE.MathUtils.degToRad(this.scene.camera.fov);
    const visibleH = 2 * camDist * Math.tan(vFovRad * 0.5);
    const visibleW = visibleH * this.scene.camera.aspect;
    const showcaseScale = Math.min(
      1.04,
      (visibleW * 0.78) / CARD_WIDTH,
      (visibleH * 0.76) / CARD_HEIGHT
    );
    const xSpread = Math.min(1.0, Math.max(0.56, this.scene.camera.aspect / 1.18));

    const tl = gsap.timeline({
      onComplete: () => {
        this.onPhaseChange('complete', preparedCards.length, preparedCards.length);
        this.onComplete();
      },
    });
    this.masterTl = tl;
    this.onPhaseChange('intro', 0, preparedCards.length);

    // 1. Intro: Envelope sweeps in on a buoyant 3D curve & opens top flap
    const envGroup = this.envelope.group;
    envGroup.visible = true;
    const envStart = new THREE.Vector3(-4.8, -3.1, -5.0);
    const envCtrl = new THREE.Vector3(1.15, -2.15, -1.1);
    const envEnd = new THREE.Vector3(0, -1.52, 0.2);

    envGroup.position.copy(envStart);
    envGroup.rotation.set(-0.34, -0.92, 0.40);
    envGroup.scale.setScalar(0.28);
    envGroup.updateMatrixWorld?.(true);
    this._flapOpenProgress = 0;
    this.envelope.setFlapOpen(0);
    this.envelope.setWaitingCardVisible?.(true);
    this.envelope.setLetterStack?.(Math.max(0, preparedCards.length - 3));

    const introProxy = { p: 0 };
    const flapProxy = { p: 0 };

    tl.call(() => this.onPhaseChange('intro', 0, preparedCards.length));
    tl.addLabel('introStart');

    if (this.scene.cameraLookOffset) {
      tl.to(
        this.scene.cameraLookOffset,
        { y: -0.07, duration: 0.95, ease: 'sine.inOut' },
        'introStart'
      );
    }

    tl.to(
      introProxy,
      {
        p: 1,
        duration: 1.4,
        ease: 'power3.out',
        onUpdate: () => {
          const p = introProxy.p;
          evalQuadBezier(envStart, envCtrl, envEnd, p, envGroup.position);
          const bank = Math.sin(Math.PI * p);
          envGroup.rotation.set(
            THREE.MathUtils.lerp(-0.34, 0.14, p) - bank * 0.08,
            THREE.MathUtils.lerp(-0.92, 0, p) + bank * 0.24,
            THREE.MathUtils.lerp(0.40, 0, p) - bank * 0.16
          );
          for (const pe of this.pocketEntries) {
            if (pe.inPocket) this._applyPocketSlotPose(pe);
          }
        },
      },
      'introStart'
    );
    tl.to(
      envGroup.scale,
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.38,
        ease: 'back.out(1.18)',
      },
      'introStart'
    );

    // Begin lifting flap during the final arc of arrival (no dead pause)
    tl.to(
      flapProxy,
      {
        p: 1,
        duration: 0.85,
        ease: 'back.out(1.08)',
        onUpdate: () => {
          this._flapOpenProgress = flapProxy.p;
          this.envelope.setFlapOpen(flapProxy.p);
          for (const pe of this.pocketEntries) {
            if (pe.inPocket) this._applyPocketSlotPose(pe);
          }
        },
      },
      'introStart+=0.88'
    );

    // Subtle envelope tilt anticipation as flap opens
    tl.to(
      envGroup.rotation,
      {
        x: 0.23,
        duration: 0.38,
        ease: 'sine.out',
      },
      'introStart+=0.88'
    );
    tl.to(
      envGroup.rotation,
      {
        x: 0.14,
        duration: 0.48,
        ease: 'sine.inOut',
      },
      'introStart+=1.26'
    );

    if (this.scene.cameraLookOffset) {
      tl.to(
        this.scene.cameraLookOffset,
        { y: 0, duration: 0.72, ease: 'sine.inOut' },
        'introStart+=1.15'
      );
    }

    // 2. Per-card sequence: seamless pocket emergence -> crisp showcase -> C1 Hermite swoop into orbit
    const total = preparedCards.length;
    const swoopDuration = 1.52;
    const extractDuration = 1.62;
    const pSplit = 0.44;
    const showcaseTargetQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.03, 0, 0));

    // Pre-build cards so top 3 cards nestle visibly inside the sheer lace pocket from t = 0
    for (let i = 0; i < total; i++) {
      const item = preparedCards[i];
      const shape = resolveCardShape(item.origamiShape, globalShape, i, total);
      const card = new OrigamiCard({
        texture: item.texture,
        shape,
        index: i,
      });

      const launchSide = i % 2 === 0 ? 1 : -1;
      const dir = -launchSide;
      const orbitEntry = {
        card,
        index: i,
        launchSide,
        inPocket: i < 3,
        pocketSlot: Math.min(2, i),
        pocketPeek: 0,
        extractActive: false,
        extractProgress: 0,
        extractExitCaptured: false,
        extractExitPos: new THREE.Vector3(),
        extractExitVel: new THREE.Vector3(),
        extractExitQuat: new THREE.Quaternion(),
        extractExitScale: 0.67,
        active: false,
        ascending: false,
        ascendProgress: 0,
        ascendDuration: 1.78,
        ascendStartPos: new THREE.Vector3(),
        ascendStartVel: new THREE.Vector3(launchSide * 0.8, 1.2, -1.5),
        ascendTargetPos: new THREE.Vector3(),
        speedBoost: 0,
        liftBoost: 0,
        launchStartPos: new THREE.Vector3(0, 0.22, 3.25),
        launchStartQuat: new THREE.Quaternion(),
        launchStartScale: showcaseScale,
        baseAngle: 0,
        targetEntryAngle:
          (launchSide > 0 ? -0.42 : Math.PI + 0.42) + (i % 3) * 0.12 * dir,
        dir,
        angularSpeed: 0.56 + (i % 3) * 0.07,
        radius: 2.65 + (i % 3) * 0.45,
        xSpread,
        baseY: 1.28 + (i % 3) * 0.38,
        centerZ: -0.95 - (i % 3) * 0.55,
        phase: i * 1.55,
        tiltPhase: i * 1.1,
        orbitScale: 0.56 + (i % 3) * 0.04,
      };

      card.group.visible = i < 3;
      this.scene.bgScene.add(card.group);
      this.activeOrigamis.push({ card, orbitEntry });
      this.pocketEntries.push(orbitEntry);
      if (orbitEntry.inPocket) {
        this._applyPocketSlotPose(orbitEntry);
      }
    }

    // Subtle awakening peek for the front card as the lace flap opens
    if (this.pocketEntries[0]) {
      tl.to(
        this.pocketEntries[0],
        {
          pocketPeek: 1,
          duration: 0.58,
          ease: 'sine.out',
          onUpdate: () => {
            if (this.pocketEntries[0].inPocket) {
              this._applyPocketSlotPose(this.pocketEntries[0]);
            }
          },
        },
        'introStart+=0.88'
      );
    }

    for (let i = 0; i < total; i++) {
      const { card, orbitEntry } = this.activeOrigamis[i];
      const launchSide = orbitEntry.launchSide;

      const cardLabel = `card_${i}`;
      // First card glides out right as flap clears open; subsequent cards overlap gracefully
      const cardPos = i === 0 ? 'introStart+=1.48' : '>-0.72';
      tl.addLabel(cardLabel, cardPos);

      const pEnd = new THREE.Vector3(0, 0.22, 3.25);
      const zeroVel = new THREE.Vector3(0, 0, 0);
      const extractProxy = { p: 0 };
      const extractTmpPos = new THREE.Vector3();
      const extractTmpQuat = new THREE.Quaternion();
      const airTilt = new THREE.Quaternion();
      const airEuler = new THREE.Euler();
      let promotedToFg = false;
      let rimSparkled = false;
      let showcasePhaseFired = false;
      let airSparkle1 = false;
      let airSparkle2 = false;

      tl.call(
        () => {
          this.onPhaseChange('extracting', i + 1, total);
          orbitEntry.inPocket = false;
          orbitEntry.extractActive = true;
          orbitEntry.extractProgress = 0;
          orbitEntry.extractExitCaptured = false;
          card.group.visible = true;
          if (i === total - 1) {
            // Final card is now being drawn -> remove the waiting card from the pocket
            this.envelope.setWaitingCardVisible?.(false);
            this.envelope.setLetterStack?.(0);
          }
          this.envelope.triggerExtractPulse?.(0.45);
          const mouthPos = new THREE.Vector3();
          const mouthQuat = new THREE.Quaternion();
          const mouthScale = new THREE.Vector3();
          this._pocketToWorld(
            new THREE.Vector3(0, 0.64, 0.042),
            new THREE.Quaternion(),
            1,
            mouthPos,
            mouthQuat,
            mouthScale
          );
          this.meteorShower.emitSparkleBurst(mouthPos, 10, '#ffe8b5');
        },
        null,
        cardLabel
      );

      // Smoothly advance remaining cards in the pocket right as current card clears the rim
      tl.call(
        () => {
          this.envelope.setLetterStack?.(Math.max(0, total - i - 4));
          for (let j = i + 1; j <= Math.min(total - 1, i + 3); j++) {
            const nextEntry = this.pocketEntries[j];
            if (j === i + 3 && !nextEntry.inPocket) {
              nextEntry.pocketSlot = 2.6;
            }
            nextEntry.card.group.visible = true;
            nextEntry.inPocket = true;
            this._applyPocketSlotPose(nextEntry);
          }
        },
        null,
        `${cardLabel}+=0.68`
      );
      for (let j = i + 1; j <= Math.min(total - 1, i + 3); j++) {
        const nextEntry = this.pocketEntries[j];
        const targetSlot = j - i - 1;
        tl.to(
          nextEntry,
          {
            pocketSlot: targetSlot,
            duration: 0.56,
            ease: 'sine.inOut',
            onUpdate: () => {
              if (nextEntry.inPocket) this._applyPocketSlotPose(nextEntry);
            },
          },
          `${cardLabel}+=0.68`
        );
      }

      tl.to(
        extractProxy,
        {
          p: 1,
          duration: extractDuration,
          ease: 'none',
          onUpdate: () => {
            const p = extractProxy.p;
            orbitEntry.extractProgress = p;
            if (i === total - 1 && p > 0) {
              this.envelope.setWaitingCardVisible?.(false);
            }

            if (p <= pSplit) {
              if (promotedToFg) {
                promotedToFg = false;
                this.scene.fgContentGroup.remove(card.group);
                this.scene.bgScene.add(card.group);
              }
              rimSparkled = false;
              showcasePhaseFired = false;
              airSparkle1 = false;
              airSparkle2 = false;
              orbitEntry.extractExitCaptured = false;
              this._applyExtractPocketPose(orbitEntry, p);
              return;
            }

            if (!orbitEntry.extractExitCaptured) {
              this._capturePocketExitState(orbitEntry);
            }

            if (!rimSparkled) {
              rimSparkled = true;
              this.envelope.triggerExtractPulse?.(1.0);
              const rimPos = new THREE.Vector3();
              const rimQuat = new THREE.Quaternion();
              const rimScale = new THREE.Vector3();
              this._pocketToWorld(
                new THREE.Vector3(launchSide * 0.08, 0.80, 0.055),
                new THREE.Quaternion(),
                1,
                rimPos,
                rimQuat,
                rimScale
              );
              this.meteorShower.emitSparkleBurst(rimPos, 18, '#fff1c9');
            }

            // Promote to DOF-immune foreground layer ONLY AFTER completely clearing the pocket rim
            if (!promotedToFg && p >= 0.46) {
              promotedToFg = true;
              this.scene.bgScene.remove(card.group);
              this.scene.fgContentGroup.add(card.group);
            }

            const u2 = Math.max(0, Math.min(1, (p - pSplit) / (1 - pSplit)));
            if (!showcasePhaseFired && u2 >= 0.72) {
              showcasePhaseFired = true;
              this.onPhaseChange('showcasing', i + 1, total);
            }

            evalCubicHermite(
              orbitEntry.extractExitPos,
              orbitEntry.extractExitVel,
              pEnd,
              zeroVel,
              u2,
              extractTmpPos
            );

            // C1-smooth buoyant thermal updraft & S-ribbon curve (zero displacement & slope at u2=0 and u2=1)
            const sinPi = Math.sin(Math.PI * u2);
            const c1Bell = sinPi * sinPi;
            const c1S = sinPi * Math.sin(2 * Math.PI * u2);
            extractTmpPos.x += launchSide * (0.32 * c1Bell - 0.11 * c1S);
            extractTmpPos.y += 0.28 * c1Bell;
            card.group.position.copy(extractTmpPos);

            if (!airSparkle1 && u2 >= 0.28) {
              airSparkle1 = true;
              this.meteorShower.emitSparkleBurst(extractTmpPos, 8, '#cbe6ff');
            }
            if (!airSparkle2 && u2 >= 0.58) {
              airSparkle2 = true;
              this.meteorShower.emitSparkleBurst(extractTmpPos, 6, '#ffe9b8');
            }

            const rotBlend = THREE.MathUtils.smoothstep(u2, 0, 0.88);
            extractTmpQuat.slerpQuaternions(
              orbitEntry.extractExitQuat,
              showcaseTargetQuat,
              rotBlend
            );
            airEuler.set(
              -sinPi * 0.18,
              launchSide * sinPi * 0.32,
              -launchSide * sinPi * 0.13 * Math.cos(u2 * Math.PI * 0.45)
            );
            airTilt.setFromEuler(airEuler);
            card.group.quaternion.copy(extractTmpQuat).multiply(airTilt);

            const s = THREE.MathUtils.lerp(
              orbitEntry.extractExitScale,
              showcaseScale,
              THREE.MathUtils.smoothstep(u2, 0, 0.94)
            );
            card.group.scale.setScalar(s);

            card.pocketDim = THREE.MathUtils.lerp(
              0.06,
              0,
              THREE.MathUtils.smoothstep(u2, 0, 0.20)
            );
            const rawFlex = sinPi * (0.88 * Math.cos(u2 * Math.PI * 0.55) + 0.16 * Math.sin(u2 * Math.PI * 2.2));
            card.breezeFlex = THREE.MathUtils.clamp(rawFlex, -1, 1);
          },
          onComplete: () => {
            orbitEntry.extractActive = false;
            card.pocketDim = 0;
            card.breezeFlex = 0;
          },
        },
        cardLabel
      );

      // Bloom dreamy DOF bokeh & gentle dolly-in ONLY AFTER card clears envelope into fgScene
      tl.to(
        this.scene,
        {
          dofAmount: 1,
          duration: 0.68,
          ease: 'power2.out',
        },
        `${cardLabel}+=0.82`
      );
      if (this.scene.cameraOffset) {
        tl.to(
          this.scene.cameraOffset,
          { z: -0.20, duration: 0.78, ease: 'sine.inOut' },
          `${cardLabel}+=0.78`
        );
      }

      // Living showcase hold: 100% crisp & readable with gentle weightless suspension
      const showcaseStart = `${cardLabel}+=${extractDuration}`;
      tl.call(
        () => {
          card.pocketDim = 0;
          card.breezeFlex = 0;
          this.showcasingEntry = { card, startOrbitTime: this.orbitTime };
        },
        null,
        showcaseStart
      );

      tl.to({}, { duration: holdDuration }, showcaseStart);

      // Release DOF & sweep along a single C1 Hermite curve straight into soaring orbit
      const foldLabel = `fold_${i}`;
      const foldStartExpr = `${cardLabel}+=${extractDuration + holdDuration}`;
      tl.addLabel(foldLabel, foldStartExpr);

      const foldTime = tl.labels[foldLabel];
      const tArrive = foldTime + swoopDuration;
      // Align orbit baseAngle deterministically so orbitEntry(tArrive) meets swoop end tangentially
      orbitEntry.baseAngle =
        orbitEntry.targetEntryAngle - tArrive * orbitEntry.angularSpeed * orbitEntry.dir;

      const orbitArrivePos = new THREE.Vector3();
      const orbitPre = new THREE.Vector3();
      const orbitPost = new THREE.Vector3();
      this._evalFlightPoint(orbitEntry, tArrive, orbitArrivePos);
      this._evalFlightPoint(orbitEntry, tArrive - 0.05, orbitPre);
      this._evalFlightPoint(orbitEntry, tArrive + 0.05, orbitPost);
      const orbitArriveVel = new THREE.Vector3()
        .subVectors(orbitPost, orbitPre)
        .multiplyScalar(swoopDuration / 0.10);
      const launchOutVel = new THREE.Vector3(launchSide * 0.55, 0.72, -1.10);

      tl.call(
        () => {
          this.showcasingEntry = null;
          this.onPhaseChange('folding', i + 1, total);
          orbitEntry.launchStartPos.copy(card.group.position);
          orbitEntry.launchStartQuat.copy(card.group.quaternion);
          orbitEntry.launchStartScale = card.group.scale.x;
          this.orbitEntries.push(orbitEntry);
          this.meteorShower.emitSparkleBurst(card.group.position, 8, '#cbe6ff');
        },
        null,
        foldLabel
      );

      // Keep folding card razor-sharp while DOF bokeh fades out, then hand over to bgScene cleanly
      tl.call(
        () => {
          this.scene.fgContentGroup.remove(card.group);
          this.scene.bgScene.add(card.group);
        },
        null,
        `${foldLabel}+=0.38`
      );

      tl.to(
        this.scene,
        {
          dofAmount: 0,
          duration: 0.42,
          ease: 'power2.inOut',
        },
        foldLabel
      );
      if (this.scene.cameraOffset) {
        tl.to(
          this.scene.cameraOffset,
          { z: 0, duration: 0.65, ease: 'sine.inOut' },
          foldLabel
        );
      }

      // Smooth mid-flight origami folding
      tl.to(
        card,
        {
          foldProgress: 1,
          duration: 1.16,
          ease: 'sine.inOut',
        },
        foldLabel
      );

      // Continuous C1 Hermite flight swoop from showcase directly into orbiting flight
      const swoopProxy = { p: 0 };
      const tmpCurr = new THREE.Vector3();
      const tmpPrev = new THREE.Vector3();
      const tmpNext = new THREE.Vector3();
      const tmpQuat = new THREE.Quaternion();

      tl.to(
        swoopProxy,
        {
          p: 1,
          duration: swoopDuration,
          ease: 'none',
          onUpdate: () => {
            const p = swoopProxy.p;
            evalCubicHermite(
              orbitEntry.launchStartPos,
              launchOutVel,
              orbitArrivePos,
              orbitArriveVel,
              p,
              tmpCurr
            );
            card.group.position.copy(tmpCurr);

            const eps = 0.025;
            if (p - eps >= 0) {
              evalCubicHermite(
                orbitEntry.launchStartPos,
                launchOutVel,
                orbitArrivePos,
                orbitArriveVel,
                p - eps,
                tmpPrev
              );
            } else {
              tmpPrev.copy(tmpCurr).addScaledVector(launchOutVel, -eps);
            }

            if (p + eps <= 1) {
              evalCubicHermite(
                orbitEntry.launchStartPos,
                launchOutVel,
                orbitArrivePos,
                orbitArriveVel,
                p + eps,
                tmpNext
              );
            } else {
              this._evalFlightPoint(
                orbitEntry,
                tArrive + (p + eps - 1) * swoopDuration,
                tmpNext
              );
            }

            const tOrient = THREE.MathUtils.lerp(foldTime, tArrive, p);
            this._orientAlongFlight(tmpPrev, tmpCurr, tmpNext, tOrient, orbitEntry.phase, tmpQuat);
            const rotBlend = THREE.MathUtils.smoothstep(p, 0.05, 0.70);
            card.group.quaternion.slerpQuaternions(orbitEntry.launchStartQuat, tmpQuat, rotBlend);

            const scaleBlend = THREE.MathUtils.smoothstep(p, 0, 0.94);
            const s = THREE.MathUtils.lerp(
              orbitEntry.launchStartScale,
              orbitEntry.orbitScale,
              scaleBlend
            );
            card.group.scale.setScalar(s);
          },
          onComplete: () => {
            orbitEntry.active = true;
          },
        },
        foldLabel
      );
    }

    // 3. Finale: "化作星河 / 漫天飞舞"
    tl.call(() => this.onPhaseChange('finale_orbit', total, total));
    if (this.scene.cameraLookOffset) {
      tl.to(
        this.scene.cameraLookOffset,
        { y: 0.42, duration: 1.5, ease: 'sine.inOut' },
        '<'
      );
    }
    tl.to({}, { duration: 1.25 });

    // All orbiting origami glow simultaneously & gain buoyant thermal lift
    tl.call(() => this.onPhaseChange('finale_glow', total, total));
    tl.to(this.scene, {
      milkyWayIntensity: 1.0,
      duration: 1.55,
      ease: 'power2.inOut',
    });

    this.activeOrigamis.forEach(({ card, orbitEntry }, idx) => {
      tl.to(
        card,
        {
          glowStrength: 1.35,
          duration: 0.85,
          ease: 'power2.out',
        },
        `<+${idx === 0 ? 0 : 0.06}`
      );
      tl.to(
        orbitEntry,
        {
          speedBoost: 0.45,
          liftBoost: 0.48,
          duration: 1.25,
          ease: 'sine.inOut',
        },
        '<'
      );
    });

    // Ascend seamlessly out of orbit into an accelerating spiral vortex & burst into meteors
    tl.call(() => {
      this.onPhaseChange('finale_shower', total, total);
      this.meteorShower.startShower();
    });
    tl.addLabel('finaleAscend');

    if (this.scene.cameraLookOffset) {
      tl.to(
        this.scene.cameraLookOffset,
        { y: 0.62, duration: 1.8, ease: 'sine.inOut' },
        'finaleAscend'
      );
    }

    this.activeOrigamis.forEach(({ card, orbitEntry }, idx) => {
      const targetPos = new THREE.Vector3(
        (idx - (total - 1) * 0.5) * 1.95 + (Math.random() - 0.5) * 1.1,
        5.0 + (idx % 3) * 1.15,
        -12.5 - (idx % 4) * 2.2
      );
      const startOffset = idx * 0.12;

      tl.call(
        () => {
          const tNow = this.masterTl ? this.masterTl.time() : this.orbitTime;
          const vPre = new THREE.Vector3();
          const vPost = new THREE.Vector3();
          this._evalFlightPoint(orbitEntry, tNow - 0.05, vPre);
          this._evalFlightPoint(orbitEntry, tNow + 0.05, vPost);

          orbitEntry.active = false;
          orbitEntry.ascending = true;
          orbitEntry.ascendProgress = 0;
          orbitEntry.ascendStartPos.copy(card.group.position);
          orbitEntry.ascendStartVel.subVectors(vPost, vPre).multiplyScalar(10);
          orbitEntry.ascendTargetPos.copy(targetPos);
        },
        null,
        `finaleAscend+=${startOffset}`
      );

      tl.to(
        orbitEntry,
        {
          ascendProgress: 1,
          duration: orbitEntry.ascendDuration,
          ease: 'none',
        },
        `finaleAscend+=${startOffset}`
      );
      tl.to(
        card.group.scale,
        {
          x: 0.07,
          y: 0.07,
          z: 0.07,
          duration: orbitEntry.ascendDuration,
          ease: 'power2.in',
        },
        `finaleAscend+=${startOffset}`
      );
      tl.to(
        card.material,
        {
          opacity: 0,
          duration: 0.42,
          ease: 'power2.out',
          onStart: () => {
            this.meteorShower.emitSparkleBurst(card.group.position, 36, '#ffe9b8');
            this.meteorShower.spawnMeteor(card.group.position);
          },
        },
        `finaleAscend+=${startOffset + 1.46}`
      );
    });

    // Smoothly tilt & sink envelope into the starlit mist below
    tl.to(
      envGroup.position,
      {
        y: -4.85,
        duration: 1.75,
        ease: 'power2.inOut',
      },
      'finaleAscend+=0.2'
    );
    tl.to(
      envGroup.rotation,
      {
        x: 0.42,
        z: 0.08,
        duration: 1.75,
        ease: 'power2.inOut',
      },
      'finaleAscend+=0.2'
    );

    // Reveal centered closing blessing & signature as the wave turns into meteors
    const blessingAt = 1.55 + (total - 1) * 0.12;
    tl.call(
      () => {
        this.onPhaseChange('finale_blessing', total, total);
        this.onEndingToggle(true);
      },
      null,
      `finaleAscend+=${blessingAt}`
    );

    // Hold finale meteor shower smoothly
    tl.to({}, { duration: 4.5 }, `finaleAscend+=${blessingAt + 0.5}`);
  }

  pause() {
    if (!this.isPlaying || this.isPaused) return;
    this.isPaused = true;
    this.masterTl?.pause();
  }

  resume() {
    if (!this.isPlaying || !this.isPaused) return;
    this.isPaused = false;
    this._lastUpdateTs = performance.now();
    if (!this._hiddenPaused) {
      this.masterTl?.resume();
    }
  }

  setHiddenPaused(hidden) {
    const next = Boolean(hidden);
    if (this._hiddenPaused === next) return;
    this._hiddenPaused = next;
    if (next) {
      if (this.isPlaying) {
        this.masterTl?.pause();
      }
    } else {
      this._lastUpdateTs = performance.now();
      if (this.isPlaying && !this.isPaused) {
        this.masterTl?.resume();
      }
    }
  }

  togglePause() {
    if (this.isPaused) {
      this.resume();
    } else {
      this.pause();
    }
    return this.isPaused;
  }

  update(nowTs) {
    if (this._lastUpdateTs === null) {
      this._lastUpdateTs = nowTs;
    }
    const rawDt = Math.min(0.05, Math.max(0, (nowTs - this._lastUpdateTs) / 1000));
    this._lastUpdateTs = nowTs;

    const paused = this.isPaused || this._hiddenPaused;
    const dt = paused ? 0 : rawDt;
    this.orbitTime += dt;
    const flightTime = this.isPlaying && this.masterTl ? this.masterTl.time() : this.orbitTime;

    // Continuous gentle envelope levitation & breathing in both idle and active play
    if (!paused) {
      this.envelope.updateIdleMotion?.(this.orbitTime, dt);
    }

    // Keep cards inside or sliding out of the pocket frame-synced with envelope levitation/recoil
    for (const entry of this.pocketEntries) {
      if (entry.inPocket) {
        this._applyPocketSlotPose(entry);
      } else if (entry.extractActive && entry.extractProgress <= 0.44) {
        this._applyExtractPocketPose(entry, entry.extractProgress);
      }
    }

    // Gentle weightless suspension during crisp card showcase
    if (this.showcasingEntry && !paused) {
      const t = this.orbitTime - this.showcasingEntry.startOrbitTime;
      const g = this.showcasingEntry.card.group;
      const envIn = Math.min(1, t / 0.45);
      g.position.set(
        Math.sin(t * 0.85) * 0.016 * envIn,
        0.22 + Math.sin(t * 1.4) * 0.024 * envIn,
        3.25
      );
      g.rotation.set(
        -0.03 + Math.cos(t * 1.15) * 0.015 * envIn,
        Math.sin(t * 0.82) * 0.032 * envIn,
        Math.cos(t * 0.98) * 0.011 * envIn
      );
    }

    const tempPos = new THREE.Vector3();
    const tempQuat = new THREE.Quaternion();
    const ascPrev = new THREE.Vector3();
    const ascCurr = new THREE.Vector3();
    const ascNext = new THREE.Vector3();

    this._trailTimer += dt;
    const emitTrail = this._trailTimer >= 0.075;
    if (emitTrail) this._trailTimer = 0;

    for (const entry of this.orbitEntries) {
      entry.card.updateWingFlap(this.orbitTime);

      if (entry.active) {
        this._computeOrbitPose(entry, flightTime, tempPos, tempQuat);
        entry.card.group.position.copy(tempPos);
        entry.card.group.quaternion.copy(tempQuat);

        if (emitTrail) {
          this.meteorShower.emitTrailDot(
            entry.card.group.position,
            entry.card.glowStrength > 0.2 ? '#ffe6a3' : '#b7dcff'
          );
        }
      } else if (entry.ascending) {
        const p = entry.ascendProgress;
        this._evalAscendPoint(entry, p - 0.02, ascPrev);
        this._evalAscendPoint(entry, p, ascCurr);
        this._evalAscendPoint(entry, p + 0.02, ascNext);

        entry.card.group.position.copy(ascCurr);
        this._orientAlongFlight(ascPrev, ascCurr, ascNext, flightTime, entry.phase, tempQuat);
        entry.card.group.quaternion.copy(tempQuat);

        if (emitTrail) {
          this.meteorShower.emitTrailDot(entry.card.group.position, '#ffe9b8');
        }
      } else if (emitTrail && entry.card.foldProgress > 0.45) {
        // Gentle sparkle trail during the swoop launch too
        this.meteorShower.emitTrailDot(entry.card.group.position, '#cbe6ff');
      }
    }

    this.meteorShower.update(dt);
    this.scene.update(this.orbitTime);
    this.scene.render();
  }
}
