/* Stronger Fitness Club: motion layer. Works with Motion (motion.dev) when loaded, falls back gracefully. */
(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const M=window.Motion,B=document.body,H=document.documentElement;
const still=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const au=B.classList.contains('au'),ds=B.classList.contains('ds');
const pg=location.pathname.split('/').pop()||'index.html';
const MARK='<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="7" fill="#fff"/><path d="m6.5 16 5.5-8 5.5 8" stroke="#2846f0" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const fromT=H.classList.contains('t');
/* ---------- page transitions ---------- */
const wipe=Object.assign(document.createElement('div'),{id:'wipe',innerHTML:MARK});B.appendChild(wipe);
const reset=()=>{wipe.style.transition='none';wipe.className='';wipe.getBoundingClientRect();wipe.style.transition=''};
if(fromT){wipe.className='cover';H.classList.remove('t');try{sessionStorage.removeItem('sfcT')}catch(e){}
 requestAnimationFrame(()=>requestAnimationFrame(()=>{wipe.className='out';setTimeout(reset,700)}))}
addEventListener('pageshow',e=>{if(e.persisted)reset()});
/* ---------- preloader (home, once per session) ---------- */
let seen=false;try{seen=sessionStorage.sfcPre}catch(e){}
const doPre=pg==='index.html'&&!au&&!ds&&!seen&&!still&&!fromT;
function heroIn(){const h=$('.hero h1');if(h)h.classList.add('in')}
const h1=$('.hero h1');
if(h1){const t=h1.textContent.trim();h1.setAttribute('aria-label',t);h1.innerHTML=t.split(/\s+/).map((w,i)=>`<span class="fx-w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(' ')}
if(doPre){try{sessionStorage.sfcPre=1}catch(e){}
 const pre=Object.assign(document.createElement('div'),{id:'fx-pre',innerHTML:`<div class="p1"></div><div class="p2"></div><div class="c">${MARK.replace('fill="#fff"','fill="#2846f0"').replace('stroke="#2846f0"','stroke="#fff"')}<div class="w">Stronger</div></div><div class="n">0</div><div class="l"></div>`});
 B.appendChild(pre);B.style.overflow='hidden';const n=$('.n',pre),l=$('.l',pre),t0=performance.now(),D=1500;
 (function f(t){const p=Math.min((t-t0)/D,1),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;n.textContent=Math.round(e*100);l.style.transform=`scaleX(${e})`;
  if(p<1)requestAnimationFrame(f);else{setTimeout(()=>{pre.classList.add('go');setTimeout(heroIn,380);setTimeout(()=>{pre.remove();B.style.overflow=''},1000)},200)}})(t0)}
else setTimeout(heroIn,fromT?500:100);
/* ---------- link interception for transitions + logo easter egg ---------- */
let lc=0,lt;
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.button||a.target||a.hasAttribute('download'))return;
 const u=new URL(a.href,location.href);
 if(a.classList.contains('logo')&&u.pathname.split('/').pop()===pg){e.preventDefault();lc++;clearTimeout(lt);lt=setTimeout(()=>lc=0,1400);if(lc>=5){lc=0;rain()}else scrollTo({top:0,behavior:'smooth'});return}
 if(u.origin!==location.origin||(u.pathname===location.pathname&&u.hash)||!/\.html?$/.test(u.pathname)||still)return;
 e.preventDefault();try{sessionStorage.sfcT=1}catch(x){}wipe.className='in';setTimeout(()=>{location.href=a.href},600)});
/* ---------- magnetic buttons ---------- */
if(fine&&!still)$$('.btn,.mt').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.28}px ${(e.clientY-r.top-r.height/2)*.4}px`});b.addEventListener('pointerleave',()=>b.style.translate='')});
/* ---------- cursor with context ---------- */
if(fine&&!still){const c=Object.assign(document.createElement('div'),{id:'fx-cur',innerHTML:'<span></span>'});B.appendChild(c);const s=c.firstChild;let x=0,y=0,tx=0,ty=0;
 addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;c.classList.add('v')},{passive:true});document.documentElement.addEventListener('mouseleave',()=>c.classList.remove('v'));
 (function f(){x+=(tx-x)*.2;y+=(ty-y)*.2;c.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(f)})();
 const L=[['.tile','View'],['.tr','Meet'],['.pc','Learn'],['.plan','Join'],['.big','Go']];
 document.addEventListener('pointerover',e=>{const t=e.target;let lab='';
  const hv=t.closest('a,button,input,summary,label,.chip');
  if(!hv||t.closest('.tile,.pc'))for(const[q,w]of L)if(t.closest(q)){lab=w;break}
  s.textContent=lab;c.classList.toggle('lb',!!lab);c.classList.toggle('hv',!lab&&!!hv)})}
/* ---------- header hide on scroll down, controlled parallax ---------- */
const hd=$('.hd'),bg=$('.hbg'),note=$('.note'),hc=$('.hc'),pim=$('#pimg');let ly=0,tick=false;
$$('#nav a').forEach((a,i)=>a.style.setProperty('--n',i));
function onS(){tick=false;const y=scrollY;
 if(hd&&!B.classList.contains('mo')){if(y>ly+4&&y>420)hd.classList.add('hid');else if(y<ly-4)hd.classList.remove('hid')}
 ly=y;if(still)return;
 if(y<1000){if(bg)bg.style.translate=`0 ${Math.min(y*.18,70)}px`;if(note)note.style.translate=`0 ${-Math.min(y*.12,60)}px`;if(hc)hc.style.translate=`0 ${Math.min(y*.08,40)}px`}
 if(pim){const r=pim.getBoundingClientRect(),p=Math.max(-1,Math.min(1,(r.top+r.height/2-innerHeight/2)/innerHeight));pim.style.backgroundPosition=`50% ${50+p*14}%`}}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onS)}},{passive:true});onS();
