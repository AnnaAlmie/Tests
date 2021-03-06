require('dotenv').config;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tests',
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
    '~/node_modules/normalize.css/normalize.css',
    '~/assets/scss/main.scss'
  ],
  styleResources: {
    scss: [
        '~/assets/scss/_*.scss'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vee-validate.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss', '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', 
    '@nuxtjs/auth', 
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          type: 'Bearer',
          required: true
        },
        user: {
          property: 'user',
          autoFetch: true
        }, 
        endpoints: {
          // propertyName: 'the name of the token object that comes back from this API request'
          login: { url: `${process.env.COMPU_API}/auth/login`, method: 'post', propertyName: 'accessToken' },
          logout: { url: `${process.env.COMPU_API}/auth/login`, method: 'get' },
          user: { url: `${process.env.COMPU_API}/auth/me`, method: 'get', propertyName: '' }
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  }
}
