const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const U=(id,w=900,q=58)=>`https://images.unsplash.com/photo-${id}?auto=format&fm=webp&fit=crop&w=${w}&q=${q}`;
const ic=d=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I={
coach:ic('<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5 7 21l5-3 5 3-1.5-7.5"/>'),
plan:ic('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>'),
time:ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
team:ic('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M17 14c2.7 0 4.5 1.8 4.5 4.5"/>'),
gear:ic('<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>'),
heart:ic('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'),
search:ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>')};
const LOGO='<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="7" fill="#2846f0"/><path d="m6.5 16 5.5-8 5.5 8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const PROG=[['Strength Training','Build muscle, increase strength and boost endurance.','1581009146145-b5ef050c2e1e'],['Cardio Fitness','Improve stamina and heart health with guided cardio plans.','1538805060514-97d9cc17730c'],['Sports Training','Train like a pro. Improve your skills and performance.','1526232761682-d26e3ac7a1a5'],['HIIT & Functional','Burn calories, build endurance and get results faster.','1517836357463-d25dfeac3438']];
const SP5=[['Football','Teamwork, stamina and skill.','1431324155629-1a6deb1dec8d'],['Running','Build endurance, boost your health.','1476480862126-209bfaa8edc8'],['Cycling','Ride further, recover faster.','1517649763962-0c623066013b'],['Swimming','Low-impact strength and stamina.','1530549387789-4c1017266635'],['Tennis','Improve focus, coordination and control.','1554068865-24cecd4e34b8']];
const SP4=[SP5[0],['Basketball','Build agility, speed and confidence.','1546519638-68e109498ffc'],SP5[4],SP5[1]];
const CARDS=[['Weight Loss','Burn calories, boost metabolism and reach your ideal weight with a structured plan.','1538805060514-97d9cc17730c'],['Muscle Gain','Build lean muscle, increase strength and transform your physique with expert guidance.','1581009146145-b5ef050c2e1e'],['Endurance','Improve stamina, boost performance and go further with endurance training.','1476480862126-209bfaa8edc8'],['Strength','Increase power, build confidence and get stronger with targeted strength training.','1534438327276-14e5300c3a48'],['Flexibility','Improve mobility, reduce stress and prevent injuries with guided flexibility training.','1518611012118-696072aa579a'],['General Fitness','Stay active, build healthy habits and feel your best with an all-round program.','1517836357463-d25dfeac3438']];
const TRAIN=[['Sarah Mitchell','Strength & Conditioning','4.9',120,'1594381898411-846e7d193883'],['James Carter','Sports Performance','4.4',100,'1567013127542-490d757e51fc'],['Priya Sharma','Yoga & Mobility','4.9',80,'1518611012118-696072aa579a'],['David Wilson','HIIT & Functional','4.7',160,'1534438327276-14e5300c3a48']];
const PLANS=[['Basic',49,'Perfect for getting started.',['Access to gym facilities','Basic fitness programs','Community support']],['Pro',79,'For serious fitness and sports goals.',['All Basic features','Personalised workout plan','1-on-1 trainer support','Priority booking']],['Premium',99,'For the complete experience.',['All Pro features','Unlimited classes','Exclusive events']]];
const QUOTES=[['Emily Carter','6 months','Completely changed my fitness journey. The trainers are amazing and the community is so supportive.','Strength'],['Michael Brown','1 year','The personalised plan helped me improve my performance and build confidence. Highly recommended.','Sports training'],['Sophia Rao','8 months','Great facilities, professional coaches and a positive environment.','HIIT'],['Arjun Reddy','3 months','I started as a complete beginner. My coach adjusted every session to my pace, and now I train four days a week.','Weight loss'],['Neha Kapoor','2 years','The mobility classes made my mornings easier and my running times keep getting better.','Flexibility'],['Rohan Mehta','5 months','Booking classes is simple, the floor never feels crowded, and the staff remember your name.','General fitness']];
const FAQ=[['Can I cancel my membership anytime?','Yes. Memberships run month to month, so you can cancel from your account at any time. Your plan stays active until the end of the billing month.'],['Do you offer a free trial?','Book a free intro visit to tour the club, meet a coach and try a session before you join.'],['What are the payment options?','Pay monthly by card, UPI or net banking. A receipt is emailed after every payment.'],['Is there a joining fee?','No. There is no joining fee on any plan.'],['Are personal trainers included?','1-on-1 trainer support is included with Pro and Premium. Basic members can add sessions at any time.']];
const star='<span class="star" aria-hidden="true">★</span>';

const R={
strip:()=>`<section class="strip"><div class="wrap">${[['coach','Expert trainers','Certified and experienced'],['plan','Personalised plans','Built around your goals'],['time','Flexible schedule','Train anytime'],['team','Supportive community','Grow together']].map(x=>`<div class="fi">${I[x[0]]}<div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join('')}<a class="btn dark" href="programs.html">Explore programs</a></div></section>`,
plist:()=>`<div class="pl">${PROG.map((p,i)=>`<button type="button" data-img="${p[2]}" class="${i?'':'on'}"><h3>${p[0]}</h3><p>${p[1]}</p></button>`).join('')}</div>`,
tiles5:()=>tiles(SP5),sp4:()=>tiles(SP4),
trainers:()=>`<div class="cards4">${TRAIN.map(t=>`<article class="tr"><div class="img" data-img="${t[4]}" role="img" aria-label="${t[0]}"></div><h3>${t[0]}</h3><p>${t[1]}</p><div class="rt">${star}<b>${t[2]}</b> (${t[3]} reviews)</div></article>`).join('')}</div>`,
plans:()=>`<div class="plans">${PLANS.map((p,i)=>`<article class="plan${i==1?' pro':''}">${i==1?'<span class="bd">Most popular</span>':''}<h3>${p[0]}</h3><div class="pr">$${p[1]}<small>/month</small></div><p>${p[2]}</p><ul>${p[3].map(f=>`<li>${f}</li>`).join('')}</ul><a class="btn ${i==1?'blue':'white'}" href="login.html#signup">Select plan</a></article>`).join('')}</div>`,
quotes:()=>`<div class="tm"><div class="tms"><div class="big4">4.9</div><div class="stars" aria-hidden="true">★★★★★</div><p>Average rating from our members</p><a class="btn dark" href="login.html#signup">Join them</a></div><div class="tmg">${QUOTES.map(q=>`<figure class="q"><div class="qm" aria-hidden="true">“</div><div class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</div><p>${q[2]}</p><figcaption class="who"><span class="av">${q[0][0]}</span><div>${q[0]}<span>${q[3]} · ${q[1]}</span></div></figcaption></figure>`).join('')}</div></div>`,
chips:()=>`<div class="chips" role="group" aria-label="Filter programs">${['All','Weight Loss','Muscle Gain','Strength','Flexibility','General Fitness'].map((c,i)=>`<button type="button" class="chip" aria-pressed="${!i}" data-c="${c}">${c}</button>`).join('')}</div>`,
pcards:()=>`<div class="cards3">${CARDS.map(c=>`<article class="pc" data-cat="${c[0]}"><div class="img" data-img="${c[2]}" role="img" aria-label="${c[0]}"></div><div class="b"><h3>${c[0]} program</h3><p>${c[1]}</p><a class="lm" href="login.html#signup">Learn more</a></div></article>`).join('')}</div>`,
faq:()=>`<div class="faq">${FAQ.map((f,i)=>`<details${i?'':' open'}><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</div>`};
function tiles(a){return `<div class="tiles">${a.map(s=>`<a class="tile" href="sports.html"><div class="img" data-img="${s[2]}"></div><div class="tt"><h3>${s[0]}</h3><p>${s[1]}</p></div></a>`).join('')}</div>`}

const au=document.body.classList.contains('au'),ds=document.body.classList.contains('ds');let user=null;try{user=JSON.parse(localStorage.getItem('sfc_user'))}catch(e){}
function countUp(el){const n=+el.dataset.n,sx=el.dataset.s||'',t0=performance.now();(function f(t){const p=Math.min((t-t0)/1400,1);el.textContent=Math.round((1-Math.pow(1-p,3))*n).toLocaleString('en-IN')+sx;if(p<1)requestAnimationFrame(f)})(t0)}
if(!au&&!ds){
const pg=location.pathname.split('/').pop()||'index.html';
const nav=[['Home','index.html'],['Programs','programs.html'],['Sports','sports.html'],['Membership','membership.html'],['About','about.html']];
document.body.insertAdjacentHTML('afterbegin',`<header class="hd"><div class="wrap bar"><a class="logo" href="index.html">${LOGO}Stronger</a><nav id="nav" aria-label="Main">${nav.map(n=>`<a href="${n[1]}"${n[1]==pg?' class="on" aria-current="page"':''}>${n[0]}</a>`).join('')}</nav><form class="sr" role="search">${I.search}<input type="search" aria-label="Search the site" placeholder="Search"></form>${user?'<a class="btn blue sm" href="dashboard.html">My dashboard</a>':'<a class="btn line sm hdl" href="login.html">Login</a><a class="btn blue sm" href="login.html#signup">Join now</a>'}<button class="mt" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer class="ft"><div class="wrap"><div class="g"><div><p class="tl">Stronger every day,<br>better in every way</p><p>Customer support<br>+91 12345 67890<br>hello@strongerclub.in<br>Hyderabad, India</p></div><div><h3>Quick links</h3>${nav.map(n=>`<a href="${n[1]}">${n[0]}</a>`).join('')}</div><div><h3>Support</h3><a href="membership.html">Help center</a><a href="mailto:hello@strongerclub.in">Contact us</a><a href="login.html">Member login</a></div><div><h3>Connect with us</h3><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">Facebook</a><a href="#">X</a></div></div><small>© 2026 Stronger Fitness Club. All rights reserved.</small></div></footer>`);
const mt=$('.mt'),nv=$('#nav');
const hd=$('.hd'),pb=document.body.appendChild(Object.assign(document.createElement('div'),{className:'pb'}));
addEventListener('scroll',()=>{hd.classList.toggle('sc',scrollY>10);pb.style.transform=`scaleX(${scrollY/((document.documentElement.scrollHeight-innerHeight)||1)})`},{passive:true});
mt.onclick=()=>{const o=nv.classList.toggle('open');document.body.classList.toggle('mo',o);mt.setAttribute('aria-expanded',o);mt.setAttribute('aria-label',o?'Close menu':'Open menu')};
$('.sr').onsubmit=e=>{e.preventDefault();const q=$('.sr input').value.toLowerCase();location.href=/sport|football|tennis|run|swim|cycl|basket/.test(q)?'sports.html':/plan|member|price|cost|fee|cancel/.test(q)?'membership.html':/about|story|mission|team/.test(q)?'about.html':/login|join|sign/.test(q)?'login.html':'programs.html'};
}
$$('[data-why]').forEach(w=>w.innerHTML=w.dataset.why.split(';').map(x=>{const[i,t,d]=x.split('|');return `<div>${I[i]}<h3>${t}</h3><p>${d}</p></div>`}).join(''));
$$('[data-mount]').forEach(m=>m.outerHTML=R[m.dataset.mount]());
const imw=e=>e.matches('.hero')?1500:e.closest('.tile,.tr')?640:e.matches('.pimg')?1000:e.closest('.big,.vis')?1400:820;
const setBg=e=>{
 const target=e.matches('.hero')?document.createElement('div'):e;
 if(e.matches('.hero')){target.className='hbg img';e.prepend(target)}
 const url=U(e.dataset.img,imw(e),52),probe=new Image();
 target.classList.add('img-loading');
 probe.onload=()=>{target.style.backgroundImage=`url("${url}")`;target.classList.remove('img-loading','img-failed')};
 probe.onerror=()=>{target.style.backgroundImage='';target.classList.remove('img-loading');target.classList.add('img-failed')};
 probe.src=url;
};
const lz=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){setBg(x.target);lz.unobserve(x.target)}}),{rootMargin:'400px'});
$$('[data-img]').forEach(e=>{if(e.matches('.pl button'))return;e.matches('.hero')?setBg(e):lz.observe(e)});
/* scroll reveal, count-up, spotlight */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const e=x.target;e.classList.add('in');if(e.dataset.n)countUp(e);io.unobserve(e);setTimeout(()=>{e.classList.remove('rv','in');e.style.removeProperty('--d')},1400)}),{threshold:.15});
$$('.sh,.split>*,.cards3>*,.cards4>*,.tiles>*,.plans>*,.why>*,.grid2>*,.stats>*,.mv .c,.faq details,.fi,.mv>.sh').forEach(e=>{e.classList.add('rv');e.style.setProperty('--d',[...e.parentNode.children].indexOf(e)*110+'ms');io.observe(e)});
$$('.stats b').forEach(b=>io.observe(b));
$$('.plan').forEach(p=>p.addEventListener('pointermove',e=>{const r=p.getBoundingClientRect();p.style.setProperty('--mx',e.clientX-r.left+'px');p.style.setProperty('--my',e.clientY-r.top+'px')}));

