/* QantumIQ v4.0 — Light Theme JS */
document.addEventListener('DOMContentLoaded',()=>{
  initScrollProgress();initHeader();initMobileNav();initImages();initInfoFeed();
});

function initScrollProgress(){
  const b=document.querySelector('.scroll-progress');if(!b)return;
  window.addEventListener('scroll',()=>{
    const h=document.documentElement.scrollHeight-window.innerHeight;
    b.style.width=h>0?(window.scrollY/h*100)+'%':'0%';
  },{passive:true});
}

function initHeader(){
  const h=document.querySelector('.site-header');if(!h)return;
  const f=()=>h.classList.toggle('scrolled',window.scrollY>30);
  window.addEventListener('scroll',f,{passive:true});f();
}

function initMobileNav(){
  const t=document.querySelector('.mobile-toggle'),n=document.querySelector('.main-nav'),o=document.querySelector('.nav-overlay');
  if(!t||!n)return;
  t.addEventListener('click',()=>{
    n.classList.toggle('open');if(o)o.classList.toggle('active');
    t.textContent=n.classList.contains('open')?'✕':'☰';
  });
  if(o)o.addEventListener('click',()=>{n.classList.remove('open');o.classList.remove('active');t.textContent='☰';});
  document.querySelectorAll('.nav-item').forEach(item=>{
    const a=item.querySelector(':scope>a'),dd=item.querySelector('.nav-dropdown');
    if(!dd||!a)return;
    a.addEventListener('click',e=>{if(window.innerWidth<=1024){e.preventDefault();document.querySelectorAll('.nav-item.open').forEach(i=>{if(i!==item)i.classList.remove('open')});item.classList.toggle('open');}});
  });
}

/* Images — picsum.photos/seed/{seed}/{w}/{h} is 100% reliable, returns unique images per seed */
function getDOY(){const n=new Date(),s=new Date(n.getFullYear(),0,0);return Math.floor((n-s)/864e5)}

const SEEDS={
  'index':['modern-skyline','business-future','tech-horizon','corporate-innovation','digital-wave','strategy-summit'],
  'ai-ml':['neural-deep','machine-learning','ai-brain','smart-algo','deep-network','cognitive-sys'],
  'quantum-computing':['quantum-particle','qubit-array','physics-wave','entangle-lab','coherence-field','ion-trap'],
  'digital-transformation':['cloud-shift','agile-sprint','devops-flow','platform-modern','digital-first','transform-now'],
  'c-suite-advisory':['boardroom-view','exec-suite','leadership-peak','strategy-tower','advisory-firm','corporate-top'],
  'business-process':['workflow-lean','process-map','automate-rpa','efficiency-hub','optimize-flow','lean-sigma'],
  'information-insights':['data-lake','analytics-dash','insight-viz','bi-engine','metric-hub','data-mesh'],
  'management-consulting':['program-board','agile-team','pmo-office','consult-strategy','delivery-lead','project-room'],
  'financial-services':['finance-district','banking-tower','fintech-hub','capital-market','trading-desk','wealth-mgmt'],
  'technology':['silicon-core','server-rack','code-studio','startup-loft','tech-campus','chip-design'],
  'pharmaceuticals':['pharma-lab','molecule-research','lab-bench','biotech-cell','drug-discover','clinical-trial'],
  'healthcare':['medical-center','hospital-tech','health-data','patient-care','clinical-scan','digital-health'],
  'energy':['solar-field','wind-farm','power-grid','renewable-hub','energy-future','green-power'],
  'government':['civic-center','smart-city','public-tech','capitol-modern','gov-digital','citizen-hub'],
  'sustainability':['earth-green','eco-future','carbon-zero','sustain-tech','circular-flow','clean-energy'],
  'media-entertainment':['streaming-studio','content-hub','media-tech','broadcast-live','audience-data','creative-lab'],
  'insights':['research-desk','knowledge-hub','think-forward','analysis-deep','report-data','study-room'],
  'about':['team-spirit','office-modern','company-story','global-team','our-mission','culture-hub'],
  'careers':['team-collab','growth-path','workplace-new','innovate-team','talent-hub','career-grow'],
  'contact':['handshake-meet','connect-global','partnership-start','meeting-room','reach-us','hello-world'],
};

function initImages(){
  const day=getDOY();
  document.querySelectorAll('[data-hero-theme]').forEach(el=>{
    const t=el.getAttribute('data-hero-theme');
    const s=SEEDS[t]||SEEDS['index'];
    el.src='https://picsum.photos/seed/'+s[day%s.length]+'/1600/900';
    el.onerror=function(){this.style.display='none'};
  });
  document.querySelectorAll('[data-img-theme]').forEach(el=>{
    const t=el.getAttribute('data-img-theme');
    const i=parseInt(el.getAttribute('data-img-idx')||'0');
    const s=SEEDS[t]||SEEDS['index'];
    el.src='https://picsum.photos/seed/'+s[(day+i)%s.length]+'/800/500';
    el.onerror=function(){this.style.display='none'};
  });
}

