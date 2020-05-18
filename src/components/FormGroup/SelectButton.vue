<template>
  <div class="select-button-container">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="select-button-wrapper"
    >
      <input
        :id="`opt-${index}`"
        :checked="inputValue === value"
        :value="option.value"
        name="opt"
        type="radio"
        class="select-button"
        @change="handleCheck"
      />
      <label class="select-button__label" :for="`opt-${index}`">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectButton',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  watch: {
    value(val) {
      this.inputValue = val;
    },
  },
  data: () => ({
    inputValue: '',
  }),
  methods: {
    handleCheck(e) {
      this.inputValue = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../utils/scss/index.scss';

.select-button-container {
  display: grid;
  gap: var(--space-sm);
  grid-auto-flow: column;
  justify-content: start;

  .select-button-wrapper {
    position: relative;

    .select-button {
      appearance: none;
      position: absolute;

      &:checked + .select-button__label {
        background-color: var(--color-primary);
      }
    }

    .select-button__label {
      cursor: pointer;
      width: 35px;
      height: 35px;
      font-weight: var(--font-weight-medium);
      background-color: var(--color-white);
      border: 1px solid rgba($color: #000000, $alpha: 0.16);
      display: flex;
      align-items: center;
      justify-content: center;
      @include border-radius(light);

      &:hover {
        background-color: var(--color-text-disabled);
      }
    }
  }
}
</style>