/* ---------- testimonials: Motion spring stagger ---------- */
const cards=$$('.tmg>*');
if(cards.length){if(M&&!still){cards.forEach(c=>c.style.opacity=0);M.inView('.tmg',()=>{M.animate('.tmg>*',{opacity:[0,1],y:[70,0],rotate:[-2.5,0]},{delay:M.stagger(.1),type:'spring',stiffness:110,damping:15});setTimeout(()=>cards.forEach(c=>{c.style.transform='';c.style.opacity=''}),2200)},{amount:.15})}}
/* ---------- easter eggs: logo x5, type "lift", Konami ---------- */
const toast=Object.assign(document.createElement('div'),{id:'fx-toast'});B.appendChild(toast);
const DB='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/></svg>';
function rain(){toast.textContent='Another rep? Respect.';toast.classList.add('s');setTimeout(()=>toast.classList.remove('s'),2800);
 for(let i=0;i<26;i++){const d=document.createElement('div');d.className='fx-drop';d.innerHTML=DB;d.style.left=Math.random()*94+'vw';d.style.width=30+Math.random()*50+'px';d.style.animationDuration=1.5+Math.random()*1.8+'s';d.style.animationDelay=Math.random()*.9+'s';B.appendChild(d);setTimeout(()=>d.remove(),4500)}}
let buf='',kk=[];const K='ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a';
addEventListener('keydown',e=>{if(/input|textarea/i.test(e.target.tagName))return;buf=(buf+e.key).slice(-4).toLowerCase();if(buf==='lift')rain();kk.push(e.key);kk=kk.slice(-10);if(kk.join()===K)rain()});

/* ===== v2 design layer ===== */
/* section headings: masked word reveal */
const rh=$$('.sec h2,.mv h2,.numband h2');
rh.forEach(h=>{const t=h.textContent.trim();h.classList.add('rh');h.setAttribute('aria-label',t);h.innerHTML=t.split(/\s+/).map((w,i)=>`<span class="fx-w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(' ')});
const io2=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io2.unobserve(x.target)}}),{threshold:.35});rh.forEach(h=>io2.observe(h));
/* hero: cursor spotlight + floating stat chips */
const hero=$('.hero');
if(hero){const hl=document.createElement('div');hl.className='hl';hero.insertBefore(hl,$('.hc'));
 hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hl.style.setProperty('--hx',e.clientX-r.left+'px');hl.style.setProperty('--hy',e.clientY-r.top+'px')});
 if(pg==='index.html')hero.insertAdjacentHTML('beforeend','<div class="hbd" aria-hidden="true"><span><b>10K+</b> happy members</span><span><b>50+</b> certified trainers</span><span><b>5+</b> years of experience</span></div>')}
/* second marquee row, reversed */
const mq=$('.mq');if(mq){const c=mq.cloneNode(true);c.classList.add('rev');mq.after(c)}
/* card tilt + glare (desktop only) */
if(fine&&!still)$$('.pc,.plan').forEach(c=>{c.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',px*r.width+'px');c.style.setProperty('--my',py*r.height+'px');if(c.classList.contains('rv'))return;c.style.transform=`perspective(900px) rotateX(${(.5-py)*6}deg) rotateY(${(px-.5)*7}deg) translateY(-8px)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
/* hero card eases in as you scroll, scroll-to-top with progress ring */
const top=Object.assign(document.createElement('button'),{id:'fx-top',type:'button',innerHTML:'<svg viewBox="0 0 44 44"><circle class="t" cx="22" cy="22" r="20"/><circle class="v" cx="22" cy="22" r="20" pathLength="1"/></svg><svg class="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'});
top.setAttribute('aria-label','Back to top');B.appendChild(top);top.onclick=()=>scrollTo({top:0,behavior:'smooth'});const tv=$('.v',top);
function v2(){const y=scrollY,max=(H.scrollHeight-innerHeight)||1;top.classList.toggle('on',y>600);tv.style.strokeDashoffset=1-y/max;
 if(hero&&!still){const p=Math.min(y/700,1);hero.style.scale=1-.045*p;hero.style.borderRadius=28+22*p+'px'}}
addEventListener('scroll',()=>requestAnimationFrame(v2),{passive:true});v2();
/* footer wordmark */
const ft=$('.ft .wrap');if(ft)ft.insertAdjacentHTML('beforeend','<div class="fw" aria-hidden="true">Stronger</div>');
/* plans: monthly / yearly toggle with animated prices (placeholder pricing) */
const pl=$('.plans');
if(pl){const w=document.createElement('div');w.className='bill';w.innerHTML='<span class="on" data-b="m">Monthly</span><button type="button" role="switch" aria-checked="false" aria-label="Bill yearly"><i></i></button><span data-b="y">Yearly <em>Save 20%</em></span>';pl.before(w);
 const num=el=>parseInt(el.firstChild.textContent.replace(/\D/g,''),10),prs=$$('.pr',pl).map(el=>({el,base:num(el)})),sw=$('button',w);
 const setBill=y=>{sw.setAttribute('aria-checked',y);$$('span',w).forEach(sp=>sp.classList.toggle('on',(sp.dataset.b==='y')===y));
  prs.forEach(o=>{const from=num(o.el),to=y?Math.round(o.base*.8):o.base,t0=performance.now();(function f(t){const p=Math.min((t-t0)/600,1);o.el.firstChild.textContent='$'+Math.round(from+(to-from)*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)});
  $$('.pr small',pl).forEach(sm=>sm.textContent=y?'/month, billed yearly':'/month')};
 sw.onclick=()=>setBill(sw.getAttribute('aria-checked')!=='true')}
})();
