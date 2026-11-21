# Zero-1 Studio site: editing guide

Astro (static) on Cloudflare Workers. One server route: `src/pages/api/intake.ts`.

## Where things live

| To change… | Edit |
|---|---|
| Availability chip, reply promise, contact email, Cal.com link | `src/content/site.yaml` |
| Prices, stage names, what's included | `src/content/pricing.yaml` |
| Proof-bar numbers | `src/content/proof.yaml` |
| The four failure reasons (home) | `src/content/failures.yaml` |
| FAQ | `src/content/faq.yaml` |
| Pressure-Tester questions and advice | `src/content/pressure-test.yaml` |
| Case studies | `src/content/work/*.md` |
| Ventures (and their stage) | `src/content/ventures/*.md` |
| Essays | `src/content/writing/*.md` (set `draft: false` to publish) |
| Social share image | `public/og.png` (1200×630) |
| Page headlines and section copy | the page in `src/pages/` |
| Colours, both themes | `src/styles/tokens.css` |

Schemas for every content file are in `src/content.config.ts`. If a build fails after a content edit, the error names the field.

## Rules

**Voice:** first person ("I"), British English (-ise, colour, programme, enquiry, maths), plain and direct. No "unlock", "harness", "leverage", "seamless", "robust", "journey", "landscape". Use "real" at most once per page. Full rules: `docs/phase-1/01-positioning.md` → House style.

**Honesty:**
- Every number traces to samjmerrick.com or a client result. Keep "~" where the source has it.
- Virgin Red, Student Beans, Sixteenth and Simprints were Sam's employers: `track: track-record`, never `studio`.
- No badges like "Most popular" until they're true.
- Essays drafted by an AI stay `draft: true` until Sam has read and approved them. Drafts show in `npm run dev` only, and "Writing" appears in the nav once one post is published.

**Brand (0/1):** outline = 0 (not real yet), solid = 1 (shipped). Use the components rather than restyling by hand:
- `StateBits n={1-4}`: progress dots (1 exploring, 2 validating, 3 building, 4 live)
- `SectionHead index="010"`: sections count in binary (001, 010, 011, 100…)
- `.outline-text` for "before" figures, `.accent` for "after"
- Text on `--signal` is always `--on-signal`. Never use `--signal` for body text on light paper.
- One `btn-signal` (main call to action) per view.

**Code:** no client-side framework. Keep JS to small `<script>` blocks. Pages stay static unless they need the Worker (`export const prerender = false`).

## Commands

```bash
npm run dev          # local dev on workerd (local D1)
npm run check        # types + content schemas
npm run build
npm run lint:prose   # Vale: British spelling and house style
npx wrangler d1 migrations apply zero-1 --local   # first run: create local tables
```

Run `npm run check`, `npm run build` and `npm run lint:prose` before committing.
