# Reference Kit

A curated collection of software engineering and data science knowledge. Organized by subject and page type, it includes quick references, procedures, troubleshooting guides, conceptual overviews, style guides, and focused code examples.

**Browse the site:** https://adamkobel.github.io/reference-kit/

---

## Layout

The site is built with [VitePress](https://vitepress.dev/).

- `docs/` — site source; every reference page lives under `docs/<subject>/...`
- `docs/index.md` — home page and categorized page index
- `.vitepress/config.mts` — site configuration, top nav, and sidebar

## Local Development

```bash
npm ci            # install dependencies
npm run dev       # start the dev server with hot reload
npm run build     # build the static site into .vitepress/dist
npm run preview   # serve the built site locally
```

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy-docs.yml`.
