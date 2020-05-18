<template>
  <div id="app">
    <aside class="sidebar-area">
      <Sidebar :user-data="userData" />
    </aside>
    <main class="main-container">
      <div class="main-container__content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import { Sidebar } from './components/Sidebar';

import { mapActions } from 'vuex';

Vue.use(VueRouter);

export default {
  name: 'App',
  components: { Sidebar },
  data: () => ({
    userData: {
      firstName: 'João',
      avatar: 'https://picsum.photos/200/300',
    },
  }),
  created() {
    this.setAdvertisements();
  },
  methods: {
    ...mapActions(['setAdvertisements']),
  },
};
</script>

<style lang="scss">
@import './main.scss';
</style>

<style lang="scss" scoped>
#app {
  background-color: var(--color-background);
  display: grid;
  grid-template-areas: 'sidebar main-container';
  grid-template-columns: 320px auto;
  min-height: 100vh;
  width: 100vw;

  .sidebar-area {
    bottom: 0;
    grid-area: sidebar;
    left: 0;
    position: fixed;
    top: 0;
    width: 320px;
  }

  .main-container {
    grid-area: main-container;

    .main-container__content {
      display: block;
      margin: 0 auto;
      max-width: 1000px;
      width: 1000px;
    }
  }
}
</style>
