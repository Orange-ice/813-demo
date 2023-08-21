import 'the-new-css-reset/css/reset.css';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { createPinia } from 'pinia';
import arcoComponents from './utils/arco-components.ts';

const pinia = createPinia();
const app = createApp(App);

app.use(arcoComponents);
app.use(pinia);
app.use(router);

app.mount('#app');
