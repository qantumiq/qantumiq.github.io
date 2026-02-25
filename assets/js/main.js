/* ═══════════════════════════════════════════════════════════
   QANTUMIQ — main.js v7
   Light-first editorial theme
═══════════════════════════════════════════════════════════ */
(function(){
'use strict';

/* ─── NAV BUILD ─── */
function buildNav(){
  const isRoot=!location.pathname.includes('/company/')&&!location.pathname.includes('/services/')&&!location.pathname.includes('/industries/')&&!location.pathname.includes('/insights/')&&!location.pathname.includes('/legal/');
  const r=isRoot?'':'../';

  const nav=document.createElement('nav');
  nav.id='qiq-nav';
  nav.innerHTML=`
<a class="nav-logo" href="${r}index.html"><img class="nav-logo-img light" src="${r}assets/logo.svg" alt="QantumIQ"/><img class="nav-logo-img dark" src="${r}assets/logo-dark.svg" alt="QantumIQ"/></a>
<ul class="nav-menu" id="nav-menu">
  <li class="nav-item"><a class="nav-link" href="${r}index.html" style="text-decoration:none;">Home</a></li>
  <li class="nav-item" data-menu="services">
    <button class="nav-link">Services<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a>
      <a href="${r}services/quantum-computing.html">Quantum Computing</a>
      <a href="${r}services/digital-transformation.html">Digital Transformation</a>
      <a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a>
      <a href="${r}services/business-process.html">Business Process</a>
      <a href="${r}services/information-insights.html">Information &amp; Insights</a>
      <a href="${r}services/management-consulting.html">Management Consulting</a>
      <a href="${r}services/executive-staffing.html">Executive Staffing</a>
    </div>
  </li>
  <li class="nav-item" data-menu="industries">
    <button class="nav-link">Industries<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}industries/financial-services.html">Financial Services</a>
      <a href="${r}industries/healthcare.html">Healthcare</a>
      <a href="${r}industries/pharmaceuticals.html">Pharmaceuticals</a>
      <a href="${r}industries/technology.html">Technology</a>
      <a href="${r}industries/energy.html">Energy</a>
      <a href="${r}industries/government.html">Government</a>
      <a href="${r}industries/sustainability.html">Sustainability</a>
      <a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a>
    </div>
  </li>
  <li class="nav-item" data-menu="insights">
    <button class="nav-link">Insights<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}insights/blog.html">Blog</a>
      <a href="${r}insights/case-studies.html">Case Studies</a>
      <a href="${r}insights/white-papers.html">White Papers</a>
      <a href="${r}insights/news.html">News</a>
      <a href="${r}insights/webinars-events.html">Webinars &amp; Events</a>
    </div>
  </li>
  <li class="nav-item" data-menu="company">
    <button class="nav-link">Company<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}company/about.html">About Us</a>
      <a href="${r}company/partners-clients.html">Partners &amp; Clients</a>
      <a href="${r}company/careers.html">Careers</a>
      <a href="${r}company/contact.html">Contact Us</a>
    </div>
  </li>
</ul>
<div style="display:flex;align-items:center;gap:.2rem;">
  <button id="theme-toggle" aria-label="Toggle theme">☀️</button>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <a class="nav-cta" href="${r}company/contact.html">Contact Us</a>
</div>

<div id="mobile-menu">
  <button class="mobile-close" id="mob-close">✕</button>
  <a href="${r}index.html" style="font-weight:700;color:var(--blue);padding:.7rem 0;">🏠 Home</a>
  <div class="mob-heading">Services</div>
  <a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a>
  <a href="${r}services/quantum-computing.html">Quantum Computing</a>
  <a href="${r}services/digital-transformation.html">Digital Transformation</a>
  <a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a>
  <a href="${r}services/business-process.html">Business Process</a>
  <a href="${r}services/information-insights.html">Information &amp; Insights</a>
  <a href="${r}services/management-consulting.html">Management Consulting</a>
  <a href="${r}services/executive-staffing.html">Executive Staffing</a>
  <div class="mob-heading">Industries</div>
  <a href="${r}industries/financial-services.html">Financial Services</a>
  <a href="${r}industries/healthcare.html">Healthcare</a>
  <a href="${r}industries/pharmaceuticals.html">Pharmaceuticals</a>
  <a href="${r}industries/technology.html">Technology</a>
  <a href="${r}industries/energy.html">Energy</a>
  <a href="${r}industries/government.html">Government</a>
  <a href="${r}industries/sustainability.html">Sustainability</a>
  <a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a>
  <div class="mob-heading">Insights</div>
  <a href="${r}insights/blog.html">Blog</a>
  <a href="${r}insights/case-studies.html">Case Studies</a>
  <a href="${r}insights/white-papers.html">White Papers</a>
  <a href="${r}insights/news.html">News</a>
  <a href="${r}insights/webinars-events.html">Webinars &amp; Events</a>
  <div class="mob-heading">Company</div>
  <a href="${r}company/about.html">About Us</a>
  <a href="${r}company/partners-clients.html">Partners &amp; Clients</a>
  <a href="${r}company/careers.html">Careers</a>
  <a class="mob-cta" href="${r}company/contact.html">Contact Us</a>
</div>`;

  document.body.insertBefore(nav, document.body.firstChild);

  // Nav scroll shadow
  window.addEventListener('scroll',()=>{
    nav.classList.toggle('scrolled', window.scrollY > 30);
  },{passive:true});

  // Dropdown with hover + delay bridge
  const LEAVE_DELAY=200;
  nav.querySelectorAll('.nav-item[data-menu]').forEach(item=>{
    let t;
    item.addEventListener('mouseenter',()=>{
      clearTimeout(t);
      nav.querySelectorAll('.nav-item').forEach(i=>i!==item&&i.classList.remove('is-open'));
      item.classList.add('is-open');
    });
    item.addEventListener('mouseleave',()=>{
      t=setTimeout(()=>item.classList.remove('is-open'), LEAVE_DELAY);
    });
    // Keyboard
    const btn=item.querySelector('.nav-link');
    btn.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();item.classList.toggle('is-open');}
      if(e.key==='Escape')item.classList.remove('is-open');
    });
  });

  // Mobile
  const mob=nav.querySelector('#mobile-menu');
  nav.querySelector('#hamburger').addEventListener('click',()=>mob.classList.add('open'));
  nav.querySelector('#mob-close').addEventListener('click',()=>mob.classList.remove('open'));
  document.addEventListener('click',e=>{
    if(!nav.contains(e.target)) nav.querySelectorAll('.nav-item').forEach(i=>i.classList.remove('is-open'));
  });
}

