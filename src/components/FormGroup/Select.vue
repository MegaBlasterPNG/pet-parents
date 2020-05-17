<template>
  <div class="select-wrapper">
    <select>
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
  },
  computed: {
    arrowIcon: () => ArrowIcon,
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  align-items: center;
  border-right: 2px solid var(--color-disabled);
  display: grid;
  gap: var(--space-sm);
  grid-template-areas: 'select-area icon-area';
  grid-template-columns: auto 16px;
  justify-content: space-between;
  padding-right: var(--space-md);

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
  }

  .select-icon >>> svg {
    fill: var(--color-primary);
  }
}
</style>
