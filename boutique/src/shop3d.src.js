/* ==========================================================
   Boutique NovaLya — scène 3D du hero
   Trois pass métalliques (Boost 1 / Boost 3 / Boost 2) qui flottent,
   suivent la souris et se retournent quand on en ajoute un.
   Compilation :  npm run build:boutique   (→ boutique/shop3d.js)
   ========================================================== */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Shape, ExtrudeGeometry, MeshPhysicalMaterial,
  MeshBasicMaterial, PlaneGeometry, CanvasTexture, SRGBColorSpace, TorusGeometry, Points, BufferGeometry,
  Float32BufferAttribute, PointsMaterial, DirectionalLight, PointLight, AmbientLight,
  MathUtils, ACESFilmicToneMapping, PMREMGenerator, Color,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Les 3 pass : l'ordre est celui de l'événement « pass-spin » (boost1, boost3, boost2).
   Les ids correspondent aux types de pass de boutique/index.html (CONFIG.kinds). */
const TIERS = [
  { id: 'boost1', label: 'BOOST 1', base: '#a8d62a', ink: '#1d3300', pos: [-1.95, -0.35, -0.2], rotZ: 0.2,  scale: 0.84 },
  { id: 'boost3', label: 'BOOST 3', base: '#ffcf3f', ink: '#4a2a00', pos: [0, 0.15, 0.7],       rotZ: 0,    scale: 0.98 },
  { id: 'boost2', label: 'BOOST 2', base: '#8a63e8', ink: '#f6f0ff', pos: [1.95, -0.3, -0.35],  rotZ: -0.2, scale: 0.86 },
];

function roundedRect(w, h, r) {
  const s = new Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);       s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);   s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);       s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);           s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

/* Gravure du pass dessinée en 2D puis plaquée sur les deux faces. */
function faceTexture(tier, renderer) {
  const W = 512, H = 768;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const ink = tier.ink;

  g.clearRect(0, 0, W, H);
  g.strokeStyle = ink; g.globalAlpha = 0.55; g.lineWidth = 7;
  g.beginPath(); g.roundRect(26, 26, W - 52, H - 52, 34); g.stroke();
  g.globalAlpha = 1;

  g.fillStyle = ink; g.textAlign = 'center';
  g.font = '800 34px Montserrat, system-ui, sans-serif';
  g.fillText('NOVALYA RP', W / 2, 96);

  // étoile à quatre branches
  const cx = W / 2, cy = 290, R = 118, r = 30;
  g.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i - Math.PI / 2;
    const rad = i % 2 === 0 ? R : r;
    g.lineTo(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad);
  }
  g.closePath(); g.fill();

  g.font = '104px Anton, Impact, "Arial Narrow", sans-serif';
  g.fillText('PASS', W / 2, 520);
  g.font = '64px Anton, Impact, "Arial Narrow", sans-serif';
  g.globalAlpha = 0.9;
  g.fillText(tier.label, W / 2, 596);
  g.globalAlpha = 0.7;
  g.font = '700 24px Montserrat, system-ui, sans-serif';
  g.fillText('NOVA-LIFE AMBOISE', W / 2, 690);

  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return tex;
}

function buildPass(tier, renderer) {
  const group = new Group();
  const W = 2, H = 3, depth = 0.1;

  const geo = new ExtrudeGeometry(roundedRect(W, H, 0.26), {
    depth, curveSegments: 18, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 5,
  });
  geo.translate(0, 0, -depth / 2);
  const body = new Mesh(geo, new MeshPhysicalMaterial({
    color: tier.base, metalness: 1, roughness: 0.3, clearcoat: 0.55, clearcoatRoughness: 0.28,
  }));
  group.add(body);

  const tex = faceTexture(tier, renderer);
  const mat = new MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false });
  const zFace = depth / 2 + 0.05 + 0.003;
  const front = new Mesh(new PlaneGeometry(W * 0.98, H * 0.98), mat);
  front.position.z = zFace;
  const back = front.clone();
  back.rotation.y = Math.PI;
  back.position.z = -zFace;
  group.add(front, back);

  group.position.set(...tier.pos);
  group.rotation.z = tier.rotZ;
  group.scale.setScalar(tier.scale);
  return group;
}

function sparkleTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 64, 64);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

