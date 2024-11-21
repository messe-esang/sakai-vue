import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';
import { definePreset } from '@primevue/themes';

const app = createApp(App);

const preset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#E8EBF7',
            100: '#C4CCE8',
            200: '#9FADE0',
            300: '#7B8ED7',
            400: '#566FCE',
            500: '#0B1D6C',
            600: '#091857',
            700: '#061342',
            800: '#040E2D',
            900: '#020918',
            950: '#01050F'
        }
    }
});

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: preset,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
