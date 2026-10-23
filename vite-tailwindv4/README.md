# PrimeVue with Tailwind CSS v4

A small [PrimeVue](https://primevue.dev) app that uses Tailwind CSS v4 next to the Aura preset: a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. Tailwind handles the page layout, and `tailwindcss-primeui` lets its utilities use the PrimeVue colors.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/vite-tailwindv4)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `vite.config.js` adds the `@tailwindcss/vite` plugin and `PrimeVueResolver`.
- `src/assets/styles/main.css` imports Tailwind and the `tailwindcss-primeui` plugin.
- `src/main.js` sets up PrimeVue with the Aura preset.

Read more in the [PrimeVue Tailwind guide](https://primevue.dev/tailwind).
