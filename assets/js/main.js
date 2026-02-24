/* ═══════════════════════════════════════════
   QANTUMIQ — MAIN.JS
   Shared functionality for all pages
═══════════════════════════════════════════ */

(function(){
'use strict';

/* ── PATH UTILS ── */
function depth(){
  const p=window.location.pathname;
  const segs=p.split('/').filter(s=>s&&!s.endsWith('.html'));
  // count how many directories deep we are
  let d=0;
  if(p.includes('/services/')||p.includes('/industries/')||
     p.includes('/company/')||p.includes('/insights/')||p.includes('/legal/')) d=1;
  return d;
}
function root(){return depth()===0?'./':'../'; }
function R(path){return root()+path;}

/* ══════════════════════════════════
   NAV INJECTION
══════════════════════════════════ */
function buildNav(){
  const r=root();
  const nav=document.createElement('nav');
  nav.id='qiq-nav';
  nav.innerHTML=`
    <a class="nav-logo" href="${r}index.html">Qantum<span>IQ</span></a>
    <ul class="nav-menu">
      <li class="nav-item">
        <button class="nav-link">Services
          <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a>
          <a href="${r}services/quantum-computing.html">Quantum Computing</a>
          <a href="${r}services/digital-transformation.html">Digital Transformation</a>
          <a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a>
          <a href="${r}services/business-process.html">Business Process Optimization</a>
          <a href="${r}services/information-insights.html">Information Insights</a>
          <a href="${r}services/management-consulting.html">Management Consulting</a>
        </div>
      </li>
      <li class="nav-item">
        <button class="nav-link">Industries
          <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="${r}industries/financial-services.html">Financial Services</a>
          <a href="${r}industries/technology.html">Technology</a>
          <a href="${r}industries/pharmaceuticals.html">Pharmaceuticals</a>
          <a href="${r}industries/healthcare.html">Healthcare</a>
          <a href="${r}industries/energy.html">Energy</a>
          <a href="${r}industries/government.html">Government</a>
          <a href="${r}industries/sustainability.html">Sustainability</a>
          <a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a>
        </div>
      </li>
      <li class="nav-item">
        <button class="nav-link">Insights
          <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="${r}insights/blog.html">Blog</a>
          <a href="${r}insights/reports.html">Reports</a>
          <a href="${r}insights/white-papers.html">White Papers</a>
          <a href="${r}insights/podcasts.html">Podcasts</a>
          <a href="${r}insights/webinars-events.html">Webinars &amp; Events</a>
        </div>
      </li>
      <li class="nav-item">
        <button class="nav-link">Company
          <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="${r}company/about.html">About Us</a>
          <a href="${r}company/careers.html">Careers</a>
          <a href="${r}company/contact.html">Contact Us</a>
        </div>
      </li>
    </ul>
    <a class="nav-cta-btn" href="${r}company/contact.html">Get Started →</a>
    <button class="hamburger" id="qiq-hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  `;
  document.body.prepend(nav);

  // Mobile menu
  const mm=document.createElement('div');
  mm.id='mobile-menu';
  mm.innerHTML=`
    <button class="mobile-close" id="qiq-mobile-close">✕</button>
    <div class="mobile-section-title">Services</div>
    <a href="${r}services/ai-ml.html">AI &amp; ML</a>
    <a href="${r}services/quantum-computing.html">Quantum Computing</a>
    <a href="${r}services/digital-transformation.html">Digital Transformation</a>
    <a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a>
    <a href="${r}services/business-process.html">BPO</a>
    <a href="${r}services/management-consulting.html">Management Consulting</a>
    <div class="mobile-section-title">Industries</div>
    <a href="${r}industries/financial-services.html">Financial</a>
    <a href="${r}industries/healthcare.html">Healthcare</a>
    <a href="${r}industries/technology.html">Technology</a>
    <a href="${r}industries/government.html">Government</a>
    <a href="${r}industries/energy.html">Energy</a>
    <a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a>
    <div class="mobile-section-title">Insights</div>
    <a href="${r}insights/blog.html">Blog</a>
    <a href="${r}insights/reports.html">Reports</a>
    <div class="mobile-section-title">Company</div>
    <a href="${r}company/about.html">About</a>
    <a href="${r}company/careers.html">Careers</a>
    <a href="${r}company/contact.html" style="color:var(--cyan)">Contact</a>
  `;
  document.body.prepend(mm);

  document.getElementById('qiq-hamburger').addEventListener('click',()=>mm.classList.add('open'));
  document.getElementById('qiq-mobile-close').addEventListener('click',()=>mm.classList.remove('open'));

  // Highlight active
  const cur=window.location.pathname;
  nav.querySelectorAll('.nav-dropdown a').forEach(a=>{
    if(cur.endsWith(a.getAttribute('href').replace('../','').replace('./',''))){
      a.style.color='var(--cyan)';
    }
  });
}

/* ══════════════════════════════════
   FOOTER INJECTION
══════════════════════════════════ */
function buildFooter(){
  const r=root();
  const f=document.getElementById('qiq-footer');
  if(!f) return;
  f.innerHTML=`
    <div class="footer-grid">
      <div>
        <a class="footer-logo" href="${r}index.html">Qantum<span>IQ</span></a>
        <p class="footer-tagline">Advanced consulting for the quantum age — helping organizations transform through technology and strategic innovation.</p>
        <div class="footer-socials">
          <a class="footer-social" href="https://linkedin.com" target="_blank" rel="noopener">in</a>
          <a class="footer-social" href="https://twitter.com" target="_blank" rel="noopener">𝕏</a>
          <a class="footer-social" href="https://youtube.com" target="_blank" rel="noopener">▶</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <ul class="footer-links">
          <li><a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a></li>
          <li><a href="${r}services/quantum-computing.html">Quantum Computing</a></li>
          <li><a href="${r}services/digital-transformation.html">Digital Transformation</a></li>
          <li><a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a></li>
          <li><a href="${r}services/business-process.html">Business Process Optimization</a></li>
          <li><a href="${r}services/information-insights.html">Information Insights</a></li>
          <li><a href="${r}services/management-consulting.html">Management Consulting</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Industries</div>
        <ul class="footer-links">
          <li><a href="${r}industries/financial-services.html">Financial Services</a></li>
          <li><a href="${r}industries/technology.html">Technology</a></li>
          <li><a href="${r}industries/pharmaceuticals.html">Pharmaceuticals</a></li>
          <li><a href="${r}industries/healthcare.html">Healthcare</a></li>
          <li><a href="${r}industries/energy.html">Energy</a></li>
          <li><a href="${r}industries/government.html">Government</a></li>
          <li><a href="${r}industries/sustainability.html">Sustainability</a></li>
          <li><a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links" style="margin-bottom:1.5rem">
          <li><a href="${r}company/about.html">About Us</a></li>
          <li><a href="${r}insights/blog.html">Insights</a></li>
          <li><a href="${r}company/careers.html">Careers</a></li>
          <li><a href="${r}company/contact.html">Contact</a></li>
          <li><a href="${r}legal/privacy-policy.html">Privacy Policy</a></li>
        </ul>
        <div class="footer-col-title">Global HQ</div>
        <div class="footer-contact-line"><span class="footer-contact-icon">📍</span><span>5000 Thayer Center STE C<br>Oakland, MD 21550, USA</span></div>
        <div class="footer-contact-line"><span class="footer-contact-icon">📞</span><span>+1 (800) 555-QNTM</span></div>
        <div class="footer-contact-line"><span class="footer-contact-icon">✉️</span><span>info@qantumiq.com</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2025 QantumIQ Consulting. All rights reserved.</div>
      <div class="footer-legal">
        <a href="${r}legal/privacy-policy.html">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════
   CANVAS PARTICLE NETWORK
══════════════════════════════════ */
function initCanvas(){
  const el=document.getElementById('qiq-canvas');
  if(!el) return;
  const ctx=el.getContext('2d');
  let W,H,pts=[];
  function resize(){W=el.width=window.innerWidth;H=el.height=window.innerHeight;}
  class Pt{
    constructor(){this.reset();}
    reset(){this.x=Math.random()*W;this.y=Math.random()*H;this.vx=(Math.random()-.5)*.35;this.vy=(Math.random()-.5)*.35;this.a=Math.random()*.5+.1;this.r=Math.random()*1.4+.4;}
    step(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>W||this.y<0||this.y>H)this.reset();}
    draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,212,255,${this.a})`;ctx.fill();}
  }
  function init(){resize();pts=Array.from({length:80},()=>new Pt());}
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{p.step();p.draw();});
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<115){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(0,212,255,${(1-d/115)*.12})`;ctx.lineWidth=.5;ctx.stroke();}
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize',()=>{resize();});
  init();draw();
}

/* ══════════════════════════════════
   HERO IMAGE — daily cycling
══════════════════════════════════ */
const HERO_IMAGES={
  // arrays of Unsplash photo IDs per theme
  home:['1518770522927-58de48bf6819','1635070041409-7e6de09b1e50','1526374965328-7f61d4dc18c5','1451187580459-43490279c0fa','1484662020986-5e838777f7e3'],
  ai:['1677442135703-1787eea5ce01','1555255707-c0756bbdddcf','1527430253228-e93688616504','1620712943543-bcc4688e7485','1603969409447-ba86143a03f6'],
  quantum:['1635070041078-e65d30d25158','1635070041409-7e6de09b1e50','1451187580459-43490279c0fa','1569161031106-4a1efdb1e30e','1576091160399-112ba8d25d1d'],
  digital:['1573804633927-bfcbcd909acd','1551288049-bebda4e38f71','1485827404703-89b55fcc595e','1460925895917-afdab827c52f','1504639725590-34d0984388bd'],
  business:['1486406146923-c34af65a3b94','1507679799037-255426cc6460','1541746972996-4e0b0f93e72a','1553484771-cc0d9b8c2b33','1600880292203-757bb62b4baf'],
  csuite:['1560250097-0dc05ae4be2d','1507003211169-0a1dd7228f2d','1573496359142-b8d87734a5a2','1522071820081-009f0129c71c','1600880292203-757bb62b4baf'],
  finance:['1611974789855-9c2a0a7236a3','1611974789855-9c2a0a7236a3','1554224155-8d04cb21cd6c','1559526324-593bc073d938','1565514020179-026b92b84bb6'],
  healthcare:['1576091160399-112ba8d25d1d','1559757148-5c350d0d3c56','1530026405859-7bbc0c57d67e','1587854692152-cbe660dbde88','1579684385127-1ef15d508118'],
  energy:['1473341304170-971dccb5ac1e','1466611653911-0628073e7b24','1509391366360-7d377ab4fa76','1548337138-e87d889cc369','1532601224476-15a79b29f7b3'],
  government:['1568867249975-1fb4cf4dbb90','1501927893791-0a39a6e7f5f2','1521747116042-5a810fda9664','1523995462485-3d171b5c8fa9','1434030216411-0b793f4b6935'],
  sustainability:['1497440001374-f26997328c1b','1518531933037-91b2f5f229cc','1464938050520-ef2270bb8ce8','1441974231531-c6227db76b6e','1542601906990-b4d3fb778b09'],
  pharma:['1576671081837-49000212a99a','1582719201952-ea4b9b3e8b12','1579684453377-48ec05c6b30a','1560264418-c4445382edbc','1530026405859-7bbc0c57d67e'],
  media:['1598300042247-d088f8ab3a91','1522869635100-9f4c5e86aa37','1485846047110-ae05781c800e','1492691527719-9d1e7e1c9a90','1611162617213-7d7a39e9b1d7'],
  tech:['1518770522927-58de48bf6819','1485827404703-89b55fcc595e','1518770522927-58de48bf6819','1571171637578-41bc2dd41cd2','1512756290469-ec264b7fbf87'],
  insights:['1507679799037-255426cc6460','1454165804606-c3d57bc86b40','1434494979901-5bd6fd40cd87','1516321318423-f06f85e504b3','1455390582262-044cdead277a'],
  careers:['1521737711867-e3b97375f902','1522202176988-66273c2fd55f','1582213782179-e0d53f98f2ca','1560264418-c4445382edbc','1600880292203-757bb62b4baf'],
  about:['1522071820081-009f0129c71c','1605810230434-7631ac76ec81','1587560699334-bcd073c7ebe6','1600880292203-757bb62b4baf','1521737711867-e3b97375f902'],
  contact:['1486406146923-c34af65a3b94','1473341304170-971dccb5ac1e','1460925895917-afdab827c52f','1551288049-bebda4e38f71','1484662020986-5e838777f7e3']
};

function getDailyImage(theme){
  const imgs=HERO_IMAGES[theme]||HERO_IMAGES.home;
  const day=Math.floor(Date.now()/86400000);
  const idx=day%imgs.length;
  const id=imgs[idx];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=80`;
}

