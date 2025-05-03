import vercel from '@astrojs/vercel/serverless';
import {defineConfig} from 'astro/config';

export default defineConfig({
  // Enable SSR
  output: 'server',

  // Use Vercel adapter
  adapter: vercel(),
});