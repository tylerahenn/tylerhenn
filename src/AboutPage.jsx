'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  Headphones,
  Languages,
  MapPin,
  PanelsTopLeft,
  Search,
} from 'lucide-react'
import CommandDeck from './components/CommandDeck.jsx'
import DesktopNav from './components/DesktopNav.jsx'
import { Cursor, LiveClock, ScrollProgress } from './App.jsx'
import { officialProfiles } from './data/mediaContent.js'

const milestones = [
  ['1998', 'Born in Naperville', 'Tyler was born August 1 in Naperville, Illinois.'],
  ['2003', 'Marietta becomes home', 'He moved to Marietta and grew up in Cobb County, Georgia.'],
  ['2020', 'Interactive Design, KSU', 'A B.S. in Interactive Design established the UI and UX foundation behind his work.'],
  ['2025', 'Hennhouse begins', 'Tyler founded Hennhouse in January as a design, search, and digital growth studio.'],
  ['2026', 'The conversation expands', 'The Hennhouse Podcast launched in June with practical conversations for founders and operators.'],
]

const expertise = [
  {
    number: '01',
    icon: Search,
    title: 'Entity identity & knowledge systems',
    text: 'Creating a coherent, machine-readable public identity across websites, profiles, structured data, citations, and authoritative sources.',
  },
  {
    number: '02',
    icon: PanelsTopLeft,
    title: 'AI discovery & recommendation',
    text: 'Studying how answer engines and agents synthesize evidence, choose sources, form confidence, and recommend people or companies.',
  },
  {
    number: '03',
    icon: MapPin,
    title: 'Local search as ground truth',
    text: 'Using maps, reviews, geography, and real-world business data as a proving ground for how digital systems understand entities.',
  },
  {
    number: '04',
    icon: BriefcaseBusiness,
    title: 'Human trust & decision design',
    text: 'Connecting what machines can verify with what people need to understand, trust, and act.',
  },
]

const connections = [
  {
    relation: 'FOUNDED',
    name: 'Hennhouse',
    note: 'Digital growth studio · Marietta, Georgia · January 2025',
    href: 'https://www.henn.house',
  },
  {
    relation: 'HOSTS',
    name: 'The Hennhouse Podcast',
    note: 'Marketing, sales, systems, AI, and sustainable business growth',
    href: 'https://www.henn.house/podcasts',
  },
  {
    relation: 'FOUNDED',
    name: 'The Roofer Finder',
    note: 'A nationwide directory connecting homeowners with roofing contractors',
    href: 'https://www.therooferfinder.com',
  },
  {
    relation: 'GRADUATED FROM',
    name: 'Kennesaw State University',
    note: 'B.S. Interactive Design · Class of 2020',
    href: 'https://www.kennesaw.edu',
  },
  {
    relation: 'PREVIOUSLY BUILT',
    name: 'Willow & Thread',
    note: 'Earlier founder project · No longer actively operated',
  },
]

