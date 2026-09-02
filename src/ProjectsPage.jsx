import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import PageFrame from './components/PageFrame.jsx'
import { projects } from './data/siteContent.js'

export default function ProjectsPage() {
  return (
    <PageFrame current="projects" label="PROJECTS">
      <section className="route-hero route-projects-hero">
        <div className="route-grid" aria-hidden="true" />
        <div className="section-index light">
          <span>03</span><i /><span>PROJECTS / PROOF OF PRACTICE</span>
        </div>
        <h1><span>WORKING</span><span>IN <em>PUBLIC.</em></span></h1>
        <div className="route-hero-bottom">
          <p>Ideas get more useful when they meet real constraints, real markets, and real people.</p>
          <p>These projects are where Tyler tests what he believes about discovery, reputation, experience, and growth.</p>
        </div>
      </section>

      <section className="route-statement section-shell">
        <div className="section-index" data-reveal>
          <span>01</span><i /><span>THE STANDARD</span>
        </div>
        <div className="route-statement-grid" data-reveal>
          <p>BUILD TO LEARN</p>
          <h2>Not a portfolio of finished answers. A connected body of work asking better questions.</h2>
          <p>Each project occupies a different layer of discovery—from helping local companies become legible to creating media and marketplaces people can navigate.</p>
        </div>
      </section>

      <section className="projects-page-list">
        <div className="project-list">
          {projects.map((project) => {
            const internal = project.href.startsWith('/')
            const ProjectLink = internal ? Link : 'a'
            return (
              <ProjectLink
                key={project.title}
                href={project.href}
                {...(!internal ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={`project-card project-card-expanded ${project.color}`}
                data-reveal
                data-cursor="active"
              >
                <span className="project-index">{project.index}</span>
                <div className="project-main">
                  <span className="project-eyebrow">{project.eyebrow}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-question">
                    <span>QUESTION BEING TESTED</span>
                    <strong>{project.question}</strong>
                  </div>
                </div>
                <span className="project-stamp">{project.stamp}</span>
                <div className="project-arrow"><ArrowUpRight /></div>
              </ProjectLink>
            )
          })}
        </div>
      </section>

      <section className="project-method section-shell">
        <div className="section-index" data-reveal>
          <span>02</span><i /><span>HOW THE WORK CONNECTS</span>
        </div>
        <div className="project-method-grid">
          {[
            ['OBSERVE', 'Watch how discovery actually behaves instead of relying on inherited assumptions.'],
            ['BUILD', 'Put the idea into a system where users, markets, and constraints can push back.'],
            ['PUBLISH', 'Share the useful parts so the work can be challenged, refined, and extended.'],
          ].map(([title, text], index) => (
            <article key={title} data-reveal>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
