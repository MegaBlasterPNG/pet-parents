<template>
  <div class="search-page">
    <Title tag="h2" size="large">
      Looking for a friend? 👀
    </Title>

    <SearchFilter class="search-page__filter" />

    <Grid>
      <AnimalCard
        v-for="(animal, index) in advertisementList"
        :key="`result-${index}`"
        :animal-data="animal"
      />
    </Grid>
  </div>
</template>

<script>
import { AnimalCard } from '../components/Card';
import { Grid } from '../components/Layout';
import { SearchFilter } from '../components/SearchFilter';
import { Title } from '../components/Typography';
import { mapGetters } from 'vuex';

export default {
  name: 'SearchPage',
  components: {
    Title,
    AnimalCard,
    Grid,
    SearchFilter,
  },
  computed: {
    ...mapGetters(['advertisementList']),
  },
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
