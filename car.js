import * as THREE from 'three';
import { addStudioLights, makeChromeMat, makeLimeMat, makeStarGeometry, makeRock, makeBubbles, damp } from '../helpers.js';

function extrudeProfile(points, depth, bevel = 0.06) {
  const s = new THREE.Shape();
  points.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, {
    depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 6,
  });
  g.translate(0, 0, -depth / 2);
  return g;
}

function buildCar() {
  const car = new THREE.Group();

  const bodyMat = new THREE.MeshPhysicalMaterial({ color: 0x34323d, roughness: 0.24, metalness: 0.48, clearcoat: 1, clearcoatRoughness: 0.08 });
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x101a25, roughness: 0.12, metalness: 0.32, clearcoat: 1, transparent: true, opacity: 0.84 });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x151619, roughness: 0.92 });
  const chrome = makeChromeMat({ roughness: 0.12 });

  const body = new THREE.Mesh(extrudeProfile([
    [-2.2, 0.35], [-2.25, 0.75], [-2.0, 0.98], [-1.2, 1.05], [-0.75, 1.62],
    [0.45, 1.62], [1.25, 1.1], [2.0, 0.95], [2.25, 0.7], [2.2, 0.35],
  ], 1.5, 0.07), bodyMat);
  car.add(body);

  const glass = new THREE.Mesh(extrudeProfile([
    [-0.98, 1.1], [-0.64, 1.52], [0.4, 1.52], [1.06, 1.12],
  ], 1.78, 0), glassMat);
  car.add(glass);

  // bande chromée sur le bas de caisse
  const strip = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.07, 1.74), chrome);
  strip.position.set(0, 0.5, 0);
  car.add(strip);

  // roues
  const tireGeo = new THREE.CylinderGeometry(0.43, 0.43, 0.32, 40);
  const hubGeo = new THREE.CylinderGeometry(0.29, 0.29, 0.34, 32);
  const wheels = [];
  for (const sx of [-1.32, 1.32]) {
    for (const sz of [-0.86, 0.86]) {
      const w = new THREE.Group();
      const tire = new THREE.Mesh(tireGeo, tireMat);
      const hub = new THREE.Mesh(hubGeo, chrome);
      tire.rotation.x = hub.rotation.x = Math.PI / 2;
      w.add(tire, hub);
      const hubcap = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.35, 24), new THREE.MeshStandardMaterial({ color: 0x9ea4ad, metalness: 0.9, roughness: 0.22 }));
      hubcap.rotation.x = Math.PI / 2;
      w.add(hubcap);
      for (let i = 0; i < 8; i++) {
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.32, 0.06), chrome);
        spoke.position.y = 0.13; spoke.position.z = 0.17; spoke.rotation.z = i * Math.PI / 4; w.add(spoke);
      }
      w.position.set(sx, 0.43, sz);
      car.add(w);
      wheels.push(w);
    }
  }

  // feux
  const headMat = new THREE.MeshStandardMaterial({ color: 0xf3ffb0, emissive: 0xe0ff60, emissiveIntensity: 1.2 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0xff4d8d, emissive: 0xff2d7a, emissiveIntensity: 1.1 });
  for (const sz of [-0.5, 0.5]) {
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.4), headMat);
    h.position.set(2.3, 0.74, sz);
    car.add(h);
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.4), tailMat);
    t.position.set(-2.3, 0.76, sz);
    car.add(t);
  }
  // Détails de carrosserie : calandre, plaque, rétroviseurs, poignées et lignes de vitrage.
  const grilleMat = new THREE.MeshStandardMaterial({ color: 0x0c0e12, metalness: 0.35, roughness: 0.48 });
  const grille = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.24, 0.64), grilleMat);
  grille.position.set(2.28, 0.65, 0); car.add(grille);
  const plateMat = new THREE.MeshStandardMaterial({ color: 0xf1f1ec, roughness: 0.7 });
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.12, 0.42), plateMat);
  plate.position.set(2.34, 0.48, 0); car.add(plate);
  const mirrorMat = new THREE.MeshStandardMaterial({ color: 0x282832, metalness: 0.4, roughness: 0.25 });
  for (const side of [-1, 1]) {
    const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.13, 0.16), mirrorMat);
    mirror.position.set(0.65, 1.03, side * 0.91); car.add(mirror);
    for (const x of [-0.65, 0.45]) {
      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.035, 0.025), chrome);
      handle.position.set(x, 0.83, side * 0.78); car.add(handle);
    }
  }
  const cabinMat = new THREE.MeshStandardMaterial({ color: 0x171a20, roughness: 0.85 });
  for (const x of [-0.25, 0.45]) for (const z of [-0.38, 0.38]) {
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.28), cabinMat);
    seat.position.set(x, 1.05, z); seat.rotation.z = -0.08; car.add(seat);
  }
  const dash = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 1.1), cabinMat);
  dash.position.set(0.82, 1.03, 0); car.add(dash);
  return { car, wheels };
}

