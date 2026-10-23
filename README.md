# PrimeVue examples

Example projects for [PrimeVue](https://primevue.dev). Each folder is a complete app with its own README, and most of them open on StackBlitz.

## Starters

The starters build the same small dashboard in different setups, so they can be compared side by side.

| Example | Setup | Styling | Open |
| --- | --- | --- | --- |
| [vite-quickstart](./vite-quickstart) | Vite | Aura preset | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/vite-quickstart) |
| [vite-ts-quickstart](./vite-ts-quickstart) | Vite with TypeScript | Aura preset | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/vite-ts-quickstart) |
| [auto-import](./auto-import) | Vite with auto import | Aura preset | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/auto-import) |
| [vite-tailwindv4](./vite-tailwindv4) | Vite | Aura preset and Tailwind CSS v4 | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/vite-tailwindv4) |
| [vite-unstyled-tailwind](./vite-unstyled-tailwind) | Vite | Unstyled, Tailwind CSS v3 | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/vite-unstyled-tailwind) |
| [nuxt-quickstart](./nuxt-quickstart) | Nuxt | Aura preset and Tailwind CSS v4 | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/nuxt-quickstart) |
| [nuxt-styled-tailwind](./nuxt-styled-tailwind) | Nuxt | Aura preset and Tailwind CSS v3 | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/nuxt-styled-tailwind) |
| [nuxt-unstyled-tailwind](./nuxt-unstyled-tailwind) | Nuxt | Unstyled, Tailwind CSS v3 | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/nuxt-unstyled-tailwind) |
| [volt-vite](./volt-vite) | Vite with TypeScript | Volt, Tailwind CSS v4 | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/volt-vite) |
| [volt-nuxt](./volt-nuxt) | Nuxt | Volt, Tailwind CSS v4 | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/volt-nuxt) |
| [laravel-quickstart](./laravel-quickstart) | Laravel | Aura preset and Tailwind CSS v4 | Needs PHP, run locally |
| [inertia-quickstart](./inertia-quickstart) | Laravel with Inertia | Aura preset and Tailwind CSS v4 | Needs PHP, run locally |
| [cdn](./cdn) | A single HTML page, scripts from unpkg | Aura preset | Open `index.html` |

## Page integration examples

Each of these comes with a blog post that explains the setup.

| Example | Shows | Open | Read |
| --- | --- | --- | --- |
| [shadow-root](./shadow-root) | Components inside a shadow root | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/shadow-root) | [Blog post](https://blog.primeui.dev/blog/using-primeui-components-inside-a-shadow-root/) |
| [isolated-mode](./isolated-mode) | Two apps with their own themes on one page | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/isolated-mode) | [Blog post](https://blog.primeui.dev/blog/running-two-primeui-apps-on-one-page/) |
| [micro-frontends](./micro-frontends) | Two micro frontends with their own themes in one host page | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/micro-frontends) | [Blog post](https://blog.primeui.dev/blog/micro-frontends-with-primeui/) |
| [class-prefix](./class-prefix) | Renaming the p- classes with classPrefix | [StackBlitz](https://stackblitz.com/github/primefaces/primevue-examples/tree/main/class-prefix) | [Blog post](https://blog.primeui.dev/blog/renaming-the-p-classes-with-classprefix/) |

## Run an example

```bash
cd vite-quickstart
npm install
npm run dev
```

Each example has its own README with the files to look at.

The Laravel and Inertia examples need PHP 8.2 and Composer; their READMEs list the extra steps.

## Links

- [PrimeVue docs](https://primevue.dev)
- [Volt](https://volt.primevue.org)
- [PrimeUI blog](https://blog.primeui.dev)
