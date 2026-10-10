import * as THREE from 'three';
import { makeEnvironment } from '../src/helpers.js';
import { buildSiren, buildHouse } from '../src/scenes/minis.js';

// Remplace seulement les deux objets demandés sans modifier les autres scènes du site.
const entries = [
  ['[data-stage="siren-realistic"]', buildSiren],
  ['[data-stage="house-realistic"]', buildHouse],
];
const renderers = [];
for (const [selector, builder] of entries) {
  const host = document.querySelector(selector);
  if (!host) continue;
  const canvas = document.createElement('canvas');
  canvas.className = 'realistic-stage-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  const env = makeEnvironment(renderer);
  const stage = builder({ env, renderer });
  const pointer = { x: 0, y: 0 };
  const ctx = { pointer, hover: 0 };
  host.addEventListener('pointermove', event => {
    const r = host.getBoundingClientRect();
    pointer.x = ((event.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -(((event.clientY - r.top) / r.height) * 2 - 1);
  }, { passive: true });
  host.addEventListener('pointerleave', () => { pointer.x = 0; pointer.y = 0; });
  const resize = () => {
    const r = host.getBoundingClientRect();
    if (!r.width || !r.height) return;
    renderer.setSize(r.width, r.height, false);
    stage.camera.aspect = r.width / r.height;
    stage.camera.updateProjectionMatrix();
  };
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(host);
  window.addEventListener('resize', resize);
  resize();
  renderers.push({ host, renderer, stage, ctx, last: performance.now() * .001 });
}
function frame(ms) {
  requestAnimationFrame(frame);
  if (document.hidden) return;
  const now = ms * .001;
  for (const item of renderers) {
    const r = item.host.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight || r.width < 2 || r.height < 2) continue;
    const dt = Math.min(.05, Math.max(.001, now - item.last));
    item.last = now;
    item.ctx.hover = item.host.closest('.card')?.matches(':hover') ? 1 : 0;
    item.stage.update(now, dt, item.ctx);
    item.renderer.render(item.stage.scene, item.stage.camera);
  }
}
requestAnimationFrame(frame);
