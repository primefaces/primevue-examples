export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'primevue/resources/themes/lara-dark-teal/theme.css'
  ],
  build: {
    transpile: ['primevue']
  }
})
