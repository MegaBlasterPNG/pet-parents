<template>
  <button
    :class="{
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
  margin: 0;
  padding: var(--space-sm) var(--space-st);
  text-transform: uppercase;
  @include border-radius(light);

  &--raised {
    background-color: var(--color-primary);
    color: var(--color-text-on-primary);
    font-weight: var(--font-weight-medium);
    text-transform: initial;

    &:active {
      background-color: var(--color-primary-darken);
    }
  }

  &--raised {
    border: 2px solid;
    text-transform: initial;
  }
}
</style>
