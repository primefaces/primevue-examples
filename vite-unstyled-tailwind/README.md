# PrimeVue unstyled with Tailwind CSS

A small [PrimeVue](https://primevue.dev) app with no PrimeVue theme loaded: a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. The components get their look from Tailwind CSS v3 classes instead.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/vite-unstyled-tailwind)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `src/main.js` sets up PrimeVue with `theme: 'none'` and loads Tailwind and PrimeIcons.
- `src/assets/tailwind.css` and `src/style.css` hold the styles the components use.
- `vite.config.js` adds `PrimeVueResolver`, so the templates use the components without import lines.

Read more in the [PrimeVue unstyled mode guide](https://primevue.dev/theming/unstyled).
