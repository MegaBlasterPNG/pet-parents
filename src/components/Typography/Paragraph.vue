<template>
  <component
    :is="tag"
    :tag="tag"
    :class="{
      [`text--${type}`]: type,
    }"
    class="text"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (type) => ['default', 'gray'].includes(type),
    },
    tag: {
      type: String,
      default: 'p',
    },
  },
};
</script>

<style lang="scss">
.text {
  color: var(--color-text-dark);
  font-size: var(--font-size-default);
  margin: 0;

  &--gray {
    color: var(--color-text-gray);
    font-weight: var(--font-weight-medium);
  }
}
</style>
