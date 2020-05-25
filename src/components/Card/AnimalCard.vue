<template>
  <Card>
    <img
      slot="cover"
      :src="animalData.image"
      alt="image"
      class="animal-card__image"
    />

    <CardMeta
      :title="animalData.name"
      :description="`${animalData.animal}`"
    />

    <template slot="actions" class="ant-card-actions">
      <Button
        type="primary"
        @click.native.prevent="handleEdit"
      >
        Edit
      </Button>
    </template>
  </Card>
</template>

<script>
import { Button, Card } from "ant-design-vue";

export default {
  name: "AnimalCard",
  props: {
    animalData: {
      type: Object,
      required: true
    },
    handleClick: {
      type: Function,
      default: () => null
    }
  },
  components: {
    Button,
    Card,
    CardMeta: Card.Meta,
  },
  methods: {
    handleEdit() {
      const { id } = this.animalData;
      this.$emit("edit-animal", { id });
    }
  }
};
</script>

<style lang="scss">
@import '../../utils/scss/index.scss';

.animal-card__image {
  height: 160px;
  @include image-cover
}
</style>
