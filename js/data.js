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
      'Laura Van Duren', 'J.P. Long', 'Jo Gillerman', 'Maya Kabat',
      'Joe Slusky', 'Clay Jensen', 'Joseph Melamed', 'Kyle Reicher',
      'Megan Mirro', 'Sophia Pousson', 'Bella Feldman', 'Leah Virsik'
    ],
    artworks: [
      {
        src: 'DomeToday/Picture1.jpg',
        alt: 'Sculpture with black, red, blue, and yellow forms',
        title: 'Ascending Form',
        artist: 'Bella Feldman',
        medium: 'Painted metal sculpture',
        description: 'A vertical sculpture of intersecting blade-like forms in matte black, accented with vivid red, blue, and yellow on inner surfaces.',
        showNote: 'Part of The Dome Today, celebrating artists connected to The Dome Center for the Arts.'
      },
      {
        src: 'DomeToday/Picture4.jpg',
        alt: 'Abstract volcanic landscape composition',
        title: 'Terrain Mirror',
        artist: 'Joe Slusky',
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
        artist: 'Clay Jensen',
        medium: 'Mixed media sculpture',
        description: 'A geometric bird in mid-flight, built from folded white planes with black markings and a red accent at the head, suspended on a slender rod.',
        showNote: 'Part of The Dome Today, celebrating artists connected to The Dome Center for the Arts.'
      }
    ],
  },

  exhibitions: {
    past: [
      {
        title: 'Winter Open Studios',
        dates: 'Jan 18 – Feb 22, 2026',
        description: 'An open studio weekend showcasing work across Orchard Galleries\' resident artists and invited guests.'
      }
    ],
    current: [
      {
        title: 'The Dome Today',
        dates: 'July 11 – Aug 29',
        description: 'A group exhibition celebrating the legacy of The Dome Center for the Arts and the artists who have been part of its creative community.',
        artists: 'Laura Van Duren, J.P. Long, Jo Gillerman, Maya Kabat, Joe Slusky, Clay Jensen, Joseph Melamed, Kyle Reicher, Megan Mirro, Sophia Pousson, Bella Feldman, and Leah Virsik',
        highlight: true
      }
    ],
    future: [
      {
        title: 'Autumn Collective',
        dates: 'Sep 12 – Nov 1, 2026',
        description: 'A seasonal group show featuring emerging Bay Area artists working across painting, sculpture, and installation.'
      }
    ]
  },

  events: {
    past: [
      {
        title: 'Gallery Talk: Bay Area Abstraction',
        dates: 'May 3, 2026 · 2 pm',
        description: 'An afternoon conversation with three painters on color, material, and the Oakland studio scene.'
      }
    ],
    current: [
      {
        title: 'Opening Reception — The Dome Today',
        dates: 'July 11th · 1 – 5 pm',
        description: 'Celebrate the opening of The Dome Today with the artists, light refreshments, and live music in the gallery.',
        highlight: true
      }
    ],
    future: [
      {
        title: 'Artist Panel: The Dome Legacy',
        dates: 'Aug 9, 2026 · 3 pm',
        description: 'Former Dome Center artists and curators reflect on the space\'s history and its influence on Oakland\'s creative community.'
      },
      {
        title: 'Community Open House',
        dates: 'Aug 23, 2026 · 1 – 5 pm',
        description: 'A free afternoon for neighbors, collectors, and art lovers to tour the galleries and meet the Orchard team.'
      }
    ]
  }
};
