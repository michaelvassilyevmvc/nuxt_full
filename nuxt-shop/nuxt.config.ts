// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  runtimeConfig:{
    public:{
      apiurl:"",
      imageurl:""
    },
    token:"",
  },
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
  app:{
    head:{
      link:[
        {
          rel:'stylesheet',
          href:'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
        }
      ]
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
    '@nuxtjs/tailwindcss',
  ],
})