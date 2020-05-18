<template>
  <div class="edit-animal-page">
    <Title tag="h2" size="large">
      Your advertisements ✨
    </Title>

    <form class="edit-animal-page__form">
      <DropZone
        ref="myVueDropzone"
        id="dropzone"
        :options="dropzoneOptions"
        class="edit-animal-page__drop-zone"
      />

      <InputText
        :value="animalName"
        placeholder="Name"
        class="edit-animal-page__input-name"
      />

      <SelectButton :options="sexOptions" :value="animalSex" />

      <InputText
        :value="animalAge"
        placeholder="Age"
        type="number"
        class="edit-animal-page__input-age"
      />

      <Textarea
        :value="animalDescription"
        placeholder="Description"
        class="edit-animal-page__description"
      />

      <div class="edit-animal-page__actions">
        <Button type="raised" @click.native.prevent="handleEdit">Save</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { Button } from '../components/Button';
import {
  DropZone,
  InputText,
  Textarea,
  SelectButton,
} from '../components/FormGroup';
import { Title } from '../components/Typography';

import { mapActions, mapGetters } from 'vuex';

import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  name: 'EditAnimalPage',
  components: {
    Button,
    DropZone,
    InputText,
    SelectButton,
    Textarea,
    Title,
  },
  data: () => ({
    sexOptions: [
      { label: 'M', value: 'M' },
      { label: 'F', value: 'F' },
    ],
  }),
  computed: {
    ...mapGetters(['getCurrentAdvertisement']),
    animalAge: (self) =>
      self.getCurrentAdvertisement ? self.getCurrentAdvertisement.age : '',
    animalDescription: (self) =>
      self.getCurrentAdvertisement
        ? self.getCurrentAdvertisement.description
        : '',
    animalName: (self) =>
      self.getCurrentAdvertisement ? self.getCurrentAdvertisement.name : '',
    animalSex: (self) =>
      self.getCurrentAdvertisement ? self.getCurrentAdvertisement.sex : '',
  },
  mounted() {
    this.setCurrentAdvertisement(this.$route.query.id);
  },
  methods: {
    ...mapActions(['setCurrentAdvertisement', 'updateAdvertisement']),
    handleEdit(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-animal-page {
  margin-top: calc(var(--space-sm) * 10);

  .edit-animal-page__form {
    display: grid;
    gap: var(--space-st);
    grid-template-areas:
      'image-area name-area sex-area'
      'image-area age-area .'
      'image-area description-area description-area'
      'actions-area actions-area .';
    grid-template-columns: 240px 250px auto;

    .edit-animal-page__drop-zone {
      grid-area: image-area;
      height: 240px;
      max-width: 240px;
    }

    .edit-animal-page__input-name {
      grid-area: name-area;
    }

    .edit-animal-page__input-age {
      grid-area: age-area;
    }

    .edit-animal-page__description {
      grid-area: description-area;
    }

    .edit-animal-page__actions {
      grid-area: actions-area;
    }
  }
}
</style>