window.QIQ={getDailyImage};

function applyHeroImage(){
  const hero=document.querySelector('[data-hero-theme]');
  if(!hero)return;
  const theme=hero.getAttribute('data-hero-theme');
  const url=getDailyImage(theme);
  const img=new Image();
  img.onload=()=>{hero.style.backgroundImage=`url('${url}')`};
  img.onerror=()=>{}; // silent fallback to CSS gradient
  img.src=url;
}

/* ══════════════════════════════════
   NEWS / INSIGHTS FEED
══════════════════════════════════ */
const RSS_SOURCES=[
  {name:'MIT Technology Review', url:'https://www.technologyreview.com/feed/', color:'#00D4FF'},
  {name:'Wired',                 url:'https://www.wired.com/feed/rss',         color:'#C9A84C'},
  {name:'IEEE Spectrum',         url:'https://spectrum.ieee.org/rss/blog/tech-talk/0', color:'#00D4FF'},
  {name:'Quantum Computing Report', url:'https://quantumcomputingreport.com/feed/', color:'#C9A84C'},
  {name:'HBR',                   url:'https://feeds.hbr.org/harvardbusiness',  color:'#00D4FF'},
  {name:'Nature News',           url:'https://www.nature.com/news.rss',        color:'#C9A84C'},
];

