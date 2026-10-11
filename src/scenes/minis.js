import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { makeMini, makeChromeMat, makeLimeMat, makeStarGeometry, damp, lerp } from '../helpers.js';

/** Applique la souris et le survol sur un groupe d'objet. */
function pose(group, t, dt, ctx, state, { yaw = 0.45, pitch = 0.2, bob = 0.08 } = {}) {
  state.hover = damp(state.hover, ctx.hover, 6, dt);
  state.ry = damp(state.ry, ctx.pointer.x * yaw, 4, dt);
  state.rx = damp(state.rx, -ctx.pointer.y * pitch, 4, dt);
  group.rotation.x = state.rx;
  group.position.y = Math.sin(t * 1.2) * bob;
}

/* ------------------------------ Gyrophare photoréaliste ------------------------------ */
export function buildSiren({ env }) {
  const { scene, camera } = makeMini(env, { z: 7.4 });
  scene.background = null;
  const g = new THREE.Group(); scene.add(g);
  const metal = new THREE.MeshPhysicalMaterial({ color: 0x20242b, metalness: .82, roughness: .24, clearcoat: .8 });
  const chrome = makeChromeMat({ roughness: .18 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x090b0e, roughness: .88 });
  const lensRed = new THREE.MeshPhysicalMaterial({ color: 0xf5223e, roughness: .12, metalness: .05, transmission: .16, thickness: .22, clearcoat: 1, emissive: 0xc90020, emissiveIntensity: 1.6 });
  const lensBlue = new THREE.MeshPhysicalMaterial({ color: 0x1675ff, roughness: .12, metalness: .05, transmission: .16, thickness: .22, clearcoat: 1, emissive: 0x004bff, emissiveIntensity: 1.6 });
  const root = new THREE.Group(); root.position.y = -.05; g.add(root);
  const base = new THREE.Mesh(new THREE.BoxGeometry(2.35,.2,.8), metal); base.position.y=-.85; root.add(base);
  const gasket = new THREE.Mesh(new THREE.BoxGeometry(2.26,.08,.74), rubber); gasket.position.y=-.72; root.add(gasket);
  const chromeLine = new THREE.Mesh(new THREE.BoxGeometry(2.3,.035,.77), chrome); chromeLine.position.y=-.68; root.add(chromeLine);
  // Deux optiques moulées, chacune avec réflecteur, couronne et LED individuelles.
  const rotors=[];
  for (const side of [-1,1]) {
    const x=side*.57, red=side<0, lensMat=red?lensRed:lensBlue;
    const pod=new THREE.Group(); pod.position.set(x,-.38,0); root.add(pod); rotors.push(pod);
    const bezel=new THREE.Mesh(new THREE.CylinderGeometry(.43,.46,.13,48), chrome); bezel.position.y=-.1; pod.add(bezel);
    const darkReflector=new THREE.Mesh(new THREE.CylinderGeometry(.38,.4,.12,48), new THREE.MeshStandardMaterial({color:0x10141c,metalness:.72,roughness:.22})); darkReflector.position.y=-.01; pod.add(darkReflector);
    const dome=new THREE.Mesh(new THREE.SphereGeometry(.41,48,24,0,Math.PI*2,0,Math.PI/2),lensMat); dome.position.y=.01; pod.add(dome);
    const innerRing=new THREE.Mesh(new THREE.TorusGeometry(.34,.018,8,48),chrome); innerRing.rotation.x=Math.PI/2; innerRing.position.y=.01; pod.add(innerRing);
    for(let i=0;i<12;i++){
      const a=i*Math.PI/6;
      const led=new THREE.Mesh(new THREE.BoxGeometry(.075,.035,.055), new THREE.MeshStandardMaterial({color:red?0xffd4d8:0xd5e8ff,emissive:red?0xff143a:0x1267ff,emissiveIntensity:2.4,roughness:.25}));
      led.position.set(Math.cos(a)*.25,.04,Math.sin(a)*.25); led.lookAt(led.position.clone().add(new THREE.Vector3(Math.cos(a),0,Math.sin(a)))); pod.add(led);
    }
    const lamp=new THREE.PointLight(red?0xff163b:0x1465ff,12,4,2); lamp.position.set(0,.12,0); pod.add(lamp);
  }
  // Vis de fixation et petites nervures du boîtier.
  for(const x of [-.96,.96]) for(const z of [-.27,.27]){
    const screw=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.018,16),chrome); screw.rotation.x=Math.PI/2; screw.position.set(x,-.72,z); root.add(screw);
  }
  const state={hover:0,rx:0,ry:0}; let angle=0;
  function update(t,dt,ctx){
    pose(g,t,dt,ctx,{...state},{yaw:.3,bob:.025});
    state.hover=damp(state.hover,ctx.hover,6,dt); state.ry=damp(state.ry,ctx.pointer.x*.3,4,dt); state.rx=damp(state.rx,-ctx.pointer.y*.16,4,dt);
    g.rotation.y=state.ry; g.rotation.x=state.rx;
    angle+=dt*(2.4+state.hover*2.2);
    rotors.forEach((pod,i)=>{pod.rotation.y=Math.sin(angle+(i*Math.PI))*0.18;});
    lensRed.emissiveIntensity=1.0+1.2*(.5+.5*Math.sin(angle*3));
    lensBlue.emissiveIntensity=1.0+1.2*(.5+.5*Math.sin(angle*3+Math.PI));
  }
  return {scene,camera,update};
}

