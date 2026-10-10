import * as THREE from 'three';
import { addStudioLights, makeChromeMat, makeLimeMat, makeStarGeometry, damp, hash } from '../helpers.js';

export function buildCoin({ env, logoUrl, renderer }) {
  const scene = new THREE.Scene();
  scene.environment = env;
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, 9.6);
  addStudioLights(scene, { key: 2.4, rim: 110, rimColor: 0xa45cff });

  // la texture est embarquée en data-URL : fonctionne même en ouvrant index.html en double-clic
  const tex = new THREE.TextureLoader().load(logoUrl);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  const R = 1.9, T = 0.28;
  const coin = new THREE.Group();
  scene.add(coin);

  const faceMat = new THREE.MeshStandardMaterial({
    map: tex, roughness: 0.4, metalness: 0.1, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.55,
  });
  const front = new THREE.Mesh(new THREE.CircleGeometry(R - 0.02, 96), faceMat);
  front.position.z = T / 2 + 0.002;
  const back = new THREE.Mesh(new THREE.CircleGeometry(R - 0.02, 96), faceMat);
  back.rotation.y = Math.PI;
  back.position.z = -T / 2 - 0.002;
  const side = new THREE.Mesh(new THREE.CylinderGeometry(R, R, T, 96, 1, true), makeChromeMat({ roughness: 0.12 }));
  side.rotation.x = Math.PI / 2;
  const rimMat = makeChromeMat({ roughness: 0.08 });
  const rimF = new THREE.Mesh(new THREE.TorusGeometry(R, 0.075, 20, 120), rimMat);
  rimF.position.z = T / 2;
  const rimB = rimF.clone();
  rimB.position.z = -T / 2;
  coin.add(front, back, side, rimF, rimB);

  // étoiles en orbite
  const orbit = new THREE.Group();
  scene.add(orbit);
  const starGeo = makeStarGeometry(0.4, 0.11, 0.1);
  const mats = [makeChromeMat({ roughness: 0.07 }), makeLimeMat(), makeChromeMat({ roughness: 0.07 }), makeLimeMat(), makeChromeMat({ roughness: 0.07 })];
  const stars = mats.map((m, i) => {
    const s = new THREE.Mesh(starGeo, m);
    s.scale.setScalar(0.55 + hash(i, 1) * 0.6);
    orbit.add(s);
    return { s, a: (i / mats.length) * Math.PI * 2, r: 3.0 + hash(i, 2) * 0.7, y: (hash(i, 3) - 0.5) * 2.4 };
  });

  let ry = 0, rx = 0, spinBoost = 0, spin = 0;
  function update(t, dt, ctx) {
    spinBoost = damp(spinBoost, ctx.hover, 4, dt);
    spin += dt * (0.55 + spinBoost * 1.6);
    ry = damp(ry, ctx.pointer.x * 0.5, 3, dt);
    rx = damp(rx, -ctx.pointer.y * 0.3, 3, dt);
    coin.rotation.set(rx, spin * 0.9 + ry, Math.sin(t * 0.6) * 0.06);
    coin.position.y = Math.sin(t * 1.1) * 0.12;
    orbit.rotation.y = t * 0.35;
    stars.forEach((st, i) => {
      st.s.position.set(Math.cos(st.a) * st.r, st.y + Math.sin(t + i) * 0.15, Math.sin(st.a) * st.r);
      st.s.rotation.y = t * 1.2 + i;
    });
  }

  return { scene, camera, update };
}
