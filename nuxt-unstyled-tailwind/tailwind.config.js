/** @type {import('tailwindcss').Config} */
import PrimeUI from "tailwindcss-primeui";

export default {
    darkMode: ['selector', '[class*="p-dark"]'],
    content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue", "./error.vue"],
    plugins: [PrimeUI],
};