/* ─── FOOTER BUILD ─── */
function buildFooter(){
  const isRoot=!location.pathname.includes('/company/')&&!location.pathname.includes('/services/')&&!location.pathname.includes('/industries/')&&!location.pathname.includes('/insights/')&&!location.pathname.includes('/legal/');
  const r=isRoot?'':'../';

  const footer=document.getElementById('qiq-footer');
  if(!footer)return;
  footer.innerHTML=`
<div class="footer-inner">
  <div>
    <a class="footer-logo" href="${r}index.html"><img src="${r}assets/logo-dark.svg" alt="QantumIQ" style="height:32px;"/></a>
    <p class="footer-desc">Advanced consulting for organizations navigating the quantum age — where AI, quantum computing, and human ingenuity converge to create transformational advantage.</p>
    <div class="footer-social">
      <a href="https://linkedin.com/company/qantumiq" aria-label="LinkedIn">in</a>
      <a href="https://twitter.com/qantumiq" aria-label="X/Twitter">𝕏</a>
    </div>
  </div>
  <div class="footer-col">
    <h4>Services</h4>
    <ul>
      <li><a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a></li>
      <li><a href="${r}services/quantum-computing.html">Quantum Computing</a></li>
      <li><a href="${r}services/digital-transformation.html">Digital Transformation</a></li>
      <li><a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a></li>
      <li><a href="${r}services/business-process.html">Business Process</a></li>
      <li><a href="${r}services/information-insights.html">Information &amp; Insights</a></li>
      <li><a href="${r}services/management-consulting.html">Management Consulting</a></li>
      <li><a href="${r}services/executive-staffing.html">Executive Staffing</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Industries</h4>
    <ul>
      <li><a href="${r}industries/financial-services.html">Financial Services</a></li>
      <li><a href="${r}industries/healthcare.html">Healthcare</a></li>
      <li><a href="${r}industries/pharmaceuticals.html">Pharmaceuticals</a></li>
      <li><a href="${r}industries/technology.html">Technology</a></li>
      <li><a href="${r}industries/energy.html">Energy</a></li>
      <li><a href="${r}industries/government.html">Government</a></li>
      <li><a href="${r}industries/sustainability.html">Sustainability</a></li>
      <li><a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Company</h4>
    <ul>
      <li><a href="${r}company/about.html">About Us</a></li>
      <li><a href="${r}company/partners-clients.html">Partners &amp; Clients</a></li>
      <li><a href="${r}insights/news.html">News</a></li>
      <li><a href="${r}insights/white-papers.html">White Papers</a></li>
      <li><a href="${r}company/careers.html">Careers</a></li>
      <li><a href="${r}company/contact.html">Contact</a></li>
      <li><a href="${r}legal/privacy-policy.html">Privacy Policy</a></li>
    </ul>
  </div>
  <div class="footer-col footer-contact">
    <h4>Contact Us</h4>
    <p>📍 5000 Thayer Center STE C<br>Oakland, MD 21550, USA</p>
    <p style="margin-top:.8rem;">📞 <a href="tel:+13013347686">+1 (301) 334-QNTM</a></p>
    <p style="margin-top:.8rem;">✉️ <a href="mailto:info@qantumiq.com">info@qantumiq.com</a></p>
    <p style="margin-top:.8rem;">💼 <a href="mailto:consulting@qantumiq.com">consulting@qantumiq.com</a></p>
  </div>
</div>
<div class="footer-bottom">
  <span>© 2026 QantumIQ Consulting. All rights reserved.</span>
  <span>500+ Clients · 40+ Partners · 15+ Years</span>
</div>`;
}

