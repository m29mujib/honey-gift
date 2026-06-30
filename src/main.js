import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/reset.css'; // Pastikan untuk mengimpor gaya Ant Design
import Antd from 'ant-design-vue';
import 'primeicons/primeicons.css';
import './assets/style.css';

const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount('#app');
