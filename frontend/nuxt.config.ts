// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    appManifest: true
  },
  ssr: false,
  app: {
     baseURL: '/fitness-programer/',
     head: {
      title: 'Fitness Programmer',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  },
  pwa: {
    manifest: {
      name: 'Fitness Programmer App'
    }
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
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    "@vite-pwa/nuxt"
  ],
  piniaPersistedstate: {
    storage: 'localStorage'
  },
})