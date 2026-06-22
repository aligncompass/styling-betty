/** @type {import('tailwindcss').Config} */
// Semantic colors/fonts map to CSS variables that Layout.astro injects from
// content.json's `design` block. That keeps design tokens single-sourced in
// content.json (authored by the art-direction skill) — components reference
// the semantic names, never raw hex.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--ac-primary)',
        'primary-contrast': 'var(--ac-primary-contrast)',
        accent: 'var(--ac-accent)',
        'accent-contrast': 'var(--ac-accent-contrast)',
        bg: 'var(--ac-bg)',
        'bg-muted': 'var(--ac-bg-muted)',
        surface: 'var(--ac-surface)',
        ink: 'var(--ac-text)',
        muted: 'var(--ac-text-muted)',
        line: 'var(--ac-border)',
      },
      fontFamily: {
        heading: ['var(--ac-font-heading)'],
        body: ['var(--ac-font-body)'],
      },
      borderRadius: { ac: 'var(--ac-radius)' },
      boxShadow: { ac: 'var(--ac-shadow)' },
      maxWidth: { ac: 'var(--ac-max)' },
    },
  },
  plugins: [],
};
