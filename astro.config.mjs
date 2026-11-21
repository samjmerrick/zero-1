// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.zero-1.studio',
  // Static by default. Only routes that `export const prerender = false` run on the Worker.
  adapter: cloudflare({ imageService: 'compile' }),
  session: false,
  integrations: [sitemap({ filter: (page) => !page.includes('/start/thanks') })],
  // Old-site URLs are redirected in public/_redirects (served by Cloudflare).
});
