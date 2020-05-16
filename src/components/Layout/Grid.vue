<template>
  <section class="grid-container">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Grid',
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: var(--space-xxl) 80px;
  grid-template: repeat(4, auto) / repeat(3, 280px);
}
</style>
