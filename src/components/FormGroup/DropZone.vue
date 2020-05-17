<template>
  <article class="drop-zone">
    <VueDropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" />
  </article>
</template>

<script>
import VueDropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  name: 'DropZone',
  components: {
    VueDropzone,
  },
  data: () => ({
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      headers: { 'My-Awesome-Header': 'header value' },
      maxFiles: 1,
    },
  }),
};
</script>

<style lang="scss" scoped>
#dropzone {
  align-items: center;
  display: flex;
  justify-content: center;
  max-height: 100%;
  min-height: 100%;
  position: relative;
  width: 100%;
}
</style>
