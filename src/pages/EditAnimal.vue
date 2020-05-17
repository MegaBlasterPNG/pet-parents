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

      <InputText class="edit-animal-page__input-name" placeholder="Name" />

      <SelectButton :options="sexOptions" />

      <InputText
        type="number"
        class="edit-animal-page__input-age"
        placeholder="Age"
      />

      <Textarea
        class="edit-animal-page__description"
        placeholder="Description"
      />
    </form>
  </div>
</template>

<script>
import { Title } from '../components/Typography';
import {
  DropZone,
  InputText,
  Textarea,
  SelectButton,
} from '../components/FormGroup';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  name: 'EditAnimalPage',
  components: {
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
      'image-area description-area description-area';
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
  }
}
</style>
