import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({
    presets: [
      presetUno(),
      presetAttributify()
    ],
    include: ["./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"]
  })]
})