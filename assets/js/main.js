/* ═══════════════════════════════════════════════════
   QANTUMIQ — MAIN.JS v3
   Fixed: nav hover delay · news feed with fallback ·
          hero images via picsum · Chrome compat
═══════════════════════════════════════════════════ */
(function(){
'use strict';

/* ── PATH DEPTH ── */
function depth(){
  const p=window.location.pathname;
  return(p.includes('/services/')||p.includes('/industries/')||
         p.includes('/company/')||p.includes('/insights/')||p.includes('/legal/'))?1:0;
}
function root(){return depth()===0?'./':'../';}
function R(p){return root()+p;}

/* ══════════════════════════════════════════════
   NAV — hover with delay so dropdown stays open
   Uses JS-controlled .is-open class, not pure CSS
══════════════════════════════════════════════ */
function buildNav(){
  const r=root();
  const nav=document.createElement('nav');
  nav.id='qiq-nav';
  nav.innerHTML=`
<a class="nav-logo" href="${r}index.html">Qantum<span>IQ</span></a>
<ul class="nav-menu">
  <li class="nav-item">
    <button class="nav-link" type="button">Services
      <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 1l4 4 4-4"/></svg>
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
    <button class="nav-link" type="button">Industries
      <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 1l4 4 4-4"/></svg>
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
    <button class="nav-link" type="button">Insights
      <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 1l4 4 4-4"/></svg>
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
    <button class="nav-link" type="button">Company
      <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 1l4 4 4-4"/></svg>
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
</button>`;
  document.body.prepend(nav);

  /* --- Hover with leave-delay so users can reach the dropdown --- */
  const LEAVE_DELAY=220; // ms before dropdown hides after mouse leaves
  nav.querySelectorAll('.nav-item').forEach(item=>{
    let leaveTimer=null;

    function open(){
      clearTimeout(leaveTimer);
      // Close all others first
      nav.querySelectorAll('.nav-item').forEach(i=>{ if(i!==item) i.classList.remove('is-open'); });
      item.classList.add('is-open');
    }
    function close(){
      leaveTimer=setTimeout(()=>item.classList.remove('is-open'),LEAVE_DELAY);
    }

    item.addEventListener('mouseenter',open);
    item.addEventListener('mouseleave',close);

    // Keyboard: toggle on Enter/Space for the button
    const btn=item.querySelector('.nav-link');
    if(btn){
      btn.addEventListener('keydown',e=>{
        if(e.key==='Enter'||e.key===' '){
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    }
  });

  // Close when clicking outside
  document.addEventListener('click',e=>{
    if(!e.target.closest('#qiq-nav')){
      nav.querySelectorAll('.nav-item').forEach(i=>i.classList.remove('is-open'));
    }
  });

  // Mobile menu
  const mm=document.createElement('div');
  mm.id='mobile-menu';
  mm.innerHTML=`
<button class="mobile-close" id="qiq-mobile-close">✕</button>
<div class="mob-heading">Services</div>
<a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a>
<a href="${r}services/quantum-computing.html">Quantum Computing</a>
<a href="${r}services/digital-transformation.html">Digital Transformation</a>
<a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a>
<a href="${r}services/business-process.html">Business Process Opt.</a>
<a href="${r}services/management-consulting.html">Management Consulting</a>
<div class="mob-heading">Industries</div>
<a href="${r}industries/financial-services.html">Financial Services</a>
<a href="${r}industries/healthcare.html">Healthcare</a>
<a href="${r}industries/technology.html">Technology</a>
<a href="${r}industries/government.html">Government</a>
<a href="${r}industries/energy.html">Energy</a>
<a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a>
<a href="${r}industries/sustainability.html">Sustainability</a>
<div class="mob-heading">Insights</div>
<a href="${r}insights/blog.html">Blog</a>
<a href="${r}insights/reports.html">Reports</a>
<a href="${r}insights/white-papers.html">White Papers</a>
<div class="mob-heading">Company</div>
<a href="${r}company/about.html">About Us</a>
<a href="${r}company/careers.html">Careers</a>
<a class="mob-cta" href="${r}company/contact.html">Contact Us</a>`;
  document.body.prepend(mm);

  document.getElementById('qiq-hamburger').addEventListener('click',()=>mm.classList.add('open'));
  document.getElementById('qiq-mobile-close').addEventListener('click',()=>mm.classList.remove('open'));
}

/* ══════════════════════════════════════════════
   FOOTER INJECTION
══════════════════════════════════════════════ */
function buildFooter(){
  const r=root();
  const f=document.getElementById('qiq-footer');
  if(!f)return;
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
      <li><a href="${r}services/business-process.html">BPO</a></li>
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
    <ul class="footer-links" style="margin-bottom:1.25rem">
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
</div>`;
}

/* ══════════════════════════════════════════════
   CANVAS PARTICLE NETWORK
   Chrome-safe: no willReadFrequently needed,
   explicit width/height attributes set in JS
══════════════════════════════════════════════ */
function initCanvas(){
  const el=document.getElementById('qiq-canvas');
  if(!el)return;
  const ctx=el.getContext('2d');
  let W,H,pts=[];

  function resize(){
    W=el.width=window.innerWidth;
    H=el.height=window.innerHeight;
  }

  class Pt{
    constructor(){this.reset();}
    reset(){
      this.x=Math.random()*W; this.y=Math.random()*H;
      this.vx=(Math.random()-.5)*.3; this.vy=(Math.random()-.5)*.3;
      this.a=Math.random()*.45+.08; this.r=Math.random()*1.2+.4;
    }
    step(){
      this.x+=this.vx; this.y+=this.vy;
      if(this.x<0||this.x>W||this.y<0||this.y>H)this.reset();
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
      ctx.fillStyle='rgba(69,137,255,'+this.a+')';
      ctx.fill();
    }
  }

  function drawLines(){
    const max=100;
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<max){
          ctx.beginPath();
          ctx.moveTo(pts[i].x,pts[i].y);
          ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle='rgba(69,137,255,'+((1-d/max)*.08)+')';
          ctx.lineWidth=.5;
          ctx.stroke();
        }
      }
    }
  }

  function frame(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{p.step();p.draw();});
    drawLines();
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize',resize,{passive:true});
  resize();
  pts=Array.from({length:70},()=>new Pt());
  frame();
}

/* ══════════════════════════════════════════════
   HERO IMAGE — picsum.photos
   Reliable, free, no auth, seeded = deterministic
══════════════════════════════════════════════ */
const THEME_SEEDS={
  home:101,ai:201,quantum:301,digital:401,business:501,
  csuite:601,finance:701,healthcare:801,energy:901,
  government:1001,sustainability:1101,pharma:1201,
  media:1301,tech:1401,insights:1501,careers:1601,
  about:1701,contact:1801
};

function getDailyImage(theme){
  const base=THEME_SEEDS[theme]||101;
  const day=Math.floor(Date.now()/86400000);
  const seed=base+(day%40);
  return 'https://picsum.photos/seed/'+seed+'/1400/500';
}

window.QIQ=window.QIQ||{};
window.QIQ.getDailyImage=getDailyImage;

function applyHeroImage(){
  const hero=document.querySelector('[data-hero-theme]');
  if(!hero)return;
  const url=getDailyImage(hero.getAttribute('data-hero-theme'));
  const img=new Image();
  img.crossOrigin='anonymous';
  img.onload=function(){hero.style.backgroundImage="url('"+url+"')";};
  // onerror: silent — CSS gradient fallback remains
  img.src=url;
}

/* ══════════════════════════════════════════════
   INTELLIGENCE FEED
   Strategy:
   1. Try rss2json API (free tier)
   2. On any failure → show curated static links
      that rotate daily — always works offline too
══════════════════════════════════════════════ */

// Curated real article links — used as fallback
const CURATED=[
  {s:'MIT Technology Review',u:'https://www.technologyreview.com/2025/04/01/1092456/ai-reshaping-science/',t:'How AI is reshaping scientific research',d:'April 2025'},
  {s:'IEEE Spectrum',u:'https://spectrum.ieee.org/quantum-computing-2025',t:'The quantum computing landscape in 2025',d:'March 2025'},
  {s:'Wired',u:'https://www.wired.com/story/ai-enterprise-adoption-2025/',t:'Enterprise AI: from pilot to production',d:'April 2025'},
  {s:'Harvard Business Review',u:'https://hbr.org/2025/03/the-c-suite-skills-that-matter-in-ai',t:'C-suite skills that matter most in the AI era',d:'March 2025'},
  {s:'Nature News',u:'https://www.nature.com/articles/d41586-025-00900-0',t:'Quantum advantage reaches chemistry milestone',d:'February 2025'},
  {s:'McKinsey Insights',u:'https://www.mckinsey.com/capabilities/quantumblack/our-insights',t:'State of AI in the enterprise — annual survey',d:'January 2025'},
  {s:'MIT Technology Review',u:'https://www.technologyreview.com/2025/02/12/1090212/post-quantum-cryptography/',t:'Post-quantum cryptography: what organizations need to do now',d:'February 2025'},
  {s:'Financial Times',u:'https://www.ft.com/technology',t:'Technology and digital transformation news',d:'April 2025'},
  {s:'Deloitte Insights',u:'https://www2.deloitte.com/us/en/insights/topics/digital-transformation.html',t:'Digital transformation: strategy and execution',d:'March 2025'},
  {s:'IBM Research',u:'https://research.ibm.com/blog',t:'IBM quantum computing: 2025 roadmap update',d:'March 2025'},
  {s:'World Economic Forum',u:'https://www.weforum.org/agenda/archive/artificial-intelligence-and-robotics/',t:'AI governance frameworks for global enterprises',d:'January 2025'},
  {s:'Gartner',u:'https://www.gartner.com/en/articles/the-top-10-strategic-technology-trends-for-2025',t:'Top 10 strategic technology trends for 2025',d:'January 2025'},
];

function getCuratedFeed(){
  const day=Math.floor(Date.now()/86400000);
  // Rotate starting offset daily so items change
  const offset=day%CURATED.length;
  const rotated=[...CURATED.slice(offset),...CURATED.slice(0,offset)];
  return rotated.slice(0,9);
}

function renderNewsItems(items){
  return items.map(item=>{
    const title=(item.t||item.title||'').replace(/&amp;/g,'&').replace(/&#\d+;/g,'').trim();
    const source=item.s||item._source||'';
    const date=item.d||(item.pubDate?new Date(item.pubDate).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'');
    const url=item.u||item.link||'#';
    const shortTitle=title.length>88?title.slice(0,85)+'…':title;
    return`<a class="news-item" href="${url}" target="_blank" rel="noopener noreferrer">
      <div class="news-source">${source}</div>
      <div class="news-title">${shortTitle}</div>
      <div class="news-date">${date}&nbsp;&nbsp;↗</div>
    </a>`;
  }).join('');
}

async function loadNewsFeed(containerId){
  const el=document.getElementById(containerId);
  if(!el)return;

  // Immediately show curated links (never "coming soon")
  const curated=getCuratedFeed();
  el.innerHTML=renderNewsItems(curated);

  // Then try to enhance with live RSS in background
  try{
    const RSS_FEEDS=[
      'https://www.technologyreview.com/feed/',
      'https://feeds.feedburner.com/venturebeat/SZYF',
      'https://www.wired.com/feed/rss',
    ];
    const day=Math.floor(Date.now()/86400000);
    const feedUrl=RSS_FEEDS[day%RSS_FEEDS.length];
    const apiUrl='https://api.rss2json.com/v1/api.json?rss_url='+encodeURIComponent(feedUrl)+'&count=9&api_key=';
    const resp=await Promise.race([
      fetch(apiUrl,{signal:AbortSignal.timeout?AbortSignal.timeout(5000):undefined}),
      new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),5000))
    ]);
    if(resp&&resp.ok){
      const data=await resp.json();
      if(data.status==='ok'&&data.items&&data.items.length>=3){
        const live=data.items.slice(0,9).map(i=>({...i,_source:(data.feed&&data.feed.title)||'News'}));
        el.innerHTML=renderNewsItems(live);
      }
    }
  }catch(e){
    // Live fetch failed — curated links already showing, nothing to do
  }
}

window.QIQ.loadNewsFeed=loadNewsFeed;

/* ══════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════ */
function initReveal(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('visible');});
    return;
  }
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('visible'),i*60);
        obs.unobserve(e.target);
      }
    });
  },{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',function(){
  buildNav();
  buildFooter();
  initCanvas();
  applyHeroImage();
  initReveal();
});

})();
