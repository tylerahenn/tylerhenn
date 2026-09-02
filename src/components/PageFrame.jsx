'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, ExternalLink } from 'lucide-react'
import CommandDeck from './CommandDeck.jsx'
import DesktopNav from './DesktopNav.jsx'
import { Cursor, LiveClock, ScrollProgress } from '../App.jsx'

export default function PageFrame({ current, label, children }) {
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
    <div id="page-top" className={overdrive ? 'site subpage-site overdrive' : 'site subpage-site'}>
      <Cursor />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <Link href="/" className="mini-mark" data-cursor="active" aria-label="Tyler Henn home">
          <span>TH</span><i />
        </Link>
        <DesktopNav current={current} />
        <div className="topbar-meta">
          <span>{label}</span>
          <span className="desktop-only"><LiveClock /></span>
          <span className="desktop-only">MARIETTA, GA</span>
        </div>
        <button className="menu-trigger" onClick={() => setDeckOpen(true)} data-cursor="active">
          MENU <kbd>/</kbd>
        </button>
      </header>

      <main>{children}</main>

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
        <a href="#page-top" className="back-top" data-cursor="active">BACK TO TOP <ArrowDown /></a>
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
