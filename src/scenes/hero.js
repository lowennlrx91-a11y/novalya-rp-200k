import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import {
  clamp, damp, easeOutBack, easeOutCubic, hash, addStudioLights, makeStarGeometry, makeChromeMat,
  makeLimeMat, makeRock, getCloudTexture, getGlowTexture, makeBubbles,
} from '../helpers.js';

/* ------------------------------------------------------------------ */
/*  Texte 3D : « NovaLya / RP / NOVA-LIFE AMBOISE » comme sur le logo   */
/* ------------------------------------------------------------------ */
function makeToneMaterials() {
  const side = (hex) => new THREE.MeshStandardMaterial({ color: hex, roughness: 0.38, metalness: 0.25 });
  return {
    white: [
      new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08 }),
      side(0x3b1670),
    ],
    violet: [
      new THREE.MeshPhysicalMaterial({
        color: 0x8f45ff, emissive: 0x4a14c0, emissiveIntensity: 0.35, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08,
      }),
      side(0x2a0f5c),
    ],
  };
}

function buildLogoText(font) {
  const group = new THREE.Group();
  const letters = [];
  const mats = makeToneMaterials();
  const unit = 1 / font.data.resolution;
  const adv = (ch) => (font.data.glyphs[ch] ? font.data.glyphs[ch].ha * unit : 0.5);

  /** Ajoute une ligne de lettres (une géométrie par lettre pour pouvoir les animer une à une). */
  function addLine(parts, size, baselineY, tracking = 0) {
    const lineW = parts.reduce((w, p) => w + [...p.text].reduce((a, ch) => a + adv(ch) * size + tracking, 0), 0) - tracking;
    let pen = -lineW / 2;
    let tallest = 0;
    for (const part of parts) {
      for (const ch of part.text) {
        if (ch !== ' ') {
          const geo = new TextGeometry(ch, {
            font, size, depth: size * 0.34, curveSegments: 10,
            bevelEnabled: true, bevelThickness: size * 0.04, bevelSize: size * 0.025, bevelOffset: 0, bevelSegments: 4,
          });
          geo.computeBoundingBox();
          const c = new THREE.Vector3();
          geo.boundingBox.getCenter(c);
          geo.translate(-c.x, -c.y, -c.z);          // pivot au centre de la lettre
          const mesh = new THREE.Mesh(geo, mats[part.tone]);
          mesh.position.set(pen + c.x, baselineY + c.y, 0);
          group.add(mesh);
          letters.push({ mesh, baseX: mesh.position.x, baseY: mesh.position.y, i: letters.length, size });
          tallest = Math.max(tallest, size);
        }
        pen += adv(ch) * size + tracking;
      }
    }
    return lineW;
  }

  const w1 = addLine([{ text: 'Nova', tone: 'white' }, { text: 'Lya', tone: 'violet' }], 1, 0.1);
  addLine([{ text: 'R', tone: 'white' }, { text: 'P', tone: 'violet' }], 1.25, -1.28);
  addLine([{ text: 'NOVA-LIFE AMBOISE', tone: 'white' }], 0.2, -1.78, 0.07);

  // délais d'apparition : ligne 1 puis RP puis sous-titre
  letters.forEach((L, idx) => { L.delay = 0.35 + idx * 0.075; });
  return { group, letters, width: w1 };
}

