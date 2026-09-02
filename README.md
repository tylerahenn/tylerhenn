# Tyler Henn — Personal Site

An experimental personal site for Tyler Henn, founder and lead SEO strategist at Hennhouse.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The project uses the Next.js App Router and can be deployed directly to Vercel with the default Next.js framework settings. Every public route is statically prerendered to crawlable HTML, then hydrated where the design needs client-side interaction.

The application contains seven independently addressable pages: `/`, `/about/`, `/ideas/`, `/projects/`, `/podcasts/`, `/media/`, and `/contact/`. Next.js metadata routes generate `/robots.txt` and `/sitemap.xml`; `/podcasts/rss.xml` mirrors the canonical Hennhouse podcast feed with an hourly cache.

The canonical production origin is `https://tylerhenn.net`. When the domain is connected, add both `tylerhenn.net` and `www.tylerhenn.net` in Vercel and redirect `www` to the non-`www` canonical host.

## Interaction notes

- Press `/` to open the command deck.
- Toggle Overdrive in the command deck for an alternate visual state.
- Move across the Three.js hero sculpture to interact with the generative object.
- Motion is reduced automatically when the OS-level reduced motion preference is active.

The hero artwork is a bespoke real-time Three.js sculpture with a shader-driven surface, pointer response, and reduced-motion fallback.
