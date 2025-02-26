import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	app: {
		head: {
			title: "Nuxt App",
		},
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	devtools: { enabled: false },
	css: [
		"@/assets/main.css"
	],
	modules: ["@primevue/nuxt-module"],
	primevue: {
		options: {
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: ".p-dark",
				}
			},
			ripple: true
		},
		autoImport: true
	},
	vite: {
		plugins: [
			tailwindcss(),
		]
	},
	compatibilityDate: "2025-02-26"
});