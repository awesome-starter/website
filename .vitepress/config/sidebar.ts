import type { DefaultTheme } from 'vitepress'
import type { Locales } from './types'

export const sidebar: Record<Locales, DefaultTheme.Sidebar> = {
  /**
   * English
   */
  en: [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Getting Started', link: '/guide/' },
      ],
    },
    {
      text: 'Docs',
      items: [
        { text: 'Basic Usage', link: '/docs/basic-usage' },
        { text: 'Starter Template', link: '/docs/starter-template' },
        { text: 'Technology Stack', link: '/docs/technology-stack' },
        { text: 'Local Configuration', link: '/docs/local-configuration' },
        { text: 'Proxy Download', link: '/docs/proxy-download' },
        { text: 'CLI Upgrade', link: '/docs/cli-upgrade' },
      ],
    },
  ],

  /**
   * 简体中文
   */
  zh: [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/zh/guide/introduction' },
        { text: 'Getting Started', link: '/zh/guide/' },
      ],
    },
    {
      text: 'Documentation',
      items: [
        { text: 'Create Preset', link: '/zh/docs/create' },
        { text: 'Template', link: '/zh/docs/template' },
        { text: 'Configure', link: '/zh/docs/local-configuration' },
        { text: 'Proxy', link: '/zh/docs/proxy' },
        { text: 'Upgrade', link: '/zh/docs/upgrade' },
      ],
    },
  ],
}
