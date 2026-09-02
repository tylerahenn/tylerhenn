import ContactPage from '../../src/ContactPage.jsx'
import JsonLd from '../../src/components/JsonLd.jsx'
import { contactJsonLd, createPageMetadata } from '../../src/data/seo.js'

export const metadata = createPageMetadata({
  title: 'Contact Tyler Henn',
  description: 'Contact Tyler Henn for podcasts, interviews, speaking, research, and collaborations related to search and AI discovery.',
  path: '/contact/',
})

export default function Contact() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <ContactPage />
    </>
  )
}
