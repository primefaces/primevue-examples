import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { withIsolation } from '@primevue/core/isolation';
import Nora from '@primeuix/themes/nora';
import CustomersApp from './CustomersApp.vue';
import styles from './customers.css?inline';

export function mountCustomers(container) {
    const element = document.createElement('customers-root');
    const shadow = element.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const root = document.createElement('div');

    style.textContent = styles;
    shadow.append(style, root);
    container.append(element);

    const app = createApp(CustomersApp);

    app.use(PrimeVue, {
        theme: { preset: Nora, options: { darkModeSelector: '.app-dark' } },
        isolation: withIsolation({ key: 'customers' })
    });
    app.use(ToastService);
    app.mount(root);

    return () => {
        app.unmount();
        element.remove();
    };
}
