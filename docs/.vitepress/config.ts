import { defineConfig } from 'vitepress'
import banner from 'vite-plugin-banner'
import pkg from '../../package.json'

// Specify the output directory for packaging
const outDir = '../dist'

export default defineConfig({
  base: '/',
  lang: 'en-US',
  outDir,
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
  themeConfig: {
    repo: 'awesome-starter/create-preset',
    nav: [
      {
        text: 'Guide',
        link: '/guide'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/awesome-starter/create-preset/releases'
      },
    ],
  },
  vite: {
    plugins: [
      banner({
        outDir,
        content: `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`,
      }),
    ],
  },
})