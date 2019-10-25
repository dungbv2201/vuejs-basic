<template>
  <div id="app">
    <post-component></post-component>
<!--    <PhotoComponent></PhotoComponent>-->
  </div>
</template>

<script>
import Post from "./view/Post"
import Photo from "./view/Photo";

export default {
  name: 'app',
  components: {
    PostComponent :Post,
    PhotoComponent: Photo
  }
}
</script>

<style>

</style>
