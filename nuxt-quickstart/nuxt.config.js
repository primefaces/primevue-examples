export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt App",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  devtools: { enabled: false },
  css: [
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "@/assets/main.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
