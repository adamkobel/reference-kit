# Repository Instructions

## Repository Organization

This repository is a curated software-developer reference collection. Organize content along two dimensions:

- **Subject/category:** The topic or domain, such as Git, Docker, Azure, Linux, Matplotlib, or data science.
- **Page type:** The form and intended use of the information, such as a cheat sheet, procedure, troubleshooting guide, overview, style guide, or code example.

Keep the site's navigation organized primarily by subject. Make each page's primary type clear from its title, opening description, structure, and `docs/index.md` description. A page may combine types when that reflects its purpose; for example, a procedure may include a troubleshooting section.

### Page Types

- **Cheat sheet / quick reference:** Compact commands, syntax, options, or common workflows. Current examples include Anaconda, uv and Python, and Docker.
- **Guide / procedure / runbook:** Ordered steps with prerequisites, execution details, and verification. Current examples include Ubuntu firmware updates and Git repository initialization.
- **Troubleshooting guide:** Symptoms, diagnosis, remediation, verification, and relevant security caveats. The focused current example is Docker group troubleshooting.
- **Conceptual overview / decision guide:** Concepts, boundaries, tradeoffs, and selection criteria. Current examples include Azure App Service, Azure Functions, JavaScript module systems, and probability fundamentals.
- **Style or convention guide:** Rules, structure, examples, and best practices. The current example is Git commit conventions.
- **Code example / recipe:** A focused implementation example for a library, API, or task. Current examples include the Matplotlib bar and line chart pages.

### Current Page-Type Coverage

The page types above are already represented across the collection. Examples include:

- Procedures and runbooks, including the firmware-update and PowerShell-profile guides
- Troubleshooting, including Docker group remediation and troubleshooting sections in other guides
- Conceptual and decision overviews, including JavaScript module systems, Azure services, Snowflake Cortex, and probability
- Quick references, including Anaconda, Docker, and Snowflake CLI
- Style guidance and focused code recipes, including Git commit conventions and Matplotlib charts

This is representative coverage, not a page-by-page catalog. The categorized index in `docs/index.md` is the authoritative list of pages; keep page-specific descriptions there rather than duplicating them in this guidance.

### Potential Future Page Types

Consider these distinct primary page types when there is useful content for them. Related sections within an existing page do not by themselves make that page a dedicated type:

- Architecture or design decision guide, beyond service overviews and selection advice
- Operational checklist, beyond the ordered steps in a procedure or runbook
- Security hardening guide, beyond security notes in a troubleshooting guide or overview
- Incident response or recovery runbook
- API or library reference, beyond focused code examples and recipes
- Migration or upgrade guide for moving between products, platforms, or major versions

These are possibilities, not required categories. Do not add placeholder pages solely to represent a type.

## Content Rules

- The site is built with VitePress and served from `docs/` (`srcDir` in `.vitepress/config.mts`). Place every reference page under `docs/`, in the subject directory that best matches its primary topic.
- Use a descriptive, specific filename in lowercase kebab-case.
- Use the canonical `docs/cheat-sheets/` directory for cheat sheets; do not create or restore the legacy `cheatsheets/` directory.
- When a page could fit multiple subjects, choose the subject that best matches its primary audience and index it once.
- Keep page Markdown VitePress-compatible: pages are compiled as Vue templates, so wrap bare `<tag>`-style text and `{{ }}` in inline code or code fences.
- Prefer LaTeX notation for mathematical formulas and expressions in reference content, using inline math for short expressions and display math for standalone formulas. VitePress math rendering is enabled through MathJax.

## Site Navigation

The page index lives in two places, which must stay in sync: the sidebar in `.vitepress/config.mts` and the categorized page index in `docs/index.md`. The `docs/index.md` home page also features one card for every top-level subject section, and the `.vitepress/config.mts` header Topics menu should link to a representative page in each section. Update the index, home cards, sidebar, and Topics menu together when adding or reorganizing a subject section. `README.md` is a short project intro and does not index pages.

- When adding a Markdown page, add it to both the sidebar and the `docs/index.md` page index in the same change. Use site-absolute links without the `.md` extension, such as `/cheat-sheets/docker`.
- When substantially changing an existing page's purpose, title, scope, location, or organization, update its sidebar text and its `docs/index.md` link text and description as needed.
- Keep entries grouped with the existing category structure and use the established link-and-description format in `docs/index.md`.
- Keep every reference Markdown page indexed exactly once in the sidebar and exactly once in `docs/index.md`.
- Use the page's primary type when choosing its `docs/index.md` description, without duplicating the full taxonomy for every link.
- Run `npm run build` to verify; the build fails on dead internal links.

## Commit Messages

- Follow the Conventional Commits rules in `docs/style-guides/git-commit-conventions.md`.
- `.github/commit-instructions.md` is the condensed copy used by the VS Code "Generate Commit Message" feature (configured in `.vscode/settings.json`); keep it in sync if the style guide changes.