/* ─── THEME TOGGLE ─── */
function initThemeToggle(){
  const btn=document.getElementById('theme-toggle');
  if(!btn)return;
  const saved=localStorage.getItem('qiq-theme');
  if(saved==='dark'){
    document.documentElement.setAttribute('data-theme','dark');
    btn.textContent='🌙';
  } else {
    btn.textContent='☀️';
  }
  btn.addEventListener('click',()=>{
    const isDark=document.documentElement.getAttribute('data-theme')==='dark';
    if(isDark){
      document.documentElement.removeAttribute('data-theme');
      btn.textContent='☀️';
      localStorage.setItem('qiq-theme','light');
    } else {
      document.documentElement.setAttribute('data-theme','dark');
      btn.textContent='🌙';
      localStorage.setItem('qiq-theme','dark');
    }
    initCanvas(); // reinitialise canvas for dark mode
  });
}

/* ─── DARK MODE CANVAS ─── */
function initCanvas(){
  const el=document.getElementById('qiq-canvas');
  if(!el)return;
  if(document.documentElement.getAttribute('data-theme')!=='dark'){el.style.display='none';return;}
  el.style.display='block';
  const ctx=el.getContext('2d');
  let W,H,particles=[];
  function resize(){W=el.width=window.innerWidth;H=el.height=window.innerHeight;}
  resize();
  window.addEventListener('resize',resize,{passive:true});
  for(let i=0;i<60;i++){
    particles.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.3});
  }
  let raf;
  function draw(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;
      if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(77,143,255,.35)';ctx.fill();
    });
    particles.forEach((a,i)=>{
      for(let j=i+1;j<particles.length;j++){
        const b=particles[j];
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<130){
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(77,143,255,${.08*(1-d/130)})`;ctx.lineWidth=.6;ctx.stroke();
        }
      }
    });
    raf=requestAnimationFrame(draw);
  }
  cancelAnimationFrame(raf);draw();
}

/* ═══════════════════════════════════════════════
   HERO SLIDESHOW — 5-image cycling Ken Burns
   Uses picsum.photos with curated professional IDs
═══════════════════════════════════════════════ */

/* Curated picsum IDs — known professional photography */
const HERO_POOLS={
  home:       [3,7,10,60,82],
  ai:         [1,6,12,24,28],
  quantum:    [9,16,26,35,42],
  digital:    [15,19,30,50,57],
  csuite:     [64,65,67,68,70],
  business:   [74,75,77,79,84],
  information:[87,88,90,91,96],
  management: [97,99,100,101,102],
  finance:    [110,111,112,113,114],
  healthcare: [115,116,119,120,121],
  tech:       [122,124,125,126,127],
  energy:     [128,129,130,131,132],
  government: [133,134,135,136,137],
  sustainability:[138,139,140,141,142],
  pharma:     [143,144,145,146,147],
  media:      [148,149,150,151,152],
  insights:   [153,154,155,156,157],
  about:      [158,159,160,162,163],
  contact:    [164,165,166,167,168],
  careers:    [169,170,171,172,173],
  executive:  [174,175,177,178,180],
  news:       [181,183,184,186,188],
  whitepapers:[189,190,191,192,193],
  casestudies:[194,195,196,197,198],
};

/* Photo pools for content sections — diverse, professional */
const PHOTO_POOL_SM=[
  // Business / office / people
  91,147,160,177,211,225,247,265,
  287,301,326,338,365,374,393,401,
  // Technology / data
  119,159,239,260,300,325,376,430,
  445,460,479,493,511,526,547,562,
  // Architecture / city
  7,14,22,50,57,218,237,257,271,292,
  // Nature / environment
  96,106,134,138,184,209,236,259,
];
const PHOTO_POOL_WIDE=[
  // Full-width landscape imagery
  3,7,10,15,20,24,26,28,30,32,
  42,45,50,57,60,64,67,70,74,77,
  82,84,87,88,90,91,96,97,99,100,
  110,112,116,119,122,128,133,138,
  143,148,153,158,163,166,172,177,
];

let _smIdx  = Math.floor(Date.now()/86400000) % PHOTO_POOL_SM.length;
let _wideIdx= Math.floor(Date.now()/86400000) % PHOTO_POOL_WIDE.length;

function nextSmPhoto(){
  const id=PHOTO_POOL_SM[_smIdx % PHOTO_POOL_SM.length];
  _smIdx++;
  return `https://picsum.photos/id/${id}/600/340`;
}
function nextWidePhoto(){
  const id=PHOTO_POOL_WIDE[_wideIdx % PHOTO_POOL_WIDE.length];
  _wideIdx++;
  return `https://picsum.photos/id/${id}/1200/600`;
}

function initHeroSlideshow(){
  const hero=document.querySelector('[data-hero-theme]');
  if(!hero)return;
  const theme=hero.getAttribute('data-hero-theme');
  const pool=HERO_POOLS[theme]||HERO_POOLS.home;

  // Slides container
  const slidesEl=document.createElement('div');
  slidesEl.className='hero-slides';
  hero.insertBefore(slidesEl,hero.firstChild);

  // Overlay
  const overlay=document.createElement('div');
  overlay.className='hero-overlay';
  hero.insertBefore(overlay,hero.children[1]);

  // Create slides
  const slides=pool.map((id,i)=>{
    const s=document.createElement('div');
    s.className='hero-slide'+(i===0?' active':'');
    slidesEl.appendChild(s);
    const img=new Image();
    img.crossOrigin='anonymous';
    img.onload=()=>{ s.style.backgroundImage=`url('${img.src}')`; };
    img.src=`https://picsum.photos/id/${id}/1600/900`;
    return s;
  });

  // Progress dots
  const dots=document.createElement('div');
  dots.className='hero-dots';
  pool.forEach((_,i)=>{
    const dot=document.createElement('button');
    dot.className='hero-dot'+(i===0?' active':'');
    dot.setAttribute('aria-label','Slide '+(i+1));
    dot.addEventListener('click',()=>goTo(i));
    dots.appendChild(dot);
  });
  hero.appendChild(dots);

  let current=0, timer;
  let heroSpeed=parseInt(localStorage.getItem('qiq-hero-speed'))||7500;
  function goTo(idx){
    slides[current].classList.remove('active');
    dots.children[current].classList.remove('active');
    current=(idx+pool.length)%pool.length;
    slides[current].classList.add('active');
    dots.children[current].classList.add('active');
    resetTimer();
  }
  function resetTimer(){
    clearInterval(timer);
    timer=setInterval(()=>goTo(current+1),heroSpeed);
  }
  resetTimer();
  hero.addEventListener('mouseenter',()=>clearInterval(timer));
  hero.addEventListener('mouseleave',resetTimer);
  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft')goTo(current-1);
    if(e.key==='ArrowRight')goTo(current+1);
  });

  /* ── ADMIN PANEL (Ctrl+Shift+A) ── */
  const adminPanel=document.createElement('div');
  adminPanel.className='admin-panel';
  adminPanel.innerHTML=`
    <button class="admin-close" onclick="this.parentElement.classList.remove('visible')">✕</button>
    <h4>⚡ Admin Controls</h4>
    <label>Hero Slide Speed</label>
    <input type="range" id="heroSpeedSlider" min="2000" max="15000" step="500" value="${heroSpeed}"/>
    <div class="speed-val" id="heroSpeedVal">${(heroSpeed/1000).toFixed(1)}s</div>
  `;
  document.body.appendChild(adminPanel);

  const slider=document.getElementById('heroSpeedSlider');
  const speedVal=document.getElementById('heroSpeedVal');
  slider.addEventListener('input',function(){
    heroSpeed=parseInt(this.value);
    localStorage.setItem('qiq-hero-speed',heroSpeed);
    speedVal.textContent=(heroSpeed/1000).toFixed(1)+'s';
    resetTimer();
  });

  document.addEventListener('keydown',function(e){
    if(e.ctrlKey&&e.shiftKey&&e.key==='A'){
      e.preventDefault();
      adminPanel.classList.toggle('visible');
    }
  });
}

