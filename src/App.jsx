'use client'

import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Command,
  ExternalLink,
  MapPin,
  MoveDownRight,
  Radio,
  Sparkles,
} from 'lucide-react'
import CommandDeck from './components/CommandDeck.jsx'
import DesktopNav from './components/DesktopNav.jsx'
import { activeTheses, discoveryTopics, projects } from './data/siteContent.js'

const DiscoveryShape = lazy(() => import('./components/DiscoveryShape.jsx'))

function MagneticLink({ href, children, className = '', external = false }) {
  const ref = useRef(null)
  const Component = !external && href.startsWith('/') ? Link : 'a'
  const handleMove = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.14}px, ${y * 0.14}px)`
  }
  const reset = () => {
    ref.current.style.transform = 'translate(0, 0)'
  }
  return (
    <Component
      ref={ref}
      href={href}
      className={`magnetic ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      data-cursor="active"
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </Component>
  )
}

export function LiveClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    }).format(new Date()))
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])
  return <span>{time} EST</span>
}

export function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let frame
    const move = (event) => {
      x = event.clientX
      y = event.clientY
      dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      const active = event.target.closest('[data-cursor]')
      ring.current.classList.toggle('is-active', Boolean(active))
    }
    const tick = () => {
      rx += (x - rx) * 0.14
      ry += (y - ry) * 0.14
      ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      frame = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', move)
    tick()
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(frame)
    }
  }, [])
  return <><div ref={dot} className="cursor-dot" /><div ref={ring} className="cursor-ring" /></>
}

export function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div ref={bar} className="scroll-progress" />
}

