# Two PrimeVue apps on one page

A coffee shop page and a staff panel, each a separate Vue app with its own PrimeVue theme. The shop uses Aura in the default mode. The staff panel uses Lara with an indigo primary color in isolated mode.

Change the season color in the shop header and only the shop changes. Do the same in the staff panel and only the panel changes. The panel's dialog opens over the whole page and still uses the panel's theme.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/isolated-mode)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `src/main.js` mounts the two apps. The staff panel gets `isolation: withIsolation({ key: 'staff' })`.
- `src/ShopApp.vue` changes the shop color with `updatePrimaryPalette` from `@primeuix/themes`.
- `src/StaffPanel.vue` changes the panel color through its own theme: `getActionsInstance(useIsolation().theme)`.

Read more in [Running two PrimeUI apps on one page](https://blog.primeui.dev/blog/running-two-primeui-apps-on-one-page/).
