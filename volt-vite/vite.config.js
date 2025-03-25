import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  resolve: {
    alias: [
      { find: /^@\/volt\/(.*)(?<!\.vue)$/, replacement: path.resolve(__dirname, './src/volt/$1/index.vue') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  }
});
