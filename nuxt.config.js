require('dotenv').config()

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Heralds Of Eternity',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Heralds of Eternity is a team-based multi-type & multiplayer game, with a twist.',
      },
      { property: 'og:site_name', content: 'Heralds Of Eternity' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://heraldsofeternity.com',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Heralds of Eternity is a team-based multi-type & multiplayer game, with a twist.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Heralds Of Eternity',
      },
      { property: 'og:type', content: 'application/javascript' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['./plugins/v-tooltip'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            flag: 'us',
            iso: 'en-US',
            file: 'en-US.js',
          },
          {
            code: 'da',
            flag: 'dk',
            iso: 'da-DK',
            file: 'da-DK.js',
          },
        ],
        defaultLocale: 'en',
        seo: true,
        lazy: true,
        langDir: 'lang/',
      },
    ],
    'nuxt-leaflet',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
