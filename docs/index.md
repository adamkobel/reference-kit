---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Reference Kit"
  text: "A curated collection of software engineering and data science knowledge"
  tagline: Memorize less. Reference more.
  actions:
    - theme: brand
      text: Browse Cheat Sheets
      link: /cheat-sheets/anaconda
    - theme: alt
      text: Cloud Platforms
      link: /cloud-platforms/azure/app-service-overview

features:
  - icon: 🛠️
    title: System Administration
    details: Procedures and runbooks for maintaining Linux systems.
    link: /system-administration/linux/ubuntu/firmware-updates
  - icon: 📚
    title: Style Guides
    details: Conventions and best practices for consistent engineering work.
    link: /style-guides/git-commit-conventions
  - icon: ☁️
    title: Cloud Platforms
    details: Conceptual overviews and decision guides for cloud services.
    link: /cloud-platforms/azure/app-service-overview
  - icon: 🧾
    title: Cheat Sheets
    details: Quick references, troubleshooting guides, and code recipes.
    link: /cheat-sheets/anaconda
---

<!-- Keep in sync with the sidebar in .vitepress/config.mts -->

## 🛠️ System Administration
### Linux
#### Ubuntu
- [Firmware Updates](/system-administration/linux/ubuntu/firmware-updates) — Steps for checking and applying firmware updates with `fwupd`

### Windows
- [PowerShell Profile](/system-administration/windows/powershell-profile) — Guide to creating a PowerShell profile with a `workspace` command that changes into your workspace directory

## 💻 Languages & Runtimes
### JavaScript
- [CommonJS vs ES Modules](/languages/javascript/module-systems-overview) — Conceptual overview of why JavaScript has two module systems, how they differ, and how to fix common errors

## 📚 Style Guides
- [Git Commit Conventions](/style-guides/git-commit-conventions) — Guidelines for writing clear commit messages

## ☁️ Cloud Platforms
### Azure
- [App Service Overview](/cloud-platforms/azure/app-service-overview) — High-level guide to Azure App Service, App Service Plans, scaling, deployment, networking, and operations
- [Azure Functions Overview](/cloud-platforms/azure/functions-overview) — Conceptual overview of Azure Functions, hosting plans, triggers, execution, networking, and operations

### Snowflake
- [Cortex Overview](/cloud-platforms/snowflake/cortex-overview) — Overview of Cortex AI functions, search, analytics, agents, governance, costs, and when to use Snowflake-managed AI features

## 📊 Data Science
- [Probability Fundamentals](/data-science/probability-fundamentals) — Overview of probability, core rules, and how probability is used with data
- [Probability Frequency Distribution](/data-science/probability-frequency-distribution) — Frequency tables with counts and relative frequencies

## 🧾 Cheat Sheets
- [Anaconda](/cheat-sheets/anaconda) — Quick conda commands and tips
- [uv and Python](/cheat-sheets/uv-python) — Install uv and manage Python projects, environments, and tools
- [Docker](/cheat-sheets/docker) — Quick Docker commands and examples
- [Docker: Add User to Docker Group](/cheat-sheets/docker-group) — Fix Docker socket permission errors without using `sudo`
- [Git Repository Initialization](/cheat-sheets/git) — Procedure for initializing a repository and pushing it to GitHub
- [Linux File Permissions](/cheat-sheets/linux-file-permissions) — Inspect and change Linux permissions, ownership, special bits, and default modes
- [NVM Essentials](/cheat-sheets/nvm) — Install NVM and manage Node.js versions on macOS and Windows
- [Snowflake CLI](/cheat-sheets/snowflake-cli) — Configure a connection and run SQL with Snowflake's `snow` CLI
- Matplotlib (`matplotlib.pyplot`)
  - [Bar chart](/cheat-sheets/matplotlib.pyplot/bar-chart) — Example for creating a bar chart with `matplotlib.pyplot`
  - [Line chart](/cheat-sheets/matplotlib.pyplot/line-chart) — Example for creating a line chart with `matplotlib.pyplot`
