// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons',
      },
    ],
  },
  postcss:{
    plugins:{
      'postcss-nested':{}
    }
  },
  // -- page-transition --
  // app:{
  //   pageTransition:{
  //     name: 'page',
  //     mode: 'out-in',
  //   }
  // },
  // -- layout-transition --
  // app:{
  //   layoutTransition:{
  //     name: 'layout',
  //     mode: 'out-in',
  //   }
  // },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
  ],
})