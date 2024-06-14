// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
    primevue: {
        importTheme: { from: "@/themes/my-theme.js" },
        components: {
            exclude: ["Editor", "Chart"],
        },
    },
});
