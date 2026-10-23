# PrimeVue with Vite and TypeScript

The same small [PrimeVue](https://primevue.dev) app as the Vite example, written in TypeScript: a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. It uses styled mode with the Aura preset, and the components are imported automatically.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/vite-ts-quickstart)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `src/main.ts` sets up PrimeVue with the Aura preset.
- `vite.config.ts` adds `PrimeVueResolver`, so the templates use the components without import lines.
- `src/composables/useLayout.js` switches dark mode and changes the colors at runtime.

Read more in the [PrimeVue Vite guide](https://primevue.dev/vite).
