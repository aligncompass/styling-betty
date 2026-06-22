# Styling Betty — customer site

Luxury hair-color, nail-design & event-styling studio in Miami, FL. Built and hosted by
AlignCompass as a content-driven **Astro** site.

- **Live (after apex PR merges):** https://aligncompass.com/styling-betty/
- **Content:** all copy, SEO, design tokens, and image slots live in `src/data/content.json`.
- **Images:** served from Cloudinary (cloud `aligncompass`, folder `styling-betty/`).
- **Analytics:** PostHog (shared AlignCompass project, cookieless).

## Local commands
```
npm install
npm run dev      # local preview at /styling-betty/
npm run build    # static output to dist/
```

Served at `aligncompass.com/styling-betty/` via an apex rewrite to this project's Vercel
alias. The site is built with `base: '/styling-betty'`. To update content, edit
`src/data/content.json` and push — the git-linked Vercel project auto-deploys.
