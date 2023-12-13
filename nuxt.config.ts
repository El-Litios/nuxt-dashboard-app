// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
    '@vueuse/nuxt'
  ],
  tailwindcss: {exposeConfig: true},
  headlessui: { prefix: 'H' },
  app: {
    head: {
      title: 'Analytics',
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/icon.svg'},
        {rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css'},
        {rel: 'stylesheet', href: 'https://rsms.me/'}

      ]
    }
  }
})
