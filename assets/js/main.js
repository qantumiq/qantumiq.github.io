/* ═══════════════════════════════════════════════════════════
   QANTUMIQ — main.js v8
   Light-first editorial theme + SVG Logo
═══════════════════════════════════════════════════════════ */
(function(){
'use strict';

/* ╔══════════════════════════════════════════════════╗
   ║  HERO SLIDESHOW SPEED CONFIGURATION              ║
   ║                                                  ║
   ║  HERO_INTERVAL — milliseconds between slides     ║
   ║  Minimum recommended: 2000 (2 seconds)           ║
   ║  Default: 7500 (7.5 seconds)                     ║
   ║  Maximum recommended: 20000 (20 seconds)         ║
   ║                                                  ║
   ║  Quick presets:                                  ║
   ║    Fast:   3000  (3 sec)                         ║
   ║    Medium: 5000  (5 sec) ← try this              ║
   ║    Normal: 7500  (7.5 sec) ← current default     ║
   ║    Slow:   12000 (12 sec)                        ║
   ║                                                  ║
   ║  Just change the number on the next line:        ║
   ╚══════════════════════════════════════════════════╝ */
const HERO_INTERVAL = 7500;  /* ← CHANGE THIS to control slide speed */

/* HERO_TRANSITION — crossfade duration in milliseconds
   Controls how long the fade between slides takes.
   Recommended: 1200–2500ms. Must be less than HERO_INTERVAL. */
const HERO_TRANSITION = 2200; /* ← CHANGE THIS for faster/slower crossfade */

/* ─── SVG LOGO ───────────────────────────────────────────────
   Layout: [Q-atom] antum I [Q-brain]
   Reading as: Q(atom)antum + I + Q(brain) = "QantumIQ"
   • Q of "Quantum" = circle with 3-orbital atom, animated electrons
   • Q of "IQ"      = cyan circle with brain, neural pulse animations
   • viewBox 192×52, no overflow, all elements contained
─────────────────────────────────────────────────────────── */
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 52" class="nav-logo-svg" role="img" aria-label="QantumIQ — Intelligence at the Quantum Scale">
  <title>QantumIQ</title>

  <!-- ── Q₁ : QUANTUM  (atom inside, center 22,26, r=20) ── -->
  <g transform="translate(22,26)">
    <circle r="20" fill="none" stroke="#0B2240" stroke-width="2" class="logo-stroke"/>
    <line x1="14" y1="13" x2="21" y2="20" stroke="#0B2240" stroke-width="2.8" stroke-linecap="round" class="logo-stroke"/>
    <!-- orbital 1 — 0° (horizontal) -->
    <ellipse rx="11" ry="4.4" fill="none" stroke="#00C8E8" stroke-width="1.15" opacity="0.88"/>
    <circle r="1.9" fill="#00C8E8"><animateMotion dur="3s" repeatCount="indefinite" begin="0s" path="M11,0 A11,4.4,0,0,1,-11,0 A11,4.4,0,0,1,11,0"/></circle>
    <!-- orbital 2 — 60° tilt -->
    <g transform="rotate(60)">
      <ellipse rx="11" ry="4.4" fill="none" stroke="#00C8E8" stroke-width="1.15" opacity="0.88"/>
      <circle r="1.9" fill="#00C8E8"><animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M11,0 A11,4.4,0,0,1,-11,0 A11,4.4,0,0,1,11,0"/></circle>
    </g>
    <!-- orbital 3 — -60° tilt -->
    <g transform="rotate(-60)">
      <ellipse rx="11" ry="4.4" fill="none" stroke="#00C8E8" stroke-width="1.15" opacity="0.88"/>
      <circle r="1.9" fill="#00C8E8"><animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M11,0 A11,4.4,0,0,1,-11,0 A11,4.4,0,0,1,11,0"/></circle>
    </g>
    <!-- nucleus — breathing pulse -->
    <circle r="2.8" fill="#00C8E8">
      <animate attributeName="r" values="2.8;3.9;2.8" dur="2.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0.5;1" dur="2.2s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- ── "antum" — same color as Q₁, adapts dark/light ── -->
  <text x="46" y="38" font-family="IBM Plex Sans,Arial,sans-serif" font-weight="700" font-size="28" fill="#0B2240" class="logo-text-main" letter-spacing="-0.5">antum</text>

  <!-- ── "I" of IQ — always cyan ── -->
  <text x="139" y="38" font-family="IBM Plex Sans,Arial,sans-serif" font-weight="700" font-size="28" fill="#00C8E8" letter-spacing="-0.5">I</text>

  <!-- ── Q₂ : IQ  (brain inside, center 170,26, r=18, cyan) ── -->
  <g transform="translate(170,26)">
    <circle r="18" fill="none" stroke="#00C8E8" stroke-width="2"/>
    <line x1="13" y1="12" x2="19" y2="18" stroke="#00C8E8" stroke-width="2.8" stroke-linecap="round"/>
    <!-- brain left lobe -->
    <path d="M0,-11 C-2,-13 -9,-12 -11,-7 C-13,-2 -12,4 -9,8 C-7,10 -3,11 0,11" fill="none" stroke="#00C8E8" stroke-width="1.5" stroke-linecap="round" opacity="0.92"/>
    <!-- brain right lobe -->
    <path d="M0,-11 C2,-13 9,-12 11,-7 C13,-2 12,4 9,8 C7,10 3,11 0,11" fill="none" stroke="#00C8E8" stroke-width="1.5" stroke-linecap="round" opacity="0.92"/>
    <!-- longitudinal fissure -->
    <line x1="0" y1="-11" x2="0" y2="11" stroke="#00C8E8" stroke-width="0.9" stroke-dasharray="2,1.8" opacity="0.6"/>
    <!-- sulci left -->
    <path d="M-8,-2 C-6,-5 -3,-3 -5,0" fill="none" stroke="#00C8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.78"/>
    <path d="M-8,4 C-6,1 -3,3 -5,6" fill="none" stroke="#00C8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.78"/>
    <!-- sulci right -->
    <path d="M8,-2 C6,-5 3,-3 5,0" fill="none" stroke="#00C8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.78"/>
    <path d="M8,4 C6,1 3,3 5,6" fill="none" stroke="#00C8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.78"/>
    <!-- neural pulse dots -->
    <circle r="1.5" fill="#00C8E8" opacity="0"><animateMotion dur="1.6s" repeatCount="indefinite" begin="0s" path="M-8,-2 C-6,-5 -3,-3 -5,0"/><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="0s"/></circle>
    <circle r="1.5" fill="#00C8E8" opacity="0"><animateMotion dur="1.6s" repeatCount="indefinite" begin="0.4s" path="M8,-2 C6,-5 3,-3 5,0"/><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="0.4s"/></circle>
    <circle r="1.5" fill="#00C8E8" opacity="0"><animateMotion dur="1.6s" repeatCount="indefinite" begin="0.8s" path="M-8,4 C-6,1 -3,3 -5,6"/><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="0.8s"/></circle>
    <circle r="1.5" fill="#00C8E8" opacity="0"><animateMotion dur="1.6s" repeatCount="indefinite" begin="1.2s" path="M8,4 C6,1 3,3 5,6"/><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="1.2s"/></circle>
    <!-- ripple pulse on brain Q -->
    <circle r="18" fill="none" stroke="#00C8E8" stroke-width="1" opacity="0">
      <animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0;0.28;0" dur="3s" repeatCount="indefinite"/>
    </circle>
  </g>

</svg>`;

/* ─── NAV BUILD ─── */
function buildNav(){
  const _segs=location.pathname.replace(/\/$/,'').split('/').filter(Boolean);
  const r='../'.repeat(Math.max(0,_segs.length-1));

  const nav=document.createElement('nav');
  nav.id='qiq-nav';
  nav.innerHTML=`
<a class="nav-logo-link" href="${r}index.html" style="text-decoration:none;display:flex;align-items:center;flex-shrink:0;">${LOGO_SVG}</a>
<ul class="nav-menu" id="nav-menu">
  <li class="nav-item" data-menu="services">
    <button class="nav-link">Services<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}services/index.html" style="font-weight:700;color:var(--blue);border-bottom:1px solid var(--border2);padding-bottom:.75rem;margin-bottom:.25rem;">→ All Services</a>
      <a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a>
      <a href="${r}services/quantum-computing.html">Quantum Computing</a>
      <a href="${r}services/digital-transformation.html">Digital Transformation</a>
      <a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a>
      <a href="${r}services/business-process.html">Business Process</a>
      <a href="${r}services/information-insights.html">Information &amp; Insights</a>
      <a href="${r}services/management-consulting.html">Management Consulting</a>
    </div>
  </li>
  <li class="nav-item" data-menu="industries">
    <button class="nav-link">Industries<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}industries/index.html" style="font-weight:700;color:var(--blue);border-bottom:1px solid var(--border2);padding-bottom:.75rem;margin-bottom:.25rem;">→ All Industries</a>
      <a href="${r}industries/financial-services.html">Financial Services</a>
      <a href="${r}industries/healthcare.html">Healthcare</a>
      <a href="${r}industries/pharmaceuticals.html">Pharma &amp; Biotech</a>
      <a href="${r}industries/technology.html">Technology</a>
      <a href="${r}industries/telecommunications.html">Telecommunications</a>
      <a href="${r}industries/energy.html">Energy</a>
      <a href="${r}industries/government.html">Government</a>
      <a href="${r}industries/sustainability.html">Sustainability &amp; Water</a>
      <a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a>
    </div>
  </li>
  <li class="nav-item" data-menu="insights">
    <button class="nav-link">Insights<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}insights/blog.html">Blog</a>
      <a href="${r}insights/case-studies.html">Case Studies</a>
      <a href="${r}insights/white-papers.html">Whitepapers</a>
      <a href="${r}insights/webinars-events.html">Webinars &amp; Events</a>
      <a href="${r}insights/news.html">News</a>
    </div>
  </li>
  <li class="nav-item" data-menu="tools">
    <button class="nav-link">Tools<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}tools/quantum-readiness-quiz.html">Quantum Readiness Quiz</a>
      <a href="${r}tools/roi-calculator.html">AI ROI Calculator</a>
    </div>
  </li>
  <li class="nav-item" data-menu="company">
    <button class="nav-link">Company<svg viewBox="0 0 10 6" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg></button>
    <div class="nav-dropdown">
      <a href="${r}company/about.html">About Us</a>
      <a href="${r}company/about.html#leadership">Leadership</a>
      <a href="${r}company/partners-clients.html">Partners &amp; Clients</a>
      <a href="${r}company/careers.html">Careers</a>
      <a href="${r}company/contact.html">Contact Us</a>
    </div>
  </li>
