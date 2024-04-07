const colors = require('vuetify/es5/util/colors').default;

module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-demo',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuetify'
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/vuetify'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/vuetify'
  ],
      /*
    ** vuetify module configuration
    ** https://github.com/nuxt-community/vuetify-module
    */
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //       dark: true,
  //       themes: {
  //           dark: {
  //               primary: colors.blue.darken2,
  //               accent: colors.grey.darken3,
  //               secondary: colors.amber.darken3,
  //               info: colors.teal.lighten1,
  //               warning: colors.amber.base,
  //               error: colors.deepOrange.accent4,
  //               success: colors.green.accent3
  //           }
  //       }
  //   }
  // },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: false,
    defaultAssets: {
      font: false,
      icons: 'mdiSvg',
    },
    theme: {
      dark: true,
      themes: {
          dark: {
              primary: '#3f51b5',
              accent: '#8c9eff',
              secondary: '#b0bec5',
              error: '#b71c1c'
              // info: colors.teal.lighten1,
              // warning: colors.amber.base,
              // success: colors.green.accent3
          }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  serverMiddleware: [
    '~/api/index.js'
  ],
}
