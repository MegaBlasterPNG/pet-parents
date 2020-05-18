import { AdvertisementsService } from '../services/Advertisements.service';
import Vue from 'vue';
import Vuex from 'vuex';

const advService = new AdvertisementsService();

const state = {
  advertisements: [],
  currentAdvertisement: null,
};

const getters = {
  advertisementList: (state) => state.advertisements,
  getCurrentAdvertisement: (state) => state.currentAdvertisement,
};

const mutations = {
  setAdvertisements: (state, list) => (state.advertisements = list),

  setCurrentAdvertisement: (state, advertisementData) =>
    (state.currentAdvertisement = advertisementData),

  updateAdvertisement: (state, advData) =>
    state.advertisements.map((adv, i) => {
      if (adv.id === advData.id) return (state.advertisements[i] = advData);
    }),
};

const actions = {
  setAdvertisements: (context) =>
    advService
      .getAdvertisements()
      .then((res) => context.commit('setAdvertisements', res.data)),

  setCurrentAdvertisement: (context, advertisementId) =>
    advService
      .getAdvertisementById(advertisementId)
      .then((res) => context.commit('setCurrentAdvertisement', res.data)),

  updateAdvertisement: (context, advData) =>
    advService
      .addAdvertisement(advData)
      .then((res) => context.commit('updateAdvertisement', res.data)),
};

Vue.use(Vuex);
export const store = new Vuex.Store({ state, getters, mutations, actions });
