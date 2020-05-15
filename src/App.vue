<template>
  <div id="app">
    <aside class="sidebar-area"></aside>
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

Vue.use(VueRouter);

export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('./main.scss');
</style>

<style lang="scss" scoped>
#app {
  background-color: var(--color-background);
  display: grid;
  grid-template-areas: 'sidebar main-container';
  grid-template-columns: 320px auto;
  height: 100vh;
  width: 100vw;

  .sidebar-area {
    grid-area: sidebar;
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
