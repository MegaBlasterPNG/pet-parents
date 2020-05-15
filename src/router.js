import PageHome from './pages/home.vue';
import VueRouter from 'vue-router';

const routes = [{ path: '/home', component: PageHome }];

export const router = new VueRouter({
  routes,
});
