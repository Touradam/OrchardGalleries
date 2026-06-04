# Orchard Galleries Website

A modern, elegant, responsive website for Orchard Galleries, a contemporary art gallery located in Oakland's Art Murmur District.

## Overview

Orchard Galleries is a contemporary art space featuring 12 exhibition showrooms that host rotating exhibitions, installations, artist showcases, community events, and cultural programming. This website showcases the gallery's mission to foster community engagement while highlighting the diversity and creativity of Bay Area artists.

## Design Philosophy

The website embodies the aesthetic of a contemporary art gallery:

- **Minimal & Sophisticated**: Clean layouts with generous white space
- **Highly Visual**: Large imagery and strong typography
- **Elegant**: Inspired by world-class gallery websites (Hauser & Wirth, Pace Gallery, David Zwirner)
- **Community-Focused**: Emphasizes accessibility and engagement

## Technical Stack

Built using only:
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks or libraries

No external frameworks like React, Vue, Angular, Bootstrap, or Tailwind were used.

## Color Palette

- **White**: `#FFFFFF`
- **Soft Off-White**: `#F7F7F5`
- **Charcoal**: `#1C1C1C`
- **Warm Gray**: `#8A8A8A`
- **Deep Olive** (Accent): `#6D7B5D`

## Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

## Features

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Hamburger menu for mobile navigation

### Interactive Elements
- Hero image slider with auto-advance
- Sticky navigation that hides on scroll down
- Smooth scrolling for anchor links
- Image lightbox for artwork viewing
- Scroll-triggered fade-in animations
- Mobile navigation menu

### Pages

1. **Home** (`index.html`)
   - Hero slider with rotating exhibition imagery
   - Featured exhibition showcase
   - Upcoming events preview
   - Featured artists section
   - About section
   - Newsletter signup

2. **About** (`about.html`)
   - Mission statement
   - Gallery history
   - Philosophy and approach
   - Community impact
   - Team members

3. **Exhibitions** (`exhibitions.html`)
   - Current exhibitions
   - Upcoming exhibitions
   - Past exhibitions archive
   - Exhibition programs information

4. **Artists** (`artists.html`)
   - Artist directory with profiles
   - Featured artist spotlights
   - Artist biography pages
   - Emerging artists program

5. **Events** (`events.html`)
   - Upcoming events calendar
   - Event types (openings, talks, workshops)
   - RSVP functionality
   - Private events information

6. **Visit** (`visit.html`)
   - Location and hours
   - Interactive map placeholder
   - Directions (car, transit, bike)
   - Visitor information
   - Accessibility details
   - Neighborhood guide

7. **Contact** (`contact.html`)
   - Contact form
   - Gallery information
   - Staff directory
   - Specific inquiry contacts

## Folder Structure

```
orchard-galleries/
│
├── index.html
├── about.html
├── exhibitions.html
├── artists.html
├── events.html
├── visit.html
├── contact.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   (placeholder for gallery images)
│
└── assets/
    (placeholder for additional assets)
```

## JavaScript Functionality

The `script.js` file includes:

- **Mobile Menu Toggle**: Hamburger menu for mobile navigation
- **Hero Slider**: Auto-advancing image carousel
- **Sticky Navigation**: Smart show/hide on scroll
- **Scroll Animations**: Intersection Observer for fade-in effects
- **Image Lightbox**: Click to enlarge artwork images
- **Smooth Scrolling**: Enhanced anchor link navigation
- **Form Handling**: Contact and newsletter form submissions
- **Lazy Loading**: Performance optimization for images

## Accessibility

The website follows WCAG accessibility best practices:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Alt text for images
- High contrast ratios
- Responsive text sizing

## Performance Optimization

- Clean, efficient code
- Lazy loading for images
- Debounced resize handlers
- Optimized animations
- Minimal HTTP requests

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Touradam/OrchardGalleries.git
   ```

2. Open `index.html` in a web browser, or use a local development server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## Image Assets

The website uses a combination of:
- **Hero image**: Stored locally in `/images/hero-main.jpg` (your custom image)
- **Other images**: Unsplash placeholder URLs for exhibitions, artists, and events

### Adding Your Images

1. Place your gallery images in the `/images` folder
2. Update the image paths in HTML files to point to your local images
3. Recommended formats: JPG or WebP
4. Optimize images for web before uploading

The hero image is the only custom local image. All other images use Unsplash placeholders and should be replaced with your actual gallery photos.

## Customization

### Updating Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --color-white: #FFFFFF;
  --color-off-white: #F7F7F5;
  --color-charcoal: #1C1C1C;
  --color-warm-gray: #8A8A8A;
  --color-deep-olive: #6D7B5D;
}
```

### Updating Typography

Change font families in `css/style.css`:

```css
:root {
  --font-serif: 'Your-Serif-Font', serif;
  --font-sans: 'Your-Sans-Font', sans-serif;
}
```

Don't forget to update the Google Fonts import in each HTML file.

## Future Enhancements

Potential additions for future development:

- Backend integration for form submissions
- CMS integration for content management
- Online artwork sales functionality
- Event registration system
- Newsletter email service integration
- Google Maps API integration
- Virtual gallery tours
- Artist login portal
- Artwork inventory management

## Gallery Information

**Orchard Galleries**  
489 25th Street  
Oakland, CA 94612

**Hours:**  
Saturday: 1:00 PM – 5:00 PM  
Private viewings by appointment

**Contact:**  
Phone: (510) 555-ARTS  
Email: info@orchardgalleries.com

## Credits

- **Design & Development**: Contemporary gallery website template
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Images**: Local placeholder structure (awaiting gallery photos)

## License

All rights reserved © 2026 Orchard Galleries

---

**Oakland Art Murmur District** | Contemporary Art & Community
