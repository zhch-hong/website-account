import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { installElementPlus } from './lib/element-plus';

const app = createApp(App);

app.use(createPinia());
app.use(router);

installElementPlus(app);

app.mount('#app');
