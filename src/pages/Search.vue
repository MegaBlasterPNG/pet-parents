<template>
  <div class="search-page">
    <Title tag="h2" size="large">
      Looking for a friend? 👀
    </Title>
    <Grid>
      <Card
        v-for="(animal, index) in searchResults"
        :key="`result-${index}`"
        :animal-data="animal"
      />
    </Grid>
  </div>
</template>

<script>
import { Title } from '../components/Typography';
import { Card } from '../components/Card';
import { Grid } from '../components/Layout';
export default {
  name: 'SearchPage',
  components: {
    Title,
    Card,
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

<style lang="scss">
.search-page {
  margin-top: calc(var(--space-sm) * 10);
}
</style>
