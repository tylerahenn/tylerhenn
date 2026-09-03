import '../src/styles.css'
import { SITE_URL } from '../src/data/seo.js'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Tyler Henn',
  authors: [{ name: 'Tyler Henn', url: 'https://www.henn.house/tyler-henn' }],
  creator: 'Tyler Henn',
  publisher: 'Tyler Henn',
  category: 'Search and AI discovery',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: { icon: '/favicon.svg' },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090909',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <noscript><style>{'[data-reveal]{opacity:1!important;transform:none!important}[data-boot-screen]{display:none!important}'}</style></noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
