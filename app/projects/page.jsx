import ProjectsPage from '../../src/ProjectsPage.jsx'
import JsonLd from '../../src/components/JsonLd.jsx'
import { createPageMetadata, projectsJsonLd } from '../../src/data/seo.js'

export const metadata = createPageMetadata({
  title: 'Projects | Tyler Henn',
  description: "Explore Tyler Henn's connected projects: Hennhouse, The Hennhouse Podcast, and The Roofer Finder.",
  path: '/projects/',
})

export default function Projects() {
  return (
    <>
      <JsonLd data={projectsJsonLd} />
      <ProjectsPage />
    </>
  )
}
