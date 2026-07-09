const orchardData = {
  gallery: {
    name: 'Orchard Galleries',
    tagline: 'A home for contemporary art and community',
    address: '489 25th St. Oakland',
    website: 'https://www.orchardgalleries.com',
    websiteLabel: 'www.orchardgalleries.com',
    email: 'hello@orchardgalleries.com',
    instagram: 'https://www.instagram.com/the_orchard_galleries_on_25/',
    instagramHandle: '@the_orchard_galleries_on_25',
    hours: 'Saturday 1 PM – 5 PM · Private viewings by appointment',
    about: [
      'Located in the heart of Oakland\'s Art Murmur District, Orchard Galleries is a contemporary art space dedicated to fostering community engagement while highlighting the extraordinary diversity and creativity of Bay Area artists.',
      'Our exhibition showrooms host rotating exhibitions, installations, artist showcases, community events, open studios, and cultural programming that bring together artists, collectors, and art enthusiasts in a welcoming, inspiring environment.'
    ]
  },

  marqueeImages: [
    { src: 'images/artwork-1.jpg', alt: 'Artwork at Orchard Galleries', description: 'Contemporary artwork from our Bay Area artists on view at Orchard Galleries.' },
    { src: 'images/artwork-2.jpg', alt: 'Artwork at Orchard Galleries', description: 'A work from our rotating exhibition program in Oakland\'s Art Murmur District.' },
    { src: 'images/artwork-3.jpg', alt: 'Artwork at Orchard Galleries', description: 'Sculpture and mixed media from artists showing at the gallery.' },
    { src: 'images/artwork-4.jpg', alt: 'Artwork at Orchard Galleries', description: 'Painting and works on paper from our current season of exhibitions.' },
    { src: 'images/artwork-5.jpg', alt: 'Artwork at Orchard Galleries', description: 'Installation and studio work featured in our showrooms.' },
    { src: 'images/artwork-6.jpg', alt: 'Artwork at Orchard Galleries', description: 'Contemporary art from the Orchard Galleries community of makers.' },
    { src: 'images/artwork-7.jpg', alt: 'Artwork at Orchard Galleries', description: 'Work on view alongside group and solo exhibitions throughout the year.' },
    { src: 'images/artwork-8.jpg', alt: 'Artwork at Orchard Galleries', description: 'Art from Bay Area creators presented at 489 25th St.' },
    { src: 'images/gallery-space.jpg', alt: 'Orchard Galleries interior', description: 'The gallery floor at Orchard Galleries, open for exhibitions and community events.' },
    { src: 'images/gallery-interior-1.jpg', alt: 'Gallery showroom', description: 'One of our exhibition showrooms, ready for visitors to explore.' },
    { src: 'images/exhibition-featured.jpg', alt: 'Featured exhibition', description: 'A featured work from a recent Orchard Galleries exhibition.' },
    { src: 'images/gallery-showroom.jpg', alt: 'Exhibition space', description: 'Our showroom space hosting rotating contemporary art exhibitions.' }
  ],

  currentExhibition: {
    title: 'The Dome Today',
    type: 'Group Exhibition',
    image: 'DomeToday/Picture4.jpg',
    heroImage: 'DomeToday/Picture4.jpg',
    dates: 'July 11 – Aug 29',
    opening: 'Opening Reception July 11th · 1 – 5 pm',
    openingDate: '2026-07-11T13:00:00-07:00',
    location: '489 25th St. Oakland',
    description: 'The Orchard Galleries are pleased to present a group exhibition celebrating the legacy of The Dome Center for the Arts as well as the current artists have been part of its creative community.',
    artists: [
      'Laura Van Duren', 'JP Long', 'Jo Gillerman', 'Maya Kabat',
      'Joe Slusky', 'Clay Jensen', 'Joseph Melamed', 'Kyle Reicher',
      'Megan Mirro', 'Sophia Pousson', 'Bella Feldman', 'Leah Virsik'
    ],
    artworks: [
      {
        src: 'DomeToday/Picture1.jpg',
        alt: 'Sculpture with black, red, blue, and yellow forms',
        title: 'Ascending Form',
        artist: 'JP Long',
        medium: 'Steel sculpture',
        description: 'A vertical steel sculpture of intersecting blade-like forms in matte black, accented with vivid red, blue, and yellow on inner surfaces.',
        showNote: 'Part of The Dome Today, celebrating artists connected to The Dome Center for the Arts.'
      },
      {
        src: 'DomeToday/Picture4.jpg',
        alt: 'Abstract volcanic landscape composition',
        title: 'Terrain Mirror',
        artist: 'Jo Gillerman',
        medium: 'Mixed media on panel',
        description: 'A symmetrical composition evoking volcanic terrain, with glowing orange fissures set against dark smoke and mirrored geological forms.',
        showNote: 'Part of The Dome Today, celebrating artists connected to The Dome Center for the Arts.'
      },
      {
        src: 'DomeToday/Picture3.jpg',
        alt: 'Woven textile artwork in teal with red accent',
        title: 'Woven Field',
        artist: 'Maya Kabat',
        medium: 'Woven canvas and textile',
        description: 'Strips of teal and turquoise canvas woven and stitched into a grid, with a vertical red stripe and frayed edges that emphasize material and process.',
        showNote: 'Part of The Dome Today, celebrating artists connected to The Dome Center for the Arts.'
      },
      {
        src: 'DomeToday/Picture2.png',
        alt: 'White geometric bird sculpture in flight',
        title: 'Flight Study',
        artist: 'Joseph Melamed',
        medium: 'Mixed media sculpture',
        description: 'A geometric bird in mid-flight, built from folded white planes with black markings and a red accent at the head, suspended on a slender rod.',
        showNote: 'Part of The Dome Today, celebrating artists connected to The Dome Center for the Arts.'
      }
    ],
  },

  exhibitions: {
    past: [],
    current: [
      {
        title: 'The Dome Today',
        dates: 'July 11 – Aug 29',
        description: 'A group exhibition celebrating the legacy of The Dome Center for the Arts and the artists who have been part of its creative community.',
        artists: 'Laura Van Duren, JP Long, Jo Gillerman, Maya Kabat, Joe Slusky, Clay Jensen, Joseph Melamed, Kyle Reicher, Megan Mirro, Sophia Pousson, Bella Feldman, and Leah Virsik',
        highlight: true
      }
    ],
    future: []
  },

  events: {
    past: [],
    current: [
      {
        title: 'Opening Reception — The Dome Today',
        dates: 'July 11th · 1 – 5 pm',
        description: 'Celebrate the opening of The Dome Today with the artists, light refreshments, and live music in the gallery.',
        highlight: true
      }
    ],
    future: []
  }
};
