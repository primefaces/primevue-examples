// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
    primevue: {
        usePrimeVue: true,
        importTheme: { from: "@/themes/my-theme.js" },
        components: {
            exclude: ["Editor", "Chart"],
        },
    },
});