/* ═══════════════════════════════════════════════
   CONTENT PHOTO INJECTION
   Adds cycling professional photos to cards, sections
═══════════════════════════════════════════════ */
function injectContentPhotos(){
  // 1. Insight cards
  document.querySelectorAll('.insight-card').forEach(card=>{
    if(card.querySelector('.insight-photo'))return;
    const url=nextSmPhoto();
    const photo=document.createElement('div');
    photo.className='insight-photo';
    photo.style.backgroundImage=`url('${url}')`;
    const body=document.createElement('div');
    body.className='insight-card-body';
    while(card.firstChild)body.appendChild(card.firstChild);
    card.appendChild(photo);
    card.appendChild(body);
    card.insertBefore(photo,card.firstChild);
  });

  // 2. Story cards — inject photo into story-card-photo divs
  document.querySelectorAll('.story-card').forEach(card=>{
    const photoDiv=card.querySelector('.story-card-photo');
    if(!photoDiv)return;
    if(photoDiv.style.backgroundImage)return;
    photoDiv.style.backgroundImage=`url('${nextSmPhoto()}')`;
  });

  // 3. Photo sections
  document.querySelectorAll('.photo-section-bg,[data-photo-src]').forEach(el=>{
    if(el.style.backgroundImage)return;
    el.style.backgroundImage=`url('${nextWidePhoto()}')`;
  });

  // 4. Split sections
  document.querySelectorAll('.split-photo').forEach(el=>{
    if(el.style.backgroundImage)return;
    el.style.backgroundImage=`url('${nextWidePhoto()}')`;
  });

  // 5. CTA band backgrounds
  document.querySelectorAll('.cta-band-bg').forEach(el=>{
    if(el.style.backgroundImage)return;
    el.style.backgroundImage=`url('${nextWidePhoto()}')`;
  });

  // 6. Report / whitepaper cards
  document.querySelectorAll('.report-card, .paper-card').forEach(card=>{
    if(card.querySelector('.card-photo'))return;
    const ph=document.createElement('div');
    ph.className='card-photo';
    ph.style.cssText=`width:100%;height:175px;background-size:cover;background-position:center;background-image:url('${nextSmPhoto()}');margin-bottom:1.2rem;flex-shrink:0;`;
    card.insertBefore(ph, card.firstChild);
  });
}

