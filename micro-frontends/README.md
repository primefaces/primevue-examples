# PrimeVue micro frontends

A coffee roaster's back office, made of two micro frontends: Orders and Customers. Each one is built separately and ships its own copy of Vue and PrimeVue. The host is a third Vue app that uses PrimeVue with Aura in the default mode, and it loads the micro frontends at runtime.

Orders uses Lara and Customers uses Nora, each in isolated mode inside its own shadow root. Switching tabs unmounts one app and mounts the other. Dialogs, select panels and toasts keep the theme of the app that opened them. The host's button keeps its Aura look, and the dark mode button in the header switches all three.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/micro-frontends)

## Run it

```bash
npm install
npm run dev
```

`npm run dev` builds the two micro frontends into `public/mfe` first, then starts the host. Run it again after changing a micro frontend.

## Where to look

- `vite.orders.config.js` and `vite.customers.config.js` build each micro frontend as a single ES module, `public/mfe/orders.js` and `public/mfe/customers.js`. Each file carries its own Vue and PrimeVue.
- `src/host/Shell.vue` is the host. It loads a micro frontend with `import()` when its tab is opened, calls `mountOrders` or `mountCustomers` with its outlet and keeps the function that unmounts the current app.
- `src/orders/mount.js` and `src/customers/mount.js` create an element with a shadow root, add the app's own CSS to it and set up PrimeVue with `withIsolation({ key })`.
- Each app gives its Toast a `group` named after its key, so two micro frontends that end up in one bundle still show only their own messages.

Read more in [Micro frontends with their own PrimeUI theme](https://blog.primeui.dev/blog/micro-frontends-with-primeui/).
