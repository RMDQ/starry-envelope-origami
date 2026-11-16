import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  getOrigamiGeometryData,
  interpolateOrigamiPositions,
} from '../src/scene/OrigamiGeometry.js';
import { OrigamiCard } from '../src/scene/OrigamiCard.js';
import { AnimationDirector } from '../src/scene/AnimationDirector.js';
import {
  POCKET_CARD_SCALE,
  POCKET_CARD_OPEN_Y,
} from '../src/scene/EnvelopeMesh.js';

test('OrigamiGeometry mid-fold applies organic center-outward camber while keeping endpoints exact', () => {
  for (const shape of ['plane', 'butterfly', 'crane']) {
    const data = getOrigamiGeometryData(shape);
    const outHalf = new Float32Array(data.vertexCount * 3);
    interpolateOrigamiPositions(data, 0.5, outHalf, 0);
    for (let i = 0; i < outHalf.length; i++) {
      assert.ok(Number.isFinite(outHalf[i]));
    }

    const outZero = new Float32Array(data.vertexCount * 3);
    interpolateOrigamiPositions(data, 0, outZero, 0.4);
    for (let i = 0; i < outZero.length; i++) {
      assert.ok(Math.abs(outZero[i] - data.stages[0][i]) < 1e-6);
    }

    const outOne = new Float32Array(data.vertexCount * 3);
    interpolateOrigamiPositions(data, 1, outOne, 0);
    for (let i = 0; i < outOne.length; i++) {
      assert.ok(Math.abs(outOne[i] - data.stages[2][i]) < 1e-6);
    }
  }
});

test('OrigamiCard wing flex activates smoothly for plane, butterfly, and crane past foldProgress 0.54', () => {
  for (const shape of ['plane', 'butterfly', 'crane']) {
    const tex = new THREE.Texture();
    const card = new OrigamiCard({ texture: tex, shape, index: 1 });

    // Below threshold: no flap angle update
    card.foldProgress = 0.4;
    card.updateWingFlap(1.2);
    assert.equal(card._lastFlapAngle, 0);

    // Above threshold: active aerodynamic flex/wingbeat
    card.foldProgress = 0.9;
    card.updateWingFlap(1.2);
    assert.ok(Number.isFinite(card._lastFlapAngle) && Math.abs(card._lastFlapAngle) > 0);

    card.dispose();
    tex.dispose();
  }
});

test('AnimationDirector handles empty input, pause/resume, single-card flow, and multi-card update loop cleanly', () => {
  let pulseCount = 0;
  let idleCalls = 0;
  const dummyScene = {
    camera: { fov: 42, aspect: 1.6 },
    bgScene: new THREE.Scene(),
    fgContentGroup: new THREE.Group(),
    cameraOffset: new THREE.Vector3(),
    cameraLookOffset: new THREE.Vector3(),
    cameraBreath: 1,
    dofAmount: 0,
    milkyWayIntensity: 0,
    update() {},
    render() {},
  };
  const dummyEnvelope = {
    group: new THREE.Group(),
    setFlapOpen() {},
    setLetterStack() {},
    triggerExtractPulse() {
      pulseCount++;
    },
    updateIdleMotion() {
      idleCalls++;
    },
  };
  const dummyMeteor = {
    emitSparkleBurst() {},
    emitTrailDot() {},
    startShower() {},
    stopAndClear() {},
    spawnMeteor() {},
    update() {},
  };

  const phases = [];
  const director = new AnimationDirector({
    scene: dummyScene,
    envelope: dummyEnvelope,
    meteorShower: dummyMeteor,
    onPhaseChange: (phase) => phases.push(phase),
  });

  // Empty cards must no-op safely
  director.play([]);
  assert.equal(director.isPlaying, false);
  assert.equal(phases.length, 0);

  // Idle update still animates envelope breathing
  director.update(100);
  director.update(116);
  assert.equal(idleCalls, 2);

  // Play with 1 card and scrub through timeline + update loop
  const tex = new THREE.Texture();
  director.play([{ texture: tex, origamiShape: 'butterfly' }], {
    holdDuration: 1.0,
    origamiShape: 'auto',
  });
  assert.equal(director.isPlaying, true);
  assert.equal(phases[0], 'intro');

  // Step timeline to extracting, showcasing, folding, and ascending (suppressEvents=false)
  director.masterTl.seek(2.3, false);
  director.update(200);
  director.masterTl.seek(3.9, false);
  director.update(230);
  director.masterTl.seek(5.5, false);
  director.update(260);
  director.masterTl.seek(director.masterTl.labels.finaleAscend + 0.8, false);
  director.update(300);

  for (const { card } of director.activeOrigamis) {
    assert.ok(Number.isFinite(card.group.position.x));
    assert.ok(Number.isFinite(card.group.position.y));
    assert.ok(Number.isFinite(card.group.position.z));
  }

  assert.equal(director.togglePause(), true);
  assert.equal(director.togglePause(), false);
  assert.ok(pulseCount >= 1);

  director.resetToIdle();
  assert.equal(director.isPlaying, false);
  assert.equal(director.activeOrigamis.length, 0);
  tex.dispose();
});

