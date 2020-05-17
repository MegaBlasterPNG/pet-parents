<template>
  <textarea :placeholder="placeholder" class="textarea" />
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
@import '../../utils/scss/index.scss';

.textarea {
  height: 35px;
  border: 1px solid rgba($color: #000000, $alpha: 0.16);
  font-size: var(--font-size-default);
  padding: var(--space-sm);
  height: 114px;
  max-height: 114px;
  @include border-radius(light);

  &:hover {
    border-color: var(--color-text-dark);
  }

  &:focus {
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-gray);
  }
}
</style>