/* ------------------------------ Croix médicale ------------------------------ */
export function buildCross({ env }) {
  const { scene, camera } = makeMini(env, { z: 7.6 });
  const g = new THREE.Group();
  scene.add(g);

  const mat = new THREE.MeshPhysicalMaterial({ color: 0xf0f2f4, roughness: 0.28, metalness: 0.08, clearcoat: 0.6, clearcoatRoughness: 0.12 });
  const a = new THREE.Mesh(new RoundedBoxGeometry(2.2, 0.74, 0.58, 6, 0.2), mat);
  const b = new THREE.Mesh(new RoundedBoxGeometry(0.74, 2.2, 0.58, 6, 0.2), mat);
  g.add(a, b);
  const medicalRed = new THREE.MeshStandardMaterial({ color: 0xc92d42, roughness: 0.36, metalness: 0.06 });
  const armA = new THREE.Mesh(new RoundedBoxGeometry(1.55, 0.24, 0.61, 4, 0.07), medicalRed);
  const armB = new THREE.Mesh(new RoundedBoxGeometry(0.24, 1.55, 0.61, 4, 0.07), medicalRed);
  g.add(armA, armB);

  const ringMat = () => new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false });
  const rings = [0, 1].map(() => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.025, 12, 90), ringMat());
    scene.add(m);
    return m;
  });

  const state = { hover: 0, rx: 0, ry: 0 };
  function update(t, dt, ctx) {
    pose(g, t, dt, ctx, state, { bob: 0.05 });
    const speed = 1 + state.hover * 0.8;
    // battement de cœur : deux pulsations rapprochées
    const ph = (t * speed * 0.9) % 1;
    const beat = Math.exp(-Math.pow((ph - 0.12) * 14, 2)) + 0.6 * Math.exp(-Math.pow((ph - 0.3) * 14, 2));
    g.scale.setScalar(1 + beat * 0.12);
    g.rotation.y = Math.sin(t * 0.8) * 0.5 + state.ry;
    rings.forEach((r, i) => {
      const p = ((t * speed * 0.55) + i * 0.5) % 1;
      r.scale.setScalar(lerp(0.9, 2.3, p));
      r.material.opacity = (1 - p) * 0.75;
    });
  }
  return { scene, camera, update };
}

/* ------------------------------ Engrenages ------------------------------ */
function makeGearGeometry(teeth, rOut, rIn, hole, depth) {
  const s = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const pts = [
      [rIn, a], [rOut, a + step * 0.12], [rOut, a + step * 0.38], [rIn, a + step * 0.5],
    ];
    pts.forEach(([r, ang], j) => {
      const x = Math.cos(ang) * r, y = Math.sin(ang) * r;
      if (i === 0 && j === 0) s.moveTo(x, y); else s.lineTo(x, y);
    });
  }
  s.closePath();
  const h = new THREE.Path();
  h.absarc(0, 0, hole, 0, Math.PI * 2, true);
  s.holes.push(h);
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3 });
  g.translate(0, 0, -depth / 2);
  return g;
}

