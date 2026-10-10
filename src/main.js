import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import fontJson from './montserrat-800-italic.typeface.json';
import logoUrl from '../assets/logo.jpg';
import { initUI, pointer, reduced } from './ui.js';
import { makeEnvironment, damp } from './helpers.js';
import { buildHero } from './scenes/hero.js';
import { buildCarScene } from './scenes/car.js';
import { buildSiren, buildCross, buildGear, buildHouse } from './scenes/minis.js';
import { buildCoin } from './scenes/coin.js';

/*
 * Principe : UN SEUL canvas WebGL fixe, posé au-dessus de la page.
 * Chaque élément HTML [data-stage="..."] est une « fenêtre » : on y rend sa propre scène 3D
 * (scissor + viewport). Les objets défilent donc naturellement avec le contenu.
 */
const builders = {
  hero: buildHero,
  car: buildCarScene,
  siren: buildSiren,
  cross: buildCross,
  gear: buildGear,
  house: buildHouse,
  coin: buildCoin,
};

function start() {
  initUI();

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    if (!renderer.getContext()) throw new Error('no context');
  } catch (e) {
    document.documentElement.classList.add('no-webgl');
    console.warn('WebGL indisponible, affichage de secours.', e);
    return;
  }

  const dprCap = window.matchMedia('(pointer: coarse)').matches ? 1.75 : 2;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1;
  const canvas = renderer.domElement;
  canvas.id = 'gl';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);

  const env = makeEnvironment(renderer);
  const font = new FontLoader().parse(fontJson);

  const stages = [];
  document.querySelectorAll('[data-stage]').forEach((el) => {
    const build = builders[el.dataset.stage];
    if (!build) return;
    try {
      const st = build({ env, font, logoUrl, renderer });
      st.el = el;
      st.hoverEl = el.closest('.card') || el.closest('.join') || el;
      st.ctx = { pointer, reduced, hover: 0 };
      stages.push(st);
    } catch (err) {
      console.error('Scène 3D impossible :', el.dataset.stage, err);
    }
  });

  window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight));

  let last = performance.now() * 0.001;
  function frame(ms) {
    requestAnimationFrame(frame);
    if (document.hidden) return;
    const t = ms * 0.001;
    const dt = Math.min(0.05, Math.max(0.001, t - last));
    last = t;

    pointer.x = damp(pointer.x, pointer.tx, 6, dt);
    pointer.y = damp(pointer.y, pointer.ty, 6, dt);

    const vh = window.innerHeight;
    renderer.setScissorTest(false);
    renderer.clear();
    renderer.setScissorTest(true);

    for (const st of stages) {
      const r = st.el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh || r.width < 2 || r.height < 2) continue; // hors écran : on ne rend pas
      st.ctx.hover = st.hoverEl.matches(':hover') ? 1 : 0;
      st.camera.aspect = r.width / r.height;
      st.camera.updateProjectionMatrix();
      renderer.setViewport(r.left, vh - r.bottom, r.width, r.height);
      renderer.setScissor(r.left, vh - r.bottom, r.width, r.height);
      st.update(t, dt, st.ctx);
      renderer.render(st.scene, st.camera);
    }
  }
  requestAnimationFrame(frame);
}

start();
