import { watch } from 'vue'
import { inBrowser, useData } from 'vitepress'
import defaultTheme from 'vitepress/theme'
import { createI18n } from 'vue-i18n'
import { createVitePressBaiduAnalytics } from '@web-analytics/vue'
import { messages } from './locales'
import { redirect } from './plugins/redirect'
import 'uno.css'
import './styles/global.css'
import type { Theme } from 'vitepress'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'zh',
  messages,
})

const { baiduAnalytics, registerBaiduAnalytics } =
  createVitePressBaiduAnalytics()

const theme: Theme = {
  ...defaultTheme,
  enhanceApp({ app, router }) {
    app.use(i18n)

    if (inBrowser) {
      redirect()

      registerBaiduAnalytics(app, {
        websiteIds: [
          '8dca8e2532df48ea7f1b15c714588691', // Main site
          'c95969b938687c2ce025200e69df3707', // This site
        ],
        debug: true,
      })

      window.addEventListener('hashchange', () => {
        baiduAnalytics.trackPageview({
          pageUrl: window.location.href,
        })
      })

      router.onAfterRouteChanged = (to) => {
        baiduAnalytics.trackPageview({
          pageUrl: to,
        })
      }
    }
  },
  setup() {
    const { lang } = useData()
    watch(
      lang,
      (val) => {
        i18n.global.locale = val as any
      },
      { immediate: true }
    )
  },
}

export default theme