export function buildGear({ env }) {
  const { scene, camera } = makeMini(env, { z: 7.9 });
  const g = new THREE.Group();
  scene.add(g);

  const steel = new THREE.MeshStandardMaterial({ color: 0x9ca3ad, metalness: 0.88, roughness: 0.26 });
  const g1 = new THREE.Mesh(makeGearGeometry(12, 1.35, 1.08, 0.46, 0.5), steel);
  g1.position.set(-0.75, 0.42, 0);
  const g2 = new THREE.Mesh(makeGearGeometry(9, 0.95, 0.76, 0.32, 0.5), new THREE.MeshStandardMaterial({ color: 0x59616c, metalness: 0.8, roughness: 0.32 }));
  g2.position.set(1.12, -0.7, 0);
  g.add(g1, g2);

  const state = { hover: 0, rx: 0, ry: 0 };
  let angle = 0;
  function update(t, dt, ctx) {
    pose(g, t, dt, ctx, state, { bob: 0.05 });
    angle += dt * (0.6 + state.hover * 1.4);
    g1.rotation.z = angle;
    g2.rotation.z = -angle * (12 / 9) + Math.PI / 9;
    g.rotation.y = Math.sin(t * 0.7) * 0.28 + state.ry;
  }
  return { scene, camera, update };
}

