import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.productionTip = false;

app.provide('inStock', true);
app.provide('inventory', 15);
app.provide('onSale', true);
app.provide('categories', ['Tops', 'Bottoms', 'Dresses', 'Accessories']);

app.mount('#app');