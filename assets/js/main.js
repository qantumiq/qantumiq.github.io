/* ============================================
   QantumIQ - Main JavaScript
   Handles: Navigation, Dynamic Images, Info Feed
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initDynamicHeroImages();
  initInfoFeed();
});

/* ---- Sticky Header ---- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
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

  // Mobile dropdown toggles
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

/* ---- Dynamic Hero Images from Unsplash ---- */
const HERO_IMAGE_THEMES = {
  'index': ['technology,abstract', 'quantum,computing', 'digital,network', 'artificial-intelligence,futuristic', 'data,visualization'],
  'ai-ml': ['artificial-intelligence,technology', 'machine-learning,neural', 'deep-learning,brain', 'robotics,ai'],
  'quantum-computing': ['quantum,physics', 'quantum,computing,abstract', 'physics,particles', 'quantum,technology'],
  'digital-transformation': ['digital,transformation', 'cloud,computing', 'technology,business', 'software,modern'],
  'c-suite-advisory': ['executive,boardroom', 'leadership,business', 'strategy,meeting', 'corporate,office'],
  'business-process': ['business,automation', 'workflow,process', 'optimization,efficiency', 'analytics,dashboard'],
  'information-insights': ['data,analytics', 'insights,business-intelligence', 'data,visualization', 'information,technology'],
  'executive-staffing': ['recruitment,professional', 'talent,management', 'hiring,executive', 'team,leadership'],
  'financial-services': ['finance,banking', 'wall-street,finance', 'fintech,digital-banking', 'trading,stock-market'],
  'technology': ['technology,silicon-valley', 'tech,startup', 'innovation,technology', 'coding,software'],
  'pharmaceuticals': ['pharmaceutical,research', 'medicine,laboratory', 'drug-discovery,science', 'biotech,lab'],
  'healthcare': ['healthcare,medical', 'hospital,technology', 'health,digital', 'medical,innovation'],
  'energy': ['renewable-energy,solar', 'energy,wind-turbine', 'sustainable,power', 'oil-gas,energy'],
  'government': ['government,capitol', 'civic,technology', 'public-sector,digital', 'smart-city,government'],
  'sustainability': ['sustainability,green', 'environment,earth', 'eco,nature', 'sustainable,future'],
  'media-entertainment': ['media,broadcast', 'entertainment,streaming', 'content,digital-media', 'film,production'],
  'insights': ['research,knowledge', 'insights,data', 'reading,education', 'books,library'],
  'blog': ['writing,blog', 'content,creation', 'journalism,article', 'digital,publishing'],
  'reports': ['analytics,report', 'chart,business', 'presentation,data', 'research,document'],
  'white-papers': ['research,academic', 'whitepaper,document', 'science,publication', 'knowledge,research'],
  'podcasts': ['podcast,microphone', 'audio,studio', 'broadcasting,podcast', 'recording,studio'],
  'webinars': ['webinar,conference', 'video,conference', 'presentation,stage', 'event,seminar'],
  'careers': ['careers,office', 'workplace,team', 'professional,growth', 'office,collaboration'],
  'contact': ['communication,connect', 'handshake,business', 'office,contact', 'meeting,collaboration'],
  'about': ['team,corporate', 'company,culture', 'office,modern', 'consulting,business'],
  'privacy': ['security,privacy', 'lock,digital', 'data-protection,security', 'cybersecurity,shield']
};

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function initDynamicHeroImages() {
  const heroImgs = document.querySelectorAll('[data-hero-theme]');
  heroImgs.forEach(el => {
    const theme = el.getAttribute('data-hero-theme');
    const themes = HERO_IMAGE_THEMES[theme] || HERO_IMAGE_THEMES['index'];
    const dayIndex = getDayOfYear() % themes.length;
    const query = themes[dayIndex];
    // Use picsum with a seed based on theme+day for consistent daily rotation
    const seed = hashCode(theme + '-' + getDayOfYear());
    const width = el.getAttribute('data-width') || '1600';
    const height = el.getAttribute('data-height') || '900';
    // Use Unsplash source (still works for basic usage)
    el.src = `https://images.unsplash.com/photo-${getUnsplashId(theme, dayIndex)}?w=${width}&h=${height}&fit=crop&auto=format&q=75`;
    // Fallback: use a gradient overlay if image fails
    el.onerror = function() {
      this.style.display = 'none';
    };
  });

  // Also handle card/feature images
  const themeImgs = document.querySelectorAll('[data-img-theme]');
  themeImgs.forEach(el => {
    const theme = el.getAttribute('data-img-theme');
    const idx = parseInt(el.getAttribute('data-img-idx') || '0');
    const seed = hashCode(theme + idx);
    const width = el.getAttribute('data-width') || '800';
    const height = el.getAttribute('data-height') || '500';
    el.src = `https://images.unsplash.com/photo-${getUnsplashId(theme, idx)}?w=${width}&h=${height}&fit=crop&auto=format&q=75`;
    el.onerror = function() { this.style.display = 'none'; };
  });
}

