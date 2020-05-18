import AddAdvertiserPage from './pages/AddAdvertisement.vue';
import AdvertisementsPage from './pages/Advertisements.vue';
import EditAnimalPage from './pages/EditAnimal.vue';
import SearchPage from './pages/Search.vue';
import VueRouter from 'vue-router';

const routes = [
  { path: '/search', component: SearchPage },
  { path: '/advertisements', component: AdvertisementsPage },
  { path: '/advertisements/edit', component: EditAnimalPage },
  { path: '/advertisements/add', component: AddAdvertiserPage },
];

export const router = new VueRouter({
  routes,
});
