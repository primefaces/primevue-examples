import './site.css';

import { defineCustomElement } from 'vue';
import PrimeVue from 'primevue/config';
import { withShadowRoot } from '@primevue/core/shadowroot';
import Aura from '@primeuix/themes/aura';
import ReorderForm from './ReorderForm.ce.vue';

const ReorderFormElement = defineCustomElement(ReorderForm, {
    configureApp(app) {
        app.use(PrimeVue, {
            theme: {
                preset: Aura,
                options: { darkModeSelector: '.app-dark' }
            },
            shadowRoot: withShadowRoot()
        });
    }
});

customElements.define('reorder-form', ReorderFormElement);

const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('app-dark');

    toggle.textContent = dark ? 'Light mode' : 'Dark mode';
});
