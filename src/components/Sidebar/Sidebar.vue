<template>
  <div class="sidebar">
    <div class="sidebar__logo-container">
      <img src="../../assets/logo.svg" alt="logo" />
    </div>

    <div class="sidebar__menu-container">
      <ul class="sidebar__menu-list">
        <router-link
          v-for="(item, index) in pageLinks"
          :key="index"
          :to="item.path"
          v-slot="{ href, navigate, isExactActive }"
          class="sidebar__menu-link"
        >
          <li
            :class="{ 'sidebar__menu-item--active': isExactActive }"
            class="sidebar__menu-item"
          >
            <a :href="href" @click="navigate">{{ item.label }}</a>
          </li>
        </router-link>
      </ul>
    </div>

    <div class="sidebar__user-container">
      <div class="sidebar__user-actions">
        <img
          :src="userData.avatar"
          alt="user avatar"
          class="sidebar__user-avatar"
        />
        <div class="sidebar__user-info">
          <span>Hey, {{ userData.firstName }}!</span>
          <a href="#" class="sidebar__exit-action">Exit</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { objHasProps } from '../../utils/javascript';
export default {
  name: 'Sidebar',
  props: {
    userData: {
      type: Object,
      required: true,
      validator: (obj) => objHasProps(obj, ['firstName', 'avatar']),
    },
  },
  computed: {
    pageLinks: () => [
      { label: 'My Advertisements', path: '/advertisements' },
      { label: 'Add Advertisement', path: '/advertisements/add' },
    ],
  },
};
</script>

<style lang="scss" scoped>
@import '../../utils/scss/index.scss';

.sidebar {
  background-color: var(--color-white);
  display: grid;
  grid-template-areas:
    'logo-area'
    'menu-area'
    'user-area';
  grid-template-rows: 128px auto 112px;
  height: 100%;
  @include border-radius(heavy);
  @include shadow;

  .sidebar__logo-container {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    grid-area: logo-area;
    justify-content: flex-end;
    padding: 0 var(--space-lg);

    & > .sidebar__logo {
      height: 80px;
    }
  }

  .sidebar__menu-container {
    grid-area: menu-area;
    padding: var(--space-lg);

    & > ul.sidebar__menu-list {
      list-style: none;
      padding: 0;

      li.sidebar__menu-item {
        margin-bottom: var(--space-lg);
        @include link(sidebar__menu-item);

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          color: var(--color-primary);
        }
      }
    }
  }

  .sidebar__user-container {
    align-items: center;
    background-color: var(--color-primary);
    border-bottom-right-radius: var(--space-md);
    display: flex;
    grid-area: user-area;
    padding: 0 var(--space-lg);

    .sidebar__user-actions {
      align-items: center;
      color: var(--color-text-on-primary);
      display: grid;
      font-weight: var(--font-weight-medium);
      gap: var(--space-md);
      grid-template-areas: 'avatar user-info';

      .sidebar__user-avatar {
        grid-area: avatar;
        object-fit: cover;
        height: var(--space-xxl);
        width: var(--space-xxl);
        @include border-radius(circle, var(--space-xxl));
      }

      .sidebar__user-info {
        display: flex;
        flex-direction: column;

        .sidebar__exit-action {
          font-size: var(--font-size-xs);
        }
      }
    }
  }
}
</style>
