<template>
  <div class="search-page">
    <Title tag="h2" size="large">
      Your advertisements ✨
    </Title>

    <Grid>
      <AnimalCard
        v-for="(animal, index) in searchResults"
        :key="`result-${index}`"
        :animal-data="animal"
      />
    </Grid>
  </div>
</template>

<script>
import { Title } from '../components/Typography';
import { AnimalCard } from '../components/Card';
import { Grid } from '../components/Layout';

export default {
  name: 'AdvertisementsPage',
  components: {
    Title,
    AnimalCard,
    Grid,
  },
  data: () => ({
    searchResults: [
      {
        name: 'Mr. Toby',
        age: '2',
        image: 'https://i.picsum.photos/id/1025/4951/3301.jpg',
      },
      {
        name: 'Mr. Toby',
        age: '2',
        image: 'https://i.picsum.photos/id/1025/4951/3301.jpg',
      },
      {
        name: 'Mr. Toby',
        age: '2',
        image: 'https://i.picsum.photos/id/1025/4951/3301.jpg',
      },
      {
        name: 'Mr. Toby',
        age: '2',
        image: 'https://i.picsum.photos/id/1025/4951/3301.jpg',
      },
      {
        name: 'Mr. Toby',
        age: '2',
        image: 'https://i.picsum.photos/id/1025/4951/3301.jpg',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.search-page {
  margin-top: calc(var(--space-sm) * 10);
}

.search-page__filter {
  margin-bottom: var(--space-xxl);
}
</style>
