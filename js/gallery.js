/* ============================================
   FULL GALLERY SLIDESHOW EXPERIENCE
   ============================================ */

class GalleryExperience {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
    this.autoplayInterval = null;
    this.autoplayDelay = 4000; // 4 seconds per image
    this.init();
  }

  init() {
    this.createGalleryHTML();
    this.loadGalleryImages();
    this.attachEventListeners();
  }

  createGalleryHTML() {
    const galleryHTML = `
      <div class="full-gallery-overlay" id="fullGallery">
        <div class="full-gallery-container">
          <button class="gallery-close" id="galleryClose" aria-label="Close gallery">×</button>
          
          <div class="gallery-info" id="galleryInfo">
            <h3>Orchard Galleries</h3>
            <p>A curated collection of contemporary art</p>
          </div>
          
          <button class="gallery-nav gallery-prev" id="galleryPrev" aria-label="Previous image">‹</button>
          
          <div class="full-gallery-main" id="galleryMain">
            <img class="full-gallery-image" id="galleryImage" src="" alt="Gallery image" />
          </div>
          
          <button class="gallery-nav gallery-next" id="galleryNext" aria-label="Next image">›</button>
          
          <div class="gallery-counter" id="galleryCounter">1 / 1</div>
          
          <div class="gallery-thumbnails" id="galleryThumbnails"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', galleryHTML);
  }

  loadGalleryImages() {
    // List of all gallery images
    this.images = [
      { src: 'images/hero-main.jpg', title: 'Gallery Hero' },
      { src: 'images/exhibition-featured.jpg', title: 'Featured Exhibition' },
      { src: 'images/exhibition-current-1.jpg', title: 'Current Exhibition' },
      { src: 'images/exhibition-current-2.jpg', title: 'Current Exhibition' },
      { src: 'images/exhibition-current-3.jpg', title: 'Current Exhibition' },
      { src: 'images/exhibition-upcoming-1.jpg', title: 'Upcoming Exhibition' },
      { src: 'images/exhibition-upcoming-2.jpg', title: 'Upcoming Exhibition' },
      { src: 'images/exhibition-upcoming-3.jpg', title: 'Upcoming Exhibition' },
      { src: 'images/exhibition-past-1.jpg', title: 'Past Exhibition' },
      { src: 'images/exhibition-past-2.jpg', title: 'Past Exhibition' },
      { src: 'images/exhibition-past-3.jpg', title: 'Past Exhibition' },
      { src: 'images/event-opening.jpg', title: 'Gallery Opening' },
      { src: 'images/event-artist-talk.jpg', title: 'Artist Talk' },
      { src: 'images/event-gallery-tour.jpg', title: 'Gallery Tour' },
      { src: 'images/event-workshop.jpg', title: 'Workshop' },
      { src: 'images/event-panel.jpg', title: 'Panel Discussion' },
      { src: 'images/event-family-day.jpg', title: 'Family Day' },
      { src: 'images/event-first-friday.jpg', title: 'First Friday' },
      { src: 'images/event-open-studio.jpg', title: 'Open Studio' },
      { src: 'images/artist-portrait-1.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-2.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-3.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-4.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-5.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-6.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-7.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-8.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-9.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-10.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-11.jpg', title: 'Adama Toure' },
      { src: 'images/artist-portrait-12.jpg', title: 'Adama Toure' },
      { src: 'images/artwork-1.jpg', title: 'Artwork' },
      { src: 'images/artwork-2.jpg', title: 'Artwork' },
      { src: 'images/artwork-3.jpg', title: 'Artwork' },
      { src: 'images/gallery-space.jpg', title: 'Gallery Space' },
      { src: 'images/gallery-interior-1.jpg', title: 'Gallery Interior' },
      { src: 'images/gallery-interior-2.jpg', title: 'Gallery Interior' },
      { src: 'images/gallery-exterior.jpg', title: 'Gallery Exterior' },
      { src: 'images/gallery-facade.jpg', title: 'Gallery Facade' },
      { src: 'images/team-director.jpg', title: 'Gallery Director' },
      { src: 'images/team-curator.jpg', title: 'Curator' },
      { src: 'images/team-education.jpg', title: 'Education Coordinator' },
      { src: 'images/team-programs.jpg', title: 'Programs Manager' },
      { src: 'images/community-engagement.jpg', title: 'Community Engagement' },
      { src: 'images/oakland-location.jpg', title: 'Oakland Location' }
    ];

    this.renderThumbnails();
  }

  renderThumbnails() {
    const thumbnailsContainer = document.getElementById('galleryThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    this.images.forEach((image, index) => {
      const thumb = document.createElement('img');
      thumb.src = image.src;
      thumb.alt = image.title;
      thumb.className = 'gallery-thumb';
      if (index === 0) thumb.classList.add('active');
      
      thumb.addEventListener('click', () => {
        this.goToImage(index);
      });
      
      thumbnailsContainer.appendChild(thumb);
    });
  }

  attachEventListeners() {
    // Logo click to open gallery
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        this.openGallery();
      });
    });

    // Close button
    document.getElementById('galleryClose').addEventListener('click', () => {
      this.closeGallery();
    });

    // Navigation buttons
    document.getElementById('galleryPrev').addEventListener('click', () => {
      this.prevImage();
    });

    document.getElementById('galleryNext').addEventListener('click', () => {
      this.nextImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!document.getElementById('fullGallery').classList.contains('active')) return;
      
      if (e.key === 'ArrowLeft') {
        this.prevImage();
      } else if (e.key === 'ArrowRight') {
        this.nextImage();
      } else if (e.key === 'Escape') {
        this.closeGallery();
      }
    });

    // Click outside to close
    document.getElementById('fullGallery').addEventListener('click', (e) => {
      if (e.target.id === 'fullGallery') {
        this.closeGallery();
      }
    });
  }

  openGallery() {
    const gallery = document.getElementById('fullGallery');
    gallery.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    this.currentIndex = 0;
    this.showImage(0);
    this.startAutoplay();
  }

  closeGallery() {
    const gallery = document.getElementById('fullGallery');
    gallery.classList.remove('active');
    document.body.style.overflow = '';
    
    this.stopAutoplay();
  }

  showImage(index, direction = 'right') {
    if (index < 0 || index >= this.images.length) return;
    
    const img = document.getElementById('galleryImage');
    const counter = document.getElementById('galleryCounter');
    const info = document.getElementById('galleryInfo');
    
    // Remove active class
    img.classList.remove('active', 'slide-in-right', 'slide-in-left');
    
    // Update current index
    this.currentIndex = index;
    
    // Update image
    setTimeout(() => {
      img.src = this.images[index].src;
      img.alt = this.images[index].title;
      
      // Add animation class
      img.classList.add('active', direction === 'right' ? 'slide-in-right' : 'slide-in-left');
      
      // Update counter
      counter.textContent = `${index + 1} / ${this.images.length}`;
      
      // Update info
      info.querySelector('h3').textContent = this.images[index].title;
      
      // Update thumbnails
      document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
      });
      
      // Scroll thumbnail into view
      const activeThumbnail = document.querySelectorAll('.gallery-thumb')[index];
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 100);
  }

  nextImage() {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage(nextIndex, 'right');
    this.restartAutoplay();
  }

  prevImage() {
    const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showImage(prevIndex, 'left');
    this.restartAutoplay();
  }

  goToImage(index) {
    const direction = index > this.currentIndex ? 'right' : 'left';
    this.showImage(index, direction);
    this.restartAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
    }, this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  restartAutoplay() {
    this.startAutoplay();
  }
}

// Initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new GalleryExperience();
});
