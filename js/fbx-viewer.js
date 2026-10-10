import * as THREE from 'three';

const host = document.getElementById('fbx-viewer');
const canvas = document.getElementById('vehicle-canvas');

if (host && canvas) {
  const status = host.querySelector('.viewer-loading');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (error) {
    if (status) status.textContent = 'WebGL indisponible : active l’accélération matérielle dans Chrome.';
    console.error('[NovaLya RP WebGL]', error);
    throw error;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffeaff, 0x30203b, 2.5));
  const key = new THREE.DirectionalLight(0xffffff, 3.5);
  key.position.set(5, 8, 7);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffb9f5, 2.4);
  fill.position.set(-6, 3, -5);
  scene.add(fill);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100000);
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(5, 64),
    new THREE.MeshBasicMaterial({ color: 0x281a31, transparent: true, opacity: 0.65 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  scene.add(ground);

  let model = null, drag = false, lastX = 0, lastY = 0;
  let rotY = Math.PI * 0.18, rotX = 0, zoom = 1;
  let fitDistance = 7;

  function addDecal(obj, bounds) {
    const c = document.createElement('canvas');
    c.width = 1200; c.height = 340;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'rgba(18, 10, 29, 0.96)';
    ctx.beginPath(); ctx.roundRect(12, 12, 1176, 316, 28); ctx.fill();
    ctx.strokeStyle = '#dcb5ff'; ctx.lineWidth = 8; ctx.stroke();
    ctx.fillStyle = '#e7c6ff'; ctx.fillRect(30, 26, 1140, 10);
    ctx.fillStyle = '#f5c4f1'; ctx.fillRect(30, 304, 1140, 8);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff'; ctx.font = '900 italic 124px Arial';
    ctx.fillText('NOVALYA RP', 600, 160);
    ctx.fillStyle = '#dfb7ff'; ctx.font = '700 32px Arial';
    ctx.fillText('UNITÉ OFFICIELLE  •  ROLEPLAY', 600, 220);
    ctx.fillStyle = '#b9f66a'; ctx.font = '700 22px Arial';
    ctx.fillText('COMMUNAUTÉ • IMMERSION • RP', 600, 266);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.MeshBasicMaterial({
      map: tex, transparent: true, side: THREE.DoubleSide,
      depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2
    });

    // Put the brand decals slightly outside each side of the normalized vehicle.
    const w = Math.max(bounds.x * 0.36, 0.65);
    const h = Math.max(bounds.y * 0.22, 0.25);
    const z = Math.max(bounds.z * 0.505, 0.25);
    for (const side of [-1, 1]) {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      plane.position.set(-bounds.x * 0.02, -bounds.y * 0.04, side * z);
      plane.rotation.y = side > 0 ? 0 : Math.PI;
      plane.renderOrder = 5;
      obj.add(plane);
    }
  }

  function addVehicleDetails(object, size) {
    // Le FBX fourni reste le modèle principal ; ces pièces d'appoint ajoutent des détails
    // visibles au viewer sans modifier le fichier source.
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x111216, roughness: 0.88, metalness: 0.02 });
    const rubberSide = new THREE.MeshStandardMaterial({ color: 0x25262b, roughness: 0.7, metalness: 0.08 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xc9cbd2, metalness: 0.86, roughness: 0.24 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x171922, roughness: 0.72, metalness: 0.08 });
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x302d35, roughness: 0.92 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x898d98, metalness: 0.72, roughness: 0.3 });
    const wheelR = Math.max(0.25, Math.min(0.39, size.y * 0.25));
    const xPos = [-size.x * 0.31, size.x * 0.31];
    const zPos = [-size.z * 0.48, size.z * 0.48];
    const bottom = -size.y * 0.5;
    for (const x of xPos) for (const z of zPos) {
      const wheel = new THREE.Group();
      const tire = new THREE.Mesh(new THREE.TorusGeometry(wheelR, wheelR * 0.27, 14, 36), tireMat);
      tire.scale.set(1, 1.04, 1);
      wheel.add(tire);
      const sidewall = new THREE.Mesh(new THREE.CylinderGeometry(wheelR * 0.72, wheelR * 0.72, wheelR * 0.17, 32), rubberSide);
      sidewall.rotation.x = Math.PI / 2;
      wheel.add(sidewall);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(wheelR * 0.56, wheelR * 0.56, wheelR * 0.2, 32), rimMat);
      hub.rotation.x = Math.PI / 2;
      wheel.add(hub);
      const center = new THREE.Mesh(new THREE.CylinderGeometry(wheelR * 0.18, wheelR * 0.18, wheelR * 0.22, 20), darkMat);
      center.rotation.x = Math.PI / 2;
      wheel.add(center);
      for (let i = 0; i < 8; i++) {
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(wheelR * 0.11, wheelR * 0.72, wheelR * 0.08), trimMat);
        spoke.position.y = wheelR * 0.34;
        spoke.rotation.z = i * Math.PI / 4;
        spoke.position.z = wheelR * 0.12;
        wheel.add(spoke);
      }
      wheel.position.set(x, bottom + wheelR * 1.05, z);
      object.add(wheel);
    }

    // Habitacle sombre, sièges, tableau de bord et volant : volontairement placés sous la verrière.
    const cabin = new THREE.Group();
    const seatGeo = new THREE.BoxGeometry(size.x * 0.13, size.y * 0.23, size.z * 0.22);
    for (const x of [-size.x * 0.07, size.x * 0.14]) {
      for (const z of [-size.z * 0.2, size.z * 0.2]) {
        const cushion = new THREE.Mesh(new THREE.BoxGeometry(size.x * 0.14, size.y * 0.075, size.z * 0.22), seatMat);
        cushion.position.set(x, -size.y * 0.04, z);
        cabin.add(cushion);
        const back = new THREE.Mesh(seatGeo, seatMat);
        back.position.set(x - size.x * 0.035, size.y * 0.065, z);
        back.rotation.z = -0.08;
        cabin.add(back);
      }
    }
    const dash = new THREE.Mesh(new THREE.BoxGeometry(size.x * 0.11, size.y * 0.075, size.z * 0.72), darkMat);
    dash.position.set(size.x * 0.23, size.y * 0.015, 0);
    cabin.add(dash);
    const console = new THREE.Mesh(new THREE.BoxGeometry(size.x * 0.22, size.y * 0.055, size.z * 0.13), trimMat);
    console.position.set(size.x * 0.02, -size.y * 0.005, 0);
    cabin.add(console);
    const steering = new THREE.Mesh(new THREE.TorusGeometry(size.y * 0.105, size.y * 0.018, 8, 24), darkMat);
    steering.position.set(size.x * 0.17, size.y * 0.09, size.z * 0.19);
    steering.rotation.y = Math.PI / 2;
    cabin.add(steering);
    object.add(cabin);

    // Rétroviseurs et plaques discrètes.
    for (const side of [-1, 1]) {
      const mirrorStem = new THREE.Mesh(new THREE.BoxGeometry(size.x * 0.035, size.y * 0.025, size.z * 0.08), trimMat);
      mirrorStem.position.set(size.x * 0.17, size.y * 0.12, side * size.z * 0.47);
      object.add(mirrorStem);
    }
    const plateMat = new THREE.MeshStandardMaterial({ color: 0xf1f0ec, roughness: 0.6 });
    const plate = new THREE.Mesh(new THREE.BoxGeometry(size.x * 0.12, size.y * 0.07, size.z * 0.012), plateMat);
    plate.position.set(size.x * 0.505, -size.y * 0.2, 0);
    object.add(plate);
  }

  // Mascotte NovaLya RP : renard-loup violet, formes arrondies et détails en relief.
  function buildMascot() {
    const mascot = new THREE.Group();
    mascot.userData.proceduralAudi = true; // évite les accessoires propres aux véhicules
    const fur = new THREE.MeshStandardMaterial({ color: 0x7046a8, roughness: .72 });
    const furLight = new THREE.MeshStandardMaterial({ color: 0xa985d7, roughness: .68 });
    const cream = new THREE.MeshStandardMaterial({ color: 0xf4eafa, roughness: .78 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x241833, roughness: .5 });
    const pink = new THREE.MeshStandardMaterial({ color: 0xf08acb, roughness: .5 });
    const lime = new THREE.MeshStandardMaterial({ color: 0xc5f36b, emissive: 0x263d08, emissiveIntensity: .22, roughness: .35 });
    const eye = new THREE.MeshStandardMaterial({ color: 0x17121f, roughness: .22 });
    function ellipsoid(parent, mat, pos, scale, seg=32) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(1, seg, Math.max(16, Math.floor(seg*.65))), mat);
      m.position.set(...pos); m.scale.set(...scale); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
    }
    function cone(parent, mat, pos, radius, height, rotZ=0) {
      const m = new THREE.Mesh(new THREE.ConeGeometry(radius, height, 32), mat);
      m.position.set(...pos); m.rotation.z = rotZ; m.castShadow = true; parent.add(m); return m;
    }
    // Jambes et grandes chaussures, correctement posées au sol.
    ellipsoid(mascot, fur, [-.38,-.92,0], [.22,.42,.23]);
    ellipsoid(mascot, fur, [.38,-.92,0], [.22,.42,.23]);
    ellipsoid(mascot, dark, [-.4,-1.22,.1], [.34,.16,.4]);
    ellipsoid(mascot, dark, [.4,-1.22,.1], [.34,.16,.4]);
    // Corps, ventre clair et veste avec médaillon NovaLya.
    ellipsoid(mascot, fur, [0,-.18,0], [.72,.86,.48], 40);
    ellipsoid(mascot, cream, [0,-.28,.405], [.43,.57,.12], 32);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(.27,.055,12,48), lime);
    collar.position.set(0,.35,.38); collar.rotation.x = .18; mascot.add(collar);
    const badge = new THREE.Mesh(new THREE.CylinderGeometry(.17,.17,.055,48), lime);
    badge.rotation.x = Math.PI/2; badge.position.set(0,-.03,.53); mascot.add(badge);
    const star = new THREE.Mesh(new THREE.OctahedronGeometry(.105,1), dark);
    star.position.set(0,-.03,.575); mascot.add(star);
    // Bras légèrement écartés pour une silhouette lisible.
    const leftArm = ellipsoid(mascot, fur, [-.76,-.12,0], [.22,.55,.23]); leftArm.rotation.z = -.32;
    const rightArm = ellipsoid(mascot, fur, [.76,-.12,0], [.22,.55,.23]); rightArm.rotation.z = .32;
    ellipsoid(mascot, cream, [-.83,-.43,.04], [.19,.18,.2]);
    ellipsoid(mascot, cream, [.83,-.43,.04], [.19,.18,.2]);
    // Tête large, joues, museau et oreilles de renard.
    ellipsoid(mascot, fur, [0,.88,0], [.83,.73,.62], 48);
    cone(mascot, fur, [-.52,1.53,-.02], .31,.83,-.22);
    cone(mascot, fur, [.52,1.53,-.02], .31,.83,.22);
    cone(mascot, pink, [-.52,1.53,.19], .16,.56,-.22);
    cone(mascot, pink, [.52,1.53,.19], .16,.56,.22);
    ellipsoid(mascot, cream, [-.42,.65,.46], [.3,.25,.19]);
    ellipsoid(mascot, cream, [.42,.65,.46], [.3,.25,.19]);
    ellipsoid(mascot, cream, [0,.55,.53], [.36,.23,.2]);
    ellipsoid(mascot, dark, [0,.68,.715], [.12,.085,.075]);
    // Yeux brillants et sourcils doux.
    ellipsoid(mascot, cream, [-.32,1.02,.52], [.19,.22,.12]);
    ellipsoid(mascot, cream, [.32,1.02,.52], [.19,.22,.12]);
    ellipsoid(mascot, eye, [-.29,1.01,.625], [.09,.14,.055]);
    ellipsoid(mascot, eye, [.29,1.01,.625], [.09,.14,.055]);
    ellipsoid(mascot, cream, [-.315,1.07,.67], [.035,.045,.022], 16);
    ellipsoid(mascot, cream, [.265,1.07,.67], [.035,.045,.022], 16);
    const smile = new THREE.Mesh(new THREE.TorusGeometry(.15,.022,8,24,Math.PI), dark);
    smile.position.set(0,.47,.704); smile.rotation.z=Math.PI; mascot.add(smile);
    // Queue touffue visible derrière l'épaule droite.
    const tail = ellipsoid(mascot, furLight, [.78,-.48,-.25], [.28,.58,.26]); tail.rotation.z=-.68;
    const tailTip = ellipsoid(mascot, cream, [1.02,-.78,-.24], [.2,.22,.19]); tailTip.rotation.z=-.55;
    // Petits détails de fourrure sur les joues.
    for (const side of [-1,1]) {
      for (let i=0;i<3;i++) {
        const tuft = cone(mascot, furLight, [side*(.64+i*.025),.48-i*.11,.36], .075,.22, side*.5);
        tuft.rotation.x = -.2;
      }
    }
    mascot.scale.setScalar(1.05);
    return mascot;
  }

  function fitCamera(object) {
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    if (![size.x, size.y, size.z].every(Number.isFinite) ||
        Math.max(size.x, size.y, size.z) < 0.00001) {
      throw new Error('Le fichier FBX ne contient pas de géométrie visible.');
    }

    // Center and normalize the vehicle to make camera framing independent of FBX units.
    object.position.sub(center);
    const maxDim = Math.max(size.x, size.y, size.z);
    object.scale.setScalar(4.8 / maxDim);
    object.updateMatrixWorld(true);

    const normalizedBox = new THREE.Box3().setFromObject(object);
    const normalizedSize = normalizedBox.getSize(new THREE.Vector3());
    const normalizedCenter = normalizedBox.getCenter(new THREE.Vector3());
    object.position.sub(normalizedCenter);
    object.updateMatrixWorld(true);

    const sphere = new THREE.Sphere();
    new THREE.Box3().setFromObject(object).getBoundingSphere(sphere);
    fitDistance = Math.max(sphere.radius / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2)) * 1.12, 4.5);
    camera.near = Math.max(0.01, fitDistance / 1000);
    camera.far = fitDistance * 100;
    camera.updateProjectionMatrix();
    ground.scale.setScalar(Math.max(normalizedSize.x, normalizedSize.z) * 0.9);
    ground.position.y = -normalizedSize.y * 0.53;
    if (!object.userData.proceduralAudi) addVehicleDetails(object, normalizedSize);
    // Le modèle procédural possède ses propres marquages collés à la carrosserie.
    // Le grand décalque générique ne sert qu'aux éventuels modèles FBX importés.
    if (!object.userData.proceduralAudi) addDecal(object, normalizedSize);
  }

  function showError(message) {
    if (status) {
      status.textContent = message;
      status.style.opacity = '1';
      status.style.color = '#fff';
    }
    console.error('[NovaLya RP FBX]', message);
  }

  // Modèle Audi sportif créé en géométrie 3D détaillée, avec finitions et livrée NovaLya RP.
  try {
    model = buildMascot();
    fitCamera(model);
    scene.add(model);
    host.classList.add('loaded');
    if (status) status.textContent = 'Mascotte NovaLya RP chargée';
  } catch (error) {
    model = null;
    showError('Impossible de construire la mascotte 3D.');
    console.error(error);
  }

  function resize() {
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(host);
  window.addEventListener('resize', resize);
  resize();

  canvas.addEventListener('pointerdown', e => {
    drag = true; lastX = e.clientX; lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', e => {
    if (!drag) return;
    rotY += (e.clientX - lastX) * 0.009;
    rotX = THREE.MathUtils.clamp(rotX + (e.clientY - lastY) * 0.004, -0.35, 0.35);
    lastX = e.clientX; lastY = e.clientY;
  });
  const stopDrag = () => { drag = false; };
  canvas.addEventListener('pointerup', stopDrag);
  canvas.addEventListener('pointercancel', stopDrag);
  canvas.addEventListener('wheel', e => {
    zoom = THREE.MathUtils.clamp(zoom + e.deltaY * -0.001, 0.65, 1.7);
    e.preventDefault();
  }, { passive: false });

  function frame() {
    requestAnimationFrame(frame);
    if (model) {
      model.rotation.y = rotY;
      model.rotation.x = rotX;
      const d = fitDistance / zoom;
      camera.position.set(Math.sin(0.55) * d, d * 0.28, Math.cos(0.55) * d);
      camera.lookAt(0, 0, 0);
    }
    renderer.render(scene, camera);
  }
  frame();
}