</ul>
<div style="display:flex;align-items:center;gap:.2rem;">
  <button id="theme-toggle" aria-label="Toggle theme">☀️</button><button id="search-btn" aria-label="Search" onclick="toggleSearch()" style="width:32px;height:32px;background:none;border:1px solid var(--border);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.82rem;color:var(--muted);margin-left:.3rem;transition:border-color .2s,color .2s;" onmouseover="this.style.borderColor='var(--blue-lt)';this.style.color='var(--blue)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <a class="nav-cta" href="${r}company/contact.html">Contact Us</a>
</div>

<div id="mobile-menu">
  <button class="mobile-close" id="mob-close">✕</button>
  <div class="mob-heading">Services</div>
  <a href="${r}services/index.html" style="font-weight:700;color:var(--blue);">→ All Services</a>
  <a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a>
  <a href="${r}services/quantum-computing.html">Quantum Computing</a>
  <a href="${r}services/digital-transformation.html">Digital Transformation</a>
  <a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a>
  <a href="${r}services/business-process.html">Business Process</a>
  <a href="${r}services/information-insights.html">Information &amp; Insights</a>
  <a href="${r}services/management-consulting.html">Management Consulting</a>
  <div class="mob-heading">Industries</div>
  <a href="${r}industries/index.html" style="font-weight:700;color:var(--blue);">→ All Industries</a>
  <a href="${r}industries/financial-services.html">Financial Services</a>
  <a href="${r}industries/healthcare.html">Healthcare</a>
  <a href="${r}industries/pharmaceuticals.html">Pharma &amp; Biotech</a>
  <a href="${r}industries/technology.html">Technology</a>
  <a href="${r}industries/telecommunications.html">Telecommunications</a>
  <a href="${r}industries/energy.html">Energy</a>
  <a href="${r}industries/government.html">Government</a>
  <a href="${r}industries/sustainability.html">Sustainability &amp; Water</a>
  <a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a>
  <div class="mob-heading">Insights</div>
  <a href="${r}insights/blog.html">Blog</a>
  <a href="${r}insights/case-studies.html">Case Studies</a>
  <a href="${r}insights/white-papers.html">Whitepapers</a>
  <a href="${r}insights/webinars-events.html">Webinars &amp; Events</a>
  <a href="${r}insights/news.html">News</a>
  <div class="mob-heading">Tools</div>
  <a href="${r}tools/quantum-readiness-quiz.html">Quantum Readiness Quiz</a>
  <a href="${r}tools/roi-calculator.html">AI ROI Calculator</a>
  <div class="mob-heading">Company</div>
  <a href="${r}company/about.html">About Us</a>
  <a href="${r}company/about.html#leadership">Leadership</a>
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
  const _segs=location.pathname.replace(/\/$/,'').split('/').filter(Boolean);
  const r='../'.repeat(Math.max(0,_segs.length-1));

  const footer=document.getElementById('qiq-footer');
  if(!footer)return;
  footer.innerHTML=`
<div class="footer-inner">
  <div>
    <a href="${r}index.html" style="text-decoration:none;display:inline-block;margin-bottom:1.1rem;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 52" height="40" role="img" aria-label="QantumIQ" style="display:block;">
        <!-- Q₁: QUANTUM — atom, white on dark footer -->
        <g transform="translate(22,26)">
          <circle r="20" fill="none" stroke="rgba(255,255,255,0.92)" stroke-width="2"/>
          <line x1="14" y1="13" x2="21" y2="20" stroke="rgba(255,255,255,0.92)" stroke-width="2.8" stroke-linecap="round"/>
          <ellipse rx="11" ry="4.4" fill="none" stroke="#00C8E8" stroke-width="1.15" opacity="0.88"/>
          <circle r="1.9" fill="#00C8E8"><animateMotion dur="3s" repeatCount="indefinite" begin="0s" path="M11,0 A11,4.4,0,0,1,-11,0 A11,4.4,0,0,1,11,0"/></circle>
          <g transform="rotate(60)">
            <ellipse rx="11" ry="4.4" fill="none" stroke="#00C8E8" stroke-width="1.15" opacity="0.88"/>
            <circle r="1.9" fill="#00C8E8"><animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M11,0 A11,4.4,0,0,1,-11,0 A11,4.4,0,0,1,11,0"/></circle>
          </g>
          <g transform="rotate(-60)">
            <ellipse rx="11" ry="4.4" fill="none" stroke="#00C8E8" stroke-width="1.15" opacity="0.88"/>
            <circle r="1.9" fill="#00C8E8"><animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M11,0 A11,4.4,0,0,1,-11,0 A11,4.4,0,0,1,11,0"/></circle>
          </g>
          <circle r="2.8" fill="#00C8E8">
            <animate attributeName="r" values="2.8;3.9;2.8" dur="2.2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.5;1" dur="2.2s" repeatCount="indefinite"/>
          </circle>
        </g>
        <!-- "antum" — white on dark -->
        <text x="46" y="38" font-family="IBM Plex Sans,Arial,sans-serif" font-weight="700" font-size="28" fill="rgba(255,255,255,0.92)" letter-spacing="-0.5">antum</text>
        <!-- "I" — cyan -->
        <text x="139" y="38" font-family="IBM Plex Sans,Arial,sans-serif" font-weight="700" font-size="28" fill="#00C8E8" letter-spacing="-0.5">I</text>
        <!-- Q₂: IQ — brain, cyan -->
        <g transform="translate(170,26)">
          <circle r="18" fill="none" stroke="#00C8E8" stroke-width="2"/>
          <line x1="13" y1="12" x2="19" y2="18" stroke="#00C8E8" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M0,-11 C-2,-13 -9,-12 -11,-7 C-13,-2 -12,4 -9,8 C-7,10 -3,11 0,11" fill="none" stroke="#00C8E8" stroke-width="1.5" stroke-linecap="round" opacity="0.92"/>
          <path d="M0,-11 C2,-13 9,-12 11,-7 C13,-2 12,4 9,8 C7,10 3,11 0,11" fill="none" stroke="#00C8E8" stroke-width="1.5" stroke-linecap="round" opacity="0.92"/>
          <line x1="0" y1="-11" x2="0" y2="11" stroke="#00C8E8" stroke-width="0.9" stroke-dasharray="2,1.8" opacity="0.6"/>
          <path d="M-8,-2 C-6,-5 -3,-3 -5,0" fill="none" stroke="#00C8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.78"/>
          <path d="M-8,4 C-6,1 -3,3 -5,6" fill="none" stroke="#00C8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.78"/>
          <path d="M8,-2 C6,-5 3,-3 5,0" fill="none" stroke="#00C8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.78"/>
          <path d="M8,4 C6,1 3,3 5,6" fill="none" stroke="#00C8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.78"/>
          <circle r="1.5" fill="#00C8E8" opacity="0"><animateMotion dur="1.6s" repeatCount="indefinite" begin="0s" path="M-8,-2 C-6,-5 -3,-3 -5,0"/><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="0s"/></circle>
          <circle r="1.5" fill="#00C8E8" opacity="0"><animateMotion dur="1.6s" repeatCount="indefinite" begin="0.4s" path="M8,-2 C6,-5 3,-3 5,0"/><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="0.4s"/></circle>
          <circle r="1.5" fill="#00C8E8" opacity="0"><animateMotion dur="1.6s" repeatCount="indefinite" begin="0.8s" path="M-8,4 C-6,1 -3,3 -5,6"/><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="0.8s"/></circle>
          <circle r="1.5" fill="#00C8E8" opacity="0"><animateMotion dur="1.6s" repeatCount="indefinite" begin="1.2s" path="M8,4 C6,1 3,3 5,6"/><animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="1.2s"/></circle>
          <circle r="18" fill="none" stroke="#00C8E8" stroke-width="1" opacity="0"><animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.28;0" dur="3s" repeatCount="indefinite"/></circle>
        </g>
      </svg>
    </a>
    <p class="footer-desc">Advanced consulting for organizations navigating the quantum age — where AI, quantum computing, and human ingenuity converge to create transformational advantage.</p>
    <div class="footer-social">
      <a href="https://linkedin.com/company/qantumiq" aria-label="LinkedIn">in</a>
      <a href="https://twitter.com/qantumiq" aria-label="X/Twitter">𝕏</a>
    </div>
  </div>
  <div class="footer-col">
    <h4>Services</h4>
    <ul>
      <li><a href="${r}services/index.html" style="color:rgba(120,175,255,.9);font-weight:600;">All Services →</a></li>
      <li><a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a></li>
      <li><a href="${r}services/quantum-computing.html">Quantum Computing</a></li>
      <li><a href="${r}services/digital-transformation.html">Digital Transformation</a></li>
      <li><a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a></li>
      <li><a href="${r}services/business-process.html">Business Process</a></li>
      <li><a href="${r}services/information-insights.html">Information &amp; Insights</a></li>
      <li><a href="${r}services/management-consulting.html">Management Consulting</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Industries</h4>
    <ul>
      <li><a href="${r}industries/index.html" style="color:rgba(120,175,255,.9);font-weight:600;">All Industries →</a></li>
      <li><a href="${r}industries/financial-services.html">Financial Services</a></li>
      <li><a href="${r}industries/healthcare.html">Healthcare</a></li>
      <li><a href="${r}industries/pharmaceuticals.html">Pharma &amp; Biotech</a></li>
      <li><a href="${r}industries/technology.html">Technology</a></li>
      <li><a href="${r}industries/telecommunications.html">Telecommunications</a></li>
      <li><a href="${r}industries/energy.html">Energy</a></li>
      <li><a href="${r}industries/government.html">Government</a></li>
      <li><a href="${r}industries/sustainability.html">Sustainability &amp; Water</a></li>
      <li><a href="${r}industries/media-entertainment.html">Media &amp; Entertainment</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Company</h4>
    <ul>
      <li><a href="${r}company/about.html">About Us</a></li>
      <li><a href="${r}company/about.html#leadership">Leadership</a></li>
      <li><a href="${r}company/partners-clients.html">Partners &amp; Clients</a></li>
      <li><a href="${r}insights/blog.html">Insights</a></li>
      <li><a href="${r}company/careers.html">Careers</a></li>
      <li><a href="${r}company/contact.html">Contact</a></li>
      <li><a href="${r}insights/case-studies.html">Case Studies</a></li>
      <li><a href="${r}tools/quantum-readiness-quiz.html">Quantum Readiness Quiz</a></li>
      <li><a href="${r}tools/roi-calculator.html">AI ROI Calculator</a></li>
      <li><a href="${r}legal/privacy-policy.html">Privacy Policy</a></li>
    </ul>
  </div>
  <div class="footer-col footer-contact">
    <h4>Contact Us</h4>
    <p>5000 Thayer Center STE C<br>Oakland, MD 21550, USA</p>
    <p style="margin-top:.6rem;"><a href="tel:+13013347686">+1 (301) 334-QNTM</a></p>
    <p style="margin-top:.6rem;"><a href="mailto:info@qantumiq.com">info@qantumiq.com</a></p>
    <p style="margin-top:.6rem;"><a href="mailto:consulting@qantumiq.com">consulting@qantumiq.com</a></p>
    <div style="margin-top:1.2rem;">
      <div style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:.5rem;">Newsletter</div>
      <form class="newsletter-form" onsubmit="nlSubmit(event)">
        <input type="email" placeholder="Your email" required>
        <button type="submit">Subscribe</button>
      </form>
      <div class="nl-success">Thank you for subscribing!</div>
    </div>
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
  telecom:    [122,125,126,127,131],
  insights:   [153,154,155,156,157],
  about:      [158,159,160,162,163],
  contact:    [164,165,166,167,168],
  careers:    [169,170,171,172,173],
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

/* Returns a consistent daily photo for a given theme using HERO_POOLS */
function getDailyImage(theme){
  const pool=HERO_POOLS[theme]||HERO_POOLS.home;
  const day=Math.floor(Date.now()/86400000);
  const id=pool[day % pool.length];
  return `https://picsum.photos/id/${id}/900/500`;
}

