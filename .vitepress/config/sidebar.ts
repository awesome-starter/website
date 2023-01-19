import type { DefaultTheme } from 'vitepress'
import type { Locales } from './types'

export const sidebar: Record<Locales, DefaultTheme.Sidebar> = {
  /**
   * English
   */
  en: {
    guide: [
      {
        text: '指引',
        items: [
          { text: '快速上手', link: '/guide/' },
          { text: '常见问题', link: '/guide/faq' },
        ],
      },
    ],

    /**
     * @lunarxyz/core
     */
    core: [
      {
        text: '开始',
        items: [{ text: '使用说明', link: '/core/' }],
      },
      {
        text: '核心类',
        items: [
          { text: 'useAuth', link: '/core/product/auth/' },
          { text: 'useSMS', link: '/core/product/sms/' },
        ],
      },
      {
        text: '环境类',
        items: [{ text: 'useENV', link: 'core/env/' }],
      },
      {
        text: '网络类',
        items: [
          { text: 'useAxios', link: '/core/network/axios/' },
          { text: 'useUpload', link: '/core/network/upload/' },
          { text: 'useDownload', link: '/core/network/download/' },
          { text: 'useFile', link: '/core/network/file/' },
          { text: 'useQuery', link: '/core/network/query/' },
        ],
      },
      {
        text: '显示类',
        items: [{ text: 'useFormat', link: '/core/display/format/' }],
      },
      {
        text: '交互类',
        items: [{ text: 'useClipboard', link: '/core/interactive/clipboard/' }],
      },
      {
        text: '工具类',
        items: [
          { text: 'useDataType', link: '/core/utils/data/' },
          { text: 'useStorage', link: '/core/utils/storage/' },
          { text: 'useRandom', link: '/core/utils/random/' },
          { text: 'useRegExp', link: '/core/utils/regexp/' },
          { text: 'useLodash', link: '/core/utils/lodash/' },
        ],
      },
    ],

    /**
     * @lunarxyz/components
     */
    components: [
      {
        text: '开始',
        items: [{ text: '使用说明', link: '/components/' }],
      },
      {
        text: '验证码组件',
        items: [{ text: 'CaptchaCode', link: '/components/CaptchaCode/' }],
      },
      {
        text: '登录组件',
        items: [
          { text: 'LoginPopup', link: '/components/LoginPopup/' },
          { text: 'LoginDialog', link: '/components/LoginDialog/' },
        ],
      },
    ],
  },

  /**
   * 简体中文
   */
  zh: {
    guide: [
      {
        text: '指引',
        items: [
          { text: '快速上手', link: '/guide/' },
          { text: '常见问题', link: '/guide/faq' },
        ],
      },
    ],

    /**
     * @lunarxyz/core
     */
    core: [
      {
        text: '开始',
        items: [{ text: '使用说明', link: '/core/' }],
      },
      {
        text: '核心类',
        items: [
          { text: 'useAuth', link: '/core/product/auth/' },
          { text: 'useSMS', link: '/core/product/sms/' },
        ],
      },
      {
        text: '环境类',
        items: [{ text: 'useENV', link: 'core/env/' }],
      },
      {
        text: '网络类',
        items: [
          { text: 'useAxios', link: '/core/network/axios/' },
          { text: 'useUpload', link: '/core/network/upload/' },
          { text: 'useDownload', link: '/core/network/download/' },
          { text: 'useFile', link: '/core/network/file/' },
          { text: 'useQuery', link: '/core/network/query/' },
        ],
      },
      {
        text: '显示类',
        items: [{ text: 'useFormat', link: '/core/display/format/' }],
      },
      {
        text: '交互类',
        items: [{ text: 'useClipboard', link: '/core/interactive/clipboard/' }],
      },
      {
        text: '工具类',
        items: [
          { text: 'useDataType', link: '/core/utils/data/' },
          { text: 'useStorage', link: '/core/utils/storage/' },
          { text: 'useRandom', link: '/core/utils/random/' },
          { text: 'useRegExp', link: '/core/utils/regexp/' },
          { text: 'useLodash', link: '/core/utils/lodash/' },
        ],
      },
    ],

    /**
     * @lunarxyz/components
     */
    components: [
      {
        text: '开始',
        items: [{ text: '使用说明', link: '/components/' }],
      },
      {
        text: '验证码组件',
        items: [{ text: 'CaptchaCode', link: '/components/CaptchaCode/' }],
      },
      {
        text: '登录组件',
        items: [
          { text: 'LoginPopup', link: '/components/LoginPopup/' },
          { text: 'LoginDialog', link: '/components/LoginDialog/' },
        ],
      },
    ],
  },
}
