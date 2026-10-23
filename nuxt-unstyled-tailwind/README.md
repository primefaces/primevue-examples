# PrimeVue unstyled with Nuxt and Tailwind CSS

A small [PrimeVue](https://primevue.dev) app built with Nuxt, with no PrimeVue theme loaded: a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. The components get their look from Tailwind CSS v3 classes instead.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/nuxt-unstyled-tailwind)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `nuxt.config.ts` adds `@primevue/nuxt-module` with `theme: 'none'`, so no PrimeVue theme styles are included. It also loads Tailwind and PrimeIcons.
- `assets/styles/primevue` holds the Tailwind styles for each component, and `tailwind.config.js` maps the `dark` variant to `.p-dark`.
- `components/dashboard` has the widgets.

Read more in the [PrimeVue unstyled mode guide](https://primevue.dev/theming/unstyled).
