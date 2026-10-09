// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'app/',
  dir: {
    public: '../public'
  },
  css: ['~/assets/css/main.css'],
  ssr: true,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [300, 400, 500, 600, 700, 800]
    }
  }
})
