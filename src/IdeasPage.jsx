import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import PageFrame from './components/PageFrame.jsx'
import { activeTheses } from './data/siteContent.js'

const discoveryLayers = [
  ['01', 'SOURCE REALITY', 'What is demonstrably true in the world: people, places, work, products, outcomes, and relationships.'],
  ['02', 'ENTITY CLARITY', 'Whether systems can resolve those facts into one distinct person or company instead of a pile of disconnected pages.'],
  ['03', 'CORROBORATION', 'What independent sources confirm, cite, review, discuss, or associate with that entity.'],
  ['04', 'HUMAN VALUE', 'The original experience, evidence, perspective, and usefulness that make the entity worth finding.'],
  ['05', 'MACHINE SELECTION', 'How a particular engine or agent retrieves, weighs, and presents that evidence for a specific need.'],
]

export default function IdeasPage() {
  return (
    <PageFrame current="ideas" label="IDEAS">
      <section className="route-hero route-ideas-hero">
        <div className="route-grid" aria-hidden="true" />
        <div className="section-index light">
          <span>02</span><i /><span>IDEAS / WORKING IN PUBLIC</span>
        </div>
        <h1><span>THE SEARCH</span><span>AFTER <em>SEARCH.</em></span></h1>
        <div className="route-hero-bottom">
          <p>Search is becoming an answer layer, a recommendation system, and eventually an agent that acts.</p>
          <p>This is where Tyler develops a point of view on what that shift means for people, companies, and the public record around them.</p>
        </div>
      </section>

      <section className="route-statement section-shell">
        <div className="section-index" data-reveal>
          <span>01</span><i /><span>THE PREMISE</span>
        </div>
        <div className="route-statement-grid" data-reveal>
          <p>THE QUESTION UNDERNEATH THE WORK</p>
          <h2>How do you become the answer when discovery no longer begins—or ends—with a list of links?</h2>
          <p>There will not be one trick. Durable visibility will come from being clearly understood, independently corroborated, genuinely useful, and safe to recommend.</p>
        </div>
      </section>

      <section className="ideas route-ideas-list">
        <div className="section-shell">
          <div className="section-index light" data-reveal>
            <span>02</span><i /><span>ACTIVE THESES</span>
          </div>
          <div className="ideas-head" data-reveal>
            <p>A POINT OF VIEW, OPEN TO REVISION</p>
            <h2>Three shifts that matter <em>right now.</em></h2>
          </div>
        </div>
        <div className="idea-list">
          {activeTheses.map(({ number, label, title, text }) => (
            <article className="idea-card" key={number} data-reveal>
              <span className="idea-number">{number}</span>
              <div className="idea-thesis">
                <span>{label}</span>
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="discovery-layers section-shell">
        <div className="section-index" data-reveal>
          <span>03</span><i /><span>A MODEL FOR DISCOVERY</span>
        </div>
        <div className="layers-head" data-reveal>
          <p>A USEFUL MODEL. NOT A MAGIC CHECKLIST.</p>
          <h2>Five layers between existing and being <em>selected.</em></h2>
        </div>
        <div className="layers-list">
          {discoveryLayers.map(([number, title, text]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link href="/contact/" className="route-next" data-reveal data-cursor="active">
          <span>HAVE A DIFFERENT READ?</span>
          <strong>Compare notes <ArrowUpRight /></strong>
        </Link>
      </section>
    </PageFrame>
  )
}
