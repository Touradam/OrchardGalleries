/**
 * ORCHARD GALLERIES - MAIN JAVASCRIPT
 * Contemporary Art Gallery Website
 * Oakland, California
 */

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

// ============================================
// HERO SECTION (Static Image - No Slider)
// ============================================
// Hero section now uses a single static image
// No slider functionality needed

// ============================================
// STICKY NAVIGATION
// ============================================
function initStickyNavigation() {
  const navigation = document.querySelector('.navigation');
  
  if (navigation) {
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
          // Scrolling down - hide navigation
          navigation.classList.add('hidden');
        } else {
          // Scrolling up - show navigation
          navigation.classList.remove('hidden');
        }
      } else {
        // At top of page - always show
        navigation.classList.remove('hidden');
      }
      
      lastScrollTop = scrollTop;
    });
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => observer.observe(element));
}

// ============================================
// IMAGE LIGHTBOX
// ============================================
function initLightbox() {
  // Create lightbox element
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
    <div class="lightbox-content">
      <img src="" alt="">
    </div>
  `;
  document.body.appendChild(lightbox);
  
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  
  // Add click listeners to all gallery images
  const galleryImages = document.querySelectorAll('[data-lightbox]');
  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  closeBtn.addEventListener('click', closeLightbox);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default for # alone
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const navigationHeight = document.querySelector('.navigation')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navigationHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// FORM HANDLING
// ============================================
function initFormHandling() {
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      if (email) {
        // In production, this would submit to a backend service
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        newsletterForm.reset();
      }
    });
  }
  
  // Contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // In production, this would submit to a backend service
      alert(`Thank you for your message, ${data.name}! We'll get back to you soon.`);
      contactForm.reset();
    });
  }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

// ============================================
// ADD ANIMATION CLASSES TO ELEMENTS
// ============================================
function addAnimationClasses() {
  // Add fade-in class to cards and sections for scroll animations
  const animatedElements = document.querySelectorAll('.card, .artist-card, .event-card, .section-header');
  animatedElements.forEach(element => {
    if (!element.classList.contains('fade-in')) {
      element.classList.add('fade-in');
    }
  });
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Orchard Galleries - Initializing...');
  
  // Initialize all features
  initMobileMenu();
  initStickyNavigation();
  initSmoothScrolling();
  initLightbox();
  initFormHandling();
  initLazyLoading();
  addAnimationClasses();
  initScrollAnimations();
  
  console.log('Orchard Galleries - Ready!');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add resize listener with debounce
window.addEventListener('resize', debounce(() => {
  // Handle any resize-specific updates here
  console.log('Window resized');
}, 250));
