import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  // ...
  integrations: [
    prefetch({
      // Only prefetch links with an href that begins with `/work/`
      selector: "a[href^='/work/']",
    }),
  ],
});