# Zero-1 Studio

Source for [zero-1.studio](https://www.zero-1.studio/), Sam Merrick's venture studio: find the business worth building, then build it.

Astro (static pages) on Cloudflare Workers, with one server route for the enquiry form, which stores to D1. **Editing guide for people and LLMs: [CLAUDE.md](CLAUDE.md).**

## Run it

```bash
npm install
npx wrangler d1 migrations apply zero-1 --local
npm run dev
```

## Deploy (first time)

1. `npx wrangler login`
2. ~~Create the D1 database~~ Done: `zero-1` (WEUR), tables created, id already in `wrangler.jsonc`
3. `npm run deploy` (builds, applies D1 migrations remotely, deploys the Worker)
4. Done: `zero-1.studio` is attached as a Custom Domain. Still to do: point `www.zero-1.studio` at it (see "www" below)
5. Optional:
   - Bot check: create a Turnstile widget, put the site key in `src/content/site.yaml` and run `npx wrangler secret put TURNSTILE_SECRET_KEY`
   - Enquiry emails: `npx wrangler secret put RESEND_API_KEY` and set `NOTIFY_EMAIL` in `wrangler.jsonc`
   - Booking: set `calLink` in `src/content/site.yaml`
   - Analytics: enable Cloudflare Web Analytics for the zone

After that, connect the GitHub repo in Workers → zero-1 → Settings → Builds so `main` deploys automatically and each branch gets a preview URL.

## Pages

`/` · `/services` · `/approach` · `/about` · `/work` (+ case studies) · `/ventures` (+ venture pages) · `/ventures/pressure-test` · `/start` → `/api/intake` → `/start/thanks` · `/privacy`

## Planning docs

| Doc | Contents |
|---|---|
| [01 Positioning](docs/phase-1/01-positioning.md) | One-liner, audiences, proof points, voice, house style |
| [02 Services & Pricing](docs/phase-1/02-services-and-pricing.md) | The four-stage ladder, capacity |
| [03 Sitemap](docs/phase-1/03-sitemap.md) | Routes, nav, redirects |
| [04 Copy Deck](docs/phase-1/04-copy-deck.md) | Page copy |
| [05 Visual Direction](docs/phase-1/05-visual-direction.md) | The 0/1 brand system, light and dark tokens |
| [06 Tech Stack](docs/phase-1/06-tech-stack.md) | Why Astro + Cloudflare |

Design canvas: https://claude.ai/artifact/G5p2eTr2yCqFfu5DKd1wff

## Status

- [x] Phase 1: Foundation
- [x] Phase 2: Core build (this branch)
- [ ] Phase 3: Writing (MDX essays), portrait and screenshots, case-study detail
- [ ] Phase 4: Pressure-Tester paid report experiment, AI Margin calculator
- [ ] Phase 5: Launch (domain cutover, analytics, launch posts)

## www

The canonical address is `https://zero-1.studio`. To make `www.zero-1.studio` work too, in the Cloudflare dashboard for the zone:

1. DNS → Records → Add record: type `CNAME`, name `www`, target `zero-1.studio`, Proxied (orange cloud) on.
2. Rules → Redirect Rules → Create from template → "Redirect from WWW to root". This keeps the path and returns a 301.
