import { watch } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createI18n } from 'vue-i18n'
import { messages } from './locales'
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
  enhanceApp({ app }) {
    app.use(i18n)
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
