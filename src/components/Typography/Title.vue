<template>
  <component
    :is="tag"
    :tag="tag"
    :class="{
      [`title--${size}`]: size,
    }"
    class="title"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    size: {
      type: String,
      default: 'default',
      validator: (type) => ['default', 'small', 'large'].includes(type),
    },
    tag: {
      type: String,
      default: 'h1',
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-st);
  margin-top: 0;
  width: 100%;

  &--small {
    font-size: var(--font-size-default);
    margin-bottom: var(--space-sm);
  }

  &--large {
    font-size: var(--font-size-xg);
    margin-bottom: var(--space-lg);
  }
}
</style>
