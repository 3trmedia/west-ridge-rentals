// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://west-ridge-rentals.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
