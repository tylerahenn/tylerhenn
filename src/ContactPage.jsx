import { ArrowUpRight, FlaskConical, Headphones, MessagesSquare, Mic2 } from 'lucide-react'
import PageFrame from './components/PageFrame.jsx'

const conversationTypes = [
  {
    icon: Headphones,
    number: '01',
    title: 'Podcasts & interviews',
    text: 'Conversations about search beyond rankings, AI-mediated discovery, entity identity, local markets, and building in public.',
  },
  {
    icon: Mic2,
    number: '02',
    title: 'Panels & speaking',
    text: 'Forward-looking discussions for operators, marketers, founders, and teams trying to understand where discovery is going.',
  },
  {
    icon: FlaskConical,
    number: '03',
    title: 'Research & experiments',
    text: 'Interesting tests involving answer engines, knowledge systems, local search, reputation, retrieval, or recommendation.',
  },
  {
    icon: MessagesSquare,
    number: '04',
    title: 'Unexpected collaborations',
    text: 'If the problem is unusual, useful, and somewhere near the future of how people find things, it is worth a note.',
  },
]

export default function ContactPage() {
  return (
    <PageFrame current="contact" label="CONTACT">
      <section className="route-hero route-contact-hero">
        <div className="route-grid" aria-hidden="true" />
        <div className="section-index light">
          <span>06</span><i /><span>CONTACT / OPEN CHANNEL</span>
        </div>
        <h1><span>COMPARE</span><span><em>NOTES.</em></span></h1>
        <div className="route-hero-bottom">
          <p>For the conversations that do not fit neatly inside a contact-form dropdown.</p>
          <a href="mailto:hello@henn.house" data-cursor="active">hello@henn.house <ArrowUpRight /></a>
        </div>
      </section>

      <section className="contact-channels section-shell">
        <div className="section-index" data-reveal>
          <span>01</span><i /><span>GOOD REASONS TO WRITE</span>
        </div>
        <div className="contact-channels-head" data-reveal>
          <p>OPEN TO THE RIGHT CONVERSATION</p>
          <h2>What belongs in the <em>inbox.</em></h2>
        </div>
        <div className="contact-channel-grid">
          {conversationTypes.map(({ icon: Icon, number, title, text }) => (
            <article key={number} data-reveal>
              <div><span>{number}</span><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-direct">
        <div className="section-shell">
          <div className="section-index light" data-reveal>
            <span>02</span><i /><span>DIRECT LINE</span>
          </div>
          <p data-reveal>THE SIMPLEST ROUTE IS STILL THE BEST ONE.</p>
          <a href="mailto:hello@henn.house" data-reveal data-cursor="active">
            <span>hello@henn.house</span><ArrowUpRight />
          </a>
          <div className="contact-socials" data-reveal>
            <a href="https://www.linkedin.com/in/tyler-henn" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight /></a>
            <a href="https://x.com/tylerahenn" target="_blank" rel="noreferrer">X <ArrowUpRight /></a>
            <a href="https://www.henn.house" target="_blank" rel="noreferrer">HENNHOUSE <ArrowUpRight /></a>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