test('OrigamiGeometry mid-fold velocity is continuous without a dead stop at split=0.42', () => {
  for (const shape of ['plane', 'butterfly', 'crane']) {
    const data = getOrigamiGeometryData(shape);
    const outA = new Float32Array(data.vertexCount * 3);
    const outB = new Float32Array(data.vertexCount * 3);
    interpolateOrigamiPositions(data, 0.41, outA, 0);
    interpolateOrigamiPositions(data, 0.43, outB, 0);
    let maxDisp = 0;
    for (let i = 0; i < outA.length; i++) {
      maxDisp = Math.max(maxDisp, Math.abs(outB[i] - outA[i]));
    }
    assert.ok(maxDisp > 0.005, `Expected smooth non-zero mid-fold motion for ${shape}, got ${maxDisp}`);
  }
});

test('AnimationDirector banks inward into turns, handles steep vertical climbs, freezes scene time on pause, and hands off C1 smoothly', () => {
  const sceneTimes = [];
  const dummyScene = {
    camera: { fov: 42, aspect: 1.6 },
    bgScene: new THREE.Scene(),
    fgContentGroup: new THREE.Group(),
    cameraOffset: new THREE.Vector3(),
    cameraLookOffset: new THREE.Vector3(),
    cameraBreath: 1,
    dofAmount: 0,
    milkyWayIntensity: 0,
    update(t) {
      sceneTimes.push(t);
    },
    render() {},
  };
  const dummyEnvelope = {
    group: new THREE.Group(),
    bodyGroup: new THREE.Group(),
    setFlapOpen() {},
    setLetterStack() {},
    triggerExtractPulse() {},
    updateIdleMotion() {},
  };
  const dummyMeteor = {
    emitSparkleBurst() {},
    emitTrailDot() {},
    startShower() {},
    stopAndClear() {},
    spawnMeteor() {},
    update() {},
  };

  const director = new AnimationDirector({
    scene: dummyScene,
    envelope: dummyEnvelope,
    meteorShower: dummyMeteor,
  });

  // Inward banking test: turning right (+X from +Z) must roll dorsal (+Z) toward +X (right wing dips)
  const qStraight = new THREE.Quaternion();
  const qRightTurn = new THREE.Quaternion();
  director._orientAlongFlight(
    new THREE.Vector3(0, 0, -1),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 1),
    0,
    0,
    qStraight
  );
  director._orientAlongFlight(
    new THREE.Vector3(0, 0, -1),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.35, 0, 1),
    0,
    0,
    qRightTurn
  );
  // Local +Z (dorsal) should tilt toward +X when turning toward +X
  const dorsalRight = new THREE.Vector3(0, 0, 1).applyQuaternion(qRightTurn);
  assert.ok(dorsalRight.x > 0.1, `Expected inward right bank (dorsal.x > 0.1), got ${dorsalRight.x}`);

  // Steep vertical climb pole safety: no NaN or sudden flip
  const qClimb = new THREE.Quaternion();
  director._orientAlongFlight(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 2, 0.001),
    0.5,
    0,
    qClimb
  );
  assert.ok(Number.isFinite(qClimb.x) && Number.isFinite(qClimb.w));

  // C1 Ascend continuity: _evalAscendPoint(0) === ascendStartPos and initial velocity matches ascendStartVel
  const ascendEntry = {
    index: 0,
    dir: 1,
    phase: 0.7,
    ascendDuration: 1.78,
    ascendStartPos: new THREE.Vector3(1.2, 1.8, -1.0),
    ascendStartVel: new THREE.Vector3(-0.9, 0.4, -1.1),
    ascendTargetPos: new THREE.Vector3(0.5, 5.5, -14.0),
  };
  const a0 = new THREE.Vector3();
  const aEps = new THREE.Vector3();
  director._evalAscendPoint(ascendEntry, 0, a0);
  director._evalAscendPoint(ascendEntry, 0.001, aEps);
  assert.ok(a0.distanceTo(ascendEntry.ascendStartPos) < 1e-6);
  const approxVel = aEps.clone().sub(a0).divideScalar(0.001 * ascendEntry.ascendDuration);
  assert.ok(
    approxVel.distanceTo(ascendEntry.ascendStartVel) < 0.05,
    `Expected C1 velocity match at ascend start, diff=${approxVel.distanceTo(ascendEntry.ascendStartVel)}`
  );

  // Pause must freeze scene.update(time)
  const tex = new THREE.Texture();
  director.play([{ texture: tex, origamiShape: 'plane' }], { holdDuration: 1.0 });
  director.update(100);
  director.update(120);
  director.pause();
  const countBeforePause = sceneTimes.length;
  director.update(200);
  director.update(250);
  assert.equal(sceneTimes[sceneTimes.length - 1], sceneTimes[countBeforePause - 1]);

  // C1 Swoop -> Orbit handoff: position right before & after fold_0 + 1.52s must be seamless
  director.resume();
  const foldTime = director.masterTl.labels.fold_0;
  director.masterTl.seek(foldTime + 1.519, false);
  director.update(300);
  const posBefore = director.activeOrigamis[0].card.group.position.clone();
  director.masterTl.seek(foldTime + 1.525, false);
  director.update(306);
  const posAfter = director.activeOrigamis[0].card.group.position.clone();
  assert.ok(
    posBefore.distanceTo(posAfter) < 0.08,
    `Expected seamless C1 swoop->orbit handoff, jump=${posBefore.distanceTo(posAfter)}`
  );

  director.resetToIdle();
  tex.dispose();
});

