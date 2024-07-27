import * as path from "path";

export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
    primevue: {
        options: { unstyled: true },
        importPT: { from: path.resolve(__dirname, "./presets/aura/") }
    },
    tailwindcss: {
        config: {
            plugins: [require('tailwindcss-primeui')],
            content: ["./presets/**/*.{js,vue,ts}"],
        }
    }
});
