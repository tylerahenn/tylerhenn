import App from '../src/App.jsx'
import JsonLd from '../src/components/JsonLd.jsx'
import { createPageMetadata, homeJsonLd } from '../src/data/seo.js'

export const metadata = createPageMetadata({
  title: 'Tyler Henn — Search, AI Discovery & Entity Strategy',
  description: 'Tyler Henn explores how people and companies become known, trusted, cited, and recommended across search engines, maps, AI systems, and whatever comes next.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <App />
    </>
  )
}
