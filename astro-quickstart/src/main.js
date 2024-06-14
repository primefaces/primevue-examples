import "primeicons/primeicons.css";
import './assets/main.css';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';


export default (app) => {
	app.use(PrimeVue, {
		theme: {
			preset: Aura
		}
	});

	app.component('Button', Button);
	app.component('InputText', InputText);
	app.component('FloatLabel', FloatLabel);
};
