import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

// Runs on the Worker (everything else is static).
export const prerender = false;

const STAGES = new Set(['idea', 'demand', 'prototype', 'product']);
const BUDGETS = new Set(['Under £5k', '£5–15k', '£15–50k', '£50k+']);
const TIMINGS = new Set(['As soon as possible', 'Within 3 months', 'Just exploring']);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (v: FormDataEntryValue | null, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

async function turnstileOk(token: string, ip: string | null): Promise<boolean> {
  const secret = env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Bot check not configured yet.
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const json = (await res.json()) as { success?: boolean };
  return json.success === true;
}

async function notify(e: Record<string, string>) {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL) return;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Zero-1 Studio <site@zero-1.studio>',
      to: [env.NOTIFY_EMAIL],
      reply_to: e.email,
      subject: `New enquiry from ${e.name}`,
      text: `Name: ${e.name}\nEmail: ${e.email}\nStage: ${e.stage}\nBudget: ${e.budget}\nTiming: ${e.timing}\nSource: ${e.source || '-'}\n\n${e.idea}`,
    }),
  });
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();

  // Honeypot: bots fill every field. Pretend it worked.
  if (text(form.get('company_website'), 200)) return redirect('/start/thanks', 303);

  const entry = {
    name: text(form.get('name'), 120),
    email: text(form.get('email'), 200),
    idea: text(form.get('idea'), 2000),
    stage: text(form.get('stage'), 20),
    budget: text(form.get('budget'), 20),
    timing: text(form.get('timing'), 40),
    source: text(form.get('source'), 60),
  };
  const valid =
    entry.name && EMAIL.test(entry.email) && entry.idea &&
    STAGES.has(entry.stage) && BUDGETS.has(entry.budget) && TIMINGS.has(entry.timing);
  if (!valid) return redirect('/start?error=invalid', 303);

  if (!(await turnstileOk(text(form.get('cf-turnstile-response'), 2048), request.headers.get('CF-Connecting-IP')))) {
    return redirect('/start?error=bot', 303);
  }

  try {
    await env.DB.prepare(
      'INSERT INTO enquiries (name, email, idea, stage, budget, timing, source) VALUES (?, ?, ?, ?, ?, ?, ?)',
    )
      .bind(entry.name, entry.email, entry.idea, entry.stage, entry.budget, entry.timing, entry.source || null)
      .run();
  } catch (err) {
    console.error('intake: D1 insert failed', err);
    return redirect('/start?error=server', 303);
  }

  try {
    await notify(entry);
  } catch (err) {
    console.error('intake: notification failed', err); // Enquiry is saved; don't fail the user.
  }

  return redirect('/start/thanks', 303);
};
