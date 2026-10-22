import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { withIsolation } from '@primevue/core/isolation';
import Lara from '@primeuix/themes/lara';
import OrdersApp from './OrdersApp.vue';
import styles from './orders.css?inline';

export function mountOrders(container) {
    const element = document.createElement('orders-root');
    const shadow = element.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const root = document.createElement('div');

    style.textContent = styles;
    shadow.append(style, root);
    container.append(element);

    const app = createApp(OrdersApp);

    app.use(PrimeVue, {
        theme: { preset: Lara, options: { darkModeSelector: '.app-dark' } },
        isolation: withIsolation({ key: 'orders' })
    });
    app.use(ToastService);
    app.mount(root);

    return () => {
        app.unmount();
        element.remove();
    };
}
