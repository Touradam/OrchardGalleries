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

function renderHeroArtworkCards() {
  const grid = document.getElementById('hero-artwork-grid');
  const ex = orchardData?.currentExhibition;
  if (!grid || !ex?.artworks?.length) return;

  grid.innerHTML = ex.artworks.map((work, i) => `
    <button type="button" class="showcase-card" data-artwork-index="${i}" aria-label="${work.title} by ${work.artist}. Click to enlarge.">
      <img src="${work.src}" alt="${work.alt}" loading="${i < 2 ? 'eager' : 'lazy'}">
      <div class="showcase-card-overlay"></div>
      <span class="showcase-card-caption">View larger</span>
    </button>
  `).join('');
}

function initArtworkDetail() {
  const grid = document.getElementById('hero-artwork-grid');
  const panel = document.getElementById('hero-artwork-detail');
  const closeBtn = document.getElementById('hero-artwork-detail-close');
  const ex = orchardData?.currentExhibition;
  if (!grid || !panel || !ex?.artworks?.length) return;

  const img = document.getElementById('hero-artwork-detail-img');
  const artist = document.getElementById('hero-artwork-detail-artist');
  const title = document.getElementById('hero-artwork-detail-title');
  const medium = document.getElementById('hero-artwork-detail-medium');
  const desc = document.getElementById('hero-artwork-detail-desc');
  const show = document.getElementById('hero-artwork-detail-show');
  const cards = grid.querySelectorAll('.showcase-card');
  let activeIndex = null;

  function closeDetail() {
    activeIndex = null;
    panel.hidden = true;
    cards.forEach((c) => c.classList.remove('is-active'));
  }

  function openDetail(index) {
    const work = ex.artworks[index];
    if (!work) return;

    if (activeIndex === index) {
      closeDetail();
      return;
    }

    activeIndex = index;
    img.src = work.src;
    img.alt = work.alt;
    artist.textContent = work.artist;
    title.textContent = work.title;
    medium.textContent = work.medium;
    desc.textContent = work.description;
    show.textContent = `${ex.title} · ${ex.dates}. ${work.showNote}`;

    cards.forEach((c, i) => c.classList.toggle('is-active', i === index));
    panel.hidden = false;

    if (!prefersReducedMotion()) {
      panel.style.animation = 'none';
      panel.offsetHeight;
      panel.style.animation = '';
    }

    panel.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      openDetail(Number(card.dataset.artworkIndex));
    });
  });

  closeBtn?.addEventListener('click', closeDetail);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) closeDetail();
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
  renderHeroArtworkCards();
  initArtworkDetail();

  if (typeof orchardData !== 'undefined' && orchardData.currentExhibition?.openingDate) {
    initCountdown(orchardData.currentExhibition.openingDate);
  }

  if (typeof orchardData !== 'undefined' && orchardData.currentExhibition?.artworks) {
    buildMarquee(orchardData.currentExhibition.artworks.map(({ src, alt }) => ({ src, alt })));
  }
});