/* ------------------------------------------------------------------ */
/*  Scène                                                              */
/* ------------------------------------------------------------------ */
export function buildHero({ env, font }) {
  const scene = new THREE.Scene();
  scene.environment = env;
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 120);
  const CAM_Z = 16;
  camera.position.set(0, 0, CAM_Z);
  addStudioLights(scene, { key: 2.6, rim: 90 });

  const visH = 2 * CAM_Z * Math.tan(THREE.MathUtils.degToRad(16));

  /* --- logo 3D --- */
  const text = buildLogoText(font);
  const logo = new THREE.Group();          // groupe positionné / mis à l'échelle selon l'écran
  logo.add(text.group);
  scene.add(logo);

  // halo violet derrière le texte pour le détacher du fond pastel
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: getGlowTexture(), color: 0xa45cff, transparent: true, opacity: 0.32, depthWrite: false,
  }));
  glow.scale.set(9, 6.4, 1);
  glow.position.set(0, -0.2, -1.2);
  logo.add(glow);

  // anneau chromé qui orbite autour du logo, avec une étoile dessus
  const tilt = new THREE.Group();
  tilt.rotation.set(1.2, 0.08, 0.3);
  tilt.position.set(0, -0.15, 0);
  const spin = new THREE.Group();
  tilt.add(spin);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.05, 0.045, 20, 160), makeChromeMat());
  spin.add(ring);
  const ringStar = new THREE.Mesh(makeStarGeometry(0.42, 0.11, 0.1), makeChromeMat({ roughness: 0.06 }));
  ringStar.position.set(3.05, 0, 0);
  spin.add(ringStar);
  const ringStar2 = new THREE.Mesh(makeStarGeometry(0.26, 0.07, 0.08), makeLimeMat());
  ringStar2.position.set(-3.05, 0, 0);
  spin.add(ringStar2);
  logo.add(tilt);

  /* --- rochers flottants --- */
  const rockSpecs = {
    desk: [
      { nx: 0.42, ny: -0.3, z: -4, h: 5.0, r: 1.15, seed: 3, crystals: 4 },
      { nx: 0.24, ny: -0.4, z: -2.2, h: 3.2, r: 0.9, seed: 8, crystals: 2 },
      { nx: 0.47, ny: 0.22, z: -7, h: 3.4, r: 0.8, seed: 5, crystals: 0 },
      { nx: 0.05, ny: -0.44, z: -7, h: 3.1, r: 0.8, seed: 12, crystals: 0 },
      { nx: 0.14, ny: 0.34, z: -9, h: 2.4, r: 0.6, seed: 21, crystals: 0 },
    ],
    mob: [
      { nx: -0.4, ny: 0.3, z: -5, h: 3.2, r: 0.6, seed: 3, crystals: 3 },
      { nx: 0.42, ny: 0.1, z: -4, h: 3.6, r: 0.62, seed: 8, crystals: 2 },
      { nx: -0.25, ny: 0.02, z: -8, h: 2.2, r: 0.4, seed: 5, crystals: 0 },
    ],
  };
  const rocks = [];
  function rebuildRocks(kind) {
    rocks.forEach((r) => scene.remove(r.g));
    rocks.length = 0;
    rockSpecs[kind].forEach((s, i) => {
      const g = makeRock({ height: s.h, radius: s.r, seed: s.seed, crystals: s.crystals });
      g.rotation.y = hash(s.seed, 1) * 6;
      scene.add(g);
      rocks.push({ g, s, delay: 0.1 + i * 0.16 });
    });
  }

  /* --- nuages --- */
  const clouds = [];
  const cloudMat = (color, opacity) => new THREE.SpriteMaterial({ map: getCloudTexture(), color, transparent: true, opacity, depthWrite: false });
  for (let i = 0; i < 9; i++) {
    const sp = new THREE.Sprite(cloudMat(i % 3 === 1 ? 0xffd2ee : 0xffffff, 0.55 + hash(i, 1) * 0.3));
    const scale = 8 + hash(i, 2) * 7;
    sp.scale.set(scale, scale * 0.62, 1);
    sp.position.set((hash(i, 3) - 0.5) * 36, (hash(i, 4) - 0.5) * 12, -10 - hash(i, 5) * 6);
    scene.add(sp);
    clouds.push({ sp, v: 0.08 + hash(i, 6) * 0.12 });
  }

  /* --- étoiles flottantes --- */
  const starGeo = makeStarGeometry(0.55, 0.15, 0.14);
  const chrome = makeChromeMat({ roughness: 0.07 });
  const lime = makeLimeMat();
  const stars = [
    { nx: -0.02, ny: 0.34, z: 1, s: 1.0, mat: chrome },
    { nx: 0.14, ny: -0.3, z: 2, s: 0.7, mat: lime },
    { nx: 0.45, ny: 0.36, z: 0, s: 0.8, mat: chrome },
    { nx: -0.3, ny: -0.12, z: -1, s: 0.55, mat: lime },
    { nx: 0.36, ny: -0.02, z: 3, s: 0.45, mat: chrome },
  ].map((s, i) => {
    const m = new THREE.Mesh(starGeo, s.mat);
    scene.add(m);
    return { ...s, m, ph: i * 1.7 };
  });

  /* --- bulles --- */
  const bubbles = makeBubbles(22, { w: 22, h: visH * 1.15, z: 2, zSpread: 6 });
  scene.add(bubbles.group);

  /* --- mise en page responsive --- */
  let lastAspect = 0, kind = 'desk', W = 16, k = 1, desktop = true;
  function layout(aspect) {
    lastAspect = aspect;
    W = visH * aspect;
    // même règle que la media query CSS « mobile » (max-width: 900px), (max-aspect-ratio: 1/1)
    desktop = window.innerWidth > 900 && window.innerWidth > window.innerHeight;
    const wanted = desktop ? 'desk' : 'mob';
    if (wanted !== kind || rocks.length === 0) { kind = wanted; rebuildRocks(kind); }
    const targetW = desktop ? W * 0.4 : W * 0.84;
    const s = targetW / text.width;
    logo.scale.setScalar(s);
    logo.userData.base = desktop ? new THREE.Vector3(W * 0.25, visH * 0.05, 0) : new THREE.Vector3(0, visH * 0.205, 0);
    k = desktop ? visH / 9.18 : clamp(W / 7, 0.45, 1);
    rocks.forEach(({ g, s: sp }) => {
      g.scale.setScalar(k);
      g.userData.base = new THREE.Vector3(sp.nx * W, sp.ny * visH, sp.z);
    });
    stars.forEach((st) => {
      st.m.scale.setScalar(st.s * (desktop ? 1 : 0.7));
      const nx = desktop ? st.nx : clamp(st.nx * 1.6, -0.42, 0.42);
      const ny = desktop ? st.ny : clamp(st.ny + 0.12, -0.05, 0.4);
      st.base = new THREE.Vector3(nx * W, ny * visH, st.z);
    });
  }

  /* --- boucle --- */
  let t0 = null;
  let rx = 0, ry = 0;
  function update(t, dt, ctx) {
    if (camera.aspect !== lastAspect) layout(camera.aspect);
    if (t0 === null) t0 = t - (ctx.reduced ? 10 : 0);
    const lt = t - t0;
    const px = ctx.pointer.x, py = ctx.pointer.y;

    // orientation du logo selon la souris
    ry = damp(ry, px * 0.38, 4, dt);
    rx = damp(rx, -py * 0.2, 4, dt);
    const base = logo.userData.base;
    logo.position.set(base.x + px * 0.18, base.y + Math.sin(t * 0.7) * 0.05, 0);
    logo.rotation.set(rx, ry, 0);

    // entrée des lettres : chute + rotation + rebond, puis flottement continu
    for (const L of text.letters) {
      const p = clamp((lt - L.delay) / 1.0, 0, 1);
      const e = easeOutBack(p);
      L.mesh.visible = p > 0;
      L.mesh.position.y = L.baseY + (1 - e) * 6.5 + Math.sin(t * 1.3 + L.i * 0.55) * 0.045 * p * (L.size > 0.5 ? 1 : 0.4);
      L.mesh.position.x = L.baseX;
      L.mesh.rotation.x = (1 - e) * -2.6;
      L.mesh.rotation.y = Math.sin(t * 0.9 + L.i * 0.5) * 0.09 * p;
      L.mesh.scale.setScalar(0.25 + 0.75 * e);
    }

    // anneau et étoiles
    spin.rotation.z = t * 0.45;
    ringStar.rotation.y = t * 1.4;
    ringStar2.rotation.y = -t * 1.1;

    // rochers : montée depuis le bas + flottement + parallaxe
    for (const r of rocks) {
      const e = easeOutCubic(clamp((lt - r.delay) / 1.6, 0, 1));
      const b = r.g.userData.base;
      const par = 0.5 + (r.s.z + 10) * -0.03; // les plus lointains bougent moins
      r.g.position.set(
        b.x + px * par * 0.5,
        b.y - (1 - e) * 7 * k + Math.sin(t * 0.55 + r.s.seed) * 0.14,
        b.z,
      );
      r.g.rotation.y += dt * 0.08;
      r.g.rotation.z = Math.sin(t * 0.4 + r.s.seed) * 0.03;
    }

    // nuages
    const limit = W * 1.1 + 6;
    for (const c of clouds) {
      c.sp.position.x += c.v * dt;
      if (c.sp.position.x > limit) c.sp.position.x = -limit;
    }

    // étoiles
    for (const st of stars) {
      st.m.position.set(st.base.x + px * 0.35, st.base.y + Math.sin(t * 0.9 + st.ph) * 0.18, st.base.z);
      st.m.rotation.y = t * 0.8 + st.ph;
      st.m.rotation.z = Math.sin(t * 0.5 + st.ph) * 0.3;
    }

    bubbles.update(t, dt, visH * 1.15);
  }

  return { scene, camera, update };
}
