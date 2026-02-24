/* ============================================
   QantumIQ Main JavaScript
   Navigation, scroll effects, mobile menu
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const nav = document.getElementById('navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a:not(.dropdown > a)').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // Mobile dropdown toggle
    navLinks.querySelectorAll('.dropdown > a').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          const parent = toggle.parentElement;
          parent.classList.toggle('open');
          // Close other dropdowns
          navLinks.querySelectorAll('.dropdown').forEach(dd => {
            if (dd !== parent) dd.classList.remove('open');
          });
        }
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .service-card, .feature-item, .testimonial-card, .industry-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Dynamic hero background image rotation (if multiple images available)
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    const style = heroBg.getAttribute('style') || '';
    const match = style.match(/url\(['"]?([^'")\s]+)['"]?\)/);
    if (match) {
      // Ensure image loads, show fallback gradient if not
      const img = new Image();
      img.onload = () => { heroBg.style.opacity = '0.25'; };
      img.onerror = () => {
        heroBg.style.backgroundImage = 'linear-gradient(135deg, #0a1628, #132039)';
        heroBg.style.opacity = '1';
      };
      img.src = match[1];
    }
  }

  // Stat counter animation
  document.querySelectorAll('.stat-item h3').forEach(stat => {
    const text = stat.textContent.trim();
    const num = parseInt(text.replace(/[^0-9]/g, ''));
    const suffix = text.replace(/[0-9]/g, '');
    if (isNaN(num)) return;

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let current = 0;
          const step = Math.ceil(num / 40);
          const timer = setInterval(() => {
            current += step;
            if (current >= num) {
              current = num;
              clearInterval(timer);
            }
            stat.textContent = current + suffix;
          }, 30);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statObserver.observe(stat);
  });
});
