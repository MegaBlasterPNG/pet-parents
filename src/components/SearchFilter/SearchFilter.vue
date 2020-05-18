<template>
  <Card class="search-filter">
    <Select
      class="search-filter__select"
      label="Animal"
      :options="animalOptions"
    />
    <Select class="search-filter__select" label="Age" :options="ageOptions" />
    <Select class="search-filter__select" label="Sex" :options="sexOptions" />

    <Button color="danger">
      Clear
    </Button>
  </Card>
</template>

<script>
import { Button } from '../Button';
import { Card } from '../Card';
import { Select } from '../FormGroup';

export default {
  name: 'SearchFilter',
  components: {
    Button,
    Card,
    Select,
  },
  data: () => ({
    animalOptions: [
      { label: 'Dog', value: 'DOG' },
      { label: 'Cat', value: 'CAT' },
    ],
    ageOptions: [
      { label: '0 to 1', value: 0 },
      { label: '1 to 3', value: 1 },
      { label: 'Greater than 3', value: 2 },
    ],
    sexOptions: [
      { label: 'Male', value: 'M' },
      { label: 'Female', value: 'F' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.search-filter {
  display: grid;
  grid-template-areas: 'name-area sex-area age-area action-area';
  grid-template-columns: 112px repeat(2, 136px) auto;
  padding: var(--space-md) var(--space-st);
  padding-right: 0;
  width: min-content;

  .search-filter__select {
    margin-left: var(--space-md);

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
