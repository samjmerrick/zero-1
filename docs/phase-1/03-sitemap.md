# 03 — Sitemap & Information Architecture

> Phase 1 deliverable. Status: **draft**.

## Primary nav

`zero/one` mark + wordmark (→ /) · Approach · Services · Work · Ventures · Writing · 0/1 theme toggle · **Start a project** (button → /start)

Footer: About · Writing · Ventures · samjmerrick.com · LinkedIn · GitHub · email · © Zero-1 Studio

## Pages

| Route | Purpose | Primary CTA | Launch phase |
|---|---|---|---|
| `/` | Positioning, proof, ladder, featured work | Start a project / Pressure-test your idea | 2 |
| `/approach` | The Zero → One method in 4 stages, with what happens at each decision point | See pricing | 2 |
| `/services` | The four packages, prices, what's included, FAQ | Start a project | 2 |
| `/work` | Index: two labelled tracks, **Studio projects** and **Sam's track record** | — | 3 |
| `/work/[slug]` | Case study: Problem → Bet → What was built → Result | Start a project | 3 |
| `/ventures` | Zero-1's own products with a stage for each (Exploring → Validating → Building → Live), plus open source and research | Try the Pressure-Tester | 3 |
| `/ventures/[slug]` | Venture write-up: the idea, the riskiest assumption, the evidence, the go/no-go. Each doubles as a case study of the method | Start a project | 3 |
| `/ventures/pressure-test` | Interactive idea scorer (signature feature) | Get the full report (email) → /start | 4 |
| `/writing` | Essays index (replaces /blog) | — | 3 |
| `/writing/[slug]` | Essay (MDX) | Newsletter / Start | 3 |
| `/about` | Sam: story, philosophy, credentials, field work | Start a project | 2 |
| `/start` | 5-question intake, then embedded Cal.com booking | Submit | 2 |
| `/privacy` | Privacy policy (needed for intake + Pressure-Tester) | — | 2 |

## Redirects (from current site)

| Old | New | Note |
|---|---|---|
| `/blog` | `/writing` | 301 |
| `/blog/finding-product-market-fit` | `/writing/finding-product-market-fit` | Keep, still on-theme. Refresh with an AI angle |
| `/blog/creating-a-digital-product` | `/writing/creating-a-digital-product` | Keep, refresh |
| `/blog/what-is-agile` | `/writing` | Retire, 301 to index |
| `/blog/agile-frameworks` | `/writing` | Retire, 301 to index |

> Confirm the real old slugs from the live site before Phase 2.

## Work: initial case studies

| Track | Entry | Status |
|---|---|---|
| Studio | HandDeco: Shopify e-commerce for a custom embroidery start-up | Existing. Confirm with Sam |
| Track record | Simprints: contactless infant biometrics (~40% → ~90% TMR) | Write |
| Track record | Sixteenth: Spark Jam, LLM content ideation for creators | Write (most on-theme) |
| Track record | Virgin Red: founding team, ML reward targeting (+30% engagement) | Write |
| Track record | Student Beans: growth rebuild (~50% conversion lift) | Optional |

## Homepage section order

1. Nav
2. Hero: headline, subhead, two CTAs, "Available now · one project at a time" chip
3. Proof bar: four facts with numbers
4. The problem (001): "Most new products die for one of four reasons"
5. The ladder: 4 packages with prices, laid out as the 0 → 1 path
6. About Sam (short): photo, 3 lines, link to /about
7. Featured work: 2 cards, labelled by track
8. Ventures: 3 cards with stage chips (Pressure-Tester · AI Margin · Venture #3, not named until validated)
9. Pressure-Tester teaser
10. Writing: 3 latest
11. Final CTA
12. Footer
