# 05 — Visual Direction

> Phase 1 deliverable. Status: **draft**. See the design canvas for these tokens applied to Home and Services.

## Concept: "Lab notebook"

The site should feel like a precise engineer's notebook, not a glossy AI agency. Plain paper, sharp type, monospace labels, and one hot accent used like a highlighter. The **0 → 1** device runs through the site as a visual system: every stage, step and number sits on a single line that runs from 0 to 1.

What we avoid: purple gradients, glowing orbs, neural-network stock art, glassmorphism, emoji.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F4F4F1` | Page background |
| `--surface` | `#FFFFFF` | Cards |
| `--ink` | `#111110` | Text, primary buttons |
| `--ink-2` | `#55554F` | Secondary text (7.0:1 on paper) |
| `--rule` | `#D9D9D3` | Hairlines, borders |
| `--signal` | `#FF5B1F` | Accent: 0→1 line, highlights, button fill with ink text (6.1:1) |
| `--night` | `#111110` | Dark sections (inverted) |

Rule: `--signal` is never used for body text on paper (it's only 2.8:1). It's for fills, lines and large display figures only.

## Type

- **Display & UI:** Geist (Google Fonts), 600 for headings, tight tracking (-0.03em) at large sizes
- **Labels, data, eyebrows:** Geist Mono, 500, uppercase, +0.04em tracking, 12–13px
- **Scale:** 72 / 48 / 32 / 22 / 18 (body) / 15 / 13 — on mobile H1 drops to 44

## Components

- **Buttons:** 48px tall, 4px radius. Primary is ink fill with paper text; secondary is a 1px ink outline. Signal-fill is reserved for the single most important CTA per page.
- **Cards:** white surface, 1px rule border, no shadow, 6px radius.
- **Eyebrows:** mono label with a stage index, e.g. `01 — WHY AI IDEAS FAIL`.
- **Proof numbers:** large Geist 600 with mono caption.
- **The 0→1 line:** a 2px signal line with a hollow `0` node at the start and a filled `1` node at the end. It's used on the ladder, on /approach, and as a loading/progress motif in the Pressure-Tester.

## Motion (Phase 2)

Subtle only: the 0→1 line draws on scroll, and numbers count up once. Everything respects `prefers-reduced-motion`.

## Imagery

- Real photos of Sam and field work (with permission), duotone ink/paper.
- Optional: MediaPipe face-landmark overlay on Sam's portrait as a nod to the ML work, which samjmerrick.com already does.
- Project screenshots inside a neutral device frame.

## Dark mode

Phase 2: the tokens invert (paper ↔ night) and signal stays the same.