export function buildCarScene({ env }) {
  const scene = new THREE.Scene();
  scene.environment = env;
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  const camBase = new THREE.Vector3(6.2, 3.8, 10.2);
  camera.position.copy(camBase);
  camera.lookAt(0, 0.5, 0);
  addStudioLights(scene, { key: 2.6, rim: 80 });

  // plateau tournant
  const turntable = new THREE.Group();
  scene.add(turntable);
  const disc = new THREE.Mesh(
    new THREE.CylinderGeometry(3.4, 3.4, 0.25, 72),
    new THREE.MeshPhysicalMaterial({ color: 0xf8c8ea, roughness: 0.35, clearcoat: 1 }),
  );
  turntable.add(disc);
  const edge = new THREE.Mesh(new THREE.TorusGeometry(3.4, 0.055, 16, 120), makeChromeMat());
  edge.rotation.x = Math.PI / 2;
  edge.position.y = 0.125;
  turntable.add(edge);

  const { car } = buildCar();
  car.position.y = 0.125;
  turntable.add(car);

  // décor : rochers flottants, étoiles, bulles
  const r1 = makeRock({ height: 4.2, radius: 0.8, seed: 31, crystals: 3 });
  r1.position.set(-3.7, 0.8, -3.2);
  const r2 = makeRock({ height: 3, radius: 0.6, seed: 17, crystals: 0 });
  r2.position.set(3.9, 1.2, -4);
  scene.add(r1, r2);

  const starGeo = makeStarGeometry(0.5, 0.14, 0.13);
  const sA = new THREE.Mesh(starGeo, makeChromeMat({ roughness: 0.07 }));
  sA.position.set(-3.1, 3.6, 0.5);
  const sB = new THREE.Mesh(starGeo, makeLimeMat());
  sB.position.set(3.2, 3.1, 1.2);
  sB.scale.setScalar(0.7);
  scene.add(sA, sB);

  const bubbles = makeBubbles(12, { w: 9, h: 7, z: 1, zSpread: 5 });
  scene.add(bubbles.group);

  let yaw = 0;
  function update(t, dt, ctx) {
    const a = camera.aspect;
    const f = a < 1.2 ? 1.18 : 1;
    camera.position.copy(camBase).multiplyScalar(f);
    camera.lookAt(0, 0.5, 0);

    yaw = damp(yaw, ctx.pointer.x * 0.5, 3, dt);
    turntable.rotation.y = t * 0.32 + yaw;
    car.position.y = 0.125 + Math.sin(t * 1.6) * 0.012;
    r1.position.y = 0.8 + Math.sin(t * 0.6) * 0.14;
    r1.rotation.y += dt * 0.1;
    r2.position.y = 1.2 + Math.sin(t * 0.7 + 2) * 0.12;
    r2.rotation.y -= dt * 0.1;
    sA.rotation.y = t * 0.9;
    sB.rotation.y = -t * 1.1;
    sA.position.y = 3.6 + Math.sin(t) * 0.15;
    bubbles.update(t, dt, 7);
  }

  return { scene, camera, update };
}
