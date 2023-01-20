import type { Locales } from '@config/types'

export const home: Record<Locales, Record<string, string>> = {
  /**
   * English
   */
  en: {
    name: 'Create Preset',
    description: 'Provides the ability to quickly create preset projects.',
  },

  /**
   * 简体中文
   */
  zh: {
    name: 'Create Preset',
    description: '提供快速创建预设项目的能力。',
  },
}
