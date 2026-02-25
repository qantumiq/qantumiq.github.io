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
  <text x="133" y="38" font-family="IBM Plex Sans,Arial,sans-serif" font-weight="700" font-size="28" fill="#00C8E8" letter-spacing="-0.5">I</text>

  <!-- ── Q₂ : IQ  (brain inside, center 161,26, r=18, cyan) ── -->
  <g transform="translate(161,26)">
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
  const isRoot=!location.pathname.includes('/company/')&&!location.pathname.includes('/services/')&&!location.pathname.includes('/industries/')&&!location.pathname.includes('/insights/')&&!location.pathname.includes('/legal/');
  const r=isRoot?'':'../';

  const nav=document.createElement('nav');
  nav.id='qiq-nav';
  nav.innerHTML=`
<a class="nav-logo-link" href="${r}index.html" style="text-decoration:none;display:flex;align-items:center;flex-shrink:0;">${LOGO_SVG}</a>
<ul class="nav-menu" id="nav-menu">
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
      <a href="${r}insights/whitepapers.html">Whitepapers</a>
      <a href="${r}insights/webinars-events.html">Webinars &amp; Events</a>
      <a href="${r}insights/news.html">News</a>
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
  <div class="mob-heading">Services</div>
  <a href="${r}services/ai-ml.html">AI &amp; ML Solutions</a>
  <a href="${r}services/quantum-computing.html">Quantum Computing</a>
  <a href="${r}services/digital-transformation.html">Digital Transformation</a>
  <a href="${r}services/c-suite-advisory.html">C-Suite Advisory</a>
  <a href="${r}services/business-process.html">Business Process</a>
  <a href="${r}services/information-insights.html">Information &amp; Insights</a>
  <a href="${r}services/management-consulting.html">Management Consulting</a>
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
  <a href="${r}insights/whitepapers.html">Whitepapers</a>
  <a href="${r}insights/webinars-events.html">Webinars &amp; Events</a>
  <a href="${r}insights/news.html">News</a>
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
        <text x="133" y="38" font-family="IBM Plex Sans,Arial,sans-serif" font-weight="700" font-size="28" fill="#00C8E8" letter-spacing="-0.5">I</text>
        <!-- Q₂: IQ — brain, cyan -->
        <g transform="translate(161,26)">
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
      <li><a href="${r}insights/blog.html">Insights</a></li>
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
