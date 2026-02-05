// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxtjs/mdc'],
  strapi: {
    url: 'http://51.83.76.32:1337',
      prefix: '/api',
      version: 'v5',
  }
})