/* Info Feed — rotates daily */
const FEED={
  ai:{icon:'🤖',items:[
    {t:'Enterprise AI Adoption Accelerates',d:'Fortune 500 report significant ROI from AI integration.',s:'MIT Tech Review',u:'https://www.technologyreview.com/topic/artificial-intelligence/'},
    {t:'Responsible AI Gains Regulatory Traction',d:'Governments introduce ethical AI guidelines.',s:'Stanford AI Index',u:'https://aiindex.stanford.edu/'},
    {t:'Multimodal AI Models Transform Apps',d:'Latest models process text, image, video seamlessly.',s:'VentureBeat',u:'https://venturebeat.com/category/ai/'},
    {t:'AI Drug Discovery Hits Milestones',d:'ML accelerates pharma with novel compounds.',s:'Nature MI',u:'https://www.nature.com/natmachintell/'},
    {t:'Edge AI Scales with New Hardware',d:'Specialized chips deliver desktop-class inference.',s:'IEEE Spectrum',u:'https://spectrum.ieee.org/topic/artificial-intelligence/'},
    {t:'GenAI Revenue Exceeds Forecasts',d:'Enterprise genAI spending surpasses projections.',s:'Gartner',u:'https://www.gartner.com/en/topics/artificial-intelligence'},
  ]},
  quantum:{icon:'⚛️',items:[
    {t:'Quantum Error Correction Benchmark',d:'Fault-tolerant protocols at record qubit scales.',s:'Nature Physics',u:'https://www.nature.com/nphys/'},
    {t:'IBM Expands Quantum Network',d:'Enterprise access to advanced quantum processors.',s:'QC Report',u:'https://quantumcomputingreport.com/'},
    {t:'Post-Quantum Crypto Nears Final',d:'NIST accelerates quantum-resistant encryption.',s:'NIST',u:'https://www.nist.gov/quantum-computing'},
    {t:'Quantum ML in Materials Science',d:'Hybrid algorithms show molecular advantage.',s:'Phys Rev Lett',u:'https://journals.aps.org/prl/'},
    {t:'Quantum Sensing Goes Commercial',d:'Precision measurement in healthcare and energy.',s:'Quantum Insider',u:'https://thequantuminsider.com/'},
  ]},
  digital:{icon:'🔄',items:[
    {t:'Cloud-Native Dominates Enterprise IT',d:'Microservices and serverless adoption accelerates.',s:'Forrester',u:'https://www.forrester.com/'},
    {t:'Digital Twins Mature for Industry',d:'Virtual replicas enable predictive maintenance.',s:'McKinsey Digital',u:'https://www.mckinsey.com/capabilities/mckinsey-digital'},
    {t:'Zero-Trust Becomes Standard',d:'Identity-based frameworks replace perimeter models.',s:'CyberVentures',u:'https://cybersecurityventures.com/'},
    {t:'Low-Code Empowers Business Users',d:'Citizen developers democratize app development.',s:'Gartner',u:'https://www.gartner.com/en/information-technology'},
    {t:'Platform Engineering Evolves DevOps',d:'Internal platforms reduce engineering load.',s:'InfoQ',u:'https://www.infoq.com/'},
  ]},
  business:{icon:'📊',items:[
    {t:'C-Suite Shifts to Resilient Growth',d:'Leaders prioritize resilience amid uncertainty.',s:'Deloitte',u:'https://www2.deloitte.com/insights'},
    {t:'ESG Drives Long-Term Value',d:'Strong ESG metrics correlate with outperformance.',s:'PwC',u:'https://www.pwc.com/gx/en/issues/esg.html'},
    {t:'Tech M&A Rebounds Globally',d:'Strategic acquisitions for AI and digital assets.',s:'FT',u:'https://www.ft.com/technology'},
    {t:'Supply Chain Digitization Cuts Risk',d:'End-to-end platforms enable predictive management.',s:'BCG',u:'https://www.bcg.com/capabilities/operations/supply-chain-management'},
    {t:'Pharma Embraces AI-Driven CMC',d:'Predictive analytics cut manufacturing timelines.',s:'Pharma Tech',u:'https://www.pharmaceutical-technology.com/'},
  ]},
};

function initInfoFeed(){
  const el=document.getElementById('info-feed-items');if(!el)return;
  const day=getDOY(),all=[];
  Object.keys(FEED).forEach(c=>{
    const src=FEED[c],st=day%src.items.length;
    for(let i=0;i<2;i++){const it=src.items[(st+i)%src.items.length];all.push({...it,icon:src.icon})}
  });
  all.sort((a,b)=>{let h=0,g=0;for(let i=0;i<a.t.length;i++)h=((h<<5)-h)+a.t.charCodeAt(i)+day;for(let i=0;i<b.t.length;i++)g=((g<<5)-g)+b.t.charCodeAt(i)+day;return h-g});
  el.innerHTML=all.slice(0,8).map(i=>`<a href="${i.u}" target="_blank" rel="noopener" class="info-feed__item"><div class="info-feed__item-icon">${i.icon}</div><div class="info-feed__item-content"><h4>${i.t}</h4><p>${i.d}</p><span class="info-feed__item-source">${i.s}</span></div></a>`).join('');
  const d=document.getElementById('info-feed-date');
  if(d)d.textContent=new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
}
