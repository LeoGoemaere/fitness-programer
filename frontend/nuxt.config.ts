// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  components: {
    dirs: [
      '~/components/exercices',
      '~/components/trainings',
      '~/components/header',
    ]
  },
  ui: {
    icons: ['solar'] // Collection font name
  },
  css: [
    '~/assets/scss/style.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/abstracts/_variables.scss" as *;
          `
        }
      }
    }
  },

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ]
})