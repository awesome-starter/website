import { home } from './home'
import type { Locales } from '@config/types'

export const messages: Record<
  Locales,
  Record<string, Record<string, string>>
> = {
  /**
   * English
   */
  en: {
    home: { ...home.en },
  },

  /**
   * 简体中文
   */
  zh: {
    home: { ...home.zh },
  },
}
