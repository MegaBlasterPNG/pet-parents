<template>
  <div class="advertisements-page">
    <Title tag="h2" size="large">
      Your advertisements ✨
    </Title>

    <Grid>
      <AnimalCard
        v-for="(animal, index) in searchResults"
        :key="`result-${index}`"
        :animal-data="animal"
        :handle-click="editNavigate"
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
  methods: {
    editNavigate() {
      this.$router.push({
        path: `${this.$router.currentRoute.path}/edit`,
        params: { id: 1 },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.advertisements-page {
  margin-top: calc(var(--space-sm) * 10);
}
</style>
