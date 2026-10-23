# PrimeVue with Laravel and Inertia

A Laravel app that renders its pages with Inertia and Vue, built with [PrimeVue](https://primevue.dev): a top bar with a dark mode switch, a panel that changes the primary and surface colors, and a dashboard with a chart, a product table and a few stat cards. It uses styled mode with the Aura preset, and Tailwind CSS v4 handles the page layout.

## Run it

This example needs PHP 8.2 and Composer, so it does not run on StackBlitz.

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm install
composer run dev
```

## Where to look

- `resources/js/app.js` creates the Inertia app and sets up PrimeVue with the Aura preset.
- `resources/js/Pages/Welcome.vue` is the page Inertia renders.
- `resources/js/Components` holds the layout and the dashboard widgets.

Read more in the [PrimeVue Laravel guide](https://primevue.dev/laravel).
