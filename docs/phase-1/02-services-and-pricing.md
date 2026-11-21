# 02 — Services & Pricing

> Phase 1 deliverable. Status: **prices confirmed by Sam.** Capacity: up to 1 day/week in total, so one client project at a time.

Pricing is shown publicly as "from" prices in GBP, excluding VAT. Showing it is a filter: it saves calls with people who can't afford the work, and reassures people who can.

## The ladder

Each stage ends with a decision, so a client can stop at any rung without wasted spend. Each stage's fee is credited 50% against the next stage if booked within 30 days. That gives people a reason to climb.

| # | Offer | Price | Duration | Outcome |
|---|---|---|---|---|
| 0→ | **Ideation Sprint** | **£3,500** fixed | 2 weeks | 3 ranked business concepts, each with a feasibility read and the riskiest assumption named |
| →Proof | **Validation & Prototype** | **from £12,000** | 4–6 weeks | A working prototype in front of your target customers, a unit-economics model and a written go/no-go |
| →1 | **MVP Build** | **from £35,000** | 8–12 weeks | A production MVP, measured from day one, launched to first users |
| ∞ | **Fractional Product Lead** | **£4,000 / month** | Rolling, 3-month minimum | Sam as your part-time product lead, 2 days a month |

### Why these numbers

- **Sprint at £3,500:** low enough to approve without a procurement process, high enough to be serious. Benchmarks: UK product discovery sprints cost £3k–£10k.
- **Validation from £12k:** roughly 4–6 weeks of senior PM+ML time, plus a contractor engineer and API costs.
- **MVP from £35k:** lower than most UK AI agencies (£50k–£150k). That's credible because scope is pinned down by validation first. Sam will likely need 1–2 contract engineers, so check margin.
- **Fractional at £4k/mo for 2 days a month:** about £1k a day, priced for senior product and ML leadership. Fits inside the 1 day/week limit.

### Capacity

Sam has up to **1 day a week** across Zero-1. In practice:
- **One client engagement at a time.** Sprints and Validation fit, and Sam does the product and ML work himself.
- **MVP builds** need 1–2 contract engineers doing most of the build, with Sam leading. Keep the margin check above.
- **Fractional** and a live build can't run together. Ventures get whatever time is left between client projects.

> Sam: adjust these freely. The site will read them from one config file (`content/pricing.ts`), so changing prices is a one-line edit.

## What's in each package (for the services page)

### Ideation Sprint — £3,500
For founders and teams with a domain, a hunch, or a list of ideas.
- Kick-off workshop (2 hrs): your domain, assets, constraints
- Opportunity map: where the gaps are, and where AI changes the economics
- 3 concepts scored on data advantage, defensibility, unit economics and feasibility
- Riskiest-assumption test plan for the top concept
- Readout session and a written report you keep

### Validation & Prototype — from £12,000
For one concept you want evidence for before you commit.
- Working prototype built on your data (not a Figma mock)
- Build approach chosen and tested on your data (AI or not)
- Unit economics: cost per customer (including inference, if AI is used) and the price at which it's profitable
- 5–10 user sessions with your target customers
- Go / pivot / no-go recommendation with the evidence

### MVP Build — from £35,000
For a validated concept that's ready for its first customers.
- Production app (web or mobile)
- Quality measured from day one: product analytics, plus an evaluation harness for any AI features
- Guardrails, privacy and data handling designed in
- Launch support and the first-user feedback loop
- Handover docs, or continue on Fractional

### Fractional Product Lead — £4,000/month (2 days a month)
For teams that have engineers but need senior product leadership, including on AI.
- Product strategy and roadmap ownership
- AI build-or-buy and vendor decisions
- Hiring help for product and ML roles
- Hands-on product leadership with your team

## FAQ copy (for /services)

- **Do you work with non-technical founders?** Yes. That's the most common case.
- **Who owns the IP?** You do, on full payment.
- **Who actually does the work?** I lead every project and do the product and ML work myself. Trusted contract engineers handle most of the build stages. You always deal with me.
- **Does my idea need to use AI?** No. I'll use AI where it makes a measurable difference to cost, quality or speed, and tell you plainly when it doesn't.
- **When it is AI, which models do you use?** Whatever's right for the job, from hosted LLMs like Claude to small open-source models running on-device. I'll show you the cost trade-off.
- **Can we skip the sprint?** Yes, if you already have a clear concept, start at Validation.
