import { ArrowDownRight, Command, ExternalLink, X } from 'lucide-react'
import Link from 'next/link'

const routes = [
  ['00', 'Home', '/'],
  ['01', 'About', '/about/'],
  ['02', 'Ideas', '/ideas/'],
  ['03', 'Projects', '/projects/'],
  ['04', 'Podcasts', '/podcasts/'],
  ['05', 'Media', '/media/'],
  ['06', 'Contact', '/contact/'],
]

export default function CommandDeck({ open, onClose, overdrive, setOverdrive }) {
  if (!open) return null

  return (
    <div className="command-backdrop" role="dialog" aria-modal="true" aria-label="Navigation command deck">
      <div className="command-deck">
        <div className="command-head">
          <span><Command size={16} /> HENN / COMMAND DECK</span>
          <button className="icon-button" onClick={onClose} aria-label="Close command deck" data-cursor="active">
            <X size={20} />
          </button>
        </div>
        <div className="command-grid">
          <div className="command-routes">
            {routes.map(([number, label, href]) => (
              <Link key={href} href={href} onClick={onClose} data-cursor="active">
                <span>{number}</span>
                <strong>{label}</strong>
                <ArrowDownRight />
              </Link>
            ))}
          </div>
          <aside className="command-aside">
            <div>
              <span className="micro-label">VISUAL OUTPUT</span>
              <button
                className={`overdrive-toggle ${overdrive ? 'active' : ''}`}
                onClick={() => setOverdrive(!overdrive)}
                aria-pressed={overdrive}
                data-cursor="active"
              >
                <span>{overdrive ? 'OVERDRIVE' : 'STANDARD'}</span>
                <i />
              </button>
            </div>
            <div>
              <span className="micro-label">ELSEWHERE</span>
              <a href="https://www.henn.house" target="_blank" rel="noreferrer">Hennhouse <ExternalLink size={14} /></a>
              <Link href="/podcasts/">Podcasts</Link>
              <a href="https://www.linkedin.com/in/tyler-henn" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a>
            </div>
            <p>Press <kbd>ESC</kbd> to close the deck.</p>
          </aside>
        </div>
      </div>
    </div>
  )
}
