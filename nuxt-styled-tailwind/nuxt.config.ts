// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";
import PrimeUI from "tailwindcss-primeui";

export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
    primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: ".p-dark",
                },
            },
            ripple: true,
        },
        autoImport: true,
    },
    css: ["primeicons/primeicons.css"],
    tailwindcss: {
        config: {
            plugins: [PrimeUI],
            darkMode: ["class", ".p-dark"],
        },
    },
});
