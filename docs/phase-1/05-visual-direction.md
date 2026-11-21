# 05 — Visual Direction

> Phase 1 deliverable. Status: **v2, "0/1" brand system with light and dark themes**. See the design canvas (Home, Services, Brand system).

## Concept: 0/1

The name is the brand system. **One rule runs everything: an outline is a 0 (an idea, not yet real), and a solid shape is a 1 (shipped, proven, real).** Every graphic device follows it, which makes the site feel unlike a generic AI agency and keeps the visual language honest.

| Device | Rule | Where |
|---|---|---|
| **Mark** | Hollow 0 (ring) + solid 1 (bar, signal colour) | Nav, favicon, avatar, stamps |
| **Wordmark** | `zero/one`: lowercase Geist 700, slash in signal | Nav, footer, social. Legal/business name stays "Zero-1 Studio" |
| **Hero glyphs** | Giant outlined **0** → solid signal **1**, captioned "Idea" and "Paying customers" | Home hero, final CTA |
| **Proof figures** | Before value outlined, after value solid: 40% → **90%** | Proof bar, case studies |
| **Binary numbering** | Sections count `001, 010, 011…`; the four stages are `00, 01, 10, 11` | Section eyebrows, stage cards |
| **State bits** | 4 dots filling from hollow to solid: ●○○○ Exploring · ●●○○ Validating · ●●●○ Building · ●●●● Live | Stage cards, ventures, Pressure-Tester scores |
| **Theme toggle** | A round button labelled `0` (light) or `1` (dark) | Nav |
| **Easter egg** | "zero" in binary: `01111010 01100101 01110010 01101111` | Footer |

Avoid: gradients, glows, neural-net art, sparkles, emoji. Never use a filled shape for something that isn't real yet. Binary only appears in the places listed above.

## Tokens

| Token | Light (0) | Dark (1) | Use |
|---|---|---|---|
| `--paper` | `#F4F4F1` | `#0D0D0C` | Page background |
| `--surface` | `#FFFFFF` | `#161615` | Cards, bands |
| `--ink` | `#111110` | `#F2F2EE` | Text, primary buttons, outlines |
| `--ink-2` | `#55554F` | `#A3A39C` | Secondary text (≥7:1 on paper in both) |
| `--rule` | `#D9D9D3` | `#2C2C29` | Hairlines |
| `--inv-bg` / `--inv-fg` | `#111110` / `#F4F4F1` | `#F2F2EE` / `#0D0D0C` | Inverted band (the ladder). Flips in dark mode, so it's always the boldest section |
| `--signal` | `#FF5B1F` | `#FF5B1F` | Solid "1"s, the primary CTA, state bits |

- Text on signal is always `#111110` (6.1:1) in both themes.
- Signal is never body text on light paper (2.8:1). Use it for fills, display sizes and graphics only.
- Dark mode follows `prefers-color-scheme` by default, can be overridden with the toggle, and the choice is remembered in `localStorage`.

## Type

- **Display & UI:** Geist 700 for headings, tracking −0.04 to −0.05em. Geist 400/500 for body.
- **Mono:** Geist Mono for binary indices, labels, state captions and price units.
- **Scale:** 84 / 54 / 34 / 26 / 21 (lede) / 18 (body) / 15 / 12. H1 drops to 44 on mobile.
- Accent phrase: the second sentence of a headline can take signal colour ("…Then build it.").

## Components

- **Buttons:** pill (999px radius), 48px+ tall. Signal fill for the one main CTA per view; ink fill for primary; 1px outline for secondary.
- **Cards:** 16px radius, 1px rule border, no shadows. The most important card in a set gets a 2px signal border.
- **Stage card:** binary code (outlined mono numeral) + state bits + name + price + duration.
- **Venture card:** state bits + stage label. A venture not yet public uses a dashed border.

## Motion (Phase 2)

- The hero 0 → 1 fills in once on load (the outline gets its fill).
- State bits fill in sequence when scrolled into view.
- Proof figures count from before to after.
- All motion is off under `prefers-reduced-motion`.

## Imagery

- Sam's portrait from samjmerrick.com with the MediaPipe landmark overlay (approved).
- Work screenshots on a plain surface, no device mockups.