async function loadNewsFeed(containerId, topicFilter){
  const el=document.getElementById(containerId);
  if(!el)return;
  const day=Math.floor(Date.now()/86400000);
  const src=RSS_SOURCES[day%RSS_SOURCES.length];
  const src2=RSS_SOURCES[(day+1)%RSS_SOURCES.length];
  const src3=RSS_SOURCES[(day+2)%RSS_SOURCES.length];
  el.innerHTML='<div class="news-loading">Loading latest insights from leading sources…</div>';
  let items=[];
  async function fetchFeed(s){
    try{
      const enc=encodeURIComponent(s.url);
      const res=await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${enc}&count=4`);
      const data=await res.json();
      if(data.status==='ok') return data.items.map(i=>({...i,_source:s.name,_color:s.color}));
    }catch(e){}
    return [];
  }
  const [a,b,c]=await Promise.all([fetchFeed(src),fetchFeed(src2),fetchFeed(src3)]);
  items=[...a,...b,...c].slice(0,9);
  if(items.length===0){el.innerHTML='<div class="news-loading">Check back soon for the latest industry intelligence.</div>';return;}
  el.innerHTML=items.map(item=>{
    const date=item.pubDate?new Date(item.pubDate).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'';
    const title=(item.title||'').replace(/&amp;/g,'&').replace(/&#\d+;/g,'').slice(0,90)+(item.title&&item.title.length>90?'…':'');
    const link=item.link||'#';
    return `<a class="news-item" href="${link}" target="_blank" rel="noopener noreferrer">
      <div class="news-source" style="color:${item._color}">${item._source}</div>
      <div class="news-title">${title}</div>
      <div class="news-date">${date} &nbsp;↗</div>
    </a>`;
  }).join('');
}

window.QIQ.loadNewsFeed=loadNewsFeed;

/* ══════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════ */
function initReveal(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('visible'),i*70);
        obs.unobserve(e.target);
      }
    });
  },{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

/* ══════════════════════════════════
   INIT
══════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  buildNav();
  buildFooter();
  initCanvas();
  applyHeroImage();
  initReveal();
});

})();