async function start(host) {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);

  // Les polices de la gravure doivent être chargées avant le dessin sur le canvas.
  try {
    await Promise.all([
      document.fonts.load('104px Anton'),
      document.fonts.load('800 34px Montserrat'),
      document.fonts.load('700 24px Montserrat'),
    ]);
  } catch (_) { /* repli sur Impact / system-ui */ }

  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 60);

  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  scene.add(new AmbientLight(0xffffff, 0.35));
  const key = new DirectionalLight(0xffffff, 2.2); key.position.set(3, 4, 6); scene.add(key);
  const violet = new PointLight(0x7b3ff2, 70, 0, 2); violet.position.set(-4.5, -2, 3.5); scene.add(violet);
  const lime = new PointLight(0xc8f03c, 45, 0, 2); lime.position.set(4.5, 3, 2.5); scene.add(lime);

  const rig = new Group();
  scene.add(rig);

  const passes = TIERS.map((t) => { const p = buildPass(t, renderer); rig.add(p); return p; });

  // anneaux « boost » derrière les pass
  const ringA = new Mesh(new TorusGeometry(2.9, 0.05, 20, 160), new MeshBasicMaterial({ color: 0xc8f03c, toneMapped: false }));
  ringA.position.z = -1.6; ringA.rotation.x = 1.05; ringA.rotation.y = 0.25;
  const ringB = new Mesh(new TorusGeometry(3.5, 0.035, 20, 160), new MeshBasicMaterial({ color: 0x9b5cff, toneMapped: false }));
  ringB.position.z = -2.1; ringB.rotation.x = 0.8; ringB.rotation.y = -0.45;
  rig.add(ringA, ringB);

  // étincelles : une couche blanche et une couche violette (visibles sur fond clair)
  const tex = sparkleTexture();
  function sparkleLayer(count, size, hex, opacity) {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const rad = 3.0 + Math.random() * 3.2;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = rad * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = rad * Math.sin(ph) * Math.sin(th) * 0.8;
      pos[i * 3 + 2] = rad * Math.cos(ph) - 1;
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(pos, 3));
    return new Points(g, new PointsMaterial({
      map: tex, size, transparent: true, opacity, depthWrite: false, color: new Color(hex), toneMapped: false,
    }));
  }
  const sparkles = new Group();
  sparkles.add(sparkleLayer(120, 0.2, 0xffffff, 1), sparkleLayer(70, 0.17, 0x7b3ff2, 0.85));
  scene.add(sparkles);

  /* ---------- taille ---------- */
  function resize() {
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // recule la caméra sur les cadres étroits pour garder les 3 pass visibles
    camera.position.set(0, 0.1, 11.6 / Math.min(1, camera.aspect * 1.05));
    camera.updateProjectionMatrix();
    if (reduced) renderer.render(scene, camera);
  }
  new ResizeObserver(resize).observe(host);
  resize();

  /* ---------- interactions ---------- */
  const target = { x: 0, y: 0 };
  window.addEventListener('pointermove', (e) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  const spinStart = [-1, -1, -1];
  const SPIN_MS = 1100;
  window.addEventListener('pass-spin', (e) => {
    if (reduced) return;
    const now = performance.now();
    const d = e.detail || {};
    if (d.tier === 'all') TIERS.forEach((_, i) => { spinStart[i] = now + i * 140; });
    else { const i = TIERS.findIndex((t) => t.id === d.tier); if (i >= 0) spinStart[i] = now; }
  });

  /* ---------- boucle (mise en pause hors écran / onglet masqué) ---------- */
  let visible = true, raf = 0;
  new IntersectionObserver((en) => { visible = en[0].isIntersecting; kick(); }, { threshold: 0 }).observe(host);
  document.addEventListener('visibilitychange', kick);

  const t0 = performance.now();
  function frame(now) {
    raf = 0;
    if (!visible || document.hidden) return;
    const t = (now - t0) / 1000;

    rig.rotation.y = MathUtils.lerp(rig.rotation.y, target.x * 0.42, 0.06);
    rig.rotation.x = MathUtils.lerp(rig.rotation.x, target.y * 0.22, 0.06);

    passes.forEach((p, i) => {
      const base = TIERS[i];
      p.position.y = base.pos[1] + Math.sin(t * 0.9 + i * 1.8) * 0.13;
      let spin = 0;
      if (spinStart[i] > 0) {
        const k = (now - spinStart[i]) / SPIN_MS;
        if (k >= 1) spinStart[i] = -1;
        else if (k > 0) { const e = 1 - Math.pow(1 - k, 3); spin = e * Math.PI * 2; }
      }
      p.rotation.y = Math.sin(t * 0.55 + i * 1.3) * 0.28 + spin;
    });

    ringA.rotation.z = t * 0.32;
    ringB.rotation.z = -t * 0.22;
    sparkles.rotation.y = t * 0.03;
    sparkles.rotation.x = Math.sin(t * 0.2) * 0.05;

    renderer.render(scene, camera);
    kick();
  }
  function kick() {
    if (reduced) return;
    if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
  }
  if (reduced) renderer.render(scene, camera); else kick();

  host.classList.add('is-ready');
}

const host = document.getElementById('hero3d');
if (host) start(host).catch((err) => { console.warn('3D indisponible :', err); host.classList.add('no-webgl'); });
