import AdvertisementsPage from './pages/Advertisements.vue';
import SearchPage from './pages/Search.vue';
import VueRouter from 'vue-router';

const routes = [
  { path: '/search', component: SearchPage },
  { path: '/advertisements', component: AdvertisementsPage },
];

export const router = new VueRouter({
  routes,
});