/* ═══════════════════════════════════════════════
   NEWS FEED — curated + live RSS
═══════════════════════════════════════════════ */
const CURATED_NEWS=[
  {source:'MIT Technology Review',title:'The Next Wave of AI Agents Is Already Here — And They\'re Reshaping Enterprise Workflows',url:'https://technologyreview.com'},
  {source:'IEEE Spectrum',title:'Quantum Error Correction Milestone Brings Fault-Tolerant Computing Closer to Reality',url:'https://spectrum.ieee.org'},
  {source:'Harvard Business Review',title:'Why Most AI Transformations Fail — and the Six Factors That Make Them Succeed',url:'https://hbr.org'},
  {source:'Nature',title:'Large Language Models Show Surprising Capability in Scientific Reasoning Benchmarks',url:'https://nature.com'},
  {source:'McKinsey',title:'The State of AI in 2025: Adoption Has Crossed the Chasm, But ROI Remains Elusive',url:'https://mckinsey.com'},
  {source:'IBM Research',title:'Advancing Quantum-Safe Cryptography: A Roadmap for Enterprise Migration',url:'https://research.ibm.com'},
  {source:'Wired',title:'Digital Twins Are Becoming the Nervous System of Modern Manufacturing Operations',url:'https://wired.com'},
  {source:'Deloitte Insights',title:'The Generative AI Inflection Point: How Organizations Are Moving From Pilot to Production',url:'https://www2.deloitte.com/insights'},
  {source:'World Economic Forum',title:'Responsible AI Governance: A Framework for the Age of Agentic Systems',url:'https://weforum.org'},
  {source:'Gartner',title:'2026 Top Strategic Technology Trends: Contextual Intelligence Leads the Pack',url:'https://gartner.com'},
  {source:'NIST',title:'Post-Quantum Cryptography Standards: Implementation Guidance for Enterprises',url:'https://nist.gov'},
  {source:'Financial Times',title:'The Race for Quantum Supremacy Enters Its Industrial Phase',url:'https://ft.com'},
];

