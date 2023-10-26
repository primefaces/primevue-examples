// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "nuxt-primevue"],
  primevue: {
    options: { unstyled: true },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    components: {
      exclude: ["Editor", "Chart"]
    }
  },
})
