import PodcastsPage from '../../src/PodcastsPage.jsx'
import JsonLd from '../../src/components/JsonLd.jsx'
import { getHennhousePodcastFeed } from '../../src/lib/podcastFeed.js'
import { createPageMetadata, createPodcastsJsonLd, SITE_URL } from '../../src/data/seo.js'

export const revalidate = 3600

const pageMetadata = createPageMetadata({
  title: 'Podcasts Hosted by Tyler Henn',
  description: 'Podcasts hosted by Tyler Henn, beginning with The Hennhouse Podcast: long-form conversations about search, AI, marketing, sales, systems, and durable business growth.',
  path: '/podcasts/',
  card: 'summary_large_image',
})

export const metadata = {
  ...pageMetadata,
  alternates: {
    ...pageMetadata.alternates,
    types: { 'application/rss+xml': `${SITE_URL}/podcasts/rss.xml` },
  },
}

export default async function Podcasts() {
  const feed = await getHennhousePodcastFeed()
  const fullEpisodes = feed.items.filter((item) => item.kind === 'EPISODE').slice(0, 12)

  return (
    <>
      <JsonLd data={createPodcastsJsonLd(fullEpisodes)} />
      <PodcastsPage feed={feed} />
    </>
  )
}
