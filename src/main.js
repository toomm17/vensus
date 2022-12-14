import { createApp } from 'vue';
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader';

import App from './App.vue';
import router from './router';
import store from './store';

defineIonPhaser(window);

createApp(App).use(store).use(router).mount('#app');
