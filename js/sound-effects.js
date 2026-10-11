(()=>{
  let ctx=null, active=false, oscillators=[], master=null, pulseTimer=null;
  function audio(){
    if(!ctx) ctx=new (window.AudioContext||window.webkitAudioContext)();
    if(ctx.state==='suspended') ctx.resume();
    return ctx;
  }
  function tone(freq, duration, type='sine', gain=.025){
    try{
      const c=audio(), o=c.createOscillator(), g=c.createGain();
      o.type=type; o.frequency.setValueAtTime(freq,c.currentTime);
      g.gain.setValueAtTime(gain,c.currentTime);
      g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+duration);
      o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime+duration);
    }catch(e){}
  }
  // Sirène synthétique à deux tons, jouée uniquement pendant le survol de la carte police.
  function startSiren(){
    if(active) return;
    active=true;
    try{
      const c=audio(); master=c.createGain(); master.gain.value=0.0001; master.connect(c.destination);
      const a=c.createOscillator(), b=c.createOscillator(), ga=c.createGain(), gb=c.createGain();
      a.type='sawtooth'; b.type='triangle'; ga.gain.value=.035; gb.gain.value=.018;
      a.connect(ga); b.connect(gb); ga.connect(master); gb.connect(master);
      a.frequency.value=660; b.frequency.value=440; a.start(); b.start();
      oscillators=[a,b];
      master.gain.setTargetAtTime(.75,c.currentTime,.08);
      let high=false;
      pulseTimer=window.setInterval(()=>{
        if(!active||!ctx) return;
        high=!high; const t=ctx.currentTime;
        a.frequency.setTargetAtTime(high?880:660,t,.12);
        b.frequency.setTargetAtTime(high?587:440,t,.12);
      },420);
    }catch(e){active=false;}
  }
  function stopSiren(){
    if(!active) return; active=false;
    if(pulseTimer){clearInterval(pulseTimer);pulseTimer=null;}
    try{
      const c=ctx, g=master;
      if(c&&g){g.gain.cancelScheduledValues(c.currentTime);g.gain.setTargetAtTime(.0001,c.currentTime,.035);}
      const old=oscillators.slice(); oscillators=[];
      window.setTimeout(()=>old.forEach(o=>{try{o.stop();}catch(e){}}),180);
    }catch(e){}
  }
  document.addEventListener('pointerenter',e=>{
    const card=e.target.closest?.('.card');
    if(card?.querySelector('[data-stage="siren-realistic"]')) startSiren();
  },true);
  document.addEventListener('pointerleave',e=>{
    const card=e.target.closest?.('.card');
    if(card?.querySelector('[data-stage="siren-realistic"]')) stopSiren();
  },true);
  document.addEventListener('pointerover',e=>{
    const card=e.target.closest?.('.card');
    if(card?.querySelector('[data-stage="siren-realistic"]')) startSiren();
  },{passive:true});
  document.addEventListener('pointerout',e=>{
    const card=e.target.closest?.('.card');
    if(card?.querySelector('[data-stage="siren-realistic"]') && !card.contains(e.relatedTarget)) stopSiren();
  },{passive:true});
  document.addEventListener('click',e=>{const a=e.target.closest('a,button');if(!a)return;if(a.matches('.pill,.btn')){tone(660,.08,'sine',.025);setTimeout(()=>tone(880,.09,'sine',.018),55)}else if(a.matches('.burger'))tone(420,.06,'triangle',.018)},{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopSiren();});
})();
