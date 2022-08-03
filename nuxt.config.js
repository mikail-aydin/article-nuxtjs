const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Home",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://bootswatch.com/4/sketchy/bootstrap.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#666', height: '3px', failedColor: 'red' },

  /*
  ** Global CSS
  */
  css: [
    // "~/assets/style/bootstrap.min.css",
    "~/assets/style/transition.css",
  ],

  env: {
    baseURL: "https://article-nuxtjs-project-test-default-rtdb.firebaseio.com/"
  },

  transition: {
    name: "layout",
    mode: "out-in",
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/Components.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios"
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
