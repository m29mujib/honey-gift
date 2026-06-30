import { createRouter, createWebHistory } from 'vue-router';
import Beranda from '../views/pages/beranda/Beranda.vue';

const routes = [
  { path: '/', component: Beranda },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;