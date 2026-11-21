// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.zero-1.studio',
  // Static by default. Only routes that `export const prerender = false` run on the Worker.
  adapter: cloudflare({ imageService: 'compile' }),
  session: false,
  // Old-site URLs are redirected in public/_redirects (served by Cloudflare).
});
