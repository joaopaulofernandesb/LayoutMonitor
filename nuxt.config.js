import colors from 'vuetify/es5/util/colors'



export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
    ]
  },

  manifest: {
    name: 'Air Ticket Beta',
    short_name: 'Air Ticket Beta',
    lang: 'pt-BR',
    start_url: "/",
    display: "standalone",
  orientation: "portrait",
  ackground_color: "#fff",
  theme_color: "#fff",
    // "icons": [
    //   {
    //     "src": "./icon/icon-1x.png",
    //     "type": "image/png",
    //     "sizes": "48x48"
    //   },
    //   {
    //     "src": "./icon/icon-2x.svg",
    //     "type": "image/svg",
    //     "sizes": "96x96"
    //   },
    //   {
    //     "src": "./icon/apple-touch-icon.png",
    //     "type": "image/png",
    //     "sizes": "180x180"
    //   },
    //   {
    //     "src": "./icon/5x.png",
    //     "type": "image/png",
    //     "sizes": "512x512 px"
    //   },
    //   {
    //     "src": "./icon/4x.png",
    //     "type": "image/png",
    //     "sizes": "192x192"
    //   },
     
    // ],
    icons: [
      {
      src: "./icons/icon-72x72.png",
      sizes: "72x72",
      type: "image/png"
      },
      {
      src: "./icons/icon-96x96.png",
      sizes: "96x96",
      type: "image/png"
      },
      {
      src: "./icons/icon-128x128.png",
      sizes: "128x128",
      type: "image/png"
      },
      {
      src: "./icons/icon-144x144.png",
      sizes: "144x144",
      type: "image/png"
      },
      {
      src: "./icons/icon-152x152.png",
      sizes: "152x152",
      type: "image/png"
      },
      {
      src: "./icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
      },
      {
      src: "./icons/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
      },
      {
      src: "./icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
      }
      ],
    splash_pages: null
  },



  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],

  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
