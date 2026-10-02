# Repository Instructions

## Repository Organization

This repository is a curated software-developer reference collection. Organize content along two dimensions:

- **Subject/category:** The topic or domain, such as Git, Docker, Azure, Linux, Matplotlib, or data science.
- **Page type:** The form and intended use of the information, such as a cheat sheet, procedure, troubleshooting guide, overview, style guide, or code example.

Keep the README navigation organized primarily by subject. Make each page's primary type clear from its title, opening description, structure, and README description. A page may combine types when that reflects its purpose; for example, a procedure may include a troubleshooting section.

### Page Types

- **Cheat sheet / quick reference:** Compact commands, syntax, options, or common workflows. Current examples include Anaconda, uv and Python, and Docker.
- **Guide / procedure / runbook:** Ordered steps with prerequisites, execution details, and verification. Current examples include Ubuntu firmware updates and Git repository initialization.
- **Troubleshooting guide:** Symptoms, diagnosis, remediation, verification, and relevant security caveats. The focused current example is Docker group troubleshooting.
- **Conceptual overview / decision guide:** Concepts, boundaries, tradeoffs, and selection criteria. Current examples include Azure App Service, Azure Functions, JavaScript module systems, and probability fundamentals.
- **Style or convention guide:** Rules, structure, examples, and best practices. The current example is Git commit conventions.
- **Code example / recipe:** A focused implementation example for a library, API, or task. Current examples include the Matplotlib bar and line chart pages.

### Current Page Classification

- `docs/system-administration/linux/ubuntu/firmware-updates.md` — guide/procedure/runbook with troubleshooting
- `docs/languages/javascript/module-systems-overview.md` — conceptual overview with troubleshooting
- `docs/style-guides/git-commit-conventions.md` — style/convention guide
- `docs/cloud-platforms/azure/app-service-overview.md` — conceptual overview and decision guide
- `docs/cloud-platforms/azure/functions-overview.md` — conceptual overview
- `docs/data-science/probability-fundamentals.md` — foundational conceptual overview with formulas and examples
- `docs/cheat-sheets/anaconda.md` — command cheat sheet
- `docs/cheat-sheets/uv-python.md` — tool/workflow quick reference
- `docs/cheat-sheets/docker.md` — command and configuration cheat sheet
- `docs/cheat-sheets/docker-group.md` — focused troubleshooting guide with remediation and security notes
- `docs/cheat-sheets/git.md` — Git repository initialization procedure/guide
- `docs/cheat-sheets/linux-file-permissions.md` — command and concepts cheat sheet
- `docs/cheat-sheets/nvm.md` — command cheat sheet
- `docs/cheat-sheets/matplotlib.pyplot/bar-chart.md` — focused code example/recipe
- `docs/cheat-sheets/matplotlib.pyplot/line-chart.md` — focused code example/recipe

### Potential Future Page Types

Consider adding these types when a real reference requires them:

- Architecture or design decision guide
- Operational checklist
- Security hardening guide
- Incident response or recovery runbook
- API or library reference

These are suggestions, not required categories. Do not add placeholder pages solely to represent a type.

## Content Rules

- The site is built with VitePress and served from `docs/` (`srcDir` in `.vitepress/config.mts`). Place every reference page under `docs/`, in the subject directory that best matches its primary topic.
- Use a descriptive, specific filename in lowercase kebab-case.
- Use the canonical `docs/cheat-sheets/` directory for cheat sheets; do not create or restore the legacy `cheatsheets/` directory.
- When a page could fit multiple subjects, choose the subject that best matches its primary audience and index it once.
- Keep page Markdown VitePress-compatible: pages are compiled as Vue templates, so wrap bare `<tag>`-style text and `{{ }}` in inline code or code fences.
- Prefer LaTeX notation for mathematical formulas and expressions in reference content, using inline math for short expressions and display math for standalone formulas. VitePress math rendering is enabled through MathJax.

## Site Navigation

The page index lives in two places, which must stay in sync: the sidebar in `.vitepress/config.mts` and the categorized page index in `docs/index.md`. `README.md` is a short project intro and does not index pages.

- When adding a Markdown page, add it to both the sidebar and the `docs/index.md` page index in the same change. Use site-absolute links without the `.md` extension, such as `/cheat-sheets/docker`.
- When substantially changing an existing page's purpose, title, scope, location, or organization, update its sidebar text and its `docs/index.md` link text and description as needed.
- Keep entries grouped with the existing category structure and use the established link-and-description format in `docs/index.md`.
- Keep every reference Markdown page indexed exactly once in the sidebar and exactly once in `docs/index.md`.
- Use the page's primary type when choosing its `docs/index.md` description, without duplicating the full taxonomy for every link.
- Run `npm run build` to verify; the build fails on dead internal links.

## Commit Messages

- Follow the Conventional Commits rules in `docs/style-guides/git-commit-conventions.md`.
- `.github/commit-instructions.md` is the condensed copy used by the VS Code "Generate Commit Message" feature (configured in `.vscode/settings.json`); keep it in sync if the style guide changes.