test('AnimationDirector extracts every card parallel to pocket with zero Z-clipping, clears rim before fg promotion, and restores crisp shading', () => {
  const dummyScene = {
    camera: { fov: 42, aspect: 1.6 },
    bgScene: new THREE.Scene(),
    fgContentGroup: new THREE.Group(),
    cameraOffset: new THREE.Vector3(),
    cameraLookOffset: new THREE.Vector3(),
    cameraBreath: 1,
    dofAmount: 0,
    milkyWayIntensity: 0,
    update() {},
    render() {},
  };

  const envGroup = new THREE.Group();
  const bodyGroup = new THREE.Group();
  envGroup.add(bodyGroup);
  let lastStack = null;
  const dummyEnvelope = {
    group: envGroup,
    bodyGroup,
    setFlapOpen() {},
    setLetterStack(n) {
      lastStack = n;
    },
    triggerExtractPulse() {},
    updateIdleMotion(t) {
      bodyGroup.position.set(Math.cos(t * 0.7) * 0.02, Math.sin(t * 1.1) * 0.04, 0);
      bodyGroup.rotation.set(0.03, 0.04, 0.02);
    },
  };
  const dummyMeteor = {
    emitSparkleBurst() {},
    emitTrailDot() {},
    startShower() {},
    stopAndClear() {},
    spawnMeteor() {},
    update() {},
  };

  const director = new AnimationDirector({
    scene: dummyScene,
    envelope: dummyEnvelope,
    meteorShower: dummyMeteor,
  });

  // Use 5 cards to also exercise total > 3 pocket queue replenishment
  const cards = Array.from({ length: 5 }, (_, i) => ({
    texture: new THREE.Texture(),
    origamiShape: i % 2 === 0 ? 'plane' : 'butterfly',
  }));

  director.play(cards, { holdDuration: 1.0, origamiShape: 'auto' });
  assert.equal(lastStack, 2); // 5 - 3 remaining backing sheets

  // Immediately at t=0 (before any renderer.render), pocket cards must track envStart (-4.8, -3.1, -5.0) at scale 0.28, NOT stale idle (0, -1.48, 0.2)
  assert.ok(
    director.activeOrigamis[0].card.group.position.distanceTo(envGroup.position) < 0.8,
    `Card 0 detached from incoming envelope at t=0: cardPos=${director.activeOrigamis[0].card.group.position.toArray()}`
  );
  assert.ok(
    Math.abs(director.activeOrigamis[0].card.group.scale.x - 0.28 * 0.62) < 0.01,
    `Card 0 scale mismatch with incoming envelope at t=0: scale=${director.activeOrigamis[0].card.group.scale.x}`
  );

  // Mid-intro envelope motion (without calling renderer.render): cards must remain tightly locked to envGroup
  director.masterTl.seek(0.45, false);
  director.update(900);
  assert.ok(
    director.activeOrigamis[0].card.group.position.distanceTo(envGroup.position) < 1.2,
    `Card 0 lagged behind moving envelope during intro: env=${envGroup.position.toArray()} card=${director.activeOrigamis[0].card.group.position.toArray()}`
  );

  for (let i = 0; i < cards.length; i++) {
    const tStart = director.masterTl.labels[`card_${i}`];
    const card = director.activeOrigamis[i].card;

    // Sample pocket emergence phase (p <= 0.44, dt in [0.08, 0.70]) -> must stay in bgScene and strictly parallel to bodyGroup at localZ ~ 0.028
    for (const dt of [0.08, 0.30, 0.55, 0.70]) {
      director.masterTl.seek(tStart + dt, false);
      director.update(1000 + i * 500 + dt * 100);
      assert.equal(
        dummyScene.fgContentGroup.children.includes(card.group),
        false,
        `Card ${i} promoted to fgContentGroup prematurely at dt=${dt}`
      );
      assert.equal(dummyScene.bgScene.children.includes(card.group), true);

      envGroup.updateMatrixWorld(true);
      const invMat = bodyGroup.matrixWorld.clone().invert();
      const localPos = card.group.position.clone().applyMatrix4(invMat);
      assert.ok(
        Math.abs(localPos.z - 0.028) < 1e-3,
        `Card ${i} drifted out of pocket plane Z at dt=${dt}: localZ=${localPos.z}`
      );

      // Card local Z-normal must align with bodyGroup local Z-normal (zero X/Y tilt inside pocket)
      const bodyQuat = new THREE.Quaternion();
      bodyGroup.matrixWorld.decompose(new THREE.Vector3(), bodyQuat, new THREE.Vector3());
      const cardNormal = new THREE.Vector3(0, 0, 1).applyQuaternion(card.group.quaternion);
      const envNormal = new THREE.Vector3(0, 0, 1).applyQuaternion(bodyQuat);
      assert.ok(
        cardNormal.dot(envNormal) > 0.9999,
        `Card ${i} tilted relative to pocket plane at dt=${dt}: dot=${cardNormal.dot(envNormal)}`
      );
    }

    // At p = 0.44 (dt ~ 0.712s), card bottom edge must clear the entire front pocket rim + picot border (localY > +0.85)
    director.masterTl.seek(tStart + 0.712, false);
    director.update(2000 + i * 500);
    envGroup.updateMatrixWorld(true);
    const localAtRim = card.group.position
      .clone()
      .applyMatrix4(bodyGroup.matrixWorld.clone().invert());
    const bottomLocalY = localAtRim.y - card.group.scale.y * (CARD_HEIGHT * 0.5);
    assert.ok(
      bottomLocalY > 0.85,
      `Card ${i} bottom did not clear pocket rim before air arc: bottomLocalY=${bottomLocalY}`
    );

    // Continuity across p = 0.44 -> p = 0.49 (rim exit into foreground Hermite arc + active breezeFlex)
    const posBeforeRim = card.group.position.clone();
    director.masterTl.seek(tStart + 0.80, false);
    director.update(2080 + i * 500);
    const posAfterRim = card.group.position.clone();
    assert.ok(
      posBeforeRim.distanceTo(posAfterRim) < 0.42,
      `Card ${i} jumped across rim handoff: dist=${posBeforeRim.distanceTo(posAfterRim)}`
    );
    assert.equal(
      dummyScene.fgContentGroup.children.includes(card.group),
      true,
      `Card ${i} should be in fgContentGroup once clear of pocket`
    );
    assert.ok(
      Math.abs(card.breezeFlex) > 0.05,
      `Card ${i} should have lively breezeFlex in mid-air emergence, got ${card.breezeFlex}`
    );

    // By showcase end (dt = 1.62s), card must be crisp flat true-color with zero pocketDim/breezeFlex
    director.masterTl.seek(tStart + 1.62, false);
    director.update(2500 + i * 500);
    assert.equal(card.pocketDim, 0);
    assert.equal(card.breezeFlex, 0);
    assert.equal(card.material.color.r, 0);
    assert.equal(card.material.emissiveIntensity, 1.0);
  }

  // OrigamiCard breezeFlex cleanly bends and restores flat stage 0
  const testCard = new OrigamiCard({ texture: cards[0].texture, shape: 'crane', index: 0 });
  testCard.breezeFlex = 0.8;
  assert.ok(Math.abs(testCard.positions[2]) > 0.001, 'breezeFlex should bend flat vertices');
  testCard.breezeFlex = 0;
  assert.ok(Math.abs(testCard.positions[2]) < 1e-6, 'breezeFlex=0 must restore exact flat geometry');
  testCard.dispose();

  director.resetToIdle();
  cards.forEach((c) => c.texture.dispose());
});

