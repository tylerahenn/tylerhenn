import Link from 'next/link'

const routes = [
  ['00', 'Home', '/', 'home'],
  ['01', 'About', '/about/', 'about'],
  ['02', 'Ideas', '/ideas/', 'ideas'],
  ['03', 'Projects', '/projects/', 'projects'],
  ['04', 'Podcasts', '/podcasts/', 'podcasts'],
  ['05', 'Media', '/media/', 'media'],
  ['06', 'Contact', '/contact/', 'contact'],
]

export default function DesktopNav({ current }) {
  return (
    <nav className="desktop-nav" aria-label="Primary navigation">
      {routes.map(([number, label, href, id]) => (
        <Link
          key={id}
          href={href}
          className={current === id ? 'is-current' : undefined}
          aria-current={current === id ? 'page' : undefined}
          data-cursor="active"
        >
          <small>{number}</small>
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  )
}
