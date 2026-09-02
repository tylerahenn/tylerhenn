import { XMLParser } from 'fast-xml-parser'
import { hennhousePodcast, podcastFallbackItems } from '../data/podcastContent.js'

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
  processEntities: true,
  trimValues: true,
})

function toArray(value) {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

function cleanDescription(value) {
  const text = typeof value === 'string' ? value : value?.['#text'] || ''
  return text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function episodeNumber(title) {
  const match = title.match(/(?:podcast\s*)?#(\d+)/i)
  return match ? Number(match[1]) : undefined
}

export async function getHennhousePodcastFeed() {
  try {
    const response = await fetch(hennhousePodcast.sourceFeed, {
      next: { revalidate: 3600 },
      headers: { Accept: 'application/rss+xml, application/xml;q=0.9' },
    })

    if (!response.ok) throw new Error(`Podcast feed returned ${response.status}`)

    const xml = await response.text()
    const parsed = parser.parse(xml)
    const channel = parsed?.rss?.channel
    if (!channel) throw new Error('Podcast feed did not contain an RSS channel')

    const items = toArray(channel.item).map((item) => {
      const link = item.link || item.guid?.['#text'] || item.guid || ''
      const title = item.title || 'Untitled episode'
      return {
        title,
        link,
        published: new Date(item.pubDate).toISOString(),
        description: cleanDescription(item.description),
        thumbnail: item['media:thumbnail']?.url || '',
        embedUrl: item['media:content']?.url || '',
        kind: link.includes('/shorts/') ? 'CLIP' : 'EPISODE',
        episodeNumber: episodeNumber(title),
      }
    })

    return {
      title: channel.title || hennhousePodcast.name,
      description: cleanDescription(channel.description) || hennhousePodcast.description,
      lastBuildDate: channel.lastBuildDate || null,
      items,
    }
  } catch {
    return {
      title: hennhousePodcast.name,
      description: hennhousePodcast.description,
      lastBuildDate: null,
      items: podcastFallbackItems,
    }
  }
}