/* home: program list drives the image */
const pi=$('#pimg');
if(pi){const bs=$$('.pl button');
 const applyImage=(id)=>{
   const url=U(id,1100,58),probe=new Image();
   probe.onload=()=>{pi.style.backgroundImage=`url("${url}")`;pi.style.opacity=1;pi.classList.remove('img-fallback')};
   probe.onerror=()=>{const fallback=U('1534438327276-14e5300c3a48',1100,55);pi.style.backgroundImage=`url("${fallback}")`;pi.style.opacity=1;pi.classList.add('img-fallback')};
   probe.src=url;
 };
 const set=b=>{bs.forEach(x=>x.classList.toggle('on',x==b));pi.style.opacity=0;setTimeout(()=>applyImage(b.dataset.img),180)};
 if(bs.length)applyImage(bs[0].dataset.img);
 bs.forEach(b=>{b.onclick=()=>set(b);b.onmouseenter=()=>{if(!b.classList.contains('on'))set(b)}});
}
/* programs: filter chips */
$$('.chip').forEach(c=>c.onclick=()=>{$$('.chip').forEach(x=>x.setAttribute('aria-pressed',x==c));$$('.pc').forEach(p=>p.hidden=c.dataset.c!='All'&&p.dataset.cat!=c.dataset.c)});
/* auth */
if(au){
const tabs=$$('.tabs button'),forms=$$('form'),msg=$('.msg');
const T={login:['Welcome back','Log in to continue to your training.'],signup:['Create your account','Join the club and start your first program.']};
const show=k=>{tabs.forEach(t=>t.setAttribute('aria-selected',t.dataset.t==k));forms.forEach(f=>f.hidden=f.dataset.f!=k);$('h1').textContent=T[k][0];$('.card>p').textContent=T[k][1];msg.textContent='';$('.help a').hidden=false};
tabs.forEach(t=>t.onclick=()=>{show(t.dataset.t);history.replaceState(null,'','#'+(t.dataset.t=='signup'?'signup':''))});
show(location.hash=='#signup'?'signup':'login');
$$('.pwt').forEach(b=>b.onclick=()=>{const i=b.previousElementSibling,s=i.type=='password';i.type=s?'text':'password';b.textContent=s?'Hide':'Show'});
forms.forEach(f=>f.onsubmit=e=>{e.preventDefault();const p=$$('input[type=password]',f);
if(f.dataset.f=='signup'&&p[0].value!=p[1].value){msg.style.color='#c0262d';msg.textContent='Passwords don’t match. Re-enter both and try again.';return}
const em=$('input[type=email]',f).value.trim(),fn=f.dataset.f=='signup'?$$('input[type=text]',f)[0].value.trim():em.split('@')[0].split(/[._\-+0-9]+/)[0],name=(fn||'Member').replace(/^./,c=>c.toUpperCase());
try{localStorage.setItem('sfc_user',JSON.stringify({name,email:em}))}catch(x){}
msg.style.color='';msg.textContent='Welcome, '+name+'. Opening your dashboard…';setTimeout(()=>location.href='dashboard.html',700)})}
