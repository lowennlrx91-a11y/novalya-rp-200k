export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Position normalisée de la souris / du doigt (-1 → 1), lissée par la boucle 3D. */
export const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

function trackPointer() {
  const move = (e) => {
    const p = e.touches ? e.touches[0] : e;
    pointer.tx = (p.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (p.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('touchmove', move, { passive: true });
}

function initNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('menu');
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }),
  );

  // lien actif selon la section visible
  const links = [...menu.querySelectorAll('a')];
  const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((l) => l.classList.remove('is-active'));
          const a = map.get(en.target.id);   // undefined pour #accueil et #rejoindre : aucun lien actif
          if (a) a.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  document.querySelectorAll('main section[id]').forEach((el) => io.observe(el));
}

function initTilt() {
  const el = document.getElementById('tilt');
  if (!el || reduced) return;
  const max = 12;
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`);
    el.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`);
    el.style.setProperty('--gx', `${px * 100}%`);
    el.style.setProperty('--gy', `${py * 100}%`);
  });
  el.addEventListener('pointerleave', () => {
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  });
}

function initMagnet() {
  if (reduced) return;
  document.querySelectorAll('.btn, .pill').forEach((b) => {
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.14;
      const y = (e.clientY - r.top - r.height / 2) * 0.22;
      b.style.transform = `translate(${x}px, ${y}px)`;
    });
    b.addEventListener('pointerleave', () => (b.style.transform = ''));
  });
}

export function initUI() {
  trackPointer();
  initNav();
  initTilt();
  initMagnet();
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}
