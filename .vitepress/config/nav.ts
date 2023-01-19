import type { DefaultTheme } from 'vitepress'
import type { Locales } from './types'

export const nav: Record<Locales, DefaultTheme.NavItem[]> = {
  /**
   * English
   */
  en: [
    {
      text: 'Guide',
      link: '/guide',
    },
    {
      text: 'Docs',
      link: '/docs',
    },
    {
      text: 'Release Notes',
      link: 'https://github.com/awesome-starter/create-preset/releases',
    },
  ],

  /**
   * 简体中文
   */
  zh: [
    {
      text: '指南',
      link: '/zh/guide',
    },
    {
      text: '文档',
      link: '/zh/docs',
    },
    {
      text: '更新记录',
      link: 'https://github.com/awesome-starter/create-preset/releases',
    },
  ],
}
