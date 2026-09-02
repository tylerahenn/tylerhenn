import MediaPage from '../../src/MediaPage.jsx'
import JsonLd from '../../src/components/JsonLd.jsx'
import { createPageMetadata, mediaJsonLd } from '../../src/data/seo.js'

export const metadata = createPageMetadata({
  title: 'Media and Appearances | Tyler Henn',
  description: "Tyler Henn's media archive: podcast appearances, Portuguese-language videos, interviews, expert commentary, host feedback, and community involvement.",
  path: '/media/',
  card: 'summary_large_image',
})

export default function Media() {
  return (
    <>
      <JsonLd data={mediaJsonLd} />
      <MediaPage />
    </>
  )
}
