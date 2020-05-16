<template>
  <div class="card">
    <img :src="animalData.image" alt="image" class="card__image" />

    <div class="card__content-container">
      <Title tag="h3" size="small">{{ animalData.name }}y</Title>
      <Paragraph tag="span" type="gray"
        >{{ animalData.age }} years old</Paragraph
      >
    </div>

    <div class="card__action-container">
      <Button>See more</Button>
    </div>
  </div>
</template>

<script>
import { Button } from '../Button';
import { Paragraph, Title } from '../Typography';

export default {
  name: 'Card',
  props: {
    animalData: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
    Paragraph,
    Title,
  },
};
</script>

<style lang="scss">
@import '../../utils/scss/index.scss';

.card {
  background-color: var(--color-white);
  display: grid;
  gap: var(--space-md);
  grid-template-areas:
    'image-area'
    'content-area'
    'action-area';
  grid-template-rows: 160px auto auto;
  width: 280px;
  @include border-radius;
  @include shadow;

  .card__image {
    border-top-left-radius: var(--space-sm);
    border-top-right-radius: var(--space-sm);
    grid-area: image-area;
    height: 100%;
    width: 100%;
    @include image-cover;
  }

  .card__content-container {
    padding: 0 var(--space-st) var(--space-st);
  }

  .card__action-container {
    padding: 0 0 var(--space-st);
  }
}
</style>