function initHeroSlideshow(){
  const hero=document.querySelector('[data-hero-theme]');
  if(!hero)return;
  const theme=hero.getAttribute('data-hero-theme');
  const pool=HERO_POOLS[theme]||HERO_POOLS.home;

  // Apply transition duration from config constant to CSS
  const styleEl=document.createElement('style');
  styleEl.textContent=`.hero-slide{transition-duration:${HERO_TRANSITION}ms !important}`;
  document.head.appendChild(styleEl);

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

  // ── Speed control overlay (visible on hero hover) ──
  let currentInterval = HERO_INTERVAL;
  const speedPresets=[
    {label:'Fast',ms:3000},
    {label:'Medium',ms:5000},
    {label:'Normal',ms:7500},
    {label:'Slow',ms:12000},
  ];
  const speedCtrl=document.createElement('div');
  speedCtrl.className='hero-speed-ctrl';
  speedCtrl.innerHTML='<span class="hero-speed-label">Speed:</span>';
  speedPresets.forEach(p=>{
    const btn=document.createElement('button');
    btn.className='hero-speed-btn'+(p.ms===HERO_INTERVAL?' active':'');
    btn.textContent=p.label;
    btn.title=`${p.ms/1000}s per slide`;
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      currentInterval=p.ms;
      speedCtrl.querySelectorAll('.hero-speed-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      resetTimer();
    });
    speedCtrl.appendChild(btn);
  });
  hero.appendChild(speedCtrl);

  let current=0, timer;
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
    timer=setInterval(()=>goTo(current+1), currentInterval);
  }
  resetTimer();
  hero.addEventListener('mouseenter',()=>clearInterval(timer));
  hero.addEventListener('mouseleave',resetTimer);
  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft')goTo(current-1);
    if(e.key==='ArrowRight')goTo(current+1);
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

  // 7. Service cards on homepage — inject photos into .svc-photo elements
  document.querySelectorAll('.svc-photo').forEach(el=>{
    if(el.style.backgroundImage)return;
    el.style.backgroundImage=`url('${nextSmPhoto()}')`;
  });

  // 8. Capability/industry photo panels in services and industries overview pages
  document.querySelectorAll('.capability-photo,.industry-photo').forEach(el=>{
    if(el.style.backgroundImage)return;
    el.style.backgroundImage=`url('${nextSmPhoto()}')`;
  });

  // 9. Featured blog/article images — preload with fallback on broken IDs
  document.querySelectorAll('.feat-photo').forEach(el=>{
    if(el.style.backgroundImage)return;
    (function tryLoad(attempts){
      const url=nextSmPhoto();
      const img=new Image();
      img.onload=()=>{ el.style.backgroundImage=`url('${url}')`; };
      img.onerror=()=>{ if(attempts>0)tryLoad(attempts-1); };
      img.src=url;
    })(6);
  });
}

