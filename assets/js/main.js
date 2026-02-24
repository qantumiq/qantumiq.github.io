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
/* ══════════════════════════════════
   HERO IMAGE — daily cycling via picsum.photos
   picsum.photos/seed/{seed}/W/H — always works,
   no API key, deterministic from seed.
   Theme keyword controls the seed so pages get
   distinct but consistent daily images.
══════════════════════════════════ */

// Map theme names to numeric seed bases (avoids keyword clashes)
const THEME_SEEDS = {
  home:       100,
  ai:         200,
  quantum:    300,
  digital:    400,
  business:   500,
  csuite:     600,
  finance:    700,
  healthcare: 800,
  energy:     900,
  government: 1000,
  sustainability: 1100,
  pharma:     1200,
  media:      1300,
  tech:       1400,
  insights:   1500,
  careers:    1600,
  about:      1700,
  contact:    1800,
};

function getDailyImage(theme) {
  const base  = THEME_SEEDS[theme] || 100;
  const day   = Math.floor(Date.now() / 86400000); // changes each day
  const seed  = base + (day % 50);                 // 50 distinct images per theme
  // 1400×500 is wide enough for a banner, small enough to load fast
  return `https://picsum.photos/seed/${seed}/1400/500`;
}

window.QIQ = window.QIQ || {};
window.QIQ.getDailyImage = getDailyImage;

function applyHeroImage() {
  const hero = document.querySelector('[data-hero-theme]');
  if (!hero) return;
  const theme = hero.getAttribute('data-hero-theme');
  const url   = getDailyImage(theme);

  // Preload — only inject when loaded so gradient shows while waiting
  const img = new Image();
  img.onload = () => {
    // Prepend image *behind* the overlay layers already set via CSS
    hero.style.backgroundImage = `url('${url}')`;
  };
  // img.onerror: CSS gradient fallback already active — do nothing
  img.src = url;
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
