import { createApp } from 'vue'
import './style.css'
import store from './scripts/store';
import router from './scripts/router';
import App from './App.vue'

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');