/* ═══════════════════════════════════════════════
   NEWS FEED — topic-aware curated feeds per page
═══════════════════════════════════════════════ */
const PAGE_NEWS={

  home:[
    {source:'MIT Technology Review',title:'The Next Wave of AI Agents Is Already Here — And They\'re Reshaping Enterprise Workflows',url:'https://technologyreview.com'},
    {source:'McKinsey',title:'The State of AI in 2025: Adoption Has Crossed the Chasm, But ROI Remains Elusive',url:'https://mckinsey.com'},
    {source:'Harvard Business Review',title:'Why Most AI Transformations Fail — and the Six Factors That Make Them Succeed',url:'https://hbr.org'},
    {source:'IBM Research',title:'Advancing Quantum-Safe Cryptography: A Roadmap for Enterprise Migration',url:'https://research.ibm.com'},
    {source:'Deloitte Insights',title:'The Generative AI Inflection Point: How Organizations Are Moving From Pilot to Production',url:'https://www2.deloitte.com/insights'},
    {source:'Gartner',title:'2026 Top Strategic Technology Trends: Contextual Intelligence Leads the Pack',url:'https://gartner.com'},
    {source:'Financial Times',title:'The Race for Quantum Supremacy Enters Its Industrial Phase',url:'https://ft.com'},
    {source:'World Economic Forum',title:'Responsible AI Governance: A Framework for the Age of Agentic Systems',url:'https://weforum.org'},
    {source:'IEEE Spectrum',title:'Quantum Error Correction Milestone Brings Fault-Tolerant Computing Closer to Reality',url:'https://spectrum.ieee.org'},
  ],

  ai:[
    {source:'MIT Technology Review',title:'The Next Wave of AI Agents Is Already Here — And They\'re Reshaping Enterprise Workflows',url:'https://technologyreview.com'},
    {source:'Nature',title:'Large Language Models Show Surprising Capability in Scientific Reasoning Benchmarks',url:'https://nature.com'},
    {source:'Harvard Business Review',title:'Why Most AI Transformations Fail — and the Six Factors That Make Them Succeed',url:'https://hbr.org'},
    {source:'Google DeepMind',title:'Gemini 2.0: Multimodal Reasoning at the Frontier of Enterprise AI',url:'https://deepmind.google'},
    {source:'McKinsey',title:'The State of AI in 2025: Adoption Has Crossed the Chasm, But ROI Remains Elusive',url:'https://mckinsey.com'},
    {source:'IEEE Spectrum',title:'Agentic AI Frameworks: From Prototype to Production at Enterprise Scale',url:'https://spectrum.ieee.org'},
    {source:'Deloitte Insights',title:'The Generative AI Inflection Point: How Organizations Are Moving From Pilot to Production',url:'https://www2.deloitte.com/insights'},
    {source:'Wired',title:'How Frontier AI Models Are Rewriting the Playbook for Business Automation',url:'https://wired.com'},
    {source:'Stanford HAI',title:'AI Index 2025: Enterprise Deployment Doubles as Model Costs Collapse',url:'https://hai.stanford.edu'},
  ],

  quantum:[
    {source:'Nature',title:'Quantum Error Correction Milestone Brings Fault-Tolerant Computing 5 Years Closer',url:'https://nature.com'},
    {source:'IBM Research',title:'Advancing Quantum-Safe Cryptography: A Roadmap for Enterprise Migration',url:'https://research.ibm.com'},
    {source:'NIST',title:'Post-Quantum Cryptography Standards: Implementation Guidance for Enterprises',url:'https://nist.gov'},
    {source:'Financial Times',title:'The Race for Quantum Supremacy Enters Its Industrial Phase',url:'https://ft.com'},
    {source:'IEEE Spectrum',title:'1000-Qubit Processors and the Path to Cryptographically Relevant Quantum Machines',url:'https://spectrum.ieee.org'},
    {source:'McKinsey',title:'Quantum Technology\'s Commercial Horizon: Where Value Will First Emerge',url:'https://mckinsey.com'},
    {source:'Gartner',title:'Quantum Computing Hype Cycle 2025: What Enterprises Should Do Today',url:'https://gartner.com'},
    {source:'MIT Technology Review',title:'Quantum Networks Are Being Tested in Real Cities — Here\'s What They\'ve Found',url:'https://technologyreview.com'},
    {source:'Google Quantum AI',title:'Demonstrating Quantum Advantage on Industrially Relevant Problems',url:'https://quantumai.google'},
  ],

  digital:[
    {source:'McKinsey',title:'Digital Transformation in 2025: Why 70% Still Fall Short — and What the Winners Do Differently',url:'https://mckinsey.com'},
    {source:'Harvard Business Review',title:'The New Architecture of Digital Transformation: Platforms, Ecosystems, and AI',url:'https://hbr.org'},
    {source:'Gartner',title:'Digital Business Transformation: The Four Critical Success Factors',url:'https://gartner.com'},
    {source:'MIT Sloan Management Review',title:'From Digital Laggard to Digital Leader: A Roadmap for Legacy Industries',url:'https://sloanreview.mit.edu'},
    {source:'Deloitte Insights',title:'The Digital Transformation Paradox: More Investment, Less Value — Here\'s Why',url:'https://www2.deloitte.com/insights'},
    {source:'Wired',title:'Cloud-Native Transformation at Scale: Lessons from the Fortune 500',url:'https://wired.com'},
    {source:'BCG',title:'Tech Debt Is the Hidden Tax Holding Back Digital Transformation',url:'https://bcg.com'},
    {source:'Forrester',title:'Customer Experience as the New Competitive Battleground in the Digital Era',url:'https://forrester.com'},
    {source:'IDC',title:'2025 Digital Transformation Spending Guide: Where the Money Is Going',url:'https://idc.com'},
  ],

  csuite:[
    {source:'Harvard Business Review',title:'What the Best CEOs Know About AI That Most Leaders Don\'t',url:'https://hbr.org'},
    {source:'McKinsey',title:'The CEO\'s Guide to the AI Era: Governance, Risk, and Competitive Advantage',url:'https://mckinsey.com'},
    {source:'MIT Sloan Management Review',title:'Board-Level Technology Governance: A New Imperative for Digital Age Directors',url:'https://sloanreview.mit.edu'},
    {source:'Fortune',title:'How Top CIOs Are Restructuring Technology for the Age of AI',url:'https://fortune.com'},
    {source:'Deloitte Insights',title:'2025 Global CxO Survey: AI Strategy Is Now a CEO Priority, Not Just a CTO Concern',url:'https://www2.deloitte.com/insights'},
    {source:'BCG',title:'The Four Decisions That Separate AI Leaders from AI Laggards at the Top',url:'https://bcg.com'},
    {source:'Stanford GSB',title:'Technology M&A Due Diligence: What Acquirers Miss That Destroys Value',url:'https://gsb.stanford.edu'},
    {source:'WEF',title:'Responsible Technology Leadership: A Framework for C-Suite Decision-Making',url:'https://weforum.org'},
    {source:'Gartner',title:'CIO Agenda 2025: The Strategies That Define Technology Leadership',url:'https://gartner.com'},
  ],

  process:[
    {source:'McKinsey',title:'The Automation Paradox: How AI Is Transforming Business Process and Creating New Roles',url:'https://mckinsey.com'},
    {source:'Gartner',title:'Process Mining Market Guide: AI-Enhanced Discovery Is Transforming Business Operations',url:'https://gartner.com'},
    {source:'Deloitte Insights',title:'Intelligent Automation at Scale: Moving Beyond RPA to Cognitive Process Transformation',url:'https://www2.deloitte.com/insights'},
    {source:'Harvard Business Review',title:'Lean Is Dead. Long Live AI-Augmented Operations',url:'https://hbr.org'},
    {source:'Forrester',title:'The Business Process Transformation Wave: AI, Orchestration, and the End of Manual Work',url:'https://forrester.com'},
    {source:'BCG',title:'Operational Excellence in the Age of Intelligent Automation',url:'https://bcg.com'},
    {source:'IEEE Spectrum',title:'Digital Twins for Business Processes: From Factory Floor to Enterprise Operations',url:'https://spectrum.ieee.org'},
    {source:'MIT Technology Review',title:'Agentic AI in Operations: Early Case Studies and What They Tell Us',url:'https://technologyreview.com'},
    {source:'IDC',title:'Intelligent Process Automation Market Forecast 2025–2028',url:'https://idc.com'},
  ],

  data:[
    {source:'MIT Technology Review',title:'The Data Lakehouse Architecture Is Winning — Here\'s Why Enterprises Are Switching',url:'https://technologyreview.com'},
    {source:'Harvard Business Review',title:'Becoming a Data-Driven Organization: What It Really Takes',url:'https://hbr.org'},
    {source:'Gartner',title:'Data and Analytics Trends 2025: AI-Augmented Insights Are the New Baseline',url:'https://gartner.com'},
    {source:'McKinsey',title:'The Data Advantage: How Companies That Invest in Information Governance Outperform',url:'https://mckinsey.com'},
    {source:'Deloitte Insights',title:'Real-Time Analytics Architecture: From Batch Processing to Streaming Intelligence',url:'https://www2.deloitte.com/insights'},
    {source:'Forbes',title:'Data Mesh vs. Data Fabric: Choosing the Right Architecture for Your Enterprise',url:'https://forbes.com'},
    {source:'O\'Reilly',title:'The State of Data and AI 2025: How Enterprises Are Closing the Insight Gap',url:'https://oreilly.com'},
    {source:'Databricks',title:'The 2025 State of Data+AI: LakeHouse Adoption Hits Mainstream',url:'https://databricks.com'},
    {source:'TDWI',title:'Business Intelligence Modernization: From Dashboards to Decision Intelligence',url:'https://tdwi.org'},
  ],

  consulting:[
    {source:'Harvard Business Review',title:'The Strategy Consulting Reinvention: How AI Is Changing What Consultants Actually Do',url:'https://hbr.org'},
    {source:'McKinsey',title:'Strategy in a World of Rapid Change: When the Five-Year Plan Becomes the 18-Month Plan',url:'https://mckinsey.com'},
    {source:'BCG',title:'Organizational Resilience in 2025: How the Best Companies Are Built to Last and Adapt',url:'https://bcg.com'},
    {source:'Deloitte Insights',title:'Change Management in the AI Era: Leading Human-AI Hybrid Organizations',url:'https://www2.deloitte.com/insights'},
    {source:'MIT Sloan Management Review',title:'Strategic Agility: The New Competitive Advantage in Volatile Markets',url:'https://sloanreview.mit.edu'},
    {source:'Fortune',title:'The CFO in the AI Age: New Metrics, New Models, New Mandate',url:'https://fortune.com'},
    {source:'WEF',title:'Future of Work 2025: Skills, Structures, and the Organizations That Will Thrive',url:'https://weforum.org'},
    {source:'Stanford GSB',title:'Mergers in the Digital Age: Why 60% Fail to Deliver Value and How to Beat the Odds',url:'https://gsb.stanford.edu'},
    {source:'Gartner',title:'Enterprise Architecture Trends 2025: Business Capability Mapping in the Age of AI',url:'https://gartner.com'},
  ],

  finance:[
    {source:'Financial Times',title:'JPMorgan and Goldman Unveil AI Platforms That Are Transforming Trading Floors',url:'https://ft.com'},
    {source:'McKinsey',title:'The Future of Banking: AI, Embedded Finance, and the Platform Economy',url:'https://mckinsey.com'},
    {source:'Bloomberg',title:'Quantum Computing\'s Financial Services Moment: Risk Modeling and Portfolio Optimization',url:'https://bloomberg.com'},
    {source:'Deloitte Insights',title:'RegTech 2025: How AI Is Transforming Compliance and Financial Crime Detection',url:'https://www2.deloitte.com/insights'},
    {source:'Oliver Wyman',title:'Banking Outlook 2025: Margin Pressure, AI Transformation, and the Scale Imperative',url:'https://oliverwyman.com'},
    {source:'Harvard Business Review',title:'Real-Time Risk: How Machine Learning Is Replacing VaR in Financial Services',url:'https://hbr.org'},
    {source:'KPMG',title:'Asset Management in the Age of AI: Alpha Generation, Cost Reduction, and Client Experience',url:'https://kpmg.com'},
    {source:'BIS',title:'Quantum Computing Implications for Financial System Security and Stability',url:'https://bis.org'},
    {source:'Accenture',title:'The Future of Insurance: Parametric Products, AI Underwriting, and Digital Claims',url:'https://accenture.com'},
  ],

  healthcare:[
    {source:'NEJM',title:'AI Diagnostics Outperform Specialist Physicians in Large Multi-Center Trial',url:'https://nejm.org'},
    {source:'Nature Medicine',title:'Deep Learning Accelerates Drug Discovery: From Years to Weeks',url:'https://nature.com/nm'},
    {source:'McKinsey',title:'Transforming Healthcare with AI: The Promise, Peril, and Practical Path Forward',url:'https://mckinsey.com'},
    {source:'Harvard Health',title:'The Digital Health Decade: What Precision Medicine and AI Mean for Patient Outcomes',url:'https://health.harvard.edu'},
    {source:'FDA',title:'Artificial Intelligence/Machine Learning-Based Software in Medical Devices: 2025 Guidance Update',url:'https://fda.gov'},
    {source:'Fierce Healthcare',title:'Interoperability at Scale: How FHIR and AI Are Connecting the Care Continuum',url:'https://fiercehealthcare.com'},
    {source:'JAMA',title:'Ambient AI Clinical Documentation Reduces Physician Burnout by 40% in Multicenter Study',url:'https://jamanetwork.com'},
    {source:'WHO',title:'Global Health AI Governance Framework: Principles for Responsible Deployment',url:'https://who.int'},
    {source:'Deloitte Insights',title:'The Hospital of the Future: AI-First Infrastructure, Remote Monitoring, and Predictive Care',url:'https://www2.deloitte.com/insights'},
  ],

  pharma:[
    {source:'Nature',title:'AlphaFold 3 Unlocks Next Wave of Drug-Target Discovery Across Disease Classes',url:'https://nature.com'},
    {source:'Science',title:'AI-Designed Antibodies Enter Phase III Trials with Unprecedented Speed',url:'https://science.org'},
    {source:'McKinsey',title:'Biopharma 2025: Digital Transformation in R&D, Manufacturing, and Commercial Operations',url:'https://mckinsey.com'},
    {source:'FDA',title:'Advancing AI in Drug Development: New Guidance on Machine Learning in Clinical Trials',url:'https://fda.gov'},
    {source:'Nature Biotechnology',title:'CRISPR Base Editing Achieves First Clinical Cure for Sickle Cell Disease in Landmark Trial',url:'https://nature.com/nbt'},
    {source:'STAT News',title:'Cell and Gene Therapy Manufacturing Costs Drop 60% as Automation Scales',url:'https://statnews.com'},
    {source:'MIT Technology Review',title:'Generative AI Is Becoming the Primary Tool in Drug Candidate Screening and Bioprocess Optimization',url:'https://technologyreview.com'},
    {source:'Deloitte Insights',title:'Pharmaceutical & Biotech R&D Productivity: AI\'s Impact on Pipeline Success Rates',url:'https://www2.deloitte.com/insights'},
    {source:'BCG',title:'The Biotech Convergence: How AI, CRISPR, and mRNA Are Creating a New Industry',url:'https://bcg.com'},
  ],

  tech:[
    {source:'MIT Technology Review',title:'The Platform Wars of 2025: Cloud, Edge, and the Battle for AI Infrastructure',url:'https://technologyreview.com'},
    {source:'Wired',title:'How the Next Generation of Enterprise Software Is Being Built on AI-First Architectures',url:'https://wired.com'},
    {source:'Harvard Business Review',title:'Platform Strategy in the Age of AI: How Software Companies Are Reinventing Their Moats',url:'https://hbr.org'},
    {source:'Gartner',title:'Technology Industry Outlook 2025: Consolidation, AI Monetization, and the SaaS Reset',url:'https://gartner.com'},
    {source:'McKinsey',title:'The Engineering Productivity Revolution: AI Coding Tools and What They Mean for Software Teams',url:'https://mckinsey.com'},
    {source:'IEEE Spectrum',title:'Semiconductor Geopolitics and the Future of the Global Technology Supply Chain',url:'https://spectrum.ieee.org'},
    {source:'The Information',title:'Cloud Cost Optimization: How Top Tech Companies Are Rightsizing AI Infrastructure',url:'https://theinformation.com'},
    {source:'BCG',title:'Open Source in the Enterprise: From Developer Tool to Strategic Competitive Asset',url:'https://bcg.com'},
    {source:'Forrester',title:'The Cybersecurity Imperative: Zero Trust Architectures in the Age of AI Threats',url:'https://forrester.com'},
  ],

  telecom:[
    {source:'Light Reading',title:'AI-Driven Network Operations: How Tier-1 Carriers Are Achieving Autonomous Self-Healing Networks',url:'https://lightreading.com'},
    {source:'McKinsey',title:'Telecom 2025: 5G Monetization, Network-as-a-Service, and the Enterprise Revenue Opportunity',url:'https://mckinsey.com'},
    {source:'GSMA',title:'The State of 5G Enterprise: Private Networks, Edge Computing, and the $700B Opportunity',url:'https://gsma.com'},
    {source:'Fierce Telecom',title:'Cloud-Native Core Transformation: Why Open RAN Is Finally Delivering on Its Promise',url:'https://fiercetelecom.com'},
    {source:'IEEE Spectrum',title:'6G Research Accelerates as AI-Native Radio Access Networks Show 10x Spectral Efficiency',url:'https://spectrum.ieee.org'},
    {source:'Deloitte Insights',title:'Fiber-to-the-Home Economics: How AI Is Optimizing Rollout Planning and Reducing Dig Costs by 30%',url:'https://www2.deloitte.com/insights'},
    {source:'Financial Times',title:'The Global Connectivity Race: Subsea Cables, LEO Satellites, and the Battle for Digital Sovereignty',url:'https://ft.com'},
    {source:'BCG',title:'Telecom Operator Transformation: From Connectivity Provider to Digital Platform',url:'https://bcg.com'},
    {source:'Analysys Mason',title:'Network Slicing Goes Live: Enterprise Use Cases and Revenue Models That Are Actually Working',url:'https://analysysmason.com'},
  ],

  energy:[
    {source:'Nature Energy',title:'AI-Optimized Grid Management Reduces Renewable Curtailment by 35% in Pilot',url:'https://nature.com/ne'},
    {source:'Financial Times',title:'The AI Energy Nexus: Data Centers Consume More Power Than Many Nations',url:'https://ft.com'},
    {source:'McKinsey',title:'The Energy Transition at Inflection Point: AI, Storage, and the Path to Net Zero',url:'https://mckinsey.com'},
    {source:'World Economic Forum',title:'Digital Twins for Energy Infrastructure: Predictive Maintenance at Grid Scale',url:'https://weforum.org'},
    {source:'IEA',title:'AI-Enabled Energy Efficiency: Global Assessment of Impact Through 2030',url:'https://iea.org'},
    {source:'BloombergNEF',title:'Clean Energy Investment Hits $2 Trillion — AI Optimization Is the New Differentiator',url:'https://bloomberg.com'},
    {source:'MIT Technology Review',title:'Next-Generation Nuclear: SMRs, Fusion Timelines, and the AI-Optimized Reactor',url:'https://technologyreview.com'},
    {source:'Deloitte Insights',title:'Oil & Gas in the Digital Age: AI-Driven Exploration, Carbon Capture, and Energy Transition',url:'https://www2.deloitte.com/insights'},
    {source:'BCG',title:'Smart Grid 2.0: How AI Is Making the Electrical Grid Intelligent, Resilient, and Green',url:'https://bcg.com'},
  ],

  government:[
    {source:'WEF',title:'AI in Government: How Public Sector Organizations Are Deploying Responsibly',url:'https://weforum.org'},
    {source:'Harvard Kennedy School',title:'Digital Government 2025: What Citizens Expect and How Agencies Are Delivering',url:'https://hks.harvard.edu'},
    {source:'McKinsey',title:'Modernizing Government IT: The Case for Cloud-First, AI-Ready Public Infrastructure',url:'https://mckinsey.com'},
    {source:'NIST',title:'AI Risk Management Framework 1.1: Guidance for Government Agencies',url:'https://nist.gov'},
    {source:'Deloitte Insights',title:'GovTech 2025: AI-Powered Citizen Services, Fraud Detection, and Policy Analysis',url:'https://www2.deloitte.com/insights'},
    {source:'Brookings Institution',title:'Regulating AI: How Governments Are Approaching the Most Complex Policy Challenge of the Decade',url:'https://brookings.edu'},
    {source:'CISA',title:'Post-Quantum Cryptography Migration Planning for Government Systems',url:'https://cisa.gov'},
    {source:'Gartner',title:'Digital Government Trends 2025: GenAI in Public Service Delivery',url:'https://gartner.com'},
    {source:'RAND',title:'National Security Implications of Quantum Computing and AI Convergence',url:'https://rand.org'},
  ],

  sustainability:[
    {source:'Nature',title:'Machine Learning Accelerates Discovery of Solid-State Electrolytes for Next-Gen Batteries',url:'https://nature.com'},
    {source:'McKinsey',title:'Sustainability-Linked Finance: How AI Is Transforming ESG Measurement and Reporting',url:'https://mckinsey.com'},
    {source:'World Economic Forum',title:'Net Zero by 2050: The Role of AI, Digital Twins, and Smart Water Infrastructure',url:'https://weforum.org'},
    {source:'Nature Water',title:'AI-Powered Leak Detection Reduces Non-Revenue Water by 40% in Global Utility Trials',url:'https://nature.com/natwater'},
    {source:'MIT Technology Review',title:'Smart Water Networks Are Using AI to Solve the Global Water Crisis — One Pipe at a Time',url:'https://technologyreview.com'},
    {source:'World Bank',title:'The Water-AI Nexus: How Machine Learning Is Transforming Water Scarcity Prediction and Response',url:'https://worldbank.org'},
    {source:'Deloitte Insights',title:'From ESG Reporting to Water Stewardship: How AI Is Closing the Corporate Sustainability Gap',url:'https://www2.deloitte.com/insights'},
    {source:'BCG',title:'Circular Economy and Water Reuse: AI-Optimized Treatment Is Making Industrial Water Recycling Viable',url:'https://bcg.com'},
    {source:'Science',title:'Quantum-Enhanced Climate and Hydrological Modeling Reduces Flood Prediction Uncertainty by 50%',url:'https://science.org'},
  ],

  media:[
    {source:'Variety',title:'Streaming\'s Profitability Reckoning: How Netflix, Disney+, and Max Are Finally Making Money',url:'https://variety.com'},
    {source:'Hollywood Reporter',title:'AI-Generated Content in Hollywood: The Guild Agreements That Will Define the Next Decade',url:'https://hollywoodreporter.com'},
    {source:'Deadline',title:'FAST Channel Economics: Why Free Ad-Supported Streaming Is Outpacing Premium Subscription Growth',url:'https://deadline.com'},
    {source:'Digiday',title:'The Cookieless Publisher Playbook: First-Party Data, Contextual Targeting, and Clean Rooms',url:'https://digiday.com'},
    {source:'IAB',title:'2025 Digital Advertising Outlook: CTV, Retail Media, and AI-Powered Programmatic',url:'https://iab.com'},
    {source:'Nielsen',title:'The Total Audience Report: Streaming Surpasses Linear TV in Total Watch Time',url:'https://nielsen.com'},
    {source:'PwC',title:'Global Entertainment & Media Outlook 2025–2029: AI, Bundling, and the Attention Economy',url:'https://pwc.com'},
    {source:'Adweek',title:'Programmatic\'s Next Chapter: How AI Bidding Algorithms Are Rewriting Ad Auction Economics',url:'https://adweek.com'},
    {source:'Wired',title:'The Recommendation Engine Arms Race: How Streaming Platforms Are Fighting for Your Next 30 Minutes',url:'https://wired.com'},
  ],

  about:[
    {source:'Harvard Business Review',title:'The Leadership Qualities That Separate Great Consulting Firms from Good Ones',url:'https://hbr.org'},
    {source:'McKinsey',title:'Purpose-Driven Organizations: How Mission Alignment Drives Outperformance',url:'https://mckinsey.com'},
    {source:'MIT Sloan Management Review',title:'Building a Culture of Innovation: Lessons from Top Technology Consultancies',url:'https://sloanreview.mit.edu'},
    {source:'Fortune',title:'The 100 Best Companies to Work For in 2025: What Sets Them Apart',url:'https://fortune.com'},
    {source:'Deloitte Insights',title:'The Future of Professional Services: How AI Is Reshaping Consulting, Advisory, and Strategy',url:'https://www2.deloitte.com/insights'},
    {source:'WEF',title:'Stakeholder Capitalism and Responsible AI: Why Purpose Matters More Than Ever',url:'https://weforum.org'},
    {source:'BCG',title:'How the Best Firms Attract Top Talent in the Age of AI',url:'https://bcg.com'},
    {source:'Financial Times',title:'The Boutique Consulting Boom: Why Specialist Firms Are Winning Enterprise Mandates',url:'https://ft.com'},
    {source:'Stanford GSB',title:'From Strategy to Execution: What Distinguishes Firms That Deliver on Transformation Promises',url:'https://gsb.stanford.edu'},
  ],

  careers:[
    {source:'Harvard Business Review',title:'The Skills That Matter Most in 2025 — and How Leading Firms Are Building Them',url:'https://hbr.org'},
    {source:'McKinsey',title:'The War for AI Talent: What Top Employers Are Doing to Win',url:'https://mckinsey.com'},
    {source:'LinkedIn',title:'2025 Workplace Learning Report: AI Skills Demand Surges 300% Among Enterprise Employers',url:'https://linkedin.com'},
    {source:'MIT Technology Review',title:'Quantum Computing Careers: The Emerging Roles and Skills Employers Need Now',url:'https://technologyreview.com'},
    {source:'Fortune',title:'Why the Best Technologists Are Choosing Consulting Over Big Tech in 2025',url:'https://fortune.com'},
    {source:'Glassdoor',title:'Top Employers for AI and Data Science Professionals: What Makes Them Stand Out',url:'https://glassdoor.com'},
    {source:'WEF',title:'Future of Jobs 2025: The Skills Gap Is Closing — Here Is Why',url:'https://weforum.org'},
    {source:'Deloitte Insights',title:'Rethinking the Employee Value Proposition for the Age of AI',url:'https://www2.deloitte.com/insights'},
    {source:'Stanford HAI',title:'Where AI Talent Goes: Industry vs Academia vs Consulting in 2025',url:'https://hai.stanford.edu'},
  ],

  partners:[
    {source:'Gartner',title:'Strategic Technology Partnerships: How Ecosystems Are Replacing Vendor Relationships',url:'https://gartner.com'},
    {source:'McKinsey',title:'The Power of Ecosystems: Why the Best Firms Co-Create Value with Technology Partners',url:'https://mckinsey.com'},
    {source:'Harvard Business Review',title:'From Vendor to Strategic Partner: How IT Consulting Alliances Are Evolving',url:'https://hbr.org'},
    {source:'Forrester',title:'The 2025 Cloud Partner Ecosystem: How Hyperscalers Are Reshaping Enterprise IT Delivery',url:'https://forrester.com'},
    {source:'AWS',title:'Partner Transformation Program: Building Next-Generation Consulting Capabilities on AWS',url:'https://aws.amazon.com'},
    {source:'Microsoft',title:'AI Partner Innovation: How the Copilot Ecosystem Is Creating New Value for Enterprise Clients',url:'https://microsoft.com'},
    {source:'IDC',title:'The IT Services Partner Landscape: Joint Solutions Are Outperforming Solo Strategies 3:1',url:'https://idc.com'},
    {source:'Deloitte Insights',title:'Alliance Strategy in the AI Era: Building vs. Buying vs. Partnering for Capability',url:'https://www2.deloitte.com/insights'},
    {source:'BCG',title:'The Platform Partnership Playbook: How Consulting Firms Are Monetizing Cloud Alliances',url:'https://bcg.com'},
  ],

  insights:[
    {source:'MIT Technology Review',title:'The Next Wave of AI Agents Is Already Here — And They\'re Reshaping Enterprise Workflows',url:'https://technologyreview.com'},
    {source:'McKinsey',title:'The State of AI in 2025: Adoption Has Crossed the Chasm, But ROI Remains Elusive',url:'https://mckinsey.com'},
    {source:'Harvard Business Review',title:'Why Most AI Transformations Fail — and the Six Factors That Make Them Succeed',url:'https://hbr.org'},
    {source:'Nature',title:'Large Language Models Show Surprising Capability in Scientific Reasoning Benchmarks',url:'https://nature.com'},
    {source:'Deloitte Insights',title:'The Generative AI Inflection Point: How Organizations Are Moving From Pilot to Production',url:'https://www2.deloitte.com/insights'},
    {source:'Stanford HAI',title:'AI Index 2025: Enterprise Deployment Doubles as Model Costs Collapse',url:'https://hai.stanford.edu'},
    {source:'IBM Research',title:'Advancing Quantum-Safe Cryptography: A Roadmap for Enterprise Migration',url:'https://research.ibm.com'},
    {source:'Wired',title:'Digital Twins Are Becoming the Nervous System of Modern Manufacturing Operations',url:'https://wired.com'},
    {source:'Financial Times',title:'The Race for Quantum Supremacy Enters Its Industrial Phase',url:'https://ft.com'},
  ],

};

