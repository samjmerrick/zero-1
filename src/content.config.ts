import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Site-wide settings: availability, contact, booking. One entry, id "site". */
const settings = defineCollection({
  loader: file('src/content/site.yaml'),
  schema: z.object({
    available: z.boolean(),
    availabilityText: z.string(),
    replyPromise: z.string(),
    email: z.email(),
    calLink: z.string().describe('Cal.com path, e.g. "sammerrick/intro". Empty hides the embed.'),
    turnstileSiteKey: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.url() })),
  }),
});

/** The four stages, in order. `code` is the binary stage number. */
const pricing = defineCollection({
  loader: file('src/content/pricing.yaml'),
  schema: z.object({
    order: z.number().int().min(1).max(4),
    code: z.enum(['00', '01', '10', '11']),
    name: z.string(),
    move: z.string(),
    duration: z.string(),
    price: z.number().int().positive(),
    from: z.boolean(),
    per: z.enum(['month']).optional(),
    priceNote: z.string(),
    summary: z.string(),
    audience: z.string(),
    includes: z.array(z.string()).min(3),
    cta: z.string(),
    recommended: z.boolean().default(false),
  }),
});

/** Proof-bar figures. `before` renders outlined (a 0), `after` solid (a 1). */
const proof = defineCollection({
  loader: file('src/content/proof.yaml'),
  schema: z.object({
    order: z.number().int(),
    before: z.string().optional(),
    after: z.string(),
    label: z.string(),
  }),
});

const failures = defineCollection({
  loader: file('src/content/failures.yaml'),
  schema: z.object({ code: z.enum(['00', '01', '10', '11']), title: z.string(), body: z.string() }),
});

const faq = defineCollection({
  loader: file('src/content/faq.yaml'),
  schema: z.object({ order: z.number().int(), q: z.string(), a: z.string() }),
});

/** Pressure-Tester questionnaire. Each option scores 1–4 (dots filled). */
const pressureTest = defineCollection({
  loader: file('src/content/pressure-test.yaml'),
  schema: z.object({
    order: z.number().int(),
    dimension: z.string(),
    question: z.string(),
    options: z.array(z.object({ label: z.string(), score: z.number().int().min(1).max(4) })).length(4),
    advice: z.string().describe('Shown when this dimension scores 2 or less.'),
    goodNews: z.string().describe('Shown when this dimension scores 3 or more.'),
  }),
});

/**
 * Case studies. `track` keeps studio clients and Sam's employer history apart:
 * never label employer work as a studio project.
 */
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    track: z.enum(['studio', 'track-record']),
    summary: z.string(),
    order: z.number().int(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

/** Zero-1's own products. Stage maps to state bits: 1 exploring … 4 live. */
const ventures = defineCollection({
  loader: glob({ base: './src/content/ventures', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    stage: z.enum(['exploring', 'validating', 'building', 'live']),
    summary: z.string(),
    public: z.boolean().describe('false = shown as an unnamed "Venture #n" card with no page'),
    order: z.number().int(),
    link: z.string().optional(),
  }),
});

export const collections = { settings, pricing, proof, failures, faq, pressureTest, work, ventures };
