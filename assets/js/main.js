/* ============================================
   QantumIQ v3.0 — Main JavaScript
   Scroll Progress, Navigation, Images, Feed
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initHeader();
  initMobileNav();
  initDynamicImages();
  initInfoFeed();
});

/* ---- Scroll Progress Indicator ---- */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

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
        // Close other open items
        document.querySelectorAll('.nav-item.open').forEach(i => { if (i !== item) i.classList.remove('open'); });
        item.classList.toggle('open');
      }
    });
  });
}

/* ---- Dynamic Images (Verified Working Unsplash URLs) ---- */
// These are direct Unsplash image URLs using specific photo IDs that are confirmed working.
// Each theme has 4 photos that rotate daily.

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

// Verified Unsplash photo IDs — tested and confirmed working
const PHOTO_IDS = {
  'index': [
    '1451187580459-43490279c0fa',  // Earth from space with networks
    '1526374965328-7f61d4dc18c5',  // Abstract blue tech
    '1558494949-ef010cbdcc31',      // Data center corridor
    '1620712943543-bcc4688e7485',   // AI brain visualization
  ],
  'ai-ml': [
    '1555255707-c07966088b7b',  // Neural network abstract
    '1620712943543-bcc4688e7485', // Brain AI
    '1535378620166-ed1fd5deca16', // Machine learning
    '1526374965328-7f61d4dc18c5', // Tech abstract
  ],
  'quantum-computing': [
    '1635070041078-e363dbe005cb', // Quantum chip
    '1509228468518-180dd4864904', // Physics particles
    '1636466497217-26a8cbeaf0aa', // Abstract quantum
    '1532094349884-543bc11b234d', // Science abstract
  ],
  'digital-transformation': [
    '1519389950473-47ba0277781c', // Laptop workspace
    '1460925895917-afdab827c52f', // Digital office
    '1504868584819-f8e8b4b6d7e3', // Modern tech
    '1551288049-bebda4e38f71',     // Cloud computing
  ],
  'c-suite-advisory': [
    '1560472354969-4e23f6820fe5', // Business meeting
    '1507679799987-c73779587ccf', // Professional
    '1573164713712-03790a178651', // Executive meeting
    '1552664730-d307ca884978',     // Strategy
  ],
  'business-process': [
    '1460925895917-afdab827c52f', // Analytics
    '1504868584819-f8e8b4b6d7e3', // Modern workspace
    '1551288049-bebda4e38f71',     // Data
    '1553877522-43269d4ea984',     // Workflow
  ],
  'information-insights': [
    '1551288049-bebda4e38f71',  // Data viz
    '1504868584819-f8e8b4b6d7e3', // Analytics
    '1460925895917-afdab827c52f', // Dashboard
    '1551434678-e076c223a692',     // BI
  ],
  'management-consulting': [
    '1560472354969-4e23f6820fe5', // Business meeting
    '1573164713712-03790a178651', // Strategy session
    '1552664730-d307ca884978',     // Collaboration
    '1507679799987-c73779587ccf', // Professional
  ],
  'financial-services': [
    '1611974789855-9c2a0a7236a3', // Finance
    '1590283603385-17ffb3a7f29f', // Stock exchange
    '1526304640581-d334cdbbf45e', // Financial district
    '1559526324-4b87b5e36e44',     // Banking
  ],
  'technology': [
    '1518770660439-4636190af475', // Circuit
    '1531297484001-80022131f5a1', // Server room
    '1519389950473-47ba0277781c', // Tech workspace
    '1550751827-4bd374c3f58b',     // Coding
  ],
  'pharmaceuticals': [
    '1532187863486-abf882f4cd25', // Lab research
    '1579165466741-7f35e4755660', // Pharma
    '1576091160550-2173dba999ef', // Medicine
    '1585435557343-3b092031a831', // Laboratory
  ],
  'healthcare': [
    '1538108149393-fbbd81895907', // Medical tech
    '1576091160399-112ba8d25d1d', // Healthcare
    '1559757175-5700dde675bc',     // Hospital
    '1530026405186-ed1f139313f8', // Health innovation
  ],
  'energy': [
    '1509391366360-70e68252ee93', // Solar
    '1532601224476-15c79f2f7a51', // Wind
    '1473341304170-971dccb5ac1e', // Power
    '1558618666-fcd25c85f82e',     // Renewable
  ],
  'government': [
    '1541872703-74c5e44368f9', // Capitol
    '1529107386315-e1a2ed48a620', // Civic
    '1569025591659-133b62bd7298', // Smart city
    '1555992457-b8aefba48495',     // Gov tech
  ],
  'sustainability': [
    '1441974231531-c6227db76b6e', // Green
    '1542601906990-b4d3fb778b09', // Earth
    '1518531933037-91b2f5f229cc', // Environment
    '1473341304170-971dccb5ac1e', // Sustainable
  ],
  'media-entertainment': [
    '1478737270239-2f02b77fc618', // Media
    '1536240478700-b869070f9279', // Camera
    '1598899134739-24c46f58b8c0', // Entertainment
    '1559523182-a284c3fb7cff',     // Streaming
  ],
  'insights': [
    '1457369804613-52c61a468e7d', // Knowledge
    '1507003211169-0a1dd7228f2d', // Reading
    '1456324504439-367cee3b3c32', // Research
    '1553877522-43269d4ea984',     // Analysis
  ],
  'blog': [
    '1499750310107-5fef28a66643', // Writing
    '1486312338219-ce68d2c6f44d', // Content
    '1455390582262-044cdead277a', // Journalism
    '1504711331720-9c5da4e38bff', // Blogging
  ],
  'reports': [
    '1551288049-bebda4e38f71',  // Data
    '1460925895917-afdab827c52f', // Chart
    '1504868584819-f8e8b4b6d7e3', // Present
    '1553877522-43269d4ea984',     // Research
  ],
  'white-papers': [
    '1456324504439-367cee3b3c32', // Academic
    '1481627834876-b7833e8f5570', // Library
    '1457369804613-52c61a468e7d', // Publication
    '1553877522-43269d4ea984',     // Paper
  ],
  'podcasts': [
    '1478737270239-2f02b77fc618', // Microphone
    '1598488035139-bdbb2231ce04', // Studio
    '1559523182-a284c3fb7cff',     // Audio
    '1536240478700-b869070f9279', // Recording
  ],
  'webinars': [
    '1540575467063-178a50e2fd60', // Conference
    '1505373877841-8d25f7d46678', // Presentation
    '1515187029135-18ee286d815b', // Stage
    '1475721027785-f74eccf877e2', // Webinar
  ],
  'careers': [
    '1521737711867-e3b97375f902', // Team
    '1522071820081-009f0129c71c', // Collaboration
    '1497215842964-222b430dc094', // Office
    '1600880292203-757bb62b4baf', // Professional
  ],
  'contact': [
    '1423666639041-f56000c27a9a', // Handshake
    '1573164713712-03790a178651', // Meeting
    '1552664730-d307ca884978',     // Connect
    '1553877522-43269d4ea984',     // Conversation
  ],
  'about': [
    '1522071820081-009f0129c71c', // Team
    '1497215842964-222b430dc094', // Office
    '1521737711867-e3b97375f902', // Culture
    '1507679799987-c73779587ccf', // Corporate
  ],
  'privacy': [
    '1563986768609-322da13575f2', // Security
    '1555949963-ff9fe0c870eb',     // Lock
    '1510511459019-5dda7724fd87', // Cyber
    '1558494949-ef010cbdcc31',     // Data
  ],
};

