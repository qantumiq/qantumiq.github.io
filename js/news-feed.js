/* ============================================
   QantumIQ Dynamic News Feed
   Fetches latest industry news daily
   Uses multiple RSS sources via rss2json API
   Falls back to curated links if API unavailable
   ============================================ */

(function() {
  'use strict';

  // RSS feed sources mapped to topics
  const RSS_SOURCES = {
    'artificial intelligence': [
      'https://news.google.com/rss/search?q=artificial+intelligence+enterprise&hl=en-US&gl=US&ceid=US:en',
      'https://news.google.com/rss/search?q=machine+learning+business&hl=en-US&gl=US&ceid=US:en',
    ],
    'quantum computing': [
      'https://news.google.com/rss/search?q=quantum+computing&hl=en-US&gl=US&ceid=US:en',
    ],
    'digital transformation': [
      'https://news.google.com/rss/search?q=digital+transformation+enterprise&hl=en-US&gl=US&ceid=US:en',
    ],
    'financial services': [
      'https://news.google.com/rss/search?q=fintech+banking+technology&hl=en-US&gl=US&ceid=US:en',
    ],
    'pharmaceutical': [
      'https://news.google.com/rss/search?q=pharmaceutical+AI+drug+discovery&hl=en-US&gl=US&ceid=US:en',
    ],
    'healthcare': [
      'https://news.google.com/rss/search?q=healthcare+technology+digital+health&hl=en-US&gl=US&ceid=US:en',
    ],
    'energy': [
      'https://news.google.com/rss/search?q=energy+transition+technology&hl=en-US&gl=US&ceid=US:en',
    ],
    'sustainability': [
      'https://news.google.com/rss/search?q=sustainability+ESG+technology&hl=en-US&gl=US&ceid=US:en',
    ],
    'technology': [
      'https://news.google.com/rss/search?q=enterprise+technology+innovation&hl=en-US&gl=US&ceid=US:en',
    ],
    'consulting': [
      'https://news.google.com/rss/search?q=management+consulting+technology+advisory&hl=en-US&gl=US&ceid=US:en',
    ],
    'government': [
      'https://news.google.com/rss/search?q=government+digital+modernization+technology&hl=en-US&gl=US&ceid=US:en',
    ],
    'media entertainment': [
      'https://news.google.com/rss/search?q=media+entertainment+streaming+technology&hl=en-US&gl=US&ceid=US:en',
    ],
    'default': [
      'https://news.google.com/rss/search?q=technology+innovation+AI+business&hl=en-US&gl=US&ceid=US:en',
    ],
  };

  // Curated fallback links (always available)
  const FALLBACK_NEWS = {
    'artificial intelligence': [
      { title: 'Enterprise AI Adoption Accelerates Across Industries', source: 'MIT Technology Review', url: 'https://www.technologyreview.com/', date: 'Today' },
      { title: 'How Machine Learning Is Transforming Supply Chain Operations', source: 'Harvard Business Review', url: 'https://hbr.org/', date: 'Today' },
      { title: 'The State of AI in 2025: Key Trends for Business Leaders', source: 'McKinsey & Company', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights', date: 'Recent' },
      { title: 'Responsible AI: Building Trust Through Governance Frameworks', source: 'World Economic Forum', url: 'https://www.weforum.org/topics/artificial-intelligence-and-robotics/', date: 'Recent' },
      { title: 'Generative AI in the Enterprise: From Pilots to Production', source: 'Gartner', url: 'https://www.gartner.com/en/topics/artificial-intelligence', date: 'Recent' },
    ],
    'quantum computing': [
      { title: 'Quantum Computing Milestones: Progress Toward Practical Applications', source: 'Nature', url: 'https://www.nature.com/subjects/quantum-computing', date: 'Today' },
      { title: 'Post-Quantum Cryptography Standards: What Organizations Need to Know', source: 'NIST', url: 'https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards', date: 'Recent' },
      { title: 'IBM, Google, and the Race for Quantum Advantage', source: 'IEEE Spectrum', url: 'https://spectrum.ieee.org/topic/computing/', date: 'Recent' },
      { title: 'Quantum-Ready: Preparing Your Organization for the Next Computing Revolution', source: 'Deloitte Insights', url: 'https://www2.deloitte.com/us/en/insights/topics/innovation/quantum-computing-business-applications.html', date: 'Recent' },
      { title: 'The Quantum Economy: Investment Trends and Market Outlook', source: 'Boston Consulting Group', url: 'https://www.bcg.com/publications/2024/long-term-forecast-for-quantum-computing-still-looks-bright', date: 'Recent' },
    ],
    'default': [
      { title: 'Digital Transformation Trends Reshaping Enterprise Strategy', source: 'Forbes', url: 'https://www.forbes.com/digital-transformation/', date: 'Today' },
      { title: 'The Future of Work: AI, Automation, and Human Capital', source: 'McKinsey & Company', url: 'https://www.mckinsey.com/featured-insights/future-of-work', date: 'Today' },
      { title: 'Cloud Computing Market Evolution: Multi-Cloud Strategies Dominate', source: 'Gartner', url: 'https://www.gartner.com/en/topics/cloud', date: 'Recent' },
      { title: 'Sustainability Technology: ESG Meets Innovation', source: 'World Economic Forum', url: 'https://www.weforum.org/topics/sustainable-development/', date: 'Recent' },
      { title: 'C-Suite Technology Priorities for the Year Ahead', source: 'Harvard Business Review', url: 'https://hbr.org/topic/subject/technology', date: 'Recent' },
    ],
  };

  const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json';
  const CACHE_KEY_PREFIX = 'qiq_news_';
  const CACHE_DURATION = 4 * 60 * 60 * 1000; // 4 hours

  function getBestTopic(dataTopicStr) {
    const words = dataTopicStr.toLowerCase();
    const topicKeys = Object.keys(RSS_SOURCES).filter(k => k !== 'default');
    for (const key of topicKeys) {
      const keyWords = key.split(' ');
      if (keyWords.some(w => words.includes(w))) return key;
    }
    return 'default';
  }

  function getCachedNews(topic) {
    try {
      const cached = localStorage.getItem(CACHE_KEY_PREFIX + topic);
      if (!cached) return null;
      const data = JSON.parse(cached);
      if (Date.now() - data.timestamp > CACHE_DURATION) return null;
      return data.items;
    } catch { return null; }
  }

  function setCachedNews(topic, items) {
    try {
      localStorage.setItem(CACHE_KEY_PREFIX + topic, JSON.stringify({
        timestamp: Date.now(),
        items: items,
      }));
    } catch { /* localStorage might be full or unavailable */ }
  }

  async function fetchRSSNews(topic) {
    const sources = RSS_SOURCES[topic] || RSS_SOURCES['default'];
    const feedUrl = sources[0];

    try {
      const response = await fetch(`${RSS2JSON_API}?rss_url=${encodeURIComponent(feedUrl)}&count=6`);
      if (!response.ok) throw new Error('RSS fetch failed');
      const data = await response.json();

      if (data.status !== 'ok' || !data.items || data.items.length === 0) {
        throw new Error('No items in RSS response');
      }

      return data.items.slice(0, 5).map(item => ({
        title: cleanTitle(item.title),
        source: item.author || extractDomain(item.link),
        url: item.link,
        date: formatDate(item.pubDate),
        thumbnail: item.thumbnail || item.enclosure?.link || null,
      }));
    } catch (error) {
      console.log('RSS fetch failed, using fallback:', error.message);
      return null;
    }
  }

  function cleanTitle(title) {
    // Remove source suffix like " - The New York Times"
    return title.replace(/\s*[-–—|]\s*[^-–—|]+$/, '').trim().substring(0, 120);
  }

  function extractDomain(url) {
    try {
      const hostname = new URL(url).hostname;
      return hostname.replace('www.', '').split('.')[0];
    } catch { return 'Source'; }
  }

  function formatDate(dateStr) {
    if (!dateStr) return 'Recent';
    const date = new Date(dateStr);
    const now = new Date();
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffHours < 48) return 'Yesterday';
    if (diffHours < 168) return `${Math.floor(diffHours / 24)}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  function getFallbackNews(topic) {
    return FALLBACK_NEWS[topic] || FALLBACK_NEWS['default'];
  }

  function renderNews(container, items, timestamp) {
    const timestampEl = document.getElementById('newsTimestamp');
    if (timestampEl) {
      const now = new Date();
      timestampEl.textContent = 'Updated ' + now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    }

    let html = '';
    items.forEach(item => {
      const thumbHtml = item.thumbnail
        ? `<img src="${item.thumbnail}" alt="" class="news-item-thumb" loading="lazy" onerror="this.style.display='none'">`
        : '';

      html += `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="news-item">
          ${thumbHtml}
          <div>
            <h4>${item.title}</h4>
            <div class="news-item-meta">${item.source} · ${item.date}</div>
          </div>
        </a>`;
    });

    container.innerHTML = html;
  }

  async function initNewsFeed(feedElement) {
    const dataTopic = feedElement.getAttribute('data-topic') || '';
    const topic = getBestTopic(dataTopic);
    const contentEl = feedElement.querySelector('#newsContent') || feedElement.querySelector('[id$="newsContent"]') || feedElement.lastElementChild;

    if (!contentEl) return;

    // Try cache first
    const cached = getCachedNews(topic);
    if (cached) {
      renderNews(contentEl, cached);
      return;
    }

    // Try live RSS feed
    const liveNews = await fetchRSSNews(topic);
    if (liveNews && liveNews.length > 0) {
      setCachedNews(topic, liveNews);
      renderNews(contentEl, liveNews);
      return;
    }

    // Fallback to curated links
    const fallback = getFallbackNews(topic);
    renderNews(contentEl, fallback);
  }

  // Initialize all news feeds on the page
  document.addEventListener('DOMContentLoaded', () => {
    const feeds = document.querySelectorAll('[id="newsFeed"], .news-feed[data-topic]');
    feeds.forEach(feed => initNewsFeed(feed));

    // Refresh news every 4 hours if page stays open
    setInterval(() => {
      feeds.forEach(feed => {
        const dataTopic = feed.getAttribute('data-topic') || '';
        const topic = getBestTopic(dataTopic);
        try { localStorage.removeItem(CACHE_KEY_PREFIX + topic); } catch {}
        initNewsFeed(feed);
      });
    }, CACHE_DURATION);
  });

})();
