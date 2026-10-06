import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  // Served from https://adamkobel.github.io/reference-kit/
  base: "/reference-kit/",
  vite: {
    optimizeDeps: {
      exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client', 'vitepress', '@nolebase/ui']
    },
    ssr: {
      noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities', '@nolebase/ui']
    }
  },
  markdown: {
    math: true
  },

  title: "Reference Kit",
  description: "A curated collection of software engineering and data science knowledge",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'System Administration', link: '/system-administration/linux/ubuntu/firmware-updates' },
      { text: 'Style Guides', link: '/style-guides/git-commit-conventions' },
      { text: 'Cloud Platforms', link: '/cloud-platforms/azure/app-service-overview' },
      { text: 'Cheat Sheets', link: '/cheat-sheets/anaconda' }
    ],

    // Keep in sync with the page index in docs/index.md
    sidebar: [
      {
        text: '🛠️ System Administration',
        collapsed: false,
        items: [
          {
            text: 'Linux',
            items: [
              {
                text: 'Ubuntu',
                items: [
                  { text: 'Firmware Updates', link: '/system-administration/linux/ubuntu/firmware-updates' }
                ]
              }
            ]
          },
          {
            text: 'Windows',
            items: [
              { text: 'PowerShell Profile', link: '/system-administration/windows/powershell-profile' }
            ]
          }
        ]
      },
      {
        text: '💻 Languages & Runtimes',
        collapsed: false,
        items: [
          {
            text: 'JavaScript',
            items: [
              { text: 'CommonJS vs ES Modules', link: '/languages/javascript/module-systems-overview' }
            ]
          }
        ]
      },
      {
        text: '📚 Style Guides',
        collapsed: false,
        items: [
          { text: 'Git Commit Conventions', link: '/style-guides/git-commit-conventions' }
        ]
      },
      {
        text: '☁️ Cloud Platforms',
        collapsed: false,
        items: [
          {
            text: 'Azure',
            items: [
              { text: 'App Service Overview', link: '/cloud-platforms/azure/app-service-overview' },
              { text: 'Azure Functions Overview', link: '/cloud-platforms/azure/functions-overview' }
            ]
          },
          {
            text: 'Snowflake',
            items: [
              { text: 'Cortex Overview', link: '/cloud-platforms/snowflake/cortex-overview' }
            ]
          }
        ]
      },
      {
        text: '➗ Mathematics',
        collapsed: false,
        items: [
          {
            text: 'Probability',
            collapsed: false,
            items: [
              { text: 'Probability Fundamentals', link: '/mathematics/probability/fundamentals' },
              { text: 'Complements in Probability', link: '/mathematics/probability/complements' },
              {
                text: 'Combinatorics',
                link: '/mathematics/probability/combinatorics',
                items: [
                  { text: 'Permutations', link: '/mathematics/probability/combinatorics/permutations' },
                  { text: 'Variations', link: '/mathematics/probability/combinatorics/variations' },
                  { text: 'Combinations', link: '/mathematics/probability/combinatorics/combinations' }
                ]
              }
            ]
          }
        ]
      },
      {
        text: '📊 Data Science',
        collapsed: false,
        items: [
          { text: 'Frequency Distribution', link: '/data-science/frequency-distribution' }
        ]
      },
      {
        text: '🧾 Cheat Sheets',
        collapsed: false,
        items: [
          { text: 'Anaconda', link: '/cheat-sheets/anaconda' },
          { text: 'uv and Python', link: '/cheat-sheets/uv-python' },
          { text: 'Docker', link: '/cheat-sheets/docker' },
          { text: 'Docker: Add User to Docker Group', link: '/cheat-sheets/docker-group' },
          { text: 'Git Repository Initialization', link: '/cheat-sheets/git' },
          { text: 'Linux File Permissions', link: '/cheat-sheets/linux-file-permissions' },
          { text: 'NVM Essentials', link: '/cheat-sheets/nvm' },
          { text: 'Snowflake CLI', link: '/cheat-sheets/snowflake-cli' },
          {
            text: 'Matplotlib (matplotlib.pyplot)',
            collapsed: false,
            items: [
              { text: 'Bar chart', link: '/cheat-sheets/matplotlib.pyplot/bar-chart' },
              { text: 'Line chart', link: '/cheat-sheets/matplotlib.pyplot/line-chart' }
            ]
          }
        ]
      }
    ],

    outline: 'deep',

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/adamkobel/reference-kit' }
    ]
  }
})
