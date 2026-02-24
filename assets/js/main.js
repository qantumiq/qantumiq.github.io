/* ============================================
   QantumIQ — Main JavaScript
   Navigation, Dynamic Images, Daily Info Feed
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initDynamicImages();
  initInfoFeed();
});

/* ---- Sticky Header ---- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---- Mobile Navigation ---- */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  const overlay = document.querySelector('.nav-overlay');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      nav.classList.remove('open');
      overlay.classList.remove('active');
      toggle.textContent = '☰';
    });
  }

  document.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector(':scope > a');
    const dropdown = item.querySelector('.nav-dropdown');
    if (!dropdown || !link) return;
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });
}

/* ---- Dynamic Images ---- */
// Uses picsum.photos with seeds for 100% reliable themed daily rotation
// Each theme maps to a set of picsum seed strings that produce appropriate images

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

// Picsum seeds per theme — each produces a consistent, professional image
const THEME_SEEDS = {
  'index':                ['tech-abstract-1','quantum-net-2','digital-wave-3','ai-brain-4','data-viz-5'],
  'ai-ml':               ['neural-net-1','deep-learn-2','robot-ai-3','ml-brain-4'],
  'quantum-computing':    ['quantum-chip-1','physics-particle-2','quantum-abstract-3','qubit-4'],
  'digital-transformation':['cloud-digital-1','modern-office-2','laptop-work-3','transform-4'],
  'c-suite-advisory':     ['executive-board-1','strategy-room-2','leadership-3','corporate-4'],
  'business-process':     ['automation-flow-1','analytics-dash-2','optimize-3','workflow-4'],
  'information-insights': ['data-chart-1','bi-dashboard-2','insights-3','analytics-4'],
  'executive-staffing':   ['team-collab-1','recruit-pro-2','talent-mgmt-3','office-team-4'],
  'financial-services':   ['finance-chart-1','banking-digital-2','trading-3','fintech-4'],
  'technology':           ['silicon-code-1','server-rack-2','startup-tech-3','innovation-4'],
  'pharmaceuticals':      ['pharma-lab-1','medicine-sci-2','drug-research-3','biotech-4'],
  'healthcare':           ['medical-tech-1','hospital-2','health-digital-3','care-innov-4'],
  'energy':               ['solar-panel-1','wind-turbine-2','power-grid-3','renewable-4'],
  'government':           ['capitol-gov-1','civic-tech-2','smart-city-3','public-sector-4'],
  'sustainability':       ['green-earth-1','eco-nature-2','sustainable-3','environment-4'],
  'media-entertainment':  ['media-stream-1','camera-prod-2','entertain-3','broadcast-4'],
  'insights':             ['research-book-1','knowledge-2','education-3','analysis-4'],
  'blog':                 ['writing-desk-1','content-2','journal-3','publish-4'],
  'reports':              ['chart-report-1','data-present-2','research-doc-3','analytics-5'],
  'white-papers':         ['academic-1','library-2','publication-3','science-4'],
  'podcasts':             ['microphone-1','audio-studio-2','broadcast-3','recording-4'],
  'webinars':             ['conference-1','presentation-2','stage-event-3','seminar-4'],
  'careers':              ['team-office-1','workplace-2','growth-pro-3','collab-4'],
  'contact':              ['handshake-1','meeting-biz-2','connect-3','conversation-4'],
  'about':                ['team-corporate-1','company-culture-2','office-modern-3','consulting-4'],
  'privacy':              ['security-lock-1','digital-shield-2','cybersec-3','protect-4']
};

function initDynamicImages() {
  const dayOfYear = getDayOfYear();

  // Hero images
  document.querySelectorAll('[data-hero-theme]').forEach(el => {
    const theme = el.getAttribute('data-hero-theme');
    const seeds = THEME_SEEDS[theme] || THEME_SEEDS['index'];
    const seed = seeds[dayOfYear % seeds.length];
    const w = el.getAttribute('data-width') || '1600';
    const h = el.getAttribute('data-height') || '900';
    el.src = `https://picsum.photos/seed/${seed}/${w}/${h}`;
    el.onerror = function() { this.style.display = 'none'; };
  });

  // Card/feature images
  document.querySelectorAll('[data-img-theme]').forEach(el => {
    const theme = el.getAttribute('data-img-theme');
    const idx = parseInt(el.getAttribute('data-img-idx') || '0');
    const seeds = THEME_SEEDS[theme] || THEME_SEEDS['index'];
    const seed = seeds[(dayOfYear + idx) % seeds.length];
    const w = el.getAttribute('data-width') || '800';
    const h = el.getAttribute('data-height') || '500';
    el.src = `https://picsum.photos/seed/${seed}/${w}/${h}`;
    el.onerror = function() { this.style.display = 'none'; };
  });
}


