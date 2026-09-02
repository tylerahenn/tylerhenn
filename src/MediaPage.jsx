import { ArrowUpRight, ExternalLink, Play } from 'lucide-react'
import PageFrame from './components/PageFrame.jsx'
import {
  communityReferences,
  podcastFeedback,
  portugueseAppearances,
  pressFeatures,
} from './data/mediaContent.js'

export default function MediaPage() {
  return (
    <PageFrame current="media" label="MEDIA">
      <section className="route-hero route-media-hero">
        <div className="route-grid" aria-hidden="true" />
        <div className="section-index light">
          <span>05</span><i /><span>MEDIA / PUBLIC RECORD</span>
        </div>
        <h1><span>RECORDED</span><span><em>ELSEWHERE.</em></span></h1>
        <div className="route-hero-bottom">
          <p>Conversations, citations, and community work that exist beyond Tyler’s own websites.</p>
          <p>A living archive of guest appearances, expert commentary, host feedback, and local participation.</p>
        </div>
      </section>

      <section className="media-appearances section-shell">
        <div className="section-index" data-reveal>
          <span>01</span><i /><span>RELEASED APPEARANCES</span>
        </div>
        <div className="media-heading" data-reveal>
          <p>LONG-FORM / PORTUGUESE</p>
          <h2>Three conversations with <em>Au Cast Show.</em></h2>
        </div>
        <div className="appearance-grid">
          {portugueseAppearances.map((appearance) => (
            <a href={appearance.href} target="_blank" rel="noreferrer" className="appearance-card" key={appearance.href} data-reveal data-cursor="active">
              <div className="appearance-image">
                <img src={appearance.thumbnail} alt={`YouTube thumbnail for ${appearance.title}`} loading="lazy" />
                <span><Play fill="currentColor" /> WATCH</span>
              </div>
              <div className="appearance-meta">
                <span>{appearance.show}</span>
                <span>{appearance.date}</span>
              </div>
              <h3>{appearance.title}</h3>
              <p className="appearance-translation">{appearance.englishTitle}</p>
              <p>{appearance.description}</p>
              <div className="appearance-footer">
                <span>{appearance.language} / {appearance.runtime}</span>
                <ArrowUpRight />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="media-feedback">
        <div className="section-shell">
          <div className="section-index light" data-reveal>
            <span>02</span><i /><span>HOST FEEDBACK</span>
          </div>
          <div className="media-heading" data-reveal>
            <p>AFTER THE RECORDING</p>
            <h2>Useful enough to invite <em>back.</em></h2>
          </div>
        </div>
        <div className="feedback-list">
          {podcastFeedback.map((item, index) => (
            <article key={item.show} data-reveal>
              <span className="feedback-number">0{index + 1}</span>
              <div>
                <span className="feedback-status">{item.status}</span>
                <blockquote>“{item.quote}”</blockquote>
              </div>
              <a href={item.href} target="_blank" rel="noreferrer" data-cursor="active">
                <span>{item.show}</span>
                <small>HOST PROFILE / PODMATCH</small>
                <ExternalLink />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="media-press section-shell">
        <div className="section-index" data-reveal>
          <span>03</span><i /><span>PRESS / EXPERT COMMENTARY</span>
        </div>
        <div className="media-heading" data-reveal>
          <p>REFERENCED BY OTHERS</p>
          <h2>Interviews, contributions, and <em>citations.</em></h2>
        </div>
        <div className="press-list">
          {pressFeatures.map((feature, index) => (
            <a href={feature.href} target="_blank" rel="noreferrer" key={feature.href} data-reveal data-cursor="active">
              <span>0{index + 1}</span>
              <small>{feature.publisher}</small>
              <strong>{feature.title}</strong>
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>

      <section className="media-community">
        <div className="section-shell">
          <div className="section-index light" data-reveal>
            <span>04</span><i /><span>COMMUNITY / LOCAL PROOF</span>
          </div>
          <div className="media-heading" data-reveal>
            <p>THROUGH HENNHOUSE</p>
            <h2>Showing up in the <em>real world.</em></h2>
          </div>
          <p className="community-intro" data-reveal>Tyler uses Hennhouse sponsorships, memberships, and local events to support organizations serving families, neurodiverse adults, recovery programs, and the surrounding community.</p>
        </div>
        <div className="community-list">
          {communityReferences.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.href} data-reveal data-cursor="active">
              <span>{item.date}</span>
              <strong>{item.title}</strong>
              <small>{item.relation}</small>
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