function loadNewsFeed(containerId, topic){
  const container=document.getElementById(containerId);
  if(!container)return;
  const feed=PAGE_NEWS[topic]||PAGE_NEWS.home;
  const day=Math.floor(Date.now()/86400000);
  const offset=day%feed.length;
  const items=[...feed.slice(offset),...feed.slice(0,offset)].slice(0,9);
  renderNews(container, items);
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
// ── SCROLL PROGRESS BAR ──
window.addEventListener('scroll',function(){
  var bar=document.getElementById('scroll-progress');
  if(!bar)return;
  var pct=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
  bar.style.width=Math.min(pct,100)+'%';
});

// ── COOKIE CONSENT ──
(function(){
  if(localStorage.getItem('qiq-cookie'))return;
  setTimeout(function(){
    var ck=document.getElementById('cookie-consent');
    if(ck)ck.classList.add('show');
  },1800);
})();
function dismissCookie(accepted){
  var ck=document.getElementById('cookie-consent');
  if(ck)ck.classList.remove('show');
  localStorage.setItem('qiq-cookie','1');
}

// ── SEARCH OVERLAY ──
function toggleSearch(){
  var s=document.getElementById('qiq-search-overlay');
  if(!s)return;
  s.classList.toggle('open');
  if(s.classList.contains('open'))setTimeout(function(){document.getElementById('qiq-search-input').focus()},100);
}
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    var s=document.getElementById('qiq-search-overlay');
    if(s)s.classList.remove('open');
  }
});
var QIQ_SEARCH=[
  {t:'AI & ML Solutions',d:'Enterprise AI strategy, ML model development, production deployment',u:'services/ai-ml.html'},
  {t:'Quantum Computing & PQC',d:'Quantum readiness, post-quantum cryptography, NIST standards',u:'services/quantum-computing.html'},
  {t:'Digital Transformation',d:'End-to-end transformation programs, modern data estates',u:'services/digital-transformation.html'},
  {t:'C-Suite Advisory',d:'Board-level technology strategy, AI governance, M&A',u:'services/c-suite-advisory.html'},
  {t:'Business Process',d:'Process mining, RPA, intelligent automation',u:'services/business-process.html'},
  {t:'Information & Insights',d:'Data platforms, BI, real-time analytics',u:'services/information-insights.html'},
  {t:'Management Consulting',d:'Strategy, org design, change management',u:'services/management-consulting.html'},
  {t:'Financial Services',d:'AI risk models, fraud detection, PQC, digital banking',u:'industries/financial-services.html'},
  {t:'Healthcare',d:'Clinical AI, interoperability, value-based care analytics',u:'industries/healthcare.html'},
  {t:'Pharma & Biotech',d:'AI drug discovery, CRISPR, bioprocessing, CGT',u:'industries/pharmaceuticals.html'},
  {t:'Technology',d:'Platform strategy, cloud optimization, AI engineering',u:'industries/technology.html'},
  {t:'Telecommunications',d:'5G monetization, network AI, cloud-native core',u:'industries/telecommunications.html'},
  {t:'Energy & Utilities',d:'Grid AI, renewable optimization, OT security',u:'industries/energy.html'},
  {t:'Government',d:'Digital government, national security AI, policy analytics',u:'industries/government.html'},
  {t:'Sustainability & Water',d:'ESG strategy, smart water networks, net-zero roadmaps',u:'industries/sustainability.html'},
  {t:'Media & Entertainment',d:'Streaming strategy, AI content ops, AdTech',u:'industries/media-entertainment.html'},
  {t:'Blog & Insights',d:'Thought leadership on AI, quantum, digital transformation',u:'insights/blog.html'},
  {t:'Case Studies',d:'Real-world client transformation stories',u:'insights/case-studies.html'},
  {t:'Contact',d:'Schedule a consultation, find your nearest office',u:'company/contact.html'},
  {t:'About QantumIQ',d:'Our mission, leadership, and global presence',u:'company/about.html'},
  {t:'Quantum Readiness Quiz',d:'Assess your organization quantum readiness score',u:'tools/quantum-readiness-quiz.html'},
  {t:'AI ROI Calculator',d:'Estimate the ROI of an AI transformation programme',u:'tools/roi-calculator.html'},
  {t:'Privacy Policy',d:'QantumIQ privacy and data protection policy',u:'legal/privacy-policy.html'},
  {t:'Careers',d:'Career opportunities in AI and quantum consulting',u:'company/careers.html'},
  {t:'Partners & Clients',d:'Technology partners and enterprise clients',u:'company/partners-clients.html'},
];
function doSearch(q){
  var sr=document.getElementById('qiq-search-results');
  if(!sr)return;
  if(!q.trim()){sr.innerHTML='';return;}
  var ql=q.toLowerCase();
  var res=QIQ_SEARCH.filter(function(d){return d.t.toLowerCase().indexOf(ql)>-1||d.d.toLowerCase().indexOf(ql)>-1});
  var _segs=location.pathname.replace(/\/$/,'').split('/').filter(Boolean);
  var r='../'.repeat(Math.max(0,_segs.length-1));
  if(res.length){
    sr.innerHTML=res.map(function(x){return '<a class="search-result" href="'+r+x.u+'"><h4>'+x.t+'</h4><p>'+x.d+'</p></a>'}).join('');
  } else {
    sr.innerHTML='<div class="search-result"><p>No results found.</p></div>';
  }
}

