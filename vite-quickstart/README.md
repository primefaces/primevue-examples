# PrimeVue with Vite

A small [PrimeVue](https://primevue.dev) app built with Vite: a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. It uses styled mode with the Aura preset, and the components are imported automatically.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/vite-quickstart)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `src/main.js` sets up PrimeVue with the Aura preset and the `.p-dark` dark mode selector.
- `vite.config.js` adds `PrimeVueResolver`, so the templates use components such as `<Button>` and `<DataTable>` without import lines.
- `src/composables/useLayout.js` switches dark mode and changes the colors with `updatePrimaryPalette` and `updateSurfacePalette`.

Read more in the [PrimeVue Vite guide](https://primevue.dev/vite).
