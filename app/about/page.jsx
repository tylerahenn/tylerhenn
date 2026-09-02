import AboutPage from '../../src/AboutPage.jsx'
import JsonLd from '../../src/components/JsonLd.jsx'
import { aboutJsonLd, createPageMetadata } from '../../src/data/seo.js'

export const metadata = createPageMetadata({
  title: 'About Tyler Henn — Search, AI Discovery & Entity Strategy',
  description: 'Meet Tyler Henn, founder of Hennhouse and a strategist focused on how search engines, maps, AI systems, and emerging agents understand and recommend people and companies.',
  path: '/about/',
  type: 'profile',
})

export default function About() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutPage />
    </>
  )
}