test('AnimationDirector transitions intro->extracting across repeated resetToIdle/play cycles and pauses cleanly when hidden', () => {
  const phaseEvents = [];
  const sceneTimes = [];
  const dummyScene = {
    camera: { fov: 42, aspect: 1.6 },
    bgScene: new THREE.Scene(),
    fgContentGroup: new THREE.Group(),
    cameraOffset: new THREE.Vector3(),
    cameraLookOffset: new THREE.Vector3(),
    cameraBreath: 1,
    dofAmount: 0,
    milkyWayIntensity: 0,
    update(t) {
      sceneTimes.push(t);
    },
    render() {},
  };
  const dummyEnvelope = {
    group: new THREE.Group(),
    bodyGroup: new THREE.Group(),
    setFlapOpen() {},
    setLetterStack() {},
    triggerExtractPulse() {},
    updateIdleMotion() {},
  };
  const dummyMeteor = {
    emitSparkleBurst() {},
    emitTrailDot() {},
    startShower() {},
    stopAndClear() {},
    spawnMeteor() {},
    update() {},
  };

  const director = new AnimationDirector({
    scene: dummyScene,
    envelope: dummyEnvelope,
    meteorShower: dummyMeteor,
    onPhaseChange: (phase) => phaseEvents.push(phase),
  });

  const tex = new THREE.Texture();
  for (let cycle = 0; cycle < 3; cycle++) {
    phaseEvents.length = 0;
    director.play([{ texture: tex, origamiShape: 'plane' }], { holdDuration: 1.0 });
    assert.equal(director.isPlaying, true);
    assert.deepEqual(phaseEvents, ['intro']);

    director.masterTl.seek(1.52, false);
    director.update(100 + cycle * 100);
    assert.ok(phaseEvents.includes('extracting'), `Cycle ${cycle} failed to reach extracting`);

    director.resetToIdle();
    assert.equal(director.isPlaying, false);
    assert.equal(phaseEvents[phaseEvents.length - 1], 'idle');
  }

  // Tab hidden pause must freeze masterTl and orbitTime without altering user isPaused,
  // and must not auto-resume if user already paused manually.
  director.play([{ texture: tex, origamiShape: 'butterfly' }], { holdDuration: 1.0 });
  director.update(500);
  const orbitBeforeHide = director.orbitTime;
  director.setHiddenPaused(true);
  assert.equal(director.isPaused, false);
  assert.equal(director.masterTl.paused(), true);
  director.update(550);
  assert.equal(director.orbitTime, orbitBeforeHide);

  director.setHiddenPaused(false);
  assert.equal(director.masterTl.paused(), false);

  director.pause();
  director.setHiddenPaused(true);
  director.setHiddenPaused(false);
  assert.equal(director.isPaused, true);
  assert.equal(director.masterTl.paused(), true);

  director.resetToIdle();
  tex.dispose();
});