// Curated Unsplash photo IDs mapped to themes for reliable, high-quality images
const UNSPLASH_PHOTOS = {
  'index': [
    '1451187580459-43490279c0fa', // Earth from space network
    '1518770660439-4636190af475', // Digital abstract
    '1526374965328-7f61d4dc18c5', // Tech abstract blue
    '1558494949-ef010cbdcc31', // Data center
    '1620712943543-bcc4688e7485'  // AI brain visualization
  ],
  'ai-ml': [
    '1677442136019-21780ecad995', // AI robot
    '1555255707-c07966088b7b', // Neural network
    '1620712943543-bcc4688e7485', // Brain AI
    '1535378620166-ed1fd5deca16'  // Machine learning
  ],
  'quantum-computing': [
    '1635070041078-e363dbe005cb', // Quantum chip
    '1509228468518-180dd4864904', // Physics particles
    '1636466497217-26a8cbeaf0aa', // Abstract quantum
    '1532094349884-543bc11b234d'  // Scientific abstract
  ],
  'digital-transformation': [
    '1519389950473-47ba0277781c', // Laptop workspace
    '1551288049-bebda4e38f71', // Cloud computing
    '1460925895917-afdab827c52f', // Digital office
    '1504868584819-f8e8b4b6d7e3'  // Modern tech
  ],
  'c-suite-advisory': [
    '1560472354969-4e23f6820fe5', // Business meeting
    '1573164713712-03790a178651', // Executive meeting
    '1552664730-d307ca884978', // Strategy meeting
    '1507679799987-c73779587ccf'  // Business professional
  ],
  'business-process': [
    '1460925895917-afdab827c52f', // Analytics
    '1551288049-bebda4e38f71', // Automation
    '1504868584819-f8e8b4b6d7e3', // Modern workspace
    '1553877522-43269d4ea984'  // Workflow
  ],
  'information-insights': [
    '1551288049-bebda4e38f71', // Data
    '1504868584819-f8e8b4b6d7e3', // Analytics
    '1551434678-e076c223a692', // Business intelligence
    '1460925895917-afdab827c52f'  // Dashboard
  ],
  'executive-staffing': [
    '1521737711867-e3b97375f902', // Team collaboration
    '1522071820081-009f0129c71c', // Diverse team
    '1600880292203-757bb62b4baf', // Professional
    '1552664730-d307ca884978'  // Office team
  ],
  'financial-services': [
    '1611974789855-9c2a0a7236a3', // Finance chart
    '1590283603385-17ffb3a7f29f', // Stock exchange
    '1559526324-4b87b5e36e44', // Banking
    '1526304640581-d334cdbbf45e'  // Financial district
  ],
  'technology': [
    '1518770660439-4636190af475', // Circuit
    '1531297484001-80022131f5a1', // Server room
    '1519389950473-47ba0277781c', // Tech workspace
    '1550751827-4bd374c3f58b'  // Coding
  ],
  'pharmaceuticals': [
    '1532187863486-abf882f4cd25', // Lab research
    '1579165466741-7f35e4755660', // Pharmaceutical
    '1576091160550-2173dba999ef', // Medicine
    '1585435557343-3b092031a831'  // Laboratory
  ],
  'healthcare': [
    '1538108149393-fbbd81895907', // Medical tech
    '1576091160399-112ba8d25d1d', // Healthcare
    '1559757175-5700dde675bc', // Hospital
    '1530026405186-ed1f139313f8'  // Health innovation
  ],
  'energy': [
    '1509391366360-70e68252ee93', // Solar
    '1532601224476-15c79f2f7a51', // Wind energy
    '1473341304170-971dccb5ac1e', // Power lines
    '1558618666-fcd25c85f82e'  // Renewable energy
  ],
  'government': [
    '1541872703-74c5e44368f9', // Capitol building
    '1529107386315-e1a2ed48a620', // Civic architecture
    '1569025591659-133b62bd7298', // Smart city
    '1555992457-b8aefba48495'  // Government tech
  ],
  'sustainability': [
    '1441974231531-c6227db76b6e', // Green nature
    '1473341304170-971dccb5ac1e', // Sustainable
    '1542601906990-b4d3fb778b09', // Earth
    '1518531933037-91b2f5f229cc'  // Environment
  ],
  'media-entertainment': [
    '1478737270239-2f02b77fc618', // Media
    '1536240478700-b869070f9279', // Camera production
    '1598899134739-24c46f58b8c0', // Entertainment
    '1559523182-a284c3fb7cff'  // Streaming
  ],
  'insights': [
    '1457369804613-52c61a468e7d', // Knowledge
    '1507003211169-0a1dd7228f2d', // Reading
    '1456324504439-367cee3b3c32', // Research
    '1553877522-43269d4ea984'  // Analysis
  ],
  'blog': [
    '1499750310107-5fef28a66643', // Writing
    '1486312338219-ce68d2c6f44d', // Content
    '1455390582262-044cdead277a', // Journalism
    '1504711331720-9c5da4e38bff'  // Blogging
  ],
  'reports': [
    '1551288049-bebda4e38f71', // Data chart
    '1460925895917-afdab827c52f', // Analytics
    '1504868584819-f8e8b4b6d7e3', // Presentation
    '1553877522-43269d4ea984'  // Research
  ],
  'white-papers': [
    '1456324504439-367cee3b3c32', // Academic
    '1481627834876-b7833e8f5570', // Library
    '1457369804613-52c61a468e7d', // Publication
    '1553877522-43269d4ea984'  // Research
  ],
  'podcasts': [
    '1478737270239-2f02b77fc618', // Microphone
    '1598488035139-bdbb2231ce04', // Podcast studio
    '1559523182-a284c3fb7cff', // Audio
    '1536240478700-b869070f9279'  // Recording
  ],
  'webinars': [
    '1540575467063-178a50e2fd60', // Conference
    '1505373877841-8d25f7d46678', // Presentation
    '1515187029135-18ee286d815b', // Stage
    '1475721027785-f74eccf877e2'  // Webinar
  ],
  'careers': [
    '1521737711867-e3b97375f902', // Team
    '1522071820081-009f0129c71c', // Collaboration
    '1600880292203-757bb62b4baf', // Professional growth
    '1497215842964-222b430dc094'  // Modern office
  ],
  'contact': [
    '1423666639041-f56000c27a9a', // Handshake
    '1573164713712-03790a178651', // Meeting
    '1552664730-d307ca884978', // Connection
    '1553877522-43269d4ea984'  // Conversation
  ],
  'about': [
    '1522071820081-009f0129c71c', // Team
    '1497215842964-222b430dc094', // Office
    '1521737711867-e3b97375f902', // Culture
    '1507679799987-c73779587ccf'  // Corporate
  ],
  'privacy': [
    '1563986768609-322da13575f2', // Security
    '1555949963-ff9fe0c870eb', // Lock
    '1510511459019-5dda7724fd87', // Cybersecurity
    '1558494949-ef010cbdcc31'  // Data protection
  ]
};

