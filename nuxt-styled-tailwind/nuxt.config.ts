// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["primevue/resources/themes/lara-dark-indigo/theme.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  primevue: {
    components: {
      include: ["Button"]
  }
}
});