test('AnimationDirector matches extracting card size/position/color with waiting card and removes waiting card when final card is drawn', () => {
  let waitingVisible = true;
  let stackCount = 3;
  const envGroup = new THREE.Group();
  const bodyGroup = new THREE.Group();
  envGroup.add(bodyGroup);

  const dummyScene = {
    camera: { fov: 42, aspect: 1.6 },
    bgScene: new THREE.Scene(),
    fgContentGroup: new THREE.Group(),
    cameraOffset: new THREE.Vector3(),
    cameraLookOffset: new THREE.Vector3(),
    cameraBreath: 1,
    dofAmount: 0,
    milkyWayIntensity: 0,
    update() {},
    render() {},
  };
  const dummyEnvelope = {
    group: envGroup,
    bodyGroup,
    setFlapOpen() {},
    setWaitingCardVisible(v) {
      waitingVisible = Boolean(v);
    },
    setLetterStack(n) {
      stackCount = n;
    },
    triggerExtractPulse() {},
    updateIdleMotion() {},
  };
  const dummyMeteor = {
    emitSparkleBurst() {},
    emitTrailDot() {},
    startShower() {},
    stopAndClear() {},
    spawnMeteor() {},
    update() {},
  };

  const director = new AnimationDirector({
    scene: dummyScene,
    envelope: dummyEnvelope,
    meteorShower: dummyMeteor,
  });

  const cards = [
    { texture: new THREE.Texture(), origamiShape: 'plane' },
    { texture: new THREE.Texture(), origamiShape: 'butterfly' },
  ];

  director.play(cards, { holdDuration: 1.0, origamiShape: 'auto' });
  assert.equal(waitingVisible, true);

  // When Card 0 starts extracting (not the final card), waiting card stays visible in the pocket
  const tCard0 = director.masterTl.labels.card_0;
  director.masterTl.seek(tCard0 + 0.001, false);
  director.update(1000);
  assert.equal(waitingVisible, true);

  // At extraction start (p ~ 0), Card 0 matches the waiting card's open Y position, scale, and 1:1 color
  envGroup.updateMatrixWorld(true);
  const localCard0 = director.activeOrigamis[0].card.group.position
    .clone()
    .applyMatrix4(bodyGroup.matrixWorld.clone().invert());
  assert.ok(Math.abs(localCard0.x) < 1e-3);
  assert.ok(Math.abs(localCard0.y - POCKET_CARD_OPEN_Y) < 1e-2);
  assert.ok(Math.abs(director.activeOrigamis[0].card.group.scale.x - POCKET_CARD_SCALE) < 0.02);
  assert.equal(director.activeOrigamis[0].card.material.color.r, 0);
  assert.equal(director.activeOrigamis[0].card.material.emissiveIntensity, 1.0);
  assert.ok(CARD_WIDTH * POCKET_CARD_SCALE > 1.7);

  // When final card (Card 1) starts extracting, waiting card is removed from the pocket
  const tCard1 = director.masterTl.labels.card_1;
  director.masterTl.seek(tCard1 + 0.05, false);
  director.update(2000);
  assert.equal(waitingVisible, false);
  assert.equal(stackCount, 0);

  // Resetting to idle restores the waiting card
  director.resetToIdle();
  assert.equal(waitingVisible, true);
  cards.forEach((c) => c.texture.dispose());
});