function loadNewsFeed(containerId){
  const container=document.getElementById(containerId);
  if(!container)return;
  const day=Math.floor(Date.now()/86400000);
  const offset=day%CURATED_NEWS.length;
  const items=[...CURATED_NEWS.slice(offset),...CURATED_NEWS.slice(0,offset)].slice(0,9);
  renderNews(container, items);
  // Try live feed silently
  const feed='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FTheHackersNews&count=9&api_key=tqmhcvuausvdakz7s7mcvfmyexbcnhwufxlrjjnw';
  const ctrl=new AbortController();
  const timeout=setTimeout(()=>ctrl.abort(),4500);
  fetch(feed,{signal:ctrl.signal})
    .then(r=>r.json())
    .then(d=>{
      clearTimeout(timeout);
      if(d&&d.items&&d.items.length>0){
        const live=d.items.slice(0,9).map(i=>({source:d.feed.title||'Tech News',title:i.title,url:i.link}));
        renderNews(container,live);
      }
    })
    .catch(()=>clearTimeout(timeout));
}

function renderNews(container, items){
  const today=new Date();
  container.innerHTML=items.map((item,i)=>{
    const d=new Date(today-i*86400000*1.4);
    const date=d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    return `<a class="news-item" href="${item.url}" target="_blank" rel="noopener">
  <div class="news-source">${item.source}</div>
  <div class="news-title">${item.title}</div>
  <div class="news-date">${date}</div>
</a>`;
  }).join('');
  if(typeof QIQ!=='undefined'&&QIQ.injectContentPhotos)QIQ.injectContentPhotos();
}

/* ═══════════════════════════════════════════════
   ANIMATED COUNTERS
═══════════════════════════════════════════════ */
function initCounters(){
  if(!('IntersectionObserver' in window))return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      const el=e.target;
      const raw=el.dataset.count;
      if(!raw)return;
      const target=parseFloat(raw);
      const isFloat=raw.includes('.');
      const suffix=el.dataset.suffix||'';
      const prefix=el.dataset.prefix||'';
      const dur=1800;
      const start=performance.now();
      function tick(now){
        const p=Math.min((now-start)/dur,1);
        const eased=1-Math.pow(1-p,3);
        const val=target*eased;
        el.textContent=prefix+(isFloat?val.toFixed(1):Math.round(val))+suffix;
        if(p<1)requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  },{threshold:.4});
  document.querySelectorAll('.stat-num').forEach(el=>{
    const text=el.textContent.replace(/[^0-9.]/g,'');
    if(!text)return;
    const num=parseFloat(text);
    if(isNaN(num)||num<10)return;
    const plus=el.querySelector('.plus');
    const plusText=plus?plus.textContent:'';
    el.dataset.count=text;
    el.textContent=el.textContent.replace(text,'0'+(plus?'':plusText));
    if(plus)el.appendChild(plus);
    obs.observe(el);
  });
}

/* ═══════════════════════════════════════════════
   REVEAL ON SCROLL
═══════════════════════════════════════════════ */
function initReveal(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));
    return;
  }
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target);}
    });
  },{threshold:.06,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',function(){
  buildNav();
  buildFooter();
  initThemeToggle();
  initCanvas();
  initHeroSlideshow();
  injectContentPhotos();
  initReveal();
  setTimeout(initCounters, 350);
});

// Expose for external calls (news feed etc)
window.QIQ={loadNewsFeed,injectContentPhotos};

})();
