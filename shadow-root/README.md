# PrimeVue in a shadow root

A coffee roaster's website with a reorder form built as a custom element. The form is a small Vue app that runs PrimeVue inside the element's shadow root.

The website styles every `button` and `input` on the page, and none of those rules reach the form. The form's styles do not leak out to the page either. The dark mode button in the header switches the form too.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/shadow-root)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `src/main.js` registers the custom element with `defineCustomElement` and sets up PrimeVue in `configureApp` with `withShadowRoot()`.
- `src/ReorderForm.ce.vue` is the form. The Select and the DatePicker use `appendTo="self"`, so their panels open inside the shadow root.

Read more in [Using PrimeUI components inside a shadow root](https://blog.primeui.dev/blog/using-primeui-components-inside-a-shadow-root/).
