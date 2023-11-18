export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tour orient & Travel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/static/icon/logo.png' }
    ]
  },

  router: {
    middleware: ['redirect']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  target: 'static',

  ssr: false,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['uz', 'en', 'ru'],
    parsePages: false,
    defaultLocale: 'uz',
    vueI18n: {
      fallbackLocale: 'uz',
      messages: {
        en: {
          localTime: 'Local time',
        },
        uz: {
          localTime: 'Mahalliy vaqt',
        },
        ru: {
          welcome: 'Добро пожаловать',
        }
      }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
  }
}