/* ------------------------------ Maison photoréaliste ------------------------------ */
export function buildHouse({ env }) {
  const { scene, camera } = makeMini(env, { z: 8.0 });
  const g = new THREE.Group(); scene.add(g);
  const mat=(color,roughness=.7,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
  const plaster= new THREE.MeshStandardMaterial({color:0xd8d1c4,roughness:.92,bumpScale:.025});
  const brick=mat(0x9a5b47,.88), roofMat=mat(0x292d35,.82), trim=mat(0xf0e9dd,.62), wood=mat(0x4b3026,.7), glass=new THREE.MeshPhysicalMaterial({color:0x233b4d,roughness:.12,metalness:.16,clearcoat:1,transmission:.08}), warmGlass=new THREE.MeshStandardMaterial({color:0xffd98a,emissive:0xffb94d,emissiveIntensity:.45,roughness:.25});
  // terrain and realistic garden base
  const land=new THREE.Mesh(new THREE.CylinderGeometry(2.25,2.25,.22,64),mat(0x4b6046,.96)); land.position.y=-1.12; g.add(land);
  const path=new THREE.Mesh(new THREE.BoxGeometry(.52,.035,1.05),mat(0xb6afa0,.9)); path.position.set(-.35,-.995,1.15); g.add(path);
  // walls and foundation
  const foundation=new THREE.Mesh(new THREE.BoxGeometry(2.05,.22,1.78),mat(0x77746e,.9)); foundation.position.y=-.84; g.add(foundation);
  // Murs séparés pour garantir une maison fermée sur les quatre côtés.
  // La façade avant est composée de panneaux autour des ouvertures, plutôt qu'un bloc plein.
  const wallY=-.22, wallH=1.25, wallBottom=wallY-wallH/2, wallTop=wallY+wallH/2;
  const wall=(w,h,d,x,y,z)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),plaster);m.position.set(x,y,z);g.add(m);return m;};
  // Mur arrière complet et deux murs latéraux continus.
  wall(1.92,wallH,.09,0,wallY,-.815);
  wall(.09,wallH,1.62,-.965,wallY,0);
  wall(.09,wallH,1.62,.965,wallY,0);
  // Façade avant : bandeau supérieur, allège basse et montants autour de la porte/fenêtre.
  wall(1.92,.28,.09,0,.265,.815);
  wall(.52,.77,.09,-.70,-.25,.815);
  wall(.43,.77,.09,.015,-.25,.815);
  wall(.28,.77,.09,.82,-.25,.815);
  // Pignons pleins sous les deux pans du toit.
  const gableShape=new THREE.Shape(); gableShape.moveTo(-.96,0); gableShape.lineTo(.96,0); gableShape.lineTo(0,.56); gableShape.closePath();
  const gableGeo=new THREE.ExtrudeGeometry(gableShape,{depth:.09,bevelEnabled:false}); gableGeo.translate(0,0,-.045);
  const frontGable=new THREE.Mesh(gableGeo,plaster); frontGable.position.set(0,.405,.815); g.add(frontGable);
  const backGable=new THREE.Mesh(gableGeo,plaster); backGable.position.set(0,.405,-.815); g.add(backGable);
  // brick lower course on front facade
  for(let row=0;row<3;row++) for(let col=0;col<7;col++){
    const b=new THREE.Mesh(new THREE.BoxGeometry(.245,.075,.028),brick); b.position.set(-.82+col*.27,-.77+row*.09,.824); if(row%2)b.position.x+=.12; g.add(b);
  }
  // Toiture à deux pans orientée correctement : les bords bas reposent sur les murs,
  // les deux pans remontent vers une faîtière centrale (aucun toit retourné).
  const roofGroup=new THREE.Group(); g.add(roofGroup);
  const slope=Math.atan2(.55,.95);
  for(const side of [-1,1]){
    const plane=new THREE.Mesh(new THREE.BoxGeometry(1.18,.085,1.92),roofMat);
    plane.position.set(side*.475,.70,0);
    plane.rotation.z=-side*slope;
    roofGroup.add(plane);
    // Tuiles alignées sur chaque pan et orientées avec la pente.
    for(let row=0;row<5;row++) for(let col=0;col<8;col++){
      const x=side*(.10+row*.19);
      const y=.98-row*.11;
      const tile=new THREE.Mesh(
        new THREE.BoxGeometry(.205,.028,.205),
        new THREE.MeshStandardMaterial({color:(row+col)%4===0?0x454a53:0x292e36,roughness:.84,metalness:.03})
      );
      tile.position.set(x,y,-.76+col*.215);
      tile.rotation.z=-side*slope;
      roofGroup.add(tile);
    }
  }
  const ridge=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,1.98,12),mat(0x4a4d53,.5,.35));
  ridge.rotation.x=Math.PI/2; ridge.position.set(0,.99,0); roofGroup.add(ridge);
  // chimney with cap and masonry joints
  const chimney=new THREE.Mesh(new THREE.BoxGeometry(.27,.62,.28),brick); chimney.position.set(.52,1.12,-.2); g.add(chimney);
  const cap=new THREE.Mesh(new THREE.BoxGeometry(.34,.07,.35),mat(0x55565a,.8)); cap.position.set(.52,1.44,-.2); g.add(cap);
  // front door, recessed panel and metallic hardware
  const door=new THREE.Mesh(new THREE.BoxGeometry(.43,.72,.065),wood); door.position.set(-.43,-.48,.85); g.add(door);
  for(let y of [-.69,-.48,-.27]){const panel=new THREE.Mesh(new THREE.BoxGeometry(.31,.13,.018),mat(0x634235,.72));panel.position.set(-.43,y,.89);g.add(panel);}
  const handle=new THREE.Mesh(new THREE.SphereGeometry(.025,12,8),makeChromeMat({roughness:.25})); handle.position.set(-.29,-.47,.9);g.add(handle);
  // two windows with frames, glass panes, crossbars and sills
  function windowFront(x,y,w,h){
    const frame=new THREE.Mesh(new THREE.BoxGeometry(w+.12,h+.12,.075),trim);frame.position.set(x,y,.85);g.add(frame);
    const pane=new THREE.Mesh(new THREE.BoxGeometry(w,h,.035),glass);pane.position.set(x,y,.895);g.add(pane);
    const crossV=new THREE.Mesh(new THREE.BoxGeometry(.035,h,.04),trim);crossV.position.set(x,y,.92);g.add(crossV);
    const crossH=new THREE.Mesh(new THREE.BoxGeometry(w,.035,.04),trim);crossH.position.set(x,y,.92);g.add(crossH);
    const sill=new THREE.Mesh(new THREE.BoxGeometry(w+.2,.07,.15),trim);sill.position.set(x,y-h/2-.06,.91);g.add(sill);
    const glow=new THREE.Mesh(new THREE.BoxGeometry(w*.45,h*.72,.012),warmGlass);glow.position.set(x-w*.25,y,.918);g.add(glow);
  }
  windowFront(.45,-.27,.43,.42);
  // side window and corner boards
  const sideFrame=new THREE.Mesh(new THREE.BoxGeometry(.07,.47,.52),trim);sideFrame.position.set(.97,-.24,-.2);g.add(sideFrame);
  const sidePane=new THREE.Mesh(new THREE.BoxGeometry(.035,.34,.39),glass);sidePane.position.set(1.015,-.24,-.2);g.add(sidePane);
  const corner=new THREE.Mesh(new THREE.BoxGeometry(.07,1.18,.07),trim);corner.position.set(.97,-.22,.82);g.add(corner);
  // downspout and porch light
  const drain=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,1.18,10),mat(0x565c60,.5,.45));drain.position.set(.91,-.25,.9);g.add(drain);
  const lampBase=new THREE.Mesh(new THREE.BoxGeometry(.13,.17,.055),mat(0x272a30,.4,.5));lampBase.position.set(-.72,-.1,.91);g.add(lampBase);
  const lamp=new THREE.Mesh(new THREE.BoxGeometry(.075,.09,.025),new THREE.MeshStandardMaterial({color:0xffe5a5,emissive:0xffbb54,emissiveIntensity:1.8}));lamp.position.set(-.72,-.1,.95);g.add(lamp);
  // garden shrubs with layered foliage
  for(const [x,z,scale] of [[1.38,.62,.8],[1.55,-.15,.68],[-1.3,.7,.72]]){
    const shrub=new THREE.Group();
    for(let i=0;i<7;i++){const leaf=new THREE.Mesh(new THREE.IcosahedronGeometry(.19,1),mat(i%2?0x385b3a:0x496b42,.95));leaf.position.set(Math.sin(i*2.4)*.16,.12+(i%3)*.1,Math.cos(i*2.4)*.16);leaf.scale.set(1,.85,1);shrub.add(leaf);}
    shrub.position.set(x,-1.02,z);shrub.scale.setScalar(scale);g.add(shrub);
  }
  // grass blades around garden edge
  const grassMat=mat(0x6d8655,.98);
  for(let i=0;i<48;i++){const a=i*Math.PI*2/48;const blade=new THREE.Mesh(new THREE.ConeGeometry(.025,.15,4),grassMat);blade.position.set(Math.cos(a)*1.93,-.97,Math.sin(a)*1.93);blade.rotation.z=Math.cos(a)*-.18;g.add(blade);}
  // Allée pavée, marches, petit porche et détails extérieurs pour une maison plus crédible.
  const stone=mat(0xaaa79f,.92), concrete=mat(0x777a7b,.88), blackMetal=mat(0x24282c,.48,.62);
  // Allée de dalles vers la porte, avec joints visibles.
  for(let i=0;i<5;i++){
    const slab=new THREE.Mesh(new THREE.BoxGeometry(.43,.035,.28),stone);
    slab.position.set(-.36,-1.005,1.63+i*.27); g.add(slab);
    const joint=new THREE.Mesh(new THREE.BoxGeometry(.012,.006,.24),mat(0x686962,.98));
    joint.position.set(-.36,-.985,1.76+i*.27); g.add(joint);
  }
  // Porche en bois avec poteaux et petite marquise.
  const porchRoof=new THREE.Mesh(new THREE.BoxGeometry(1.12,.09,.64),roofMat); porchRoof.position.set(-.37,.04,1.02); g.add(porchRoof);
  const porchTrim=new THREE.Mesh(new THREE.BoxGeometry(1.16,.035,.68),trim); porchTrim.position.set(-.37,-.015,1.02); g.add(porchTrim);
  for(const x of [-.86,.12]){
    const post=new THREE.Mesh(new RoundedBoxGeometry(.075,.74,.075,3,.012),trim); post.position.set(x,-.39,1.22); g.add(post);
    const foot=new THREE.Mesh(new THREE.BoxGeometry(.13,.06,.13),concrete); foot.position.set(x,-.76,1.22); g.add(foot);
  }
  const step1=new THREE.Mesh(new THREE.BoxGeometry(.72,.09,.24),concrete); step1.position.set(-.42,-.78,1.02); g.add(step1);
  const step2=new THREE.Mesh(new THREE.BoxGeometry(.62,.07,.19),stone); step2.position.set(-.42,-.85,1.2); g.add(step2);
  // Gouttières sous les rives et descentes pluviales métalliques.
  for(const side of [-1,1]){
    const gutter=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,1.95,12),blackMetal); gutter.rotation.x=Math.PI/2; gutter.position.set(side*.99,.45,0); g.add(gutter);
    const downpipe=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,1.18,10),blackMetal); downpipe.position.set(side*.94,-.27,.91); g.add(downpipe);
    for(const z of [-.7,-.35,0,.35,.7]){
      const seam=new THREE.Mesh(new THREE.BoxGeometry(.025,.02,.11),mat(0x484d53,.72,.35)); seam.position.set(side*.57,.75,z); seam.rotation.z=side*.48; roofGroup.add(seam);
    }
  }
  // Garage latéral avec panneaux horizontaux et poignée.
  const garageFrame=new THREE.Mesh(new THREE.BoxGeometry(.84,.78,.09),trim); garageFrame.position.set(.54,-.4,.86); g.add(garageFrame);
  const garageDoor=new THREE.Mesh(new THREE.BoxGeometry(.74,.67,.045),mat(0x777b82,.48,.28)); garageDoor.position.set(.54,-.4,.92); g.add(garageDoor);
  for(let i=0;i<6;i++){
    const groove=new THREE.Mesh(new THREE.BoxGeometry(.72,.012,.012),mat(0x34383e,.58,.25)); groove.position.set(.54,-.69+i*.115,.948); g.add(groove);
  }
  const garageHandle=new THREE.Mesh(new THREE.BoxGeometry(.11,.025,.02),blackMetal); garageHandle.position.set(.54,-.4,.96); g.add(garageHandle);
  // Clôture basse, boîte aux lettres et lanterne de jardin.
  for(const z of [-.1,.32,.74,1.16]){
    const post=new THREE.Mesh(new THREE.BoxGeometry(.07,.48,.07),trim); post.position.set(-1.9,-.8,z); g.add(post);
  }
  for(const y of [-.72,-.91]){
    const rail=new THREE.Mesh(new THREE.BoxGeometry(.045,.045,1.3),wood); rail.position.set(-1.9,y,.53); g.add(rail);
  }
  const mailbox=new THREE.Mesh(new RoundedBoxGeometry(.23,.17,.18,4,.025),blackMetal); mailbox.position.set(-1.73,-.48,1.15); g.add(mailbox);
  const mailSlot=new THREE.Mesh(new THREE.BoxGeometry(.12,.018,.012),makeChromeMat({roughness:.25})); mailSlot.position.set(-1.73,-.45,1.246); g.add(mailSlot);
  const gardenLampPost=new THREE.Mesh(new THREE.CylinderGeometry(.025,.035,.62,12),blackMetal); gardenLampPost.position.set(1.68,-.69,1.05); g.add(gardenLampPost);
  const gardenLamp=new THREE.Mesh(new THREE.SphereGeometry(.09,16,12),new THREE.MeshStandardMaterial({color:0xffedbd,emissive:0xffc35d,emissiveIntensity:1.25,roughness:.22})); gardenLamp.position.set(1.68,-.35,1.05); g.add(gardenLamp);
  // Reliefs de briques et petites ferrures visibles autour de la porte.
  for(let row=0;row<7;row++){
    const lintel=new THREE.Mesh(new THREE.BoxGeometry(.055,.035,.045),brick); lintel.position.set(-.68+row*.075,.02,.9); g.add(lintel);
  }
  for(const x of [-.52,-.34]){
    const hinge=new THREE.Mesh(new THREE.BoxGeometry(.025,.085,.018),blackMetal); hinge.position.set(x,-.4,.891); g.add(hinge);
  }
  g.scale.setScalar(.88);
  const state={hover:0,rx:0,ry:0}; let spin=0;
  function update(t,dt,ctx){pose(g,t,dt,ctx,state,{bob:.025,yaw:.28});state.hover=damp(state.hover,ctx.hover,6,dt);state.ry=damp(state.ry,ctx.pointer.x*.28,4,dt);g.rotation.y=spin+state.ry;spin+=dt*(.12+state.hover*.22);lamp.material.emissiveIntensity=1.4+.25*Math.sin(t*2.2);}
  return {scene,camera,update};
}