// ── AI CHATBOT ──
var _chatOpen=false,_chatHistory=[];
function toggleChat(){
  _chatOpen=!_chatOpen;
  var w=document.getElementById('qiq-chatbot');
  if(w)w.classList.toggle('open',_chatOpen);
  if(_chatOpen){var i=document.getElementById('chat-input');if(i)i.focus();}
}
function appendChatMsg(txt,role){
  var m=document.getElementById('chat-messages');
  if(!m)return;
  var d=document.createElement('div');
  d.className='chat-msg '+(role==='user'?'user':'bot');
  d.textContent=txt;m.appendChild(d);
  m.scrollTop=m.scrollHeight;
  return d;
}
function sendChatMsg(){
  var inp=document.getElementById('chat-input');
  if(!inp)return;
  var msg=inp.value.trim();if(!msg)return;
  inp.value='';
  appendChatMsg(msg,'user');
  var typing=appendChatMsg('','bot');
  setTimeout(function(){
    typing.remove();
    var reply=_qiqRespond(msg);
    appendChatMsg(reply,'bot');
  },600+Math.random()*400);
}
var _KB=[
  {k:['quantum','pqc','post-quantum','cryptograph','nist','rsa','ecc','ml-kem','ml-dsa','encrypt'],r:'QantumIQ offers comprehensive quantum readiness services including cryptographic asset inventory, post-quantum cryptography (PQC) migration using NIST-approved standards (ML-KEM, ML-DSA), and 90-day structured migration programmes. Our CTO Dr. Sophia Liu is a pioneer in applied PQC.\n\nWould you like to schedule a Quantum Readiness Assessment? → Contact us at company/contact.html'},
  {k:['ai','artificial intelligence','machine learn','ml','mlops','deploy','production','model','llm','gpt','claude','deep learn'],r:'Our AI & ML practice bridges the gap between proof-of-concept and production deployment. We specialise in enterprise MLOps, AI governance frameworks, and responsible AI — with 140+ AI systems in production across our client base.\n\nOur Chief AI Officer Dr. Daniel Reeves (formerly Google DeepMind) leads this practice.'},
  {k:['consult','help','engage','hire','work with','partner','methodology','how you work','approach'],r:'QantumIQ consulting engagements typically follow a structured approach:\n\n1. Discovery & Assessment (30 days)\n2. Strategy & Roadmap (30-60 days)\n3. Implementation & Scale (60-90 days)\n\nWe embed with your teams — we don\'t just deliver slide decks. Schedule a consultation at company/contact.html to discuss your needs.'},
  {k:['service','offer','do','what do','capabilities','practice','solution'],r:'QantumIQ offers 7 service lines:\n\n• AI & ML Solutions\n• Quantum Computing & PQC\n• Digital Transformation\n• C-Suite Advisory\n• Business Process Optimisation\n• Information & Insights\n• Management Consulting\n\nExplore all services at services/index.html'},
  {k:['industr','sector','vertical','financial','bank','pharma','health','energy','government','media','telecom','sustain','tech'],r:'We serve 9 industry verticals: Financial Services, Healthcare, Pharma & Biotech, Technology, Telecommunications, Energy, Government, Media & Entertainment, and Sustainability & Water.\n\nEach vertical has dedicated practitioners with deep domain knowledge. View all industries at industries/index.html'},
  {k:['contact','call','reach','email','phone','schedule','book','consultation','meet','talk','speak'],r:'Ready to connect? You can reach us via:\n\n📧 info@qantumiq.com\n📧 consulting@qantumiq.com\n\nOr schedule directly at company/contact.html\n\nWe respond within 1 business day.'},
  {k:['office','location','where','headquarter','global','presence','country','city','oakland','new york','london','singapore','delhi','sydney','mumbai','bangalore'],r:'QantumIQ has 13 global offices across 7 countries:\n\n🇺🇸 Oakland MD (HQ), New York, Miami, Boston\n🇬🇧 London, Birmingham\n🇮🇳 Delhi NCR, Mumbai, Bangalore, Hyderabad\n🇸🇬 Singapore\n🇦🇺 Sydney, Melbourne'},
  {k:['case study','client','result','outcome','success','transform','impact','roi','stat','number'],r:'Notable outcomes from QantumIQ engagements:\n\n• 87% fraud detection accuracy for a Tier-1 bank ($420M annual risk reduction)\n• 40% subscriber churn reduction for a global streaming platform ($95M retained)\n• 40% faster drug development across 6 pharma facilities ($310M R&D savings)\n\nView full case studies at insights/case-studies.html'},
  {k:['about','who','company','team','leader','founder','ceo','cto','history','mission','vision','bio','people','leadership'],r:'QantumIQ was founded by Arjun Kapoor (former McKinsey Partner, MIT Quantum PhD). The leadership team includes practitioners from IBM Research, Google DeepMind, DARPA, Bain, and Accenture.\n\n$4.2B+ client value delivered | 500+ clients | 15+ years experience | 95% client satisfaction\n\nLearn more at company/about.html'},
  {k:['quiz','readiness','assess','score','test','evaluate'],r:'Try our free Quantum Readiness Quiz — a 6-step interactive assessment that evaluates your PQC preparedness, AI maturity, and quantum risk exposure.\n\nGet instant results with a personalised action plan → tools/quantum-readiness-quiz.html'},
  {k:['calculator','estimate','project','invest','value','business case','cost','saving','payback'],r:'Use our AI ROI Calculator to estimate the 3-year return on an AI transformation programme — including projected cost savings, revenue uplift, efficiency gains, and payback period.\n\nTry it free → tools/roi-calculator.html'},
  {k:['digital transform','cloud','migrat','modern','data','platform','legacy','infrastructure'],r:'Our Digital Transformation practice covers end-to-end modernisation: cloud migration strategy, data estate modernisation, legacy system replacement, and change management at enterprise scale.\n\nWe\'ve helped organisations compress 3-year transformation timelines to under 18 months.'},
  {k:['c-suite','board','executive','strateg','advisor','governance','ceo guide','cio','ciso','cto brief'],r:'QantumIQ\'s C-Suite Advisory practice provides board-level technology strategy: quantum risk briefings, AI readiness assessments, M&A technology due diligence, and executive coaching on emerging technology adoption.\n\nSchedule an executive briefing → company/contact.html'},
  {k:['drug','discover','pharma','cmc','formulation','fda','clinical','biotech','gene','crispr','manufacturing'],r:'In pharma and biotech, we specialise in AI-driven drug discovery, CMC optimization (40% timeline compression), bioprocessing analytics, and regulatory technology. Three clients have achieved sub-12-month IND timelines using our platform.\n\nRead more → insights/articles/ai-pharmaceutical-development.html'},
  {k:['fraud','risk','trade','portfolio','hedge','wealth','payment','banking','financ','invest'],r:'For financial services, our AI and quantum capabilities span fraud detection (87% accuracy, sub-40ms latency), risk management, algorithmic trading optimization, and PQC migration for long-lived financial data.\n\nCase study → insights/case-studies.html'},
  {k:['hello','hi ','hey','greet','good morning','good afternoon','good evening','howdy','sup'],r:'Hello! I\'m the QantumIQ AI assistant. I can help you with:\n\n• Our services & industry expertise\n• Quantum readiness & PQC migration\n• AI strategy & implementation\n• Scheduling a consultation\n• Interactive tools (Quiz, ROI Calculator)\n\nWhat would you like to know?'},
  {k:['thank','thanks','great','perfect','helpful','awesome','good','nice','excellent','wonderful','brilliant','cheers','appreciate'],r:'You\'re welcome! If you need anything else — whether it\'s a deeper dive into a specific service, or you\'d like to schedule a consultation — just ask.\n\n📧 info@qantumiq.com\n→ company/contact.html'},
  {k:['price','cost','fee','pricing','expensive','afford','budget','rate','charg','invest','pay','spend'],r:'QantumIQ engagement pricing varies by scope and complexity. We offer structured assessment programmes starting from 30-day discovery engagements.\n\nFor a tailored proposal, schedule a consultation → company/contact.html\n\nOr use our free AI ROI Calculator to estimate potential value → tools/roi-calculator.html'},
  {k:['career','job','work for','position','recruit','join','hiring','open role','opportunity','talent','apply','intern'],r:'QantumIQ is always looking for exceptional talent in AI, quantum computing, and consulting. Current openings span research, delivery, and strategy roles across our 13 offices.\n\nView opportunities → company/careers.html'},
  {k:['blog','article','insight','thought leadership','read','publish','paper','research','whitepaper','report','podcast','webinar','event'],r:'Our Intelligence Feed features practitioner-written insights on AI, quantum computing, and digital transformation:\n\n• NIST PQC Migration Checklist\n• Enterprise AI Failure Analysis\n• AI Drug Discovery Timelines\n• Quantum in Financial Services\n\nRead all insights → insights/blog.html'},
];
function _qiqRespond(msg){
  var m=msg.toLowerCase();
  var best=null,bestScore=0;
  for(var i=0;i<_KB.length;i++){
    var entry=_KB[i],score=0;
    for(var j=0;j<entry.k.length;j++){
      if(m.indexOf(entry.k[j])>-1)score+=1;
    }
    if(score>bestScore){bestScore=score;best=entry}
  }
  if(best)return best.r;
  return 'I\'d be happy to help! I can assist with:\n\n• Our services (AI, quantum, consulting)\n• Quantum readiness & PQC migration\n• Scheduling a consultation\n• Case studies & results\n• Interactive tools\n\nCould you rephrase your question? Or reach us directly at info@qantumiq.com';
}

