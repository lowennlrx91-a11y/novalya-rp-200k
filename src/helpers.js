import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

/* ---------- maths ---------- */
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
export const easeOutBack = (x) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};
export const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
const fract = (x) => x - Math.floor(x);
/** Bruit déterministe : mêmes entrées => même sortie (indispensable pour souder les coutures) */
export const hash = (a, b = 0, c = 0) => fract(Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453);

/* ---------- environnement (reflets) ---------- */
export function makeEnvironment(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  return tex;
}

/* ---------- éclairage de base commun aux scènes ---------- */
export function addStudioLights(scene, { key = 2.4, rim = 60, rimColor = 0x9b5cff } = {}) {
  scene.add(new THREE.AmbientLight(0xffffff, 0.45));
  const d = new THREE.DirectionalLight(0xffffff, key);
  d.position.set(4, 7, 6);
  scene.add(d);
  const r = new THREE.PointLight(rimColor, rim, 0, 2);
  r.position.set(-6, 3, -5);
  scene.add(r);
  const p = new THREE.PointLight(0xff8fd0, rim * 0.5, 0, 2);
  p.position.set(6, -3, 4);
  scene.add(p);
}

/* ---------- étoile à 4 branches (le « Nova » du nom) ---------- */
export function makeStarGeometry(R = 1, r = 0.26, depth = 0.18, points = 4) {
  const s = new THREE.Shape();
  for (let i = 0; i < points * 2; i++) {
    const a = (i * Math.PI) / points + Math.PI / 2;
    const rad = i % 2 ? r : R;
    const x = Math.cos(a) * rad, y = Math.sin(a) * rad;
    if (i === 0) s.moveTo(x, y); else s.lineTo(x, y);
  }
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, {
    depth, bevelEnabled: true, bevelThickness: depth * 0.35, bevelSize: R * 0.035, bevelSegments: 3,
  });
  g.center();
  return g;
}

export function makeChromeMat(extra = {}) {
  return new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.1, ...extra });
}
export function makeLimeMat() {
  return new THREE.MeshStandardMaterial({
    color: 0xc8f03c, emissive: 0x9bd000, emissiveIntensity: 0.55, roughness: 0.3, metalness: 0.1,
  });
}

/* ---------- rochers roses stratifiés (clin d'œil aux tours rocheuses de la référence) ---------- */
const ROCK_DEEP = new THREE.Color('#a8449a');
const ROCK_LIGHT = new THREE.Color('#f9b6da');

export function makeRockGeometry({ height = 3, radius = 0.8, seed = 1, top = 0.85, bottom = 0.4, segs = 7, rings = 7 } = {}) {
  let geo = new THREE.CylinderGeometry(radius * top, radius * bottom, height, segs, rings, false);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const k = Math.round((y / height + 0.5) * rings);
    const ang = Math.round(Math.atan2(x, z) * 10);
    const ringF = 0.8 + hash(seed, k) * 0.42;              // paliers (strates) d'un anneau à l'autre
    const noiseF = 1 + (hash(seed, k + 11, ang) - 0.5) * 0.28;
    x *= ringF * noiseF;
    z *= ringF * noiseF;
    if (Math.abs(x) + Math.abs(z) < 1e-4 && y > 0) y += height * 0.06 * hash(seed, 99); // sommet légèrement bombé
    pos.setXYZ(i, x, y, z);
  }
  geo = geo.toNonIndexed();
  const p = geo.attributes.position;
  const colors = new Float32Array(p.count * 3);
  const c = new THREE.Color();
  for (let f = 0; f < p.count; f += 3) {
    const yAvg = (p.getY(f) + p.getY(f + 1) + p.getY(f + 2)) / 3;
    const t = clamp(yAvg / height + 0.5, 0, 1);
    const band = Math.floor(t * rings) / rings;               // couleur par bande, pas de dégradé lisse
    c.copy(ROCK_DEEP).lerp(ROCK_LIGHT, band);
    c.offsetHSL(0, 0, (hash(seed, f, 5) - 0.5) * 0.05);
    for (let v = 0; v < 3; v++) { colors[(f + v) * 3] = c.r; colors[(f + v) * 3 + 1] = c.g; colors[(f + v) * 3 + 2] = c.b; }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  return geo;
}

const rockMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.82, metalness: 0 });

/** Rocher flottant + cristaux citron sur le dessus. Retourne un Group (origine = centre du rocher). */
export function makeRock(opts = {}) {
  const { height = 3, crystals = 0, seed = 1 } = opts;
  const g = new THREE.Group();
  g.add(new THREE.Mesh(makeRockGeometry(opts), rockMat));
  if (crystals) {
    const cg = new THREE.OctahedronGeometry(0.16, 0);
    const mat = makeLimeMat();
    for (let i = 0; i < crystals; i++) {
      const m = new THREE.Mesh(cg, mat);
      const a = hash(seed, i, 3) * Math.PI * 2;
      m.position.set(Math.cos(a) * 0.28, height / 2 + 0.12, Math.sin(a) * 0.28);
      m.scale.set(0.7, 1.4 + hash(seed, i, 8) * 1.2, 0.7);
      m.rotation.set((hash(seed, i, 1) - 0.5) * 0.5, a, (hash(seed, i, 2) - 0.5) * 0.5);
      g.add(m);
    }
  }
  return g;
}

/* ---------- nuages (sprites doux) ---------- */
let cloudTex = null;
export function getCloudTexture() {
  if (cloudTex) return cloudTex;
  const c = document.createElement('canvas');
  c.width = 256; c.height = 160;
  const g = c.getContext('2d');
  const blobs = [[128, 92, 62], [82, 98, 46], [176, 100, 48], [112, 66, 40], [152, 70, 38], [50, 108, 30], [208, 110, 30]];
  for (const [x, y, r] of blobs) {
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(255,255,255,0.95)');
    grd.addColorStop(0.55, 'rgba(255,255,255,0.55)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 256, 160);
  }
  cloudTex = new THREE.CanvasTexture(c);
  cloudTex.colorSpace = THREE.SRGBColorSpace;
  return cloudTex;
}

let glowTex = null;
export function getGlowTexture() {
  if (glowTex) return glowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.4, 'rgba(255,255,255,0.45)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  glowTex = new THREE.CanvasTexture(c);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  return glowTex;
}

/* ---------- bulles irisées qui montent ---------- */
export function makeBubbles(count, { w = 8, h = 6, z = 2, zSpread = 3 } = {}) {
  const group = new THREE.Group();
  const geo = new THREE.SphereGeometry(1, 28, 20);
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0, metalness: 0, transparent: true, opacity: 0.3,
    clearcoat: 1, iridescence: 1, iridescenceIOR: 1.35, envMapIntensity: 2.2, depthWrite: false,
  });
  const items = [];
  for (let i = 0; i < count; i++) {
    const m = new THREE.Mesh(geo, mat);
    const s = 0.08 + Math.pow(hash(i, 1), 2) * 0.3;
    m.scale.setScalar(s);
    const it = {
      m, s,
      x: (hash(i, 2) - 0.5) * w,
      y: (hash(i, 3) - 0.5) * h,
      z: z + (hash(i, 4) - 0.5) * zSpread,
      v: 0.15 + hash(i, 5) * 0.35,
      ph: hash(i, 6) * 6.28,
    };
    m.position.set(it.x, it.y, it.z);
    group.add(m);
    items.push(it);
  }
  function update(t, dt, hh = h) {
    for (const it of items) {
      it.y += it.v * dt;
      if (it.y > hh / 2 + 0.5) it.y = -hh / 2 - 0.5;
      it.m.position.set(it.x + Math.sin(t * 0.8 + it.ph) * 0.15, it.y, it.z);
    }
  }
  return { group, update, items, setArea(newW, newH) {
    for (const it of items) { it.x = (hash(items.indexOf(it), 2) - 0.5) * newW; }
  } };
}

/* ---------- petit décor de base pour les scènes de carte ---------- */
export function makeMini(env, { z = 9, fov = 30 } = {}) {
  const scene = new THREE.Scene();
  scene.environment = env;
  const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 100);
  camera.position.set(0, 0.3, z);
  camera.lookAt(0, 0, 0);
  addStudioLights(scene, { key: 2.2, rim: 50 });
  return { scene, camera };
}
