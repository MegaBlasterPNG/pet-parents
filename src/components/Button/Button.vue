<template>
  <button
    :class="{
      [`button--${color}`]: color,
      [`button--${type}`]: type,
    }"
    class="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'default',
      validator: (type) => ['default', 'danger'].includes(type),
    },
    type: {
      type: String,
      default: 'default',
      validator: (type) => ['default', 'raised', 'outlined'].includes(type),
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../utils/scss/index.scss';

.button {
  background-color: transparent;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  font-size: var(--font-size-default);
  font-weight: var(--font-weight-medium);
  margin: 0;
  padding: var(--space-sm) var(--space-st);
  text-transform: uppercase;
  @include border-radius(light);

  &--outlined {
    border: 1px solid;
  }

  &--raised {
    background-color: var(--color-primary);
    color: var(--color-text-on-primary);
    font-weight: var(--font-weight-medium);

    &:active {
      background-color: var(--color-primary-darken);
    }
  }

  &--danger {
    color: var(--color-danger);
  }
}
</style>
