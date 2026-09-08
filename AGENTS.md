# Repository Instructions

## Repository Organization

This repository is a curated software-developer reference collection. Organize content along two dimensions:

- **Subject/category:** The topic or domain, such as Git, Docker, Azure, Linux, or Matplotlib.
- **Page type:** The form and intended use of the information, such as a cheat sheet, procedure, troubleshooting guide, overview, style guide, or code example.

Keep the README navigation organized primarily by subject. Make each page's primary type clear from its title, opening description, structure, and README description. A page may combine types when that reflects its purpose; for example, a procedure may include a troubleshooting section.

### Page Types

- **Cheat sheet / quick reference:** Compact commands, syntax, options, or common workflows. Current examples include Anaconda, uv and Python, and Docker.
- **Guide / procedure / runbook:** Ordered steps with prerequisites, execution details, and verification. Current examples include Ubuntu firmware updates and Git repository initialization.
- **Troubleshooting guide:** Symptoms, diagnosis, remediation, verification, and relevant security caveats. The focused current example is Docker group troubleshooting.
- **Conceptual overview / decision guide:** Concepts, boundaries, tradeoffs, and selection criteria. The current example is the Azure App Service overview.
- **Style or convention guide:** Rules, structure, examples, and best practices. The current example is Git commit conventions.
- **Code example / recipe:** A focused implementation example for a library, API, or task. Current examples include the Matplotlib bar and line chart pages.

### Current Page Classification

- `system-administration/linux/ubuntu/firmware-updates.md` — guide/procedure/runbook with troubleshooting
- `style-guides/git-commit-conventions.md` — style/convention guide
- `cloud-platforms/azure/app-service-overview.md` — conceptual overview and decision guide
- `cheat-sheets/anaconda.md` — command cheat sheet
- `cheat-sheets/uv-python.md` — tool/workflow quick reference
- `cheat-sheets/docker.md` — command and configuration cheat sheet
- `cheat-sheets/docker-group.md` — focused troubleshooting guide with remediation and security notes
- `cheat-sheets/matplotlib.pyplot/bar-chart.md` — focused code example/recipe
- `cheat-sheets/matplotlib.pyplot/line-chart.md` — focused code example/recipe
- `cheat-sheets/git.md` — Git repository initialization procedure/guide

### Potential Future Page Types

Consider adding these types when a real reference requires them:

- Architecture or design decision guide
- Operational checklist
- Security hardening guide
- Incident response or recovery runbook
- API or library reference

These are suggestions, not required categories. Do not add placeholder pages solely to represent a type.

## Content Rules

- Place a page under the subject directory that best matches its primary topic.
- Use a descriptive, specific filename in lowercase kebab-case.
- Use the canonical `cheat-sheets/` directory for cheat sheets; do not create or restore the legacy `cheatsheets/` directory.
- When a page could fit multiple subjects, choose the subject that best matches its primary audience and link it once in the README.

## README Page Index

- When adding a Markdown page, add a descriptive relative link to it in the appropriate section of `README.md` in the same change.
- When substantially changing an existing page's purpose, title, scope, location, or organization, update its corresponding `README.md` link text and description as needed.
- Keep README entries grouped with the existing category structure and use the repository's established link-and-description format.
- Do not add duplicate README entries for the same page.
- Keep every reference Markdown page indexed exactly once in `README.md`.
- Use the page's primary type when choosing its README description, without duplicating the full taxonomy for every link.
