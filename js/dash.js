addEventListener('load',()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let u=null,booked=[];try{u=JSON.parse(localStorage.getItem('sfc_user'));booked=JSON.parse(localStorage.getItem('sfc_booked'))||[]}catch(e){}
if(!u){location.replace('login.html');return}
const ic=d=>`<svg class="ic" style="width:20px;height:20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const NAV=[['overview','Overview','<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>'],['classes','Classes','<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'],['progress','Progress','<path d="M3 17l6-6 4 4 8-9"/>'],['account','Account','<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/>']];
const CL=[['Morning HIIT','Mon, 6:30 AM','David Wilson'],['Strength Basics','Tue, 7:00 PM','Sarah Mitchell'],['Football Skills','Thu, 6:00 PM','James Carter'],['Yoga & Mobility','Sat, 8:00 AM','Priya Sharma']];
const WK=[['Mon',60,45],['Tue',85,60],['Wed',40,30],['Thu',95,70],['Fri',70,50],['Sat',55,40],['Sun',0,0]];
const TK=['Warm-up mobility · 10 min','Upper body strength · 45 min','Core finisher · 10 min','Cool-down stretch · 5 min'];
const GO=[['Weight','78 kg → 74 kg',60],['Bench press','60 kg → 80 kg',45],['5K run time','31 → 27 min',70],['Weekly workouts','4 of 5 done',80]];
const h=new Date().getHours(),gr=h<12?'Good morning':h<17?'Good afternoon':'Good evening',ini=u.name[0].toUpperCase();
const ring=(p,l)=>`<div class="ring"><svg width="96" height="96" viewBox="0 0 96 96"><circle class="t" cx="48" cy="48" r="42"/><circle class="v" cx="48" cy="48" r="42" data-p="${p}"/></svg><b>${l}</b></div>`;
document.body.innerHTML=`<aside class="sb"><a class="logo" href="index.html"><svg viewBox="0 0 24 24" width="32" height="32"><rect width="24" height="24" rx="7" fill="#2846f0"/><path d="m6.5 16 5.5-8 5.5 8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Stronger</a>${NAV.map(n=>`<a class="nv" href="#${n[0]}" data-v="${n[0]}">${ic(n[2])}${n[1]}</a>`).join('')}<a class="nv" href="index.html">${ic('<path d="M3 11 12 3l9 8v10H3z"/>')}Back to site</a><a class="nv out" href="#" id="out">${ic('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>')}Log out</a></aside>
<div class="dm"><div class="dt"><div><h1>${gr}, ${u.name}</h1><p>Here’s how your training is going this week.</p></div><span class="av" style="width:52px;height:52px;font-size:20px">${ini}</span></div>
<section class="dv" id="v-overview"><div class="dg">
<div class="dc kp" style="--i:0"><span>Workouts this week</span><b data-n="4" data-s=" / 5">0</b><span class="up">▲ 1 more than last week</span></div>
<div class="dc kp" style="--i:1"><span>Day streak</span><b data-n="6">0</b><span class="up">Personal best: 9 days</span></div>
<div class="dc kp" style="--i:2"><span>Calories burned</span><b data-n="2340">0</b><span>This week</span></div>
<div class="dc kp" style="--i:3;display:flex;align-items:center;justify-content:space-between"><div><span>Today’s plan</span><b id="pc">25%</b></div><div id="tr">${ring(25,'')}</div></div></div>
<div class="dg2"><div class="dc" style="--i:4"><h3>Weekly activity (minutes)</h3><div class="bars">${WK.map((d,i)=>`<div><i data-h="${d[1]}" class="${i==3?'hi':''}" title="${d[2]} min"></i>${d[0]}</div>`).join('')}</div></div>
<div class="dc" style="--i:5"><h3>Today’s plan</h3><ul class="tk">${TK.map((t,i)=>`<li><label><input type="checkbox"${i?'':' checked'}><span>${t}</span></label></li>`).join('')}</ul></div></div>
<div class="dc" style="--i:6"><h3>Your coach</h3><div style="display:flex;gap:16px;align-items:center"><span class="av" style="width:56px;height:56px">S</span><div><b>Sarah Mitchell</b><br><span style="color:var(--steel)">Strength &amp; Conditioning · next check-in Friday, 5:00 PM</span></div></div></div></section>
<section class="dv" id="v-classes"><div class="cl">${CL.map((c,i)=>`<div class="cr" style="--i:${i}"><div><b>${c[0]}</b><small>${c[1]} · with ${c[2]}</small></div><button class="btn bk" data-c="${i}"></button></div>`).join('')}</div></section>
<section class="dv" id="v-progress"><div class="dc"><h3>Your goals</h3><div class="gl">${GO.map(g=>`<div><p>${g[0]}<span>${g[1]}</span></p><div class="bar2"><i data-w="${g[2]}"></i></div></div>`).join('')}</div></div></section>
<section class="dv" id="v-account"><div class="dc"><h3>Your account</h3><div class="pf"><div><p>Name</p><b>${u.name}</b></div><div><p>Email</p><b>${u.email}</b></div><div><p>Plan</p><b>Pro · $79/month</b></div><div><p>Next payment</p><b>1 December 2026</b></div></div><a class="btn line" href="membership.html" style="margin-top:24px">Compare plans</a></div></section></div>`;
const show=()=>{const v=(location.hash||'#overview').slice(1),k=$('#v-'+v)?v:'overview';
$$('.dv').forEach(e=>e.classList.toggle('on',e.id=='v-'+k));$$('.nv[data-v]').forEach(a=>a.classList.toggle('on',a.dataset.v==k));
$$('.dc,.cr',$('#v-'+k)).forEach(e=>{e.style.animation='none';e.offsetHeight;e.style.animation=''});
$$('.bars i,.bar2 i,.ring .v').forEach(e=>{if(e.dataset.h)e.style.height='0';if(e.dataset.w)e.style.width='0';if(e.dataset.p)e.style.strokeDashoffset=264});
setTimeout(()=>{$$('#v-'+k+' .bars i').forEach(e=>e.style.height=e.dataset.h+'%');$$('#v-'+k+' .bar2 i').forEach(e=>e.style.width=e.dataset.w+'%');$$('#v-'+k+' .ring .v').forEach(e=>e.style.strokeDashoffset=264*(1-e.dataset.p/100));$$('#v-'+k+' [data-n]').forEach(countUp)},120)};
addEventListener('hashchange',show);show();
const upd=()=>{const c=$$('.tk input'),d=c.filter(x=>x.checked).length,p=Math.round(d/c.length*100);$('#pc').textContent=p+'%';$('.ring .v').style.strokeDashoffset=264*(1-p/100);$('.ring .v').dataset.p=p};
$$('.tk input').forEach(i=>i.onchange=upd);
const bk=()=>$$('.bk').forEach(b=>{const on=booked.includes(+b.dataset.c);b.textContent=on?'Booked ✓':'Book';b.classList.toggle('on',on)});
$$('.bk').forEach(b=>b.onclick=()=>{const i=+b.dataset.c;booked=booked.includes(i)?booked.filter(x=>x!=i):[...booked,i];try{localStorage.setItem('sfc_booked',JSON.stringify(booked))}catch(e){}bk()});bk();
$('#out').onclick=e=>{e.preventDefault();try{localStorage.removeItem('sfc_user')}catch(x){}location.href='login.html'};
});
