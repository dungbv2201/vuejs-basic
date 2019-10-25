<template>
    <div class="container">
        <div class="row">
            <ListComponent :fields="fields" :list-api="getPostApi">
                <h2>List Posts</h2>
            </ListComponent>
        </div>
    </div>
</template>

<script>
  import ListComponent from "../components/ListComponent"
  import { getPostApi} from "../api/postApi"

  export default {
    name: "PostHe",
    components: {
      ListComponent
    },
    data(){
      return {
        getPostApi,
        fields:[
          {
            name:'id',
            title: 'ID'

          },
          {
            name:'title',
            title: 'Title'

          },
          {
            name:'body',
            title: 'Content'

          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>