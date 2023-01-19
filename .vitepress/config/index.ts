import { defineConfig } from 'vitepress'
import banner from 'vite-plugin-banner'
import { nav } from './nav'
import { head } from './head'
import { sidebar } from './sidebar'
import pkg from '../../package.json'

export default defineConfig({
  base: '/',
  appearance: 'dark',
  lang: 'en-US',
  srcDir: 'docs',
  outDir: 'dist',
  title: 'Creare Preset',
  description: 'Provides the ability to quickly create preset projects.',
  head,
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Create Preset',
      description: 'Provides the ability to quickly create preset projects.',
      themeConfig: {
        nav: nav.en,
        sidebar: sidebar.en,
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Create Preset',
      description: '提供快速创建预设项目模板的能力。',
      themeConfig: {
        nav: nav.zh,
        sidebar: sidebar.zh,
      },
    },
  },
  themeConfig: {
    // algolia: {
    //   apiKey: 'your_api_key',
    //   indexName: 'index_name'
    // },
  },
  vite: {
    server: {
      port: 3618,
    },
    plugins: [
      banner({
        outDir: '../dist',
        content: [
          `/**`,
          ` * name: ${pkg.name}`,
          ` * version: v${pkg.version}`,
          ` * description: ${pkg.description}`,
          ` * author: ${pkg.author}`,
          ` * homepage: ${pkg.homepage}`,
          ` */`,
        ].join('\n'),
      }),
    ],
  },
})
