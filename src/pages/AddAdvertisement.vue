<template>
  <div class="add-advertisement-page">
    <Title tag="h2" size="large">
      Add advertisement ✏️
    </Title>

    <form class="add-advertisement-page__form">
      <DropZone
        ref="myVueDropzone"
        id="dropzone"
        :options="dropzoneOptions"
        class="add-advertisement-page__drop-zone"
      />

      <InputText
        ref="inputName"
        placeholder="Name"
        class="add-advertisement-page__input-name"
      />

      <SelectButton ref="inputSex" :options="sexOptions" />

      <InputText
        ref="inputAge"
        placeholder="Age"
        type="number"
        class="add-advertisement-page__input-age"
      />

      <Textarea
        ref="inputDesc"
        placeholder="Description"
        class="add-advertisement-page__description"
      />

      <div class="add-advertisement-page__actions">
        <Button type="raised" @click.native.prevent="handleEdit">Post</Button>
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

import { mapActions } from 'vuex';

import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  name: 'AddAdvertisementlPage',
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
  methods: {
    ...mapActions(['addAdvertisement']),
    handleEdit() {
      const { inputAge, inputDesc, inputName, inputSex } = this.$refs;

      this.addAdvertisement({
        id: this.$route.query.id,
        name: inputName.$data.inputValue,
        age: inputAge.$data.inputValue,
        desc: inputDesc.$data.inputValue,
        sex: inputSex.$data.inputValue,
      });

      this.$router.push('/search');
    },
  },
};
</script>

<style lang="scss" scoped>
.add-advertisement-page {
  margin-top: calc(var(--space-sm) * 10);

  .add-advertisement-page__form {
    display: grid;
    gap: var(--space-st);
    grid-template-areas:
      'image-area name-area sex-area'
      'image-area age-area .'
      'image-area description-area description-area'
      'actions-area actions-area .';
    grid-template-columns: 240px 250px auto;

    .add-advertisement-page__drop-zone {
      grid-area: image-area;
      height: 240px;
      max-width: 240px;
    }

    .add-advertisement-page__input-name {
      grid-area: name-area;
    }

    .add-advertisement-page__input-age {
      grid-area: age-area;
    }

    .add-advertisement-page__description {
      grid-area: description-area;
    }

    .add-advertisement-page__actions {
      grid-area: actions-area;

      .add-advertisement-page__cancel-button {
        margin-left: var(--space-st);
      }
    }
  }
}
</style>
