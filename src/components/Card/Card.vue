<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss">
@import '../../utils/scss/index.scss';

.card {
  background-color: var(--color-white);
  @include border-radius;
  @include shadow;
}
</style>
