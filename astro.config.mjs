import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import tailwind from '@astrojs/tailwind';

// The template is content-driven: the only per-customer edits live in
// src/data/content.json. The build config reads its base/site from there so a
// build session never has to touch this file.
const content = JSON.parse(
  readFileSync(new URL('./src/data/content.json', import.meta.url), 'utf-8'),
);

// Customer sites are served at aligncompass.com/<slug>/ (a deliberate
// subdirectory convention — never a [customer].aligncompass.com subdomain).
// Building under base="/<slug>" makes every generated asset and link
// (/<slug>/_astro/..., /<slug>/about) resolve correctly both on the apex and
// on the project's own <slug>.vercel.app/<slug>/ alias. The apex rewrite in
// aligncompass-site preserves the slug prefix when proxying (see deploy docs).
const base = content?.meta?.base || '/';
const site = content?.meta?.siteUrl || 'https://aligncompass.com';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [tailwind({ applyBaseStyles: false })],
});
