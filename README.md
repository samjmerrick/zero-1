# Zero-1 Studio

Source for [zero-1.studio](https://www.zero-1.studio/), Sam Merrick's venture studio: find the business worth building, then build it.

## Status

**Phase 1: Foundation** (positioning, copy, sitemap, visual direction). No application code yet.

Design canvas (Home, Services, Brand system): https://claude.ai/artifact/G5p2eTr2yCqFfu5DKd1wff

| Doc | Contents |
|---|---|
| [01 Positioning](docs/phase-1/01-positioning.md) | One-liner, audiences, proof points, voice, taglines |
| [02 Services & Pricing](docs/phase-1/02-services-and-pricing.md) | The four-stage ladder with public prices |
| [03 Sitemap](docs/phase-1/03-sitemap.md) | Routes, nav, redirects, homepage section order |
| [04 Copy Deck](docs/phase-1/04-copy-deck.md) | Page copy for Home (incl. Ventures), Services, Approach, About, Start |
| [05 Visual Direction](docs/phase-1/05-visual-direction.md) | "0/1" brand system, light + dark tokens, type, components |
| [06 Tech Stack](docs/phase-1/06-tech-stack.md) | Astro + Cloudflare, chosen for LLM editing and easy hosting |

## Roadmap

1. **Foundation**: this phase
2. **Core build**: Astro + content collections on Cloudflare Workers; Home, Services, Approach, About, Start (D1 + Cal.com), light/dark
3. **Proof**: Work, Lab, Writing (MDX)
4. **Signature feature**: Idea Pressure-Tester (Claude API, Turnstile + rate-limited)
5. **Launch**: analytics, SEO, redirects, launch posts
