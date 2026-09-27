// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },

  ui: {
    global: true
  },

  i18n: {
    locales: [
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.ts' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.ts' }
    ],
    langDir: 'locales/',
    defaultLocale: 'de',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'linden_locale',
      redirectOn: 'root',
      alwaysRedirect: false
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  typescript: {
    strict: true
  },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  }
})
