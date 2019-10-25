<template>
    <div class="container">
        <div class="row">
            <ListComponent :fields="fields" :list-api="getPhotoApi">
                List Photo
            </ListComponent>
        </div>
    </div>
</template>

<script>
  import ListComponent from "../components/ListComponent";
  import {getPhotoApi} from "../api/photoApi"

  export default {
    name: "Photo",
    components: {
      ListComponent
    },
    data() {
      return {
        getPhotoApi,
        fields: [
          {
            name: 'id',
            title: 'Id'
          },
          {
            name: 'thumbnailUrl',
            title: 'Image',
            type: 'image'
          },
          {
            name: 'title',
            title: 'Title'
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>