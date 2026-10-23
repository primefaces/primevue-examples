export default defineNuxtConfig({
    modules: ["@primevue/nuxt-module"],
    css: ["@/assets/styles/tailwind.css", "@/assets/styles/base.css", "primeicons/primeicons.css"],
    primevue: {
        options: {
            theme: "none",
        },
    },
    postcss: {
        plugins: {
            "postcss-import": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    compatibilityDate: "2025-02-26",
});