// ── NEWSLETTER ──
function nlSubmit(e){
  e.preventDefault();
  var f=e.target;
  f.style.display='none';
  var ok=f.nextElementSibling;
  if(ok)ok.style.display='block';
}

// ── BRAND MARQUEE BUILDER ──
function buildBrandMarquee(id, data){
  var el=document.getElementById(id);
  if(!el)return;
  var double=data.concat(data);
  el.innerHTML=double.map(function(p){
    return '<span class="marquee-chip"><img src="https://www.google.com/s2/favicons?domain='+p.domain+'&sz=64" alt="'+p.name+'" class="chip-logo" onerror="this.style.display=\'none\'">'+p.name+'</span>';
  }).join('');
}


// ── CASE STUDY EXPAND ──
function toggleCase(btn){
  var det=btn.closest('.cs-card').querySelector('.cs-detail');
  var isOpen=det.classList.toggle('open');
  btn.innerHTML=(isOpen?'Close Case Study ':'Read Full Case Study ')+'<span>'+(isOpen?'▲':'▼')+'</span>';
}

// ── QUANTUM READINESS QUIZ ──
var _qStep=1,_qScores=[0,0,0,0,0,0];
function selectQuizOpt(el,val){
  el.closest('.quiz-opts').querySelectorAll('.quiz-opt').forEach(function(o){o.classList.remove('selected')});
  el.classList.add('selected');
  _qScores[_qStep-1]=val;
}
function nextQuizStep(){_qStep++;gotoQuizStep(_qStep)}
function prevQuizStep(){_qStep--;gotoQuizStep(_qStep)}
function gotoQuizStep(s){
  document.querySelectorAll('.quiz-step').forEach(function(el){el.classList.remove('active')});
  var target=document.querySelector('[data-qstep="'+s+'"]');
  if(target)target.classList.add('active');
  var fill=document.getElementById('quiz-fill');
  if(fill)fill.style.width=Math.min(((s-1)/6)*100,100)+'%';
}
function showQuizResult(){
  var total=_qScores.reduce(function(a,b){return a+b},0);
  var max=18,pct=Math.round((total/max)*100);
  gotoQuizStep('result');
  var fill=document.getElementById('quiz-fill');
  if(fill)fill.style.width='100%';
  var arc=document.getElementById('qr-arc');
  if(arc)setTimeout(function(){arc.style.strokeDashoffset=352-(352*(pct/100))},100);
  var numEl=document.getElementById('qr-pct');
  if(numEl){var c=0;var iv=setInterval(function(){c=Math.min(c+2,pct);numEl.textContent=c+'%';if(c>=pct)clearInterval(iv)},20)}
  var titles=['Critical Risk','High Risk — Act Now','Moderate — Momentum Needed','Progressing Well','Quantum Ready'];
  var idx=Math.min(Math.floor(pct/20),4);
  var titleEl=document.getElementById('qr-title');
  if(titleEl)titleEl.textContent=titles[idx];
  var recs=[
    ['Begin a cryptographic asset inventory immediately','Engage your CISO on quantum risk briefing','Request a QantumIQ Quantum Readiness Assessment','Prioritise PQC education for your security team'],
    ['Complete your cryptographic inventory','Develop a formal PQC migration roadmap','Identify your highest-risk systems (financial data, IP)','Schedule a board-level quantum risk briefing'],
    ['Accelerate PQC migration to production systems','Expand AI governance framework','Explore quantum algorithm use cases for your sector','Begin harvest-now-decrypt-later threat mitigation'],
    ['Finalise PQC migration across all legacy systems','Scale AI to enterprise production','Explore quantum computing pilots','Implement continuous cryptographic monitoring'],
    ['Maintain quantum security posture','Explore quantum advantage use cases','Share your PQC learnings across your supply chain','Consider quantum-native algorithm development']
  ];
  var recsEl=document.getElementById('qr-recs');
  if(recsEl)recsEl.innerHTML=recs[idx].map(function(r){return '<div class="quiz-rec">'+r+'</div>'}).join('');
}
function resetQuiz(){_qStep=1;_qScores=[0,0,0,0,0,0];gotoQuizStep(1);var f=document.getElementById('quiz-fill');if(f)f.style.width='0%';document.querySelectorAll('.quiz-opt').forEach(function(o){o.classList.remove('selected')})}