export default function AboutPage() {
  const [deckOpen, setDeckOpen] = useState(false)
  const [overdrive, setOverdrive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting))
    }, { threshold: 0.1 })
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const keydown = (event) => {
      if (event.key === 'Escape') setDeckOpen(false)
      if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        event.preventDefault()
        setDeckOpen((value) => !value)
      }
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = deckOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [deckOpen])

  return (
    <div className={overdrive ? 'site about-site overdrive' : 'site about-site'}>
      <Cursor />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />

      <header className="topbar about-topbar">
        <Link href="/" className="mini-mark" data-cursor="active" aria-label="Tyler Henn home">
          <span>TH</span><i />
        </Link>
        <DesktopNav current="about" />
        <div className="topbar-meta">
          <span>ABOUT / TYLER HENN</span>
          <span className="desktop-only"><LiveClock /></span>
          <span className="desktop-only">MARIETTA, GA</span>
        </div>
        <button className="menu-trigger" onClick={() => setDeckOpen(true)} data-cursor="active">
          MENU <kbd>/</kbd>
        </button>
      </header>

      <main>
        <section className="about-hero" id="about-top">
          <div className="about-hero-grid" aria-hidden="true" />
          <Link href="/" className="about-back" data-cursor="active"><ArrowLeft /> BACK HOME</Link>
          <div className="about-hero-title">
            <span className="about-title-label">SEARCH / AI DISCOVERY / ENTITY STRATEGY</span>
            <h1><span>TYLER</span><span>HENN</span></h1>
          </div>
          <div className="about-hero-bottom">
            <p className="about-deck">Working on the future of how people and companies become the answer.</p>
            <p className="about-intro">Tyler studies how search engines, maps, AI answer systems, and emerging agents form confidence—and what makes an entity credible enough to surface, cite, and recommend.</p>
          </div>
          <div className="about-fact-rail" aria-label="Tyler Henn profile facts">
            <div><span>ROLE</span><strong>Founder & Lead SEO Strategist</strong></div>
            <div><span>BASED IN</span><strong>Marietta, Georgia</strong></div>
            <div><span>EDUCATION</span><strong>B.S. Interactive Design, KSU</strong></div>
            <div><span>EXPERIENCE</span><strong>7+ years in web & SEO</strong></div>
          </div>
        </section>

        <section className="about-story section-shell">
          <div className="section-index" data-reveal>
            <span>01</span><i /><span>THE THROUGH LINE</span>
          </div>
          <div className="about-story-lead" data-reveal>
            <p>DESIGN TAUGHT CLARITY.<br />SALES MADE IT PRACTICAL.</p>
            <h2>The work has changed.<br /><em>The problem hasn’t.</em></h2>
          </div>
          <div className="about-story-copy" data-reveal>
            <figure className="about-portrait">
              <img src="/tyler-henn-headshot.webp" alt="Tyler Henn, founder and lead SEO strategist at Hennhouse" width="800" height="1200" />
              <figcaption>TYLER HENN / PERSONAL PHOTO ARCHIVE</figcaption>
            </figure>
            <p className="about-large-copy">Before Hennhouse, Tyler’s work moved through interactive design, manufacturing, software consulting, and door-to-door roofing sales.</p>
            <div>
              <p>Each chapter exposed a different side of the same problem: a capable person or good business can still be hard to understand, difficult to trust, or invisible at exactly the moment someone needs it.</p>
              <p>That experience now informs a broader focus: what makes a real-world entity legible and credible to both machines and people as discovery moves beyond the traditional search box.</p>
            </div>
          </div>
        </section>

        <section className="about-timeline">
          <div className="section-shell">
            <div className="section-index light" data-reveal>
              <span>02</span><i /><span>ORIGIN / TIMELINE</span>
            </div>
            <h2 data-reveal>Naperville to<br /><em>Marietta—and outward.</em></h2>
          </div>
          <div className="timeline-list">
            {milestones.map(([year, title, text]) => (
              <article key={year} data-reveal>
                <span>{year}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-expertise section-shell">
          <div className="section-index" data-reveal>
            <span>03</span><i /><span>AREAS OF EXPERTISE</span>
          </div>
          <div className="about-section-heading" data-reveal>
            <p>THE DISCIPLINES</p>
            <h2>How machines decide what—and who—to <em>surface.</em></h2>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ number, icon: Icon, title, text }) => (
              <article key={number} data-reveal>
                <div><span>{number}</span><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-connections">
          <div className="section-shell">
            <div className="section-index light" data-reveal>
              <span>04</span><i /><span>CONNECTED ENTITIES</span>
            </div>
            <div className="connections-head" data-reveal>
              <h2>One person.<br /><em>A connected body of work.</em></h2>
              <p>These are the organizations, platforms, and projects directly connected to Tyler’s work.</p>
            </div>
          </div>
          <div className="connection-list">
            {connections.map((connection) => {
              const content = (
                <>
                  <span className="connection-relation">{connection.relation}</span>
                  <strong>{connection.name}</strong>
                  <span className="connection-note">{connection.note}</span>
                  {connection.href && <ArrowUpRight />}
                </>
              )
              return connection.href ? (
                <a key={connection.name} href={connection.href} target="_blank" rel="noreferrer" data-reveal data-cursor="active">{content}</a>
              ) : (
                <div key={connection.name} data-reveal>{content}</div>
              )
            })}
          </div>
        </section>

        <section className="about-personal section-shell">
          <div className="section-index" data-reveal>
            <span>05</span><i /><span>OUTSIDE THE SEARCH BOX</span>
          </div>
          <div className="personal-grid">
            <div data-reveal>
              <Languages />
              <h2>Between cultures,<br /><em>by choice.</em></h2>
            </div>
            <div className="personal-copy" data-reveal>
              <p>Tyler speaks Portuguese at a near-fluent conversational level and Spanish at an upper-intermediate level. Long-form guest appearances on Au Cast Show have explored travel, Brazil, and life between cultures in Portuguese.</p>
              <p>Outside work, the rotation includes playing pool, music, movies, soccer, and finding great food from different parts of the world.</p>
              <a href="https://www.henn.house/tyler-henn" target="_blank" rel="noreferrer" className="text-link" data-cursor="active">
                OFFICIAL HENNHOUSE PROFILE <ExternalLink />
              </a>
            </div>
          </div>
        </section>

        <section className="about-profiles">
          <div className="section-shell">
            <div className="section-index light" data-reveal>
              <span>06</span><i /><span>OFFICIAL PROFILES</span>
            </div>
            <div className="profiles-layout">
              <div data-reveal>
                <p>VERIFIED DESTINATIONS</p>
                <h2>Follow <em>Tyler.</em></h2>
              </div>
              <div className="profile-links" data-reveal>
                {officialProfiles.map((profile) => (
                  <a href={profile.href} target="_blank" rel="me noopener noreferrer" key={profile.name} data-cursor="active">
                    <span>{profile.name}</span><ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <div className="section-shell about-contact-inner">
            <div className="section-index light" data-reveal>
              <span>07</span><i /><span>PANELS / INTERVIEWS / RESEARCH</span>
            </div>
            <div className="about-contact-copy" data-reveal>
              <div>
                <Headphones />
                <span>OPEN TO THE RIGHT CONVERSATION</span>
              </div>
              <h2>Bring Tyler into a conversation about the <em>future of discovery.</em></h2>
            </div>
            <a href="mailto:hello@henn.house" className="about-email" data-reveal data-cursor="active">
              <span>hello@henn.house</span><ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-mark"><span>TH</span><i /></div>
        <p>© {new Date().getFullYear()} TYLER HENN<br />MARIETTA, GEORGIA.</p>
        <div className="footer-links">
          <Link href="/">HOME <ArrowUpRight /></Link>
          <Link href="/podcasts/">PODCASTS <ArrowUpRight /></Link>
          <a href="https://www.henn.house/media-kit" target="_blank" rel="noreferrer">MEDIA KIT <ExternalLink /></a>
          <a href="https://www.linkedin.com/in/tyler-henn" target="_blank" rel="noreferrer">LINKEDIN <ExternalLink /></a>
          <a href="https://x.com/tylerahenn" target="_blank" rel="noreferrer">X <ExternalLink /></a>
        </div>
        <a href="#about-top" className="back-top" data-cursor="active">BACK TO TOP <ArrowUpRight /></a>
      </footer>

      <CommandDeck
        open={deckOpen}
        onClose={() => setDeckOpen(false)}
        overdrive={overdrive}
        setOverdrive={setOverdrive}
      />
    </div>
  )
}
