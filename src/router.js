import SearchPage from './pages/Search.vue';
import VueRouter from 'vue-router';

const routes = [{ path: '/search', component: SearchPage }];

export const router = new VueRouter({
  routes,
});
