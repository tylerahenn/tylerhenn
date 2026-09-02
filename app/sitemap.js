import { SITE_URL } from '../src/data/seo.js'

const updated = new Date('2026-09-02T00:00:00-04:00')

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: updated, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about/`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/ideas/`, lastModified: updated, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/projects/`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/podcasts/`, lastModified: updated, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/media/`, lastModified: updated, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/contact/`, lastModified: updated, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
