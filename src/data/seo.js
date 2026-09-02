export const SITE_URL = 'https://tylerhenn.net'
export const WEBSITE_ID = `${SITE_URL}/#website`
export const PERSON_ID = 'https://www.henn.house/tyler-henn#person'
export const HENNHOUSE_PODCAST_ID = 'https://www.henn.house/podcasts#podcast'
export const PROFILE_IMAGE = 'https://www.henn.house/headshot.png'

export function createPageMetadata({ title, description, path, type = 'website', card = 'summary' }) {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
  const openGraph = {
    title,
    description,
    url,
    type,
    siteName: 'Tyler Henn',
    locale: 'en_US',
    images: [
      {
        url: PROFILE_IMAGE,
        width: 1024,
        height: 1536,
        alt: 'Tyler Henn, founder of Hennhouse',
      },
    ],
  }

  if (type === 'profile') {
    openGraph.firstName = 'Tyler'
    openGraph.lastName = 'Henn'
    openGraph.username = 'tylerahenn'
  }

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph,
    twitter: {
      card,
      creator: '@tylerahenn',
      title,
      description,
      images: [PROFILE_IMAGE],
    },
  }
}

function breadcrumb(path, name) {
  const url = `${SITE_URL}${path}`
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  }
}

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: 'Tyler Henn',
      alternateName: ['Tyler Henn — Search, AI Discovery & Entity Strategy', 'tylerhenn.net'],
      description: 'Tyler Henn explores how people and companies become known, trusted, cited, and recommended across search engines, maps, AI systems, and emerging agents.',
      inLanguage: 'en-US',
      about: { '@id': PERSON_ID },
      publisher: { '@id': PERSON_ID },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: 'Tyler Henn — Search, AI Discovery & Entity Strategy',
      description: 'Ideas on the future of discovery: how search engines, AI systems, and emerging agents understand and recommend people and companies.',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': PERSON_ID },
      inLanguage: 'en-US',
    },
  ],
}

export const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/about/#profilepage`,
      url: `${SITE_URL}/about/`,
      name: 'About Tyler Henn',
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${SITE_URL}/about/#breadcrumb` },
      dateCreated: '2026-09-01',
      dateModified: '2026-09-02',
      mainEntity: { '@id': PERSON_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Tyler Henn',
      givenName: 'Tyler',
      familyName: 'Henn',
      alternateName: '@tylerahenn',
      url: 'https://www.henn.house/tyler-henn',
      description: 'Tyler Henn is the founder and lead SEO strategist at Hennhouse, a Marietta, Georgia marketing agency. He helps local and service-based businesses improve their Google Maps visibility, organic search performance, and websites.',
      mainEntityOfPage: [
        { '@id': `${SITE_URL}/about/#profilepage` },
        { '@id': 'https://www.henn.house/tyler-henn' },
      ],
      image: {
        '@type': 'ImageObject',
        '@id': 'https://www.henn.house/tyler-henn#primary-image',
        url: PROFILE_IMAGE,
        contentUrl: PROFILE_IMAGE,
        width: 1024,
        height: 1536,
        caption: 'Tyler Henn, founder and lead SEO strategist at Hennhouse',
      },
      birthDate: '1998-08-01',
      birthPlace: {
        '@type': 'City',
        name: 'Naperville, Illinois',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Naperville',
          addressRegion: 'IL',
          addressCountry: 'US',
        },
      },
      homeLocation: {
        '@type': 'Place',
        name: 'Marietta, Georgia',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Marietta',
          addressRegion: 'GA',
          addressCountry: 'US',
        },
      },
      jobTitle: 'Founder and Lead SEO Strategist',
      worksFor: { '@id': 'https://www.henn.house/#organization' },
      affiliation: [
        { '@id': 'https://www.henn.house/#organization' },
        {
          '@type': 'Organization',
          '@id': 'https://www.therooferfinder.com/#organization',
          name: 'The Roofer Finder',
          url: 'https://www.therooferfinder.com/',
          description: 'A business project founded by Tyler Henn',
        },
        {
          '@type': 'Organization',
          '@id': 'https://www.willowandthread.shop/#organization',
          name: 'Willow & Thread',
          url: 'https://www.willowandthread.shop/',
          description: 'A former business project founded by Tyler Henn that is no longer operating',
        },
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Kennesaw State University',
        sameAs: 'https://www.kennesaw.edu/',
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Bachelor of Science in Interactive Design',
        recognizedBy: {
          '@type': 'CollegeOrUniversity',
          name: 'Kennesaw State University',
          sameAs: 'https://www.kennesaw.edu/',
        },
      },
      knowsAbout: [
        'Local SEO',
        'Google Business Profile optimization',
        'Google Maps SEO',
        'Search engine optimization',
        'AI search and recommendation systems',
        'Entity identity',
        'Knowledge graphs',
        'Website design',
        'User experience design',
        'Lead generation for local businesses',
      ],
      knowsLanguage: [
        { '@type': 'Language', name: 'English' },
        { '@type': 'Language', name: 'Portuguese' },
        { '@type': 'Language', name: 'Spanish' },
      ],
      sameAs: [
        'https://www.linkedin.com/in/tyler-henn',
        'https://www.instagram.com/tylerahenn/',
        'https://www.facebook.com/tyler.henn.568',
        'https://www.threads.com/@tylerahenn',
        'https://x.com/tylerahenn',
        'https://www.tylerhenn-ux.com/',
        'https://backlinkbuilding.io/author/tyler-henn/',
      ],
      subjectOf: [
        { '@id': HENNHOUSE_PODCAST_ID },
        { '@id': `${SITE_URL}/podcasts/#collection` },
        { '@id': `${SITE_URL}/media/#media` },
        { '@id': 'https://www.youtube.com/watch?v=WMMGD2pUDfw#video' },
        { '@id': 'https://www.youtube.com/watch?v=MkpXLNIM_SU#video' },
        { '@id': 'https://www.youtube.com/watch?v=briOZQxHDao#video' },
      ],
    },
    breadcrumb('/about/', 'About'),
  ],
}