// ── ROI CALCULATOR ──
var _roiChart=null;
var _matLabels=['','Exploring','Experimenting','Scaling','Optimising','AI-Native'];
function fmtROI(v){return v>=1000?'$'+(v/1000).toFixed(1)+'B':'$'+Math.round(v)+'M'}
function calcROI(){
  var r1=document.getElementById('roi-rev');if(!r1)return;
  var rev=+r1.value,emp=+document.getElementById('roi-emp').value,mat=+document.getElementById('roi-mat').value,mult=+document.getElementById('roi-ind').value;
  document.getElementById('roi-rev-v').textContent=rev>=1000?'$'+(rev/1000).toFixed(1)+'B':'$'+rev+'M';
  document.getElementById('roi-emp-v').textContent=emp.toLocaleString();
  document.getElementById('roi-mat-v').textContent='Level '+mat+' — '+_matLabels[mat];
  var base=rev*(0.04+(mat-1)*0.018)*mult;
  var cost=base*0.38,rvu=base*0.62,eff=Math.round(8+(mat-1)*4+mult*3),payback=Math.round(18-mat*2);
  document.getElementById('roi-total').textContent=fmtROI(base*3);
  document.getElementById('roi-cost').textContent=fmtROI(cost*3);
  document.getElementById('roi-revenue').textContent=fmtROI(rvu*3);
  document.getElementById('roi-eff').textContent=eff+'%';
  document.getElementById('roi-payback').textContent=payback+'mo';
}

window.QIQ={loadNewsFeed,injectContentPhotos,getDailyImage,buildBrandMarquee};

// Expose interactive functions globally so HTML onclick handlers can call them
window.dismissCookie=dismissCookie;
window.toggleSearch=toggleSearch;
window.doSearch=doSearch;
window.toggleChat=toggleChat;
window.sendChatMsg=sendChatMsg;
window.nlSubmit=nlSubmit;
window.buildBrandMarquee=buildBrandMarquee;
window.toggleCase=toggleCase;
window.selectQuizOpt=selectQuizOpt;
window.nextQuizStep=nextQuizStep;
window.prevQuizStep=prevQuizStep;
window.showQuizResult=showQuizResult;
window.resetQuiz=resetQuiz;
window.calcROI=calcROI;

})();