function App() {
  const [deckOpen, setDeckOpen] = useState(false)
  const [overdrive, setOverdrive] = useState(false)

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting))
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    const keydown = (event) => {
      if (event.key === 'Escape') setDeckOpen(false)
      if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
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
    <div className={overdrive ? 'site overdrive' : 'site'}>
      <Cursor />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <a href="#top" className="mini-mark" data-cursor="active" aria-label="Tyler Henn, back to top">
          <span>TH</span><i />
        </a>
        <DesktopNav current="home" />
        <div className="topbar-meta">
          <span className="desktop-only"><LiveClock /></span>
          <span className="desktop-only">MARIETTA, GA</span>
        </div>
        <button className="menu-trigger" onClick={() => setDeckOpen(true)} data-cursor="active">
          MENU <kbd>/</kbd>
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-kicker">
            <span>SEARCH / AI DISCOVERY / ENTITY STRATEGY</span>
            <span>FOUNDER, HENNHOUSE</span>
          </div>
          <div className="hero-title" aria-label="Tyler Henn">
            <span className="hero-title-top">TYLER</span>
            <span className="hero-title-bottom">HENN</span>
          </div>

          <div className="seed-wrap">
            <div className="seed-halo" />
            <Suspense fallback={<div className="discovery-shape suspense-shape"><div className="shape-fallback" /></div>}>
              <DiscoveryShape />
            </Suspense>
          </div>

          <div className="hero-bottom">
            <p>
              I study how people and companies become known, trusted, and recommended
              <strong> across search, AI, and whatever comes next.</strong>
            </p>
            <MagneticLink href="#profile" className="round-cta" aria-label="Scroll to profile">
              <ArrowDown />
            </MagneticLink>
          </div>
          <button className="edge-command" onClick={() => setDeckOpen(true)} data-cursor="active">
            <Command size={15} /> OPEN COMMAND DECK
          </button>
          <div className="vertical-note">SEARCH / AI / ENTITIES / REPUTATION</div>
        </section>

        <div className="velocity-strip" aria-label="Areas of inquiry">
          <div className="velocity-track">
            {[0, 1].map((copy) => (
              <div className="velocity-group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
                {discoveryTopics.map((topic) => (
                  <span className="velocity-item" key={`${copy}-${topic}`}>
                    <span>{topic}</span><Asterisk />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="profile section-shell" id="profile">
          <div className="section-index" data-reveal>
            <span>01</span><i /><span>PROFILE / ORIGIN</span>
          </div>
          <div className="profile-lead" data-reveal>
            <p className="profile-aside">SEARCH SYSTEMS.<br />AI DISCOVERY.<br />ENTITY REPUTATION.</p>
            <h2 className="profile-mantra">
              <span>Being found is <em>changing.</em></span>
              <span>Becoming the <strong>answer</strong> is the work.</span>
            </h2>
          </div>
          <div className="profile-grid">
            <div className="profile-copy" data-reveal>
              <p className="dropcap">Tyler’s path runs through interactive design, UX, software consulting, manufacturing, and door-to-door roofing sales.</p>
              <p>That mix now feeds a larger question: how do search engines, maps, AI answer systems, and emerging agents decide which people and companies are credible enough to surface, cite, and recommend?</p>
              <MagneticLink href="/about/" className="text-link">
                ABOUT TYLER <ArrowUpRight />
              </MagneticLink>
            </div>
            <div className="facts-stack" data-reveal>
              <div className="fact fact-acid">
                <span>01 / HOME BASE</span>
                <strong>Marietta,<br />Georgia</strong>
                <MapPin />
              </div>
              <div className="fact fact-coral">
                <span>02 / FORMATION</span>
                <strong>B.S. Interactive<br />Design, KSU</strong>
                <Sparkles />
              </div>
              <div className="fact fact-violet">
                <span>03 / EXPERIENCE</span>
                <strong>7+ years in<br />web + search</strong>
                <Radio />
              </div>
            </div>
          </div>
        </section>

        <section className="system section-shell">
          <div className="section-index" data-reveal>
            <span>02</span><i /><span>A THEORY OF DISCOVERY</span>
          </div>
          <div className="system-intro" data-reveal>
            <h2>The future of being found<br />is <em>not a blue link.</em></h2>
            <p>Discovery is becoming synthesized. Machines assemble facts, reputation, context, and evidence before a person ever reaches a website.</p>
          </div>
          <div className="system-steps">
            {[
              ['01', 'BE LEGIBLE', 'Give systems clear, structured facts about who or what an entity is.'],
              ['02', 'BE CORROBORATED', 'Build independent evidence that confirms the story instead of merely repeating it.'],
              ['03', 'BE USEFUL', 'Publish original knowledge and experience worth retrieving, citing, and learning from.'],
              ['04', 'BE RECOMMENDABLE', 'Earn the trust and evidence that make a person or company a defensible answer.'],
            ].map(([number, title, text]) => (
              <article key={number} data-reveal data-cursor="active">
                <span>{number}</span>
                <div className="step-symbol"><i /><b /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <MoveDownRight />
              </article>
            ))}
          </div>
        </section>

        <section className="ideas" id="ideas">
          <div className="section-shell">
            <div className="section-index light" data-reveal>
              <span>03</span><i /><span>FIELD NOTES / ACTIVE THESES</span>
            </div>
            <div className="ideas-head" data-reveal>
              <p>THREE SHIFTS I THINK MATTER NOW</p>
              <h2>The next search result may never look like <em>a result.</em></h2>
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
          <div className="section-shell section-more" data-reveal>
            <MagneticLink href="/ideas/" className="text-link">
              EXPLORE THE IDEAS <ArrowUpRight />
            </MagneticLink>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="projects-head section-shell" data-reveal>
            <div className="section-index">
              <span>04</span><i /><span>PROJECTS / PROOF OF PRACTICE</span>
            </div>
            <h2>Things I’m<br /><em>building.</em></h2>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const internal = project.href.startsWith('/')
              const ProjectLink = internal ? Link : 'a'
              return (
                <ProjectLink
                  key={project.title}
                  href={project.href}
                  {...(!internal ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className={`project-card ${project.color}`}
                  data-reveal
                  data-cursor="active"
                >
                  <span className="project-index">{project.index}</span>
                  <div className="project-main">
                    <span className="project-eyebrow">{project.eyebrow}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-stamp">{project.stamp}</span>
                  <div className="project-arrow"><ArrowUpRight /></div>
                </ProjectLink>
              )
            })}
          </div>
          <div className="section-shell section-more" data-reveal>
            <MagneticLink href="/projects/" className="text-link">
              VIEW ALL PROJECTS <ArrowUpRight />
            </MagneticLink>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-noise" />
          <div className="section-shell contact-inner">
            <div className="section-index light" data-reveal>
              <span>05</span><i /><span>OPEN CHANNEL</span>
            </div>
            <div className="contact-copy" data-reveal>
              <span className="micro-label">PODCASTS / PANELS / RESEARCH / COLLABORATION</span>
              <h2>Let’s compare notes<br />on <em>what comes next.</em></h2>
            </div>
            <div className="contact-action" data-reveal>
              <MagneticLink href="mailto:hello@henn.house" className="contact-button">
                <span>
                  <small>TRANSMIT TO</small>
                  hello@henn.house
                </span>
                <ArrowUpRight />
              </MagneticLink>
              <p>Based in Marietta. Working wherever the problem is interesting.</p>
            </div>
          </div>
          <div className="contact-word" aria-hidden="true">BE THE ANSWER</div>
        </section>
      </main>

      <footer>
        <div className="footer-mark"><span>TH</span><i /></div>
        <p>© {new Date().getFullYear()} TYLER HENN<br />BUILT FOR THE CURIOUS.</p>
        <div className="footer-links">
          <Link href="/about/">ABOUT <ArrowUpRight /></Link>
          <Link href="/podcasts/">PODCASTS <ArrowUpRight /></Link>
          <a href="https://www.henn.house" target="_blank" rel="noreferrer">HENNHOUSE <ExternalLink /></a>
          <a href="https://www.linkedin.com/in/tyler-henn" target="_blank" rel="noreferrer">LINKEDIN <ExternalLink /></a>
          <a href="https://x.com/tylerahenn" target="_blank" rel="noreferrer">X <ExternalLink /></a>
        </div>
        <a href="#top" className="back-top" data-cursor="active">BACK TO ZERO <ArrowDown /></a>
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

export default App