export const ideasJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/ideas/#collection`,
      url: `${SITE_URL}/ideas/`,
      name: 'Ideas by Tyler Henn',
      description: 'Working ideas about search, AI discovery, entity identity, digital reputation, and machine recommendation.',
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${SITE_URL}/ideas/#breadcrumb` },
      author: { '@id': PERSON_ID },
      about: ['AI discovery', 'Search engines', 'Entity identity', 'Knowledge systems', 'Digital reputation'],
    },
    breadcrumb('/ideas/', 'Ideas'),
  ],
}

export const projectsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/projects/#collection`,
      url: `${SITE_URL}/projects/`,
      name: 'Projects by Tyler Henn',
      description: 'A connected body of work by Tyler Henn, including Hennhouse, The Hennhouse Podcast, and The Roofer Finder.',
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${SITE_URL}/projects/#breadcrumb` },
      author: { '@id': PERSON_ID },
      mainEntity: { '@id': `${SITE_URL}/projects/#project-list` },
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/projects/#project-list`,
      name: 'Projects founded or hosted by Tyler Henn',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: { '@type': 'Organization', '@id': 'https://www.henn.house/#organization', name: 'Hennhouse', url: 'https://www.henn.house/', founder: { '@id': PERSON_ID } },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: { '@type': 'PodcastSeries', '@id': HENNHOUSE_PODCAST_ID, name: 'The Hennhouse Podcast', url: 'https://www.henn.house/podcasts', creator: { '@id': PERSON_ID } },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: { '@type': 'Organization', '@id': 'https://www.therooferfinder.com/#organization', name: 'The Roofer Finder', url: 'https://www.therooferfinder.com/', founder: { '@id': PERSON_ID } },
        },
      ],
    },
    breadcrumb('/projects/', 'Projects'),
  ],
}

export const mediaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/media/#media`,
      url: `${SITE_URL}/media/`,
      name: 'Media and Appearances — Tyler Henn',
      description: 'Podcast appearances, videos, interviews, expert commentary, and community references involving Tyler Henn.',
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${SITE_URL}/media/#breadcrumb` },
      about: { '@id': PERSON_ID },
      hasPart: [
        { '@id': 'https://www.youtube.com/watch?v=WMMGD2pUDfw#video' },
        { '@id': 'https://www.youtube.com/watch?v=MkpXLNIM_SU#video' },
        { '@id': 'https://www.youtube.com/watch?v=briOZQxHDao#video' },
      ],
    },
    {
      '@type': 'VideoObject',
      '@id': 'https://www.youtube.com/watch?v=WMMGD2pUDfw#video',
      name: 'Como Foi Assistir à Copa do Mundo ao Vivo (Tyler Henn) #48',
      description: 'Tyler Henn joins Au Cast Show to discuss his experience attending FIFA World Cup matches in person.',
      thumbnailUrl: 'https://i.ytimg.com/vi/WMMGD2pUDfw/hqdefault.jpg',
      uploadDate: '2026-08-08T08:12:33-07:00',
      duration: 'PT48M',
      contentUrl: 'https://www.youtube.com/watch?v=WMMGD2pUDfw',
      embedUrl: 'https://www.youtube.com/embed/WMMGD2pUDfw',
      inLanguage: 'pt-BR',
      about: { '@id': PERSON_ID },
    },
    {
      '@type': 'VideoObject',
      '@id': 'https://www.youtube.com/watch?v=MkpXLNIM_SU#video',
      name: 'A Experiência do Meu Marido Gringo no Sertão — O Ponto de Vista Dele (Tyler Henn) #28',
      description: "Tyler Henn shares his perspective on visiting Brazil's sertão and experiencing the region firsthand.",
      thumbnailUrl: 'https://i.ytimg.com/vi/MkpXLNIM_SU/hqdefault.jpg',
      uploadDate: '2026-02-14T07:00:39-08:00',
      duration: 'PT1H45M',
      contentUrl: 'https://www.youtube.com/watch?v=MkpXLNIM_SU',
      embedUrl: 'https://www.youtube.com/embed/MkpXLNIM_SU',
      inLanguage: 'pt-BR',
      about: { '@id': PERSON_ID },
    },
    {
      '@type': 'VideoObject',
      '@id': 'https://www.youtube.com/watch?v=briOZQxHDao#video',
      name: 'Como eu Conheci o Meu Marido Americano (Tyler Henn) #22',
      description: 'A Portuguese-language conversation with Tyler Henn about how he and his wife met.',
      thumbnailUrl: 'https://i.ytimg.com/vi/briOZQxHDao/hqdefault.jpg',
      uploadDate: '2025-12-27T10:39:52-08:00',
      duration: 'PT3H7M',
      contentUrl: 'https://www.youtube.com/watch?v=briOZQxHDao',
      embedUrl: 'https://www.youtube.com/embed/briOZQxHDao',
      inLanguage: 'pt-BR',
      about: { '@id': PERSON_ID },
    },
    breadcrumb('/media/', 'Media'),
  ],
}

