import { defineConfig } from 'vitepress'
import banner from 'vite-plugin-banner'
import pkg from '../package.json'

export default defineConfig({
  base: '/',
  lang: 'en-US',
  srcDir: 'src',
  outDir: 'dist',
  title: 'Awesome Starter',
  description: 'A curated list of awesome things related to starter templates.',
  head: [
    [
      'script',
      {
        'src': 'https://hm.baidu.com/hm.js?c95969b938687c2ce025200e69df3707',
        'async': 'true',
      },
    ]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Awesome Starter',
      description: 'A curated list of awesome things related to starter templates.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Awesome Starter',
      description: '一个与项目模板相关的精选列表。',
    }
  },
  themeConfig: {
    repo: 'awesome-starter/create-preset',
    // algolia: {
    //   apiKey: 'your_api_key',
    //   indexName: 'index_name'
    // },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
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
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
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
    },
  },
  vite: {
    plugins: [
      banner({
        outDir: '../dist',
        content: `/**\n * name: ${pkg.name}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`,
      }),
    ],
  },
})
