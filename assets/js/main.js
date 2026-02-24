/* QantumIQ v3.2 — Main JS */
document.addEventListener('DOMContentLoaded',()=>{
  initScrollProgress();initHeader();initMobileNav();initImages();initInfoFeed();
});

function initScrollProgress(){
  const b=document.querySelector('.scroll-progress');if(!b)return;
  const u=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;b.style.width=h>0?(window.scrollY/h*100)+'%':'0%'};
  window.addEventListener('scroll',u,{passive:true});u();
}

function initHeader(){
  const h=document.querySelector('.site-header');if(!h)return;
  const f=()=>h.classList.toggle('scrolled',window.scrollY>40);
  window.addEventListener('scroll',f,{passive:true});f();
}

function initMobileNav(){
  const t=document.querySelector('.mobile-toggle'),n=document.querySelector('.main-nav'),o=document.querySelector('.nav-overlay');
  if(!t||!n)return;
  t.addEventListener('click',()=>{n.classList.toggle('open');if(o)o.classList.toggle('active');t.textContent=n.classList.contains('open')?'✕':'☰';});
  if(o)o.addEventListener('click',()=>{n.classList.remove('open');o.classList.remove('active');t.textContent='☰';});
  document.querySelectorAll('.nav-item').forEach(item=>{
    const a=item.querySelector(':scope>a'),dd=item.querySelector('.nav-dropdown');
    if(!dd||!a)return;
    a.addEventListener('click',e=>{if(window.innerWidth<=1024){e.preventDefault();document.querySelectorAll('.nav-item.open').forEach(i=>{if(i!==item)i.classList.remove('open')});item.classList.toggle('open');}});
  });
}

/* Images — picsum.photos/seed/{seed}/{w}/{h} is 100% reliable */
function getDOY(){const n=new Date(),s=new Date(n.getFullYear(),0,0);return Math.floor((n-s)/864e5)}
const SEEDS={
  'index':['future-tech','digital-horizon','innovation-skyline','quantum-wave','data-flow'],
  'ai-ml':['neural-deep','ai-cortex','ml-pipeline','brain-circuit','smart-algo'],
  'quantum-computing':['qubit-array','quantum-gate','particle-wave','entangle-field','coherence-lab'],
  'digital-transformation':['cloud-shift','agile-flow','devops-pipe','modernize-now','platform-eng'],
  'c-suite-advisory':['boardroom-exec','strategy-tower','leadership-summit','advisory-suite','corp-counsel'],
  'business-process':['workflow-lean','process-sigma','automate-rpa','efficiency-map','optimize-hub'],
  'information-insights':['data-lake','dashboard-viz','analytics-deep','bi-engine','insight-chart'],
  'management-consulting':['program-board','agile-sprint','pmo-strategy','consult-team','delivery-lead'],
  'financial-services':['finance-tower','banking-hub','fintech-rise','capital-flow','trading-desk'],
  'technology':['silicon-core','server-rack','code-studio','startup-loft','tech-campus'],
  'pharmaceuticals':['pharma-bench','molecule-scan','lab-research','biotech-cell','formulation-lab'],
  'healthcare':['medical-tech','hospital-ai','health-scan','patient-hub','clinical-data'],
  'energy':['solar-field','wind-array','power-grid','renewable-hub','energy-future'],
  'government':['civic-digital','smart-city','public-tech','capitol-modern','gov-innovation'],
  'sustainability':['earth-future','eco-tech','carbon-zero','green-growth','circular-flow'],
  'media-entertainment':['stream-studio','content-hub','media-tech','broadcast-live','audience-ai'],
  'insights':['research-deep','knowledge-hub','analysis-lab','think-forward','report-data'],
  'blog':['writing-desk','content-pen','journal-craft','publish-hub','author-space'],
  'reports':['chart-trend','data-quarterly','metric-dash','trend-analysis','report-annual'],
  'white-papers':['academic-desk','research-paper','technical-deep','framework-map','method-guide'],
  'podcasts':['mic-studio','podcast-booth','audio-live','broadcast-mic','interview-room'],
  'webinars':['webinar-live','conference-stage','present-deck','seminar-hall','keynote-spot'],
  'careers':['team-huddle','collab-space','growth-office','workplace-modern','innovate-together'],
  'contact':['handshake-deal','connect-now','meeting-global','partnership-start','reach-us'],
  'about':['team-spirit','office-culture','company-mission','global-team','our-story'],
  'privacy':['shield-data','lock-secure','cyber-guard','privacy-safe','encrypt-now'],
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

/* Info Feed */
const FEED={
  ai:{icon:'🤖',items:[
    {t:'Enterprise AI Adoption Accelerates',d:'Fortune 500 companies report significant ROI from AI.',s:'MIT Tech Review',u:'https://www.technologyreview.com/topic/artificial-intelligence/'},
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
  all.sort((a,b)=>{let ha=0,hb=0;for(let i=0;i<a.t.length;i++)ha=((ha<<5)-ha)+a.t.charCodeAt(i)+day;for(let i=0;i<b.t.length;i++)hb=((hb<<5)-hb)+b.t.charCodeAt(i)+day;return ha-hb});
  el.innerHTML=all.slice(0,8).map(i=>`<a href="${i.u}" target="_blank" rel="noopener" class="info-feed__item"><div class="info-feed__item-icon">${i.icon}</div><div class="info-feed__item-content"><h4>${i.t}</h4><p>${i.d}</p><span class="info-feed__item-source">${i.s}</span></div></a>`).join('');
  const d=document.getElementById('info-feed-date');
  if(d)d.textContent=new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}})});
