# 06 — Tech Stack

> Phase 1 deliverable. Status: **approved and built in Phase 2**. The Pressure-Tester is a questionnaire scored in the browser, so there's no LLM or API key.
> Brief: whatever is cleanest for **ongoing LLM editing** and **easy hosting**. Not tied to the old site's Next.js.

## Recommendation: Astro + Cloudflare

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 5** (static by default, one server route where needed) | Pages are plain HTML-like `.astro` files. No React state, no hydration bugs, ships zero JS unless a component asks for it |
| Content | **Astro content collections**: Markdown/MDX for prose, YAML for structured data, each with a Zod schema | Copy lives apart from layout, so an LLM edits a `.md` or `.yaml` file and can't break the page. A schema typo fails the build loudly instead of shipping |
| Styling | **Plain CSS with design tokens** (`tokens.css` custom properties) + a small set of component styles | One file holds the 0/1 palette and both themes. Dark mode is a `data-theme` attribute swap, with no utility-class soup for a model to misread |
| Interactivity | Two small vanilla-JS scripts: theme toggle and Pressure-Tester scoring | Smallest possible JS surface |
| Hosting | **Cloudflare Workers** (static assets + Astro Cloudflare adapter) | The domain is already on Cloudflare (DNS and email protection), so no DNS move. Free tier covers this traffic. Every branch gets a preview URL |
| API routes | One Astro server endpoint on the same Worker: `/api/intake` | One deploy and one platform, with no separate backend |
| Data | **Cloudflare D1** (SQLite) for enquiries | Same platform, one binding, SQL you can read. Replaces the earlier Supabase idea to keep it to one vendor |
| Abuse protection | Honeypot field, plus optional **Cloudflare Turnstile** on the enquiry form | Enough for a contact form |
| Email | **Resend** (optional) | Notifies Sam of each new enquiry |
| Booking | **Cal.com** embed on `/start` | No custom calendar code |
| Analytics | **Cloudflare Web Analytics** (cookieless) | Free, no cookie banner. Add Plausible later if funnels are needed |
| CI | GitHub Actions: `astro check` + build + link check on every PR; Cloudflare deploys `main` | An LLM's edit is verified before it's live |

### Why not the alternatives

- **Next.js**: capable, but App Router/RSC conventions, client/server boundaries and Vercel-shaped defaults are more surface for an LLM to get subtly wrong, and this site doesn't need them.
- **Eleventy / Hugo**: great static output, but no typed content schemas, and dynamic API routes need a separate service.
- **Webflow / Framer**: easy for humans, opaque to LLM editing via git, and lock-in.
- **Plain HTML**: simplest of all, but nav/footer/cards get duplicated across pages and drift.

## Repository shape (Phase 2)

```
zero-1/
├─ CLAUDE.md                  # Editing rules for LLMs: where copy lives, tokens, do/don't
├─ astro.config.mjs
├─ wrangler.toml              # Cloudflare: D1 binding, rate limiter, vars
├─ src/
│  ├─ content/                # ← almost all edits happen here
│  │  ├─ site.yaml            # nav, footer, availability chip ("Available now")
│  │  ├─ pricing.yaml         # the four stages: code (00–11), name, price, duration, bullets
│  │  ├─ proof.yaml           # proof-bar figures (before → after)
│  │  ├─ faq.yaml
│  │  ├─ work/*.md            # case studies (track: studio | track-record)
│  │  ├─ ventures/*.md        # stage: exploring | validating | building | live
│  │  └─ writing/*.mdx        # essays
│  ├─ content.config.ts       # Zod schemas for every collection above
│  ├─ styles/tokens.css       # 0/1 palette, light + dark, type scale
│  ├─ components/             # Mark, Wordmark, StateBits, BinaryIndex, StageCard, ProofFigure…
│  ├─ layouts/Base.astro
│  └─ pages/
│     ├─ index.astro, services.astro, approach.astro, about.astro, start.astro
│     ├─ work/[slug].astro, ventures/[slug].astro, writing/[slug].astro
│     └─ api/pressure-test.ts, api/intake.ts
└─ migrations/0001_init.sql   # D1 tables: enquiries, pressure_tests
```

### What makes it LLM-friendly

1. **Copy is never in components.** Changing a price, the availability chip or a venture's stage is a one-line YAML edit.
2. **Schemas catch mistakes.** A venture whose `stage` isn't one of the four values fails `astro check`.
3. **Brand rules are components.** `<StateBits n={3} />` and `<ProofFigure before="40%" after="90%" />` encode the outline = 0 / solid = 1 rule, so a model can't drift off-brand.
4. **CLAUDE.md** documents the above, plus the voice rules from `01-positioning.md`.
5. **Preview URL per PR**, so every edit can be checked before merge.

## Hosting setup checklist (Phase 2)

- [ ] Cloudflare account access for the zero-1.studio zone
- [ ] Create Worker + D1 database; connect GitHub repo for deploys
- [ ] Resend account + verify zero-1.studio sending domain
- [ ] Cal.com event type for "Intro call (30 min)"
- [ ] Turnstile site key
