<template>
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
    class="input-text"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    type: {
      type: String,
      defaultL: 'text',
      validator: (type) => ['text', 'number'].includes(type),
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../utils/scss/index.scss';

.input-text {
  height: 35px;
  border: 1px solid rgba($color: #000000, $alpha: 0.16);
  font-size: var(--font-size-default);
  padding: var(--space-sm);
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
