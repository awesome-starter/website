import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import unocss from 'unocss/vite'
import banner from 'vite-plugin-banner'
import { nav } from './nav'
import { head } from './head'
import { sidebar } from './sidebar'
import pkg from '../../package.json'

const pattern =
  'https://github.com/awesome-starter/website/edit/main/docs/:path'

export default defineConfig({
  base: '/',
  appearance: 'dark',
  lang: 'en-US',
  srcDir: 'docs',
  outDir: 'dist',
  title: 'Creare Preset',
  description: 'Provides the ability to quickly create preset projects.',
  head,
  cleanUrls: 'without-subfolders',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Create Preset',
      description: 'Provides the ability to quickly create preset projects.',
      themeConfig: {
        nav: nav.en,
        sidebar: sidebar.en,
        editLink: {
          pattern,
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      title: 'Create Preset',
      description: '提供快速创建预设项目模板的能力。',
      themeConfig: {
        nav: nav.zh,
        sidebar: sidebar.zh,
        editLink: {
          pattern,
          text: '编辑本页内容',
        },
        outlineTitle: '本页导航',
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
      },
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/awesome-starter/create-preset',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: [
        'Copyright',
        '©',
        '2022-PRESENT',
        '<a href="https://github.com/chengpeiquan" target="_blank">@chengpeiquan</a>',
      ].join(' '),
    },
  },
  vite: {
    server: {
      port: 3618,
    },
    resolve: {
      alias: {
        '@config': resolve(__dirname, '../config'),
        '@theme': resolve(__dirname, '../theme'),
      },
    },
    plugins: [
      unocss(),
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
