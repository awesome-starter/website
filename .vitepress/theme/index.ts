import { watch } from 'vue'
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createI18n } from 'vue-i18n'
import { messages } from './locales'
import { siteIds, registerAnalytics, trackPageview } from './plugins/analytics'
import { redirect } from './plugins/redirect'
import 'uno.css'
import './styles/global.css'
import type { Theme } from 'vitepress'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'zh',
  messages,
})

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.use(i18n)

    if (inBrowser) {
      redirect()

      siteIds.forEach((id) => registerAnalytics(id))

      window.addEventListener('hashchange', () => {
        const { href: url } = window.location
        siteIds.forEach((id) => trackPageview(id, url))
      })

      router.onAfterRouteChanged = (to) => {
        siteIds.forEach((id) => trackPageview(id, to))
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
