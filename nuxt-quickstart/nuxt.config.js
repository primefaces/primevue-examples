export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt App",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  devtools: { enabled: false },
  css: [
    "@/assets/main.css",
    "primeicons/primeicons.css",
  ],
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      ripple: true
    },
    importTheme: { from: "@/themes/my-theme.js" },
    components: {
      include: ["InputText", "Button", "FloatLabel"]
    }
  }
});
