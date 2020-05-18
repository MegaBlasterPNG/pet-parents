<template>
  <div class="advertisements-page">
    <Title tag="h2" size="large">
      Your advertisements ✨
    </Title>

    <Grid>
      <AnimalCard
        v-for="(animal, index) in advertisementList"
        :key="`result-${index}`"
        :animal-data="animal"
        @edit-animal="editNavigate"
      />
    </Grid>
  </div>
</template>

<script>
import { AnimalCard } from '../components/Card';
import { Grid } from '../components/Layout';
import { Title } from '../components/Typography';
import { mapGetters } from 'vuex';

export default {
  name: 'AdvertisementsPage',
  components: {
    Title,
    AnimalCard,
    Grid,
  },
  computed: {
    ...mapGetters(['advertisementList']),
  },
  methods: {
    editNavigate(id) {
      this.$router.push({
        path: `${this.$router.currentRoute.path}/edit`,
        query: id,
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