/* ---- Daily Info Feed ---- */
const INFO_FEED = {
  ai: {
    icon: '🤖',
    items: [
      { title: 'OpenAI Advances Reasoning Models with Latest Research', desc: 'New developments in large language model reasoning capabilities push the boundaries of AI problem-solving.', source: 'AI Research Weekly', url: 'https://arxiv.org/list/cs.AI/recent' },
      { title: 'Enterprise AI Adoption Accelerates Across Industries', desc: 'Fortune 500 companies report significant ROI from AI integration in operations and customer service workflows.', source: 'MIT Technology Review', url: 'https://www.technologyreview.com/topic/artificial-intelligence/' },
      { title: 'Responsible AI Frameworks Gain Regulatory Traction', desc: 'Government agencies worldwide introduce new guidelines for ethical AI deployment in critical systems.', source: 'Stanford AI Index', url: 'https://aiindex.stanford.edu/' },
      { title: 'Multimodal AI Models Transform Content Creation', desc: 'Latest generation models seamlessly process text, image, video, and audio for enterprise applications.', source: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/' },
      { title: 'AI-Powered Drug Discovery Achieves Clinical Milestones', desc: 'ML platforms accelerate pharmaceutical development with novel compound identification breakthroughs.', source: 'Nature Machine Intelligence', url: 'https://www.nature.com/natmachintell/' },
      { title: 'Edge AI Deployments Scale with New Hardware Innovations', desc: 'On-device inference capabilities expand as specialized chips deliver desktop-class AI at the edge.', source: 'IEEE Spectrum', url: 'https://spectrum.ieee.org/topic/artificial-intelligence/' },
      { title: 'Generative AI Revenue Projections Exceed Expectations', desc: 'Industry analysts revise estimates upward as enterprise generative AI spending surpasses forecasts.', source: 'Gartner', url: 'https://www.gartner.com/en/topics/artificial-intelligence' },
    ]
  },
  quantum: {
    icon: '⚛️',
    items: [
      { title: 'Quantum Error Correction Achieves New Benchmark', desc: 'Research teams demonstrate fault-tolerant quantum computing protocols maintaining coherence at record scales.', source: 'Nature Physics', url: 'https://www.nature.com/nphys/' },
      { title: 'IBM Expands Quantum Network with Enterprise Partners', desc: 'Global companies gain access to advanced quantum processors for optimization and simulation workloads.', source: 'Quantum Computing Report', url: 'https://quantumcomputingreport.com/' },
      { title: 'Post-Quantum Cryptography Standards Near Finalization', desc: 'NIST accelerates adoption timelines for quantum-resistant encryption algorithms across federal systems.', source: 'NIST', url: 'https://www.nist.gov/quantum-computing' },
      { title: 'Quantum Machine Learning Shows Promise in Materials Science', desc: 'Hybrid quantum-classical algorithms demonstrate advantage in molecular simulation and material discovery.', source: 'Physical Review Letters', url: 'https://journals.aps.org/prl/' },
      { title: 'Quantum Sensing Technologies Enter Commercial Market', desc: 'Precision measurement applications in healthcare, navigation, and energy exploration reach deployment readiness.', source: 'The Quantum Insider', url: 'https://thequantuminsider.com/' },
      { title: 'Quantum Cloud Services Drive Startup Accessibility', desc: 'Pay-per-use quantum computing platforms lower the barrier for small teams to explore quantum algorithms.', source: 'TechCrunch', url: 'https://techcrunch.com/tag/quantum-computing/' },
      { title: 'Quantum Computing Workforce Programs Expand Globally', desc: 'Universities and tech companies launch training initiatives to address the growing quantum talent gap.', source: 'Science Daily', url: 'https://www.sciencedaily.com/news/computers_math/quantum_computers/' },
    ]
  },
  digital: {
    icon: '🔄',
    items: [
      { title: 'Cloud-Native Architectures Dominate Enterprise IT', desc: 'Organizations accelerate migration to microservices and serverless for agility and cost optimization.', source: 'Forrester', url: 'https://www.forrester.com/' },
      { title: 'Digital Twin Technology Matures for Industrial Use', desc: 'Real-time virtual replicas enable predictive maintenance and operational optimization at scale.', source: 'McKinsey Digital', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital' },
      { title: 'Zero-Trust Security Becomes Enterprise Standard', desc: 'Companies adopt identity-based security frameworks as perimeter approaches prove insufficient.', source: 'Cybersecurity Ventures', url: 'https://cybersecurityventures.com/' },
      { title: 'Low-Code Platforms Empower Business Innovation', desc: 'Citizen developer programs generate measurable value as enterprises democratize app development.', source: 'Gartner', url: 'https://www.gartner.com/en/information-technology' },
      { title: 'Data Mesh Architecture Gains Enterprise Momentum', desc: 'Decentralized data ownership models improve analytics agility and cross-functional decision making.', source: 'Harvard Business Review', url: 'https://hbr.org/topic/technology' },
      { title: '5G Private Networks Accelerate Smart Factories', desc: 'Manufacturers leverage ultra-reliable low-latency connectivity for real-time automation and QC.', source: 'IIoT World', url: 'https://www.iiot-world.com/' },
      { title: 'Platform Engineering Emerges as Key DevOps Evolution', desc: 'Internal developer platforms standardize toolchains and reduce cognitive load for engineering teams.', source: 'InfoQ', url: 'https://www.infoq.com/' },
    ]
  },
  business: {
    icon: '📊',
    items: [
      { title: 'C-Suite Priorities Shift Toward Resilient Growth', desc: 'Executive leaders prioritize operational resilience and sustainable revenue amid economic uncertainty.', source: 'Deloitte Insights', url: 'https://www2.deloitte.com/insights' },
      { title: 'ESG Integration Drives Long-Term Value Creation', desc: 'Companies with strong ESG metrics outperform peers in shareholder returns and risk management.', source: 'PwC', url: 'https://www.pwc.com/gx/en/issues/esg.html' },
      { title: 'Global M&A Activity Rebounds in Technology Sector', desc: 'Strategic acquisitions accelerate as firms seek AI capabilities and digital infrastructure assets.', source: 'Financial Times', url: 'https://www.ft.com/technology' },
      { title: 'Workforce Transformation Programs Show Impact', desc: 'Upskilling initiatives in data literacy and digital tools deliver significant productivity improvements.', source: 'World Economic Forum', url: 'https://www.weforum.org/' },
      { title: 'Supply Chain Digitization Reduces Risk', desc: 'End-to-end digital platforms enable real-time tracking and predictive disruption management.', source: 'BCG', url: 'https://www.bcg.com/capabilities/operations/supply-chain-management' },
      { title: 'Healthcare Innovation Investment Reaches Record Levels', desc: 'VC and corporate R&D spending on healthtech hits new highs driven by AI diagnostics.', source: 'Rock Health', url: 'https://rockhealth.com/' },
      { title: 'Pharma Companies Embrace AI-Driven CMC Optimization', desc: 'Manufacturing and controls processes benefit from predictive analytics, reducing timelines significantly.', source: 'Pharmaceutical Technology', url: 'https://www.pharmaceutical-technology.com/' },
    ]
  }
};

function initInfoFeed() {
  const container = document.getElementById('info-feed-items');
  if (!container) return;

  const dayOfYear = getDayOfYear();
  const allItems = [];

  Object.keys(INFO_FEED).forEach(cat => {
    const src = INFO_FEED[cat];
    const items = src.items;
    const startIdx = dayOfYear % items.length;
    for (let i = 0; i < 2; i++) {
      const item = items[(startIdx + i) % items.length];
      allItems.push({ ...item, icon: src.icon, category: cat });
    }
  });

  // Shuffle by day
  allItems.sort((a, b) => hashStr(a.title + dayOfYear) - hashStr(b.title + dayOfYear));

  container.innerHTML = allItems.slice(0, 8).map(item => `
    <a href="${item.url}" target="_blank" rel="noopener" class="info-feed__item">
      <div class="info-feed__item-icon">${item.icon}</div>
      <div class="info-feed__item-content">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="info-feed__item-source">${item.source}</span>
      </div>
    </a>
  `).join('');

  const dateEl = document.getElementById('info-feed-date');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }
}

/* ---- Smooth scroll ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