export function createPodcastsJsonLd(episodes) {
  const episodeNodes = episodes.map((episode) => {
    const episodeId = `${episode.link}#podcast-episode`
    return {
      '@type': 'PodcastEpisode',
      '@id': episodeId,
      url: episode.link,
      name: episode.title,
      description: episode.description,
      datePublished: episode.published,
      episodeNumber: episode.episodeNumber,
      partOfSeries: { '@id': HENNHOUSE_PODCAST_ID },
      creator: { '@id': PERSON_ID },
      associatedMedia: {
        '@type': 'VideoObject',
        '@id': `${episode.link}#video`,
        name: episode.title,
        description: episode.description,
        thumbnailUrl: episode.thumbnail,
        uploadDate: episode.published,
        contentUrl: episode.link,
        embedUrl: episode.embedUrl,
      },
    }
  })

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/podcasts/#collection`,
        url: `${SITE_URL}/podcasts/`,
        name: 'Podcasts hosted by Tyler Henn',
        description: 'Podcasts hosted by Tyler Henn, beginning with The Hennhouse Podcast and its conversations about search, AI, marketing, sales, systems, and business growth.',
        isPartOf: { '@id': WEBSITE_ID },
        breadcrumb: { '@id': `${SITE_URL}/podcasts/#breadcrumb` },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': HENNHOUSE_PODCAST_ID },
      },
      {
        '@type': 'PodcastSeries',
        '@id': HENNHOUSE_PODCAST_ID,
        name: 'The Hennhouse Podcast',
        description: 'The Hennhouse Podcast is hosted by Tyler Henn and features practical conversations about local SEO, websites, AI, offers, sales, and business growth.',
        url: 'https://www.henn.house/podcasts',
        webFeed: `${SITE_URL}/podcasts/rss.xml`,
        inLanguage: 'en-US',
        datePublished: '2026-06-28',
        publisher: { '@id': 'https://www.henn.house/#organization' },
        creator: { '@id': PERSON_ID },
        author: { '@id': PERSON_ID },
        sameAs: [
          'https://www.youtube.com/playlist?list=PLd1-kRyzUkyo',
          'https://podcasts.apple.com/us/podcast/the-hennhouse-podcast/id6785089632',
          'https://open.spotify.com/show/033FPB5MKg7Ba70Mgiv0Q9',
          'https://music.amazon.com/podcasts/f181c936-c641-40e8-b4b6-7827c7a11153/the-hennhouse-podcast',
          'https://www.iheart.com/podcast/269-the-hennhouse-podcast-339491003/',
          'https://www.deezer.com/us/show/1003431722',
        ],
        hasPart: episodeNodes.map((episode) => ({ '@id': episode['@id'] })),
      },
      ...episodeNodes,
      breadcrumb('/podcasts/', 'Podcasts'),
    ],
  }
}

export const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact/#contactpage`,
      url: `${SITE_URL}/contact/`,
      name: 'Contact Tyler Henn',
      description: 'Contact Tyler Henn for podcasts, interviews, speaking, research, and collaborations related to search and AI discovery.',
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${SITE_URL}/contact/#breadcrumb` },
      about: { '@id': PERSON_ID },
    },
    breadcrumb('/contact/', 'Contact'),
  ],
}