function getUnsplashId(theme, index) {
  const photos = UNSPLASH_PHOTOS[theme] || UNSPLASH_PHOTOS['index'];
  return photos[index % photos.length];
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}


/* ---- Daily Info Feed ---- */
// Curated news sources and topics - rotates daily
const INFO_FEED_SOURCES = {
  ai: {
    icon: '🤖',
    topics: [
      { title: 'OpenAI Advances Reasoning Models with Latest Research', desc: 'New developments in large language model reasoning capabilities push the boundaries of AI problem-solving.', source: 'AI Research Weekly', url: 'https://arxiv.org/list/cs.AI/recent' },
      { title: 'Enterprise AI Adoption Accelerates Across Industries', desc: 'Fortune 500 companies report significant ROI from AI integration in operations and customer service workflows.', source: 'MIT Technology Review', url: 'https://www.technologyreview.com/topic/artificial-intelligence/' },
      { title: 'Responsible AI Frameworks Gain Regulatory Traction', desc: 'Government agencies worldwide introduce new guidelines for ethical AI deployment in critical systems.', source: 'The AI Index', url: 'https://aiindex.stanford.edu/' },
      { title: 'Multimodal AI Models Transform Content Creation', desc: 'Latest generation models seamlessly process text, image, video, and audio for enterprise applications.', source: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/' },
      { title: 'AI-Powered Drug Discovery Achieves Clinical Milestones', desc: 'Machine learning platforms accelerate pharmaceutical development with novel compound identification.', source: 'Nature AI', url: 'https://www.nature.com/natmachintell/' },
      { title: 'Edge AI Deployments Scale with New Hardware Innovations', desc: 'On-device inference capabilities expand as specialized chips deliver desktop-class AI at the edge.', source: 'IEEE Spectrum', url: 'https://spectrum.ieee.org/topic/artificial-intelligence/' },
      { title: 'Generative AI Revenue Projections Exceed Expectations', desc: 'Industry analysts revise upward estimates as enterprise generative AI spending surpasses forecasts.', source: 'Gartner', url: 'https://www.gartner.com/en/topics/artificial-intelligence' },
    ]
  },
  quantum: {
    icon: '⚛️',
    topics: [
      { title: 'Quantum Error Correction Achieves New Benchmark', desc: 'Research teams demonstrate fault-tolerant quantum computing protocols that maintain coherence at record scales.', source: 'Nature Physics', url: 'https://www.nature.com/nphys/' },
      { title: 'IBM Expands Quantum Network with Enterprise Partners', desc: 'Global companies gain access to advanced quantum processors for optimization and simulation workloads.', source: 'Quantum Computing Report', url: 'https://quantumcomputingreport.com/' },
      { title: 'Post-Quantum Cryptography Standards Near Finalization', desc: 'NIST accelerates adoption timelines for quantum-resistant encryption algorithms across federal systems.', source: 'NIST', url: 'https://www.nist.gov/quantum-computing' },
      { title: 'Quantum Machine Learning Shows Promise in Materials Science', desc: 'Hybrid quantum-classical algorithms demonstrate advantage in molecular simulation and new material discovery.', source: 'Physical Review Letters', url: 'https://journals.aps.org/prl/' },
      { title: 'Quantum Sensing Technologies Enter Commercial Market', desc: 'Precision measurement applications in healthcare, navigation, and energy exploration reach deployment readiness.', source: 'Quantum Insider', url: 'https://thequantuminsider.com/' },
      { title: 'Quantum Computing Workforce Development Programs Expand', desc: 'Universities and tech companies launch training initiatives to address the growing quantum talent gap.', source: 'Science Daily', url: 'https://www.sciencedaily.com/news/computers_math/quantum_computers/' },
      { title: 'Quantum Cloud Services Drive Accessibility for Startups', desc: 'Pay-per-use quantum computing platforms lower the barrier for small teams to explore quantum algorithms.', source: 'TechCrunch', url: 'https://techcrunch.com/tag/quantum-computing/' },
    ]
  },
  digital: {
    icon: '🔄',
    topics: [
      { title: 'Cloud-Native Architectures Dominate Enterprise IT Modernization', desc: 'Organizations accelerate migration to microservices and serverless computing for agility and cost optimization.', source: 'Forrester', url: 'https://www.forrester.com/' },
      { title: 'Digital Twin Technology Matures for Industrial Applications', desc: 'Real-time virtual replicas of physical systems enable predictive maintenance and operational optimization.', source: 'McKinsey Digital', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital' },
      { title: 'Zero-Trust Security Becomes Standard for Enterprise Transformation', desc: 'Companies adopt comprehensive identity-based security frameworks as perimeter-based approaches prove insufficient.', source: 'Cybersecurity Ventures', url: 'https://cybersecurityventures.com/' },
      { title: 'Low-Code Platforms Empower Business-Led Digital Innovation', desc: 'Citizen developer programs generate measurable value as enterprises democratize application development.', source: 'Gartner', url: 'https://www.gartner.com/en/information-technology' },
      { title: 'Data Mesh Architecture Gains Momentum in Large Enterprises', desc: 'Decentralized data ownership models improve analytics agility and cross-functional decision making.', source: 'Harvard Business Review', url: 'https://hbr.org/topic/technology' },
      { title: '5G Private Networks Accelerate Smart Factory Deployments', desc: 'Manufacturers leverage ultra-reliable low-latency connectivity for real-time automation and quality control.', source: 'Industrial IoT World', url: 'https://www.iiot-world.com/' },
      { title: 'Platform Engineering Emerges as Key DevOps Evolution', desc: 'Internal developer platforms standardize toolchains and reduce cognitive load for engineering teams.', source: 'InfoQ', url: 'https://www.infoq.com/' },
    ]
  },
  business: {
    icon: '📊',
    topics: [
      { title: 'C-Suite Priorities Shift Toward Resilient Growth Strategies', desc: 'Executive leaders prioritize operational resilience and sustainable revenue models amid economic uncertainty.', source: 'Deloitte Insights', url: 'https://www2.deloitte.com/insights' },
      { title: 'ESG Integration Drives Long-Term Value Creation', desc: 'Companies with strong environmental, social, and governance metrics outperform peers in shareholder returns.', source: 'PwC', url: 'https://www.pwc.com/gx/en/issues/esg.html' },
      { title: 'Global M&A Activity Rebounds in Technology Sector', desc: 'Strategic acquisitions accelerate as firms seek AI capabilities and digital infrastructure assets.', source: 'Financial Times', url: 'https://www.ft.com/technology' },
      { title: 'Workforce Transformation Programs Show Measurable Impact', desc: 'Upskilling initiatives in data literacy and digital tools deliver significant productivity improvements.', source: 'World Economic Forum', url: 'https://www.weforum.org/' },
      { title: 'Supply Chain Digitization Reduces Risk and Improves Visibility', desc: 'End-to-end digital supply chain platforms enable real-time tracking and predictive disruption management.', source: 'BCG', url: 'https://www.bcg.com/capabilities/operations/supply-chain-management' },
      { title: 'Healthcare Innovation Investment Reaches Record Levels', desc: 'Venture capital and corporate R&D spending on healthtech solutions hits new highs driven by AI diagnostics.', source: 'Rock Health', url: 'https://rockhealth.com/' },
      { title: 'Pharmaceutical Companies Embrace AI-Driven CMC Optimization', desc: 'Manufacturing and controls processes benefit from predictive analytics, reducing development timelines significantly.', source: 'Pharmaceutical Technology', url: 'https://www.pharmaceutical-technology.com/' },
    ]
  }
};

function initInfoFeed() {
  const feedContainer = document.getElementById('info-feed-items');
  if (!feedContainer) return;

  const dayOfYear = getDayOfYear();
  const categories = Object.keys(INFO_FEED_SOURCES);
  const allItems = [];

  categories.forEach(cat => {
    const source = INFO_FEED_SOURCES[cat];
    const topics = source.topics;
    // Pick 2 items per category, rotating daily
    const startIdx = dayOfYear % topics.length;
    for (let i = 0; i < 2; i++) {
      const topic = topics[(startIdx + i) % topics.length];
      allItems.push({
        ...topic,
        icon: source.icon,
        category: cat
      });
    }
  });

  // Shuffle based on day for variety
  const shuffled = allItems.sort((a, b) => {
    return hashCode(a.title + dayOfYear) - hashCode(b.title + dayOfYear);
  });

  // Render (max 8 items)
  const displayItems = shuffled.slice(0, 8);
  feedContainer.innerHTML = displayItems.map(item => `
    <a href="${item.url}" target="_blank" rel="noopener" class="info-feed__item">
      <div class="info-feed__item-icon">${item.icon}</div>
      <div class="info-feed__item-content">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="info-feed__item-source">${item.source}</span>
      </div>
    </a>
  `).join('');

  // Update the date display
  const dateEl = document.getElementById('info-feed-date');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