function initDynamicImages() {
  const day = getDayOfYear();

  // Process hero images
  document.querySelectorAll('[data-hero-theme]').forEach(el => {
    const theme = el.getAttribute('data-hero-theme');
    const photos = PHOTO_IDS[theme] || PHOTO_IDS['index'];
    const id = photos[day % photos.length];
    el.src = `https://images.unsplash.com/photo-${id}?w=1600&h=900&fit=crop&auto=format&q=70`;
    el.onerror = function() {
      // Fallback to picsum
      this.src = `https://picsum.photos/seed/${theme}-${day}/1600/900`;
      this.onerror = function() { this.style.display = 'none'; };
    };
  });

  // Process card/feature images
  document.querySelectorAll('[data-img-theme]').forEach(el => {
    const theme = el.getAttribute('data-img-theme');
    const idx = parseInt(el.getAttribute('data-img-idx') || '0');
    const photos = PHOTO_IDS[theme] || PHOTO_IDS['index'];
    const id = photos[(day + idx) % photos.length];
    el.src = `https://images.unsplash.com/photo-${id}?w=800&h=500&fit=crop&auto=format&q=70`;
    el.onerror = function() {
      this.src = `https://picsum.photos/seed/${theme}-${idx}-${day}/800/500`;
      this.onerror = function() { this.style.display = 'none'; };
    };
  });
}


