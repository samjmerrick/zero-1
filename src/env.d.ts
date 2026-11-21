// Secrets aren't in wrangler.jsonc, so `wrangler types` can't see them. Declare them here.
declare namespace Cloudflare {
  interface Env {
    TURNSTILE_SECRET_KEY?: string;
    RESEND_API_KEY?: string;
  }
}
