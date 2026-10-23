# PrimeVue with Nuxt

A small [PrimeVue](https://primevue.dev) app built with Nuxt: a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. The PrimeVue Nuxt module sets up the Aura preset and imports the components, and Tailwind CSS v4 handles the page layout.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/nuxt-quickstart)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `nuxt.config.ts` adds `@primevue/nuxt-module` with the Aura preset and `autoImport: true`, and the `@tailwindcss/vite` plugin.
- `app.vue` lays out the page.
- `composables/use-layout.js` switches dark mode and changes the colors at runtime.

Read more in the [PrimeVue Nuxt guide](https://primevue.dev/nuxt).
