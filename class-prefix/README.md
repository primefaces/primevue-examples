# Renaming the p- classes with classPrefix

A wholesale sign-up page that also loads an old stylesheet from the site's CMS. That stylesheet has rules for `.p-button` and `.p-inputtext`, and you can see them on the newsletter form in the footer.

The PrimeVue form above it sets `classPrefix: 'nr'`, so its button renders as `nr-button` and its inputs as `nr-inputtext`. The old rules do not match these classes, and the form keeps the Aura look.

[Open in StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/class-prefix)

## Run it

```bash
npm install
npm run dev
```

## Where to look

- `src/main.js` sets `classPrefix: 'nr'` in the theme options.
- `public/legacy.css` is the CMS stylesheet. Inspect the page with the browser's dev tools to see the `nr-` classes on the form and the `p-` classes on the footer.

Read more in [Renaming the p- classes with classPrefix](https://blog.primeui.dev/blog/renaming-the-p-classes-with-classprefix/).
