# PrimeVue with Nuxt and Tailwind CSS

A small [PrimeVue](https://primevue.dev) app built with Nuxt, using the Aura preset and Tailwind CSS v3: a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. `tailwindcss-primeui` lets the Tailwind utilities use the PrimeVue colors.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/nuxt-styled-tailwind)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `nuxt.config.ts` adds `@nuxtjs/tailwindcss` and `@primevue/nuxt-module` with the Aura preset, and registers the `tailwindcss-primeui` plugin.
- `app.vue` lays out the page.
- `components/dashboard` holds the widgets.

Read more in the [PrimeVue Tailwind guide](https://primevue.dev/tailwind).
