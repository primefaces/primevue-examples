# Volt with Vite

A small app built with [Volt](https://volt.primevue.org), the PrimeVue components styled with Tailwind CSS v4. It has a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. The Volt components are plain files in the project, so their Tailwind classes can be edited directly.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/volt-vite)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `src/volt` holds the Volt components, such as `Button.vue` and `DataTable.vue`.
- `src/main.ts` sets up PrimeVue in unstyled mode.
- `vite.config.ts` adds the `@tailwindcss/vite` plugin.

Read more in the [Volt docs](https://volt.primevue.org).
