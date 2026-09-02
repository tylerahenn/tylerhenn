import IdeasPage from '../../src/IdeasPage.jsx'
import JsonLd from '../../src/components/JsonLd.jsx'
import { createPageMetadata, ideasJsonLd } from '../../src/data/seo.js'

export const metadata = createPageMetadata({
  title: 'Ideas | Tyler Henn on Search and AI Discovery',
  description: "Tyler Henn's working ideas on AI discovery, answer engines, entity identity, digital reputation, and how people and companies will be found and recommended.",
  path: '/ideas/',
})

export default function Ideas() {
  return (
    <>
      <JsonLd data={ideasJsonLd} />
      <IdeasPage />
    </>
  )
}
