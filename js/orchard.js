/**
 * Orchard Galleries — shared interactions
 */

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initMobileNav() {
  const toggle = document.querySelector('.site-nav-toggle');
  const menu = document.querySelector('.site-nav-links');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-active');
    menu.classList.toggle('is-open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('is-active');
      menu.classList.remove('is-open');
    });
  });
}

function initStickyNav() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 200) {
      nav.classList.toggle('hidden', y > lastScroll);
    } else {
      nav.classList.remove('hidden');
    }
    lastScroll = y;
  }, { passive: true });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
}

function initTiltCards() {
  if (prefersReducedMotion()) return;

  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--tilt-x', `${y * -5}deg`);
      card.style.setProperty('--tilt-y', `${x * 5}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}

function initSpotlight() {
  if (prefersReducedMotion()) return;

  const hero = document.querySelector('.landing-hero');
  const spotlight = document.querySelector('.hero-spotlight');
  if (!hero || !spotlight) return;

  let raf = null;
  hero.addEventListener('pointermove', (e) => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      spotlight.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
      spotlight.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
      spotlight.style.opacity = '1';
    });
  });

  hero.addEventListener('pointerleave', () => {
    spotlight.style.opacity = '0';
  });
}

function initParticles() {
  if (prefersReducedMotion()) return;

  const container = document.querySelector('.hero-particles');
  if (!container) return;

  for (let i = 0; i < 16; i += 1) {
    const p = document.createElement('span');
    p.className = 'hero-particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 8}s`;
    p.style.animationDuration = `${6 + Math.random() * 10}s`;
    p.style.opacity = `${0.15 + Math.random() * 0.35}`;
    container.appendChild(p);
  }
}

function initCountdown(targetDateISO) {
  const wrap = document.getElementById('countdown-wrap');
  const timer = document.getElementById('countdown-timer');
  if (!wrap || !timer) return;

  const target = new Date(targetDateISO);
  if (Number.isNaN(target.getTime()) || target.getTime() <= Date.now()) {
    wrap.hidden = true;
    return;
  }

  wrap.hidden = false;

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) {
      wrap.hidden = true;
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    timer.innerHTML = `
      <span class="countdown-unit"><strong>${days}</strong><small>days</small></span>
      <span class="countdown-sep">:</span>
      <span class="countdown-unit"><strong>${String(hours).padStart(2, '0')}</strong><small>hrs</small></span>
      <span class="countdown-sep">:</span>
      <span class="countdown-unit"><strong>${String(mins).padStart(2, '0')}</strong><small>min</small></span>
      <span class="countdown-sep">:</span>
      <span class="countdown-unit"><strong>${String(secs).padStart(2, '0')}</strong><small>sec</small></span>
    `;
  }

  update();
  setInterval(update, 1000);
}

function buildMarquee(images) {
  const track = document.getElementById('marquee-track');
  if (!track || !images?.length) return;

  const items = [...images, ...images, ...images, ...images];
  track.innerHTML = items.map((img) => `
    <div class="image-marquee-item">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
    </div>
  `).join('');
}

function renderHeroFlipCards() {
  const grid = document.getElementById('hero-flip-grid');
  const ex = orchardData?.currentExhibition;
  if (!grid || !ex?.artworks?.length) return;

  grid.innerHTML = ex.artworks.map((work, i) => `
    <article class="showcase-card showcase-card--flip" tabindex="0" aria-label="${work.title} by ${work.artist}. Click for details.">
      <div class="showcase-card-flipper">
        <div class="showcase-card-face showcase-card-front">
          <img src="${work.src}" alt="${work.alt}" loading="${i < 2 ? 'eager' : 'lazy'}">
          <div class="showcase-card-front-overlay"></div>
          <span class="showcase-card-front-caption">Tap for details</span>
        </div>
        <div class="showcase-card-face showcase-card-back">
          <p class="eyebrow">${work.artist}</p>
          <h3>${work.title}</h3>
          <p class="showcase-medium">${work.medium}</p>
          <p>${work.description}</p>
          <div class="showcase-show-block">
            <strong>${ex.title} · ${ex.dates}</strong>
            <span>${work.showNote}</span>
          </div>
          <button type="button" class="showcase-flip-close" aria-label="Close details">Close</button>
        </div>
      </div>
    </article>
  `).join('');
}

function initFlipCards() {
  const cards = document.querySelectorAll('.showcase-card--flip');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target.closest('.showcase-flip-close')) {
        card.classList.remove('is-flipped');
        return;
      }

      const wasFlipped = card.classList.contains('is-flipped');
      cards.forEach((c) => c.classList.remove('is-flipped'));
      if (!wasFlipped) card.classList.add('is-flipped');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const wasFlipped = card.classList.contains('is-flipped');
        cards.forEach((c) => c.classList.remove('is-flipped'));
        if (!wasFlipped) card.classList.add('is-flipped');
      }
      if (e.key === 'Escape') {
        card.classList.remove('is-flipped');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.showcase-card--flip')) {
      cards.forEach((c) => c.classList.remove('is-flipped'));
    }
  });
}

function renderTimelineColumn(items, colClass) {
  return items.map((item) => `
    <article class="timeline-item${item.highlight ? ' is-highlight' : ''}">
      ${item.highlight ? '<span class="timeline-badge">Now</span>' : ''}
      <p class="item-date">${item.dates}</p>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${item.artists ? `<p class="artist-list"><strong>Artists:</strong> ${item.artists}</p>` : ''}
    </article>
  `).join('');
}

function initDetailsPage() {
  if (typeof orchardData === 'undefined') return;

  const exPast = document.getElementById('exhibitions-past');
  const exCurrent = document.getElementById('exhibitions-current');
  const exFuture = document.getElementById('exhibitions-future');
  const evPast = document.getElementById('events-past');
  const evCurrent = document.getElementById('events-current');
  const evFuture = document.getElementById('events-future');

  if (exPast) exPast.innerHTML = renderTimelineColumn(orchardData.exhibitions.past, 'past');
  if (exCurrent) exCurrent.innerHTML = renderTimelineColumn(orchardData.exhibitions.current, 'current');
  if (exFuture) exFuture.innerHTML = renderTimelineColumn(orchardData.exhibitions.future, 'future');
  if (evPast) evPast.innerHTML = renderTimelineColumn(orchardData.events.past, 'past');
  if (evCurrent) evCurrent.innerHTML = renderTimelineColumn(orchardData.events.current, 'current');
  if (evFuture) evFuture.innerHTML = renderTimelineColumn(orchardData.events.future, 'future');
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyNav();
  initScrollReveal();
  initTiltCards();
  initSpotlight();
  initParticles();
  initDetailsPage();
  renderHeroFlipCards();
  initFlipCards();

  if (typeof orchardData !== 'undefined' && orchardData.currentExhibition?.openingDate) {
    initCountdown(orchardData.currentExhibition.openingDate);
  }

  if (typeof orchardData !== 'undefined' && orchardData.currentExhibition?.artworks) {
    buildMarquee(orchardData.currentExhibition.artworks.map(({ src, alt }) => ({ src, alt })));
  }
});
