import {
  ArrowUpRight,
  ExternalLink,
  Headphones,
  Mic2,
  Play,
  Rss,
} from 'lucide-react'
import PageFrame from './components/PageFrame.jsx'
import { hennhousePodcast } from './data/podcastContent.js'

const wave = [34, 68, 47, 86, 58, 95, 43, 76, 54, 88, 39, 71, 92, 51, 82, 45, 64, 97, 57, 78, 36, 69, 49, 89]

function excerpt(text, max = 310) {
  if (text.length <= max) return text
  const breakAt = text.lastIndexOf(' ', max)
  return `${text.slice(0, breakAt > 0 ? breakAt : max)}…`
}

function displayDate(value) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value)).toUpperCase()
}

export default function PodcastsPage({ feed }) {
  const episodes = feed.items.filter((item) => item.kind === 'EPISODE').slice(0, 4)
  const clips = feed.items.filter((item) => item.kind === 'CLIP').slice(0, 4)

  return (
    <PageFrame current="podcasts" label="PODCASTS">
      <section className="route-hero route-podcasts-hero">
        <div className="route-grid" aria-hidden="true" />
        <div className="section-index light">
          <span>04</span><i /><span>PODCASTS / OWNED CONVERSATIONS</span>
        </div>
        <h1><span>BETTER</span><span><em>QUESTIONS.</em></span></h1>
        <div className="route-hero-bottom">
          <p>The microphone is not a content machine. It is a reason to stay with an idea long enough to find the useful part.</p>
          <a href={hennhousePodcast.localFeed} data-cursor="active">
            <span>FOLLOW THE RSS FEED</span><Rss />
          </a>
        </div>
      </section>

      <section className="podcast-network section-shell">
        <div className="section-index" data-reveal>
          <span>01</span><i /><span>SHOW 01 / ACTIVE</span>
        </div>
        <div className="podcast-network-heading" data-reveal>
          <p>THE CURRENT FREQUENCY</p>
          <h2>One show now.<br /><em>Room for what comes next.</em></h2>
        </div>

        <article className="podcast-show-card" data-reveal>
          <div className="podcast-show-rail">
            <span>SHOW / {hennhousePodcast.number}</span>
            <strong>HH</strong>
            <span>{hennhousePodcast.status}</span>
          </div>
          <div className="podcast-show-main">
            <div className="podcast-show-icon"><Headphones /></div>
            <p>HOSTED BY {hennhousePodcast.host}</p>
            <h2>{hennhousePodcast.name}</h2>
            <p className="podcast-show-description">{hennhousePodcast.description}</p>
            <div className="podcast-waveform" aria-hidden="true">
              {wave.map((height, index) => <i key={index} style={{ '--wave-height': `${height}%` }} />)}
            </div>
            <div className="podcast-show-meta">
              <div><span>LAUNCHED</span><strong>{hennhousePodcast.launched}</strong></div>
              <div><span>FORMAT</span><strong>LONG-FORM + FIELD CLIPS</strong></div>
              <div><span>SOURCE</span><strong>HENNHOUSE / YOUTUBE</strong></div>
            </div>
            <div className="podcast-show-actions">
              <a href={hennhousePodcast.sourcePage} target="_blank" rel="noopener noreferrer" data-cursor="active">
                HENNHOUSE HUB <ExternalLink />
              </a>
              <a href={hennhousePodcast.localFeed} data-cursor="active">
                RSS / XML <Rss />
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="podcast-episodes">
        <div className="section-shell">
          <div className="section-index light" data-reveal>
            <span>02</span><i /><span>FULL CONVERSATIONS</span>
          </div>
          <div className="podcast-section-heading" data-reveal>
            <p>LATEST EPISODES</p>
            <h2>The long version.<br /><em>No summary required.</em></h2>
          </div>
        </div>
        <div className="podcast-episode-list">
          {episodes.map((episode, index) => (
            <a href={episode.link} target="_blank" rel="noopener noreferrer" className="podcast-episode" key={episode.link} data-reveal data-cursor="active">
              <div className="podcast-episode-number">
                <span>{String(episode.episodeNumber || episodes.length - index).padStart(2, '0')}</span>
                <small>FULL EPISODE</small>
              </div>
              <div className="podcast-episode-image">
                <img src={episode.thumbnail} alt={`Thumbnail for ${episode.title}`} loading={index === 0 ? 'eager' : 'lazy'} />
                <span><Play fill="currentColor" /> WATCH</span>
              </div>
              <div className="podcast-episode-copy">
                <time dateTime={episode.published}>{displayDate(episode.published)}</time>
                <h3>{episode.title}</h3>
                <p>{excerpt(episode.description)}</p>
                <span className="podcast-episode-open">OPEN ON YOUTUBE <ArrowUpRight /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {clips.length > 0 && (
        <section className="podcast-clips section-shell">
          <div className="section-index" data-reveal>
            <span>03</span><i /><span>FIELD CLIPS</span>
          </div>
          <div className="podcast-section-heading" data-reveal>
            <p>ONE IDEA / QUICKLY</p>
            <h2>Short cuts from the<br /><em>long conversations.</em></h2>
          </div>
          <div className="podcast-clip-grid">
            {clips.map((clip, index) => (
              <a href={clip.link} target="_blank" rel="noopener noreferrer" key={clip.link} data-reveal data-cursor="active">
                <div className="podcast-clip-image">
                  <img src={clip.thumbnail} alt={`Thumbnail for ${clip.title}`} loading="lazy" />
                  <span>0{index + 1}</span>
                </div>
                <time dateTime={clip.published}>{displayDate(clip.published)}</time>
                <h3>{clip.title}</h3>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="podcast-platforms">
        <div className="section-shell">
          <div className="section-index light" data-reveal>
            <span>04</span><i /><span>WATCH / LISTEN / FOLLOW</span>
          </div>
          <div className="podcast-platforms-heading" data-reveal>
            <div><Mic2 /><Rss /></div>
            <h2>Take the conversation<br /><em>with you.</em></h2>
          </div>
        </div>
        <div className="podcast-platform-list">
          {hennhousePodcast.platforms.map((platform, index) => (
            <a href={platform.href} target="_blank" rel="noopener noreferrer" key={platform.name} data-reveal data-cursor="active">
              <span>0{index + 1}</span><strong>{platform.name}</strong><ArrowUpRight />
            </a>
          ))}
          <a href={hennhousePodcast.localFeed} data-reveal data-cursor="active">
            <span>07</span><strong>RSS Feed</strong><Rss />
          </a>
        </div>
      </section>
    </PageFrame>
  )
}