/* ---- Daily Info Feed ---- */
const INFO_FEED = {
  ai: {
    icon: '🤖',
    items: [
      { title: 'OpenAI Advances Reasoning Models with Latest Research', desc: 'New developments in LLM reasoning capabilities push the boundaries of AI problem-solving.', source: 'AI Research Weekly', url: 'https://arxiv.org/list/cs.AI/recent' },
      { title: 'Enterprise AI Adoption Accelerates Across Industries', desc: 'Fortune 500 companies report significant ROI from AI integration in operations and customer service.', source: 'MIT Technology Review', url: 'https://www.technologyreview.com/topic/artificial-intelligence/' },
      { title: 'Responsible AI Frameworks Gain Regulatory Traction', desc: 'Government agencies worldwide introduce new guidelines for ethical AI in critical systems.', source: 'Stanford AI Index', url: 'https://aiindex.stanford.edu/' },
      { title: 'Multimodal AI Models Transform Enterprise Applications', desc: 'Latest generation models seamlessly process text, image, video, and audio inputs.', source: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/' },
      { title: 'AI-Powered Drug Discovery Achieves Clinical Milestones', desc: 'ML platforms accelerate pharma development with novel compound identification.', source: 'Nature Machine Intelligence', url: 'https://www.nature.com/natmachintell/' },
      { title: 'Edge AI Deployments Scale with Hardware Innovations', desc: 'Specialized chips deliver desktop-class AI inference at the edge.', source: 'IEEE Spectrum', url: 'https://spectrum.ieee.org/topic/artificial-intelligence/' },
      { title: 'Generative AI Enterprise Revenue Exceeds Projections', desc: 'Analysts revise estimates upward as enterprise genAI spending surpasses forecasts.', source: 'Gartner', url: 'https://www.gartner.com/en/topics/artificial-intelligence' },
    ]
  },
  quantum: {
    icon: '⚛️',
    items: [
      { title: 'Quantum Error Correction Achieves New Benchmark', desc: 'Research teams demonstrate fault-tolerant protocols maintaining coherence at record scales.', source: 'Nature Physics', url: 'https://www.nature.com/nphys/' },
      { title: 'IBM Expands Quantum Network with Enterprise Partners', desc: 'Global companies gain access to advanced quantum processors for optimization workloads.', source: 'Quantum Computing Report', url: 'https://quantumcomputingreport.com/' },
      { title: 'Post-Quantum Cryptography Standards Near Finalization', desc: 'NIST accelerates timelines for quantum-resistant encryption across federal systems.', source: 'NIST', url: 'https://www.nist.gov/quantum-computing' },
      { title: 'Quantum ML Shows Promise in Materials Science', desc: 'Hybrid quantum-classical algorithms demonstrate advantage in molecular simulation.', source: 'Physical Review Letters', url: 'https://journals.aps.org/prl/' },
      { title: 'Quantum Sensing Technologies Enter Commercial Market', desc: 'Precision measurement applications reach deployment readiness in healthcare and energy.', source: 'The Quantum Insider', url: 'https://thequantuminsider.com/' },
      { title: 'Quantum Cloud Services Lower Barriers for Startups', desc: 'Pay-per-use quantum platforms enable small teams to explore quantum algorithms.', source: 'TechCrunch', url: 'https://techcrunch.com/tag/quantum-computing/' },
      { title: 'Quantum Workforce Programs Expand Globally', desc: 'Universities and tech companies launch initiatives to address the quantum talent gap.', source: 'Science Daily', url: 'https://www.sciencedaily.com/news/computers_math/quantum_computers/' },
    ]
  },
  digital: {
    icon: '🔄',
    items: [
      { title: 'Cloud-Native Architectures Dominate Enterprise IT', desc: 'Migration to microservices and serverless accelerates for agility and cost optimization.', source: 'Forrester', url: 'https://www.forrester.com/' },
      { title: 'Digital Twin Technology Matures for Industry', desc: 'Real-time virtual replicas enable predictive maintenance and optimization at scale.', source: 'McKinsey Digital', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital' },
      { title: 'Zero-Trust Security Becomes Enterprise Standard', desc: 'Identity-based security frameworks replace perimeter-based approaches.', source: 'Cybersecurity Ventures', url: 'https://cybersecurityventures.com/' },
      { title: 'Low-Code Platforms Empower Business Innovation', desc: 'Citizen developer programs democratize application development enterprise-wide.', source: 'Gartner', url: 'https://www.gartner.com/en/information-technology' },
      { title: 'Data Mesh Gains Enterprise Momentum', desc: 'Decentralized data ownership improves analytics agility and cross-functional decisions.', source: 'Harvard Business Review', url: 'https://hbr.org/topic/technology' },
      { title: '5G Private Networks Accelerate Smart Factories', desc: 'Ultra-reliable low-latency connectivity enables real-time automation and quality control.', source: 'IIoT World', url: 'https://www.iiot-world.com/' },
      { title: 'Platform Engineering: The Next DevOps Evolution', desc: 'Internal developer platforms standardize toolchains and reduce engineering cognitive load.', source: 'InfoQ', url: 'https://www.infoq.com/' },
    ]
  },
  business: {
    icon: '📊',
    items: [
      { title: 'C-Suite Priorities Shift Toward Resilient Growth', desc: 'Leaders prioritize operational resilience and sustainable revenue amid uncertainty.', source: 'Deloitte Insights', url: 'https://www2.deloitte.com/insights' },
      { title: 'ESG Integration Drives Long-Term Value Creation', desc: 'Companies with strong ESG metrics outperform peers in returns and risk management.', source: 'PwC', url: 'https://www.pwc.com/gx/en/issues/esg.html' },
      { title: 'Tech M&A Activity Rebounds Globally', desc: 'Strategic acquisitions accelerate as firms seek AI and digital infrastructure assets.', source: 'Financial Times', url: 'https://www.ft.com/technology' },
      { title: 'Workforce Upskilling Programs Deliver Results', desc: 'Data literacy and digital tools training shows significant productivity improvements.', source: 'World Economic Forum', url: 'https://www.weforum.org/' },
      { title: 'Supply Chain Digitization Reduces Enterprise Risk', desc: 'End-to-end platforms enable real-time tracking and predictive disruption management.', source: 'BCG', url: 'https://www.bcg.com/capabilities/operations/supply-chain-management' },
      { title: 'HealthTech Investment Reaches Record Levels', desc: 'VC and corporate R&D spending on health innovation hits new highs via AI diagnostics.', source: 'Rock Health', url: 'https://rockhealth.com/' },
      { title: 'Pharma Embraces AI-Driven CMC Optimization', desc: 'Predictive analytics in manufacturing and controls reduces development timelines.', source: 'Pharmaceutical Technology', url: 'https://www.pharmaceutical-technology.com/' },
    ]
  }
};

function initInfoFeed() {
  const container = document.getElementById('info-feed-items');
  if (!container) return;

  const day = getDayOfYear();
  const allItems = [];

  Object.keys(INFO_FEED).forEach(cat => {
    const src = INFO_FEED[cat];
    const startIdx = day % src.items.length;
    for (let i = 0; i < 2; i++) {
      const item = src.items[(startIdx + i) % src.items.length];
      allItems.push({ ...item, icon: src.icon });
    }
  });

  // Day-based shuffle
  allItems.sort((a, b) => {
    let ha = 0, hb = 0;
    for (let i = 0; i < a.title.length; i++) ha = ((ha << 5) - ha) + a.title.charCodeAt(i) + day;
    for (let i = 0; i < b.title.length; i++) hb = ((hb << 5) - hb) + b.title.charCodeAt(i) + day;
    return ha - hb;
  });

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
