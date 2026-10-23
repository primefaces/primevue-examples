# PrimeVue with auto import

A small [PrimeVue](https://primevue.dev) app where every component is imported automatically: a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. The templates use tags such as `<Button>` and `<DataTable>`, and the build adds the imports.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/auto-import)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `vite.config.js` registers `unplugin-vue-components` with `PrimeVueResolver` from `@primevue/auto-import-resolver`.
- `src/main.js` sets up PrimeVue with the Aura preset.
- `src/components/dashboard` holds the widgets, written without component imports.

Read more in the [PrimeVue auto import guide](https://primevue.dev/autoimport).
