import { hennhousePodcast } from '../../../src/data/podcastContent.js'
import { SITE_URL } from '../../../src/data/seo.js'

export const revalidate = 3600

export async function GET() {
  try {
    const source = await fetch(hennhousePodcast.sourceFeed, {
      next: { revalidate: 3600 },
      headers: { Accept: 'application/rss+xml, application/xml;q=0.9' },
    })

    if (!source.ok) throw new Error(`Podcast feed returned ${source.status}`)

    const canonicalFeed = `${SITE_URL}/podcasts/rss.xml`
    const xml = (await source.text()).replace(
      /<atom:link\s+href="[^"]+"\s+rel="self"\s+type="application\/rss\+xml"\s*\/>/,
      `<atom:link href="${canonicalFeed}" rel="self" type="application/rss+xml" />`,
    )

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch {
    return Response.redirect(hennhousePodcast.sourceFeed, 307)
  }
}
