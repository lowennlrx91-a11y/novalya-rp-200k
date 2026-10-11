/* Bande-son originale synthétisée pour NovaLya RP : pop urbaine / hip-hop léger, 118 BPM.
   Aucun morceau commercial ni extrait protégé n'est utilisé. */
(() => {
  const btn = document.getElementById('music-toggle');
  if (!btn) return;
  let ctx = null, master = null, timer = null, playing = false, nextBeat = 0, beat = 0, step = 0;
  let noiseBuffer = null;
  const bpm = 118, beatLen = 60 / bpm;
  const chords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7
    [220.00, 261.63, 329.63, 392.00], // Am7
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [196.00, 246.94, 293.66, 392.00]  // G
  ];
  const bass = [65.41, 55.00, 43.65, 49.00];

  function initAudio() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) throw new Error('Audio non pris en charge par ce navigateur');
    ctx = ctx || new AC();
    if (!noiseBuffer) {
      const buffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      noiseBuffer = buffer;
    }
  }
  function envelope(g, t, peak, attack, decay, sustain = 0.2) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak * sustain), t + attack + decay);
  }
  function kick(t) {
    const osc = ctx.createOscillator(), g = ctx.createGain();
    osc.type = 'sine'; osc.frequency.setValueAtTime(145, t); osc.frequency.exponentialRampToValueAtTime(48, t + 0.14);
    envelope(g, t, 0.7, 0.004, 0.16, 0.015); osc.connect(g); g.connect(master); osc.start(t); osc.stop(t + 0.19);
  }
  function noiseHit(t, duration, peak, hp, lp, decay) {
    const src = ctx.createBufferSource(), filter = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = noiseBuffer; filter.type = 'highpass'; filter.frequency.value = hp;
    const low = ctx.createBiquadFilter(); low.type = 'lowpass'; low.frequency.value = lp;
    envelope(g, t, peak, 0.002, decay, 0.002); src.connect(filter); filter.connect(low); low.connect(g); g.connect(master);
    src.start(t); src.stop(t + duration);
  }
  function snare(t) {
    noiseHit(t, 0.16, 0.20, 900, 9000, 0.13);
    const osc = ctx.createOscillator(), g = ctx.createGain(); osc.type = 'triangle'; osc.frequency.setValueAtTime(190, t);
    envelope(g, t, 0.12, 0.002, 0.09, 0.01); osc.connect(g); g.connect(master); osc.start(t); osc.stop(t + 0.11);
  }
  function hat(t, open = false) { noiseHit(t, open ? 0.13 : 0.045, open ? 0.075 : 0.045, 6500, 15000, open ? 0.11 : 0.035); }
  function bassNote(freq, t, duration) {
    const osc = ctx.createOscillator(), filter = ctx.createBiquadFilter(), g = ctx.createGain();
    osc.type = 'sawtooth'; osc.frequency.setValueAtTime(freq, t); filter.type = 'lowpass'; filter.frequency.setValueAtTime(240, t); filter.frequency.exponentialRampToValueAtTime(650, t + 0.04);
    envelope(g, t, 0.16, 0.008, duration * 0.72, 0.06); osc.connect(filter); filter.connect(g); g.connect(master); osc.start(t); osc.stop(t + duration);
  }
  function pluck(freq, t, duration = 0.19, vol = 0.07) {
    const osc = ctx.createOscillator(), filter = ctx.createBiquadFilter(), g = ctx.createGain();
    osc.type = 'triangle'; osc.frequency.setValueAtTime(freq, t); filter.type = 'lowpass'; filter.frequency.value = 2600;
    envelope(g, t, vol, 0.006, duration, 0.001); osc.connect(filter); filter.connect(g); g.connect(master); osc.start(t); osc.stop(t + duration + 0.02);
  }
  function chordHit(t, chord) {
    chord.forEach((f, i) => {
      const osc = ctx.createOscillator(), filter = ctx.createBiquadFilter(), g = ctx.createGain();
      osc.type = 'sawtooth'; osc.detune.value = i % 2 ? -5 : 5; osc.frequency.value = f;
      filter.type = 'lowpass'; filter.frequency.value = 1100;
      envelope(g, t, 0.032, 0.025, 0.34, 0.08); osc.connect(filter); filter.connect(g); g.connect(master); osc.start(t); osc.stop(t + 0.43);
    });
  }
  function schedule() {
    if (!playing || !ctx) return;
    while (nextBeat < ctx.currentTime + 0.12) {
      const t = nextBeat, pos = beat % 16, bar = Math.floor(beat / 16) % 4;
      if (pos % 4 === 0) kick(t);
      if (pos === 4 || pos === 12) snare(t);
      if (pos % 2 === 0) hat(t + 0.002, pos === 14);
      if (pos % 4 === 2) hat(t + 0.012, false);
      if (pos % 4 === 0) bassNote(bass[bar], t, beatLen * 0.9);
      if (pos % 4 === 2) bassNote(bass[bar] * 1.5, t, beatLen * 0.42);
      if (pos === 0 || pos === 8) chordHit(t, chords[bar]);
      // Petite mélodie syncopée, lumineuse et originale.
      const melody = [0, 2, 1, 3, 2, 1, 3, 2];
      if ([2, 5, 7, 10, 13, 15].includes(pos)) {
        const chord = chords[bar];
        pluck(chord[melody[step % melody.length]] * (pos === 15 ? 2 : 1), t, 0.17, 0.052);
        step++;
      }
      beat++; nextBeat += beatLen / 2;
    }
  }
  async function start() {
    initAudio();
    if (ctx.state !== 'running') await ctx.resume();
    master = ctx.createGain(); master.gain.value = 0.72; master.connect(ctx.destination);
    playing = true; beat = 0; step = 0; nextBeat = ctx.currentTime + 0.06;
    timer = window.setInterval(schedule, 25); schedule();
    btn.textContent = '♫ Couper la musique'; btn.setAttribute('aria-pressed', 'true');
  }
  async function stop() {
    playing = false; if (timer) clearInterval(timer); timer = null;
    if (master && ctx) { const old = master; old.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.06); setTimeout(() => { try { old.disconnect(); } catch (_) {} }, 350); }
    master = null; btn.textContent = '♫ Écouter la musique'; btn.setAttribute('aria-pressed', 'false');
  }
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    try { if (playing) await stop(); else await start(); }
    catch (e) { btn.textContent = '♫ Réessayer la musique'; btn.title = String(e?.message || e); console.warn('[NovaLya RP audio]', e); }
    finally { btn.disabled = false; }
  });
})();
