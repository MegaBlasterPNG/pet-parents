<template>
  <div
    :class="{
      [`select-wrapper--${variant}`]: variant,
    }"
    class="select-wrapper"
  >
    <select v-model="value">
      <option value="" disabled selected>
        {{ label }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <span class="select-icon" v-html="arrowIcon" />
  </div>
</template>

<script>
import ArrowIcon from '!html-loader!../../assets/icons/arrow-down.svg';

export default {
  name: 'Select',
  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
      validator: (arr) =>
        arr.every((obj) =>
          Object.keys(obj).every((key) => ['value', 'label'].includes(key))
        ),
    },
    variant: {
      type: String,
      default: null,
      validator: (val) => ['outlined'].includes(val),
    },
  },
  data: () => ({
    value: '',
  }),
  computed: {
    arrowIcon: () => ArrowIcon,
  },
};
</script>

<style lang="scss" scoped>
@import '../../utils/scss/index.scss';

.select-wrapper {
  align-items: center;
  border-right: 2px solid var(--color-disabled);
  display: grid;
  gap: var(--space-sm);
  grid-template-areas: 'select-area icon-area';
  grid-template-columns: 100% 16px;
  justify-content: space-between;
  padding-right: var(--space-md);
  position: relative;

  select {
    appearance: none;
    background-color: var(--color-white);
    border: none;
    font-size: var(--font-size-default);
    font-weight: var(--font-weight-medium);
    grid-area: select-area;
    padding: var(--space-sm) 0;

    &:invalid {
      color: var(--color-text-gray);
    }
  }

  .select-icon {
    grid-area: icon-area;
    position: absolute;
    right: var(--space-st);
  }

  .select-icon >>> svg {
    fill: var(--color-primary);
  }

  &.select-wrapper--outlined {
    background-color: var(--color-white);
    border: 1px solid rgba($color: #000000, $alpha: 0.16);
    padding: 0;
    @include border-radius(light);

    select {
      width: 100%;
      padding: var(--space-sm);
    }

    .select-icon {
      right: var(--space-lg);
    }
  }
}
</style>
