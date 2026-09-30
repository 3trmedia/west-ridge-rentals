// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://west-ridge-rentals.vercel.app',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'never',
  integrations: [sitemap({ filter: (p) => !p.endsWith('/bookings-guide') && !p.endsWith('/request') })],
  vite: { plugins: [tailwindcss()] },
});
