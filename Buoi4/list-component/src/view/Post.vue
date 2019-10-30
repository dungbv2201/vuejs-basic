<template>
    <div class="container">
        <div class="row">
            <ListComponent
                    :fields="fields"
                    :list-api="getPostApi"
                    :modal-title="modalTitle"
                    :update-api="updatePostApi"
            >
                <h2>List Posts</h2>
                <template v-slot:form="{ item }" >
                    <form>
                        <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input type="text"
                                       class="form-control"
                                       id="title"
                                       v-model="item.title"
                                       placeholder="enter title...">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="body" class="col-sm-2 col-form-label">Body</label>
                            <div class="col-sm-10">
                                <textarea
                                       class="form-control"
                                       rows="4"
                                       id="body"
                                       v-model="item.body"
                                       placeholder="enter body...">
                                </textarea>
                            </div>
                        </div>
                    </form>
                </template>
            </ListComponent>
        </div>
    </div>
</template>

<script>
  import ListComponent from "../components/ListComponent"
  import { getPostApi, updatePostApi} from "../api/postApi"

  export default {
    name: "PostHe",
    components: {
      ListComponent
    },
    data(){
      return {
        getPostApi,
        updatePostApi,
        fields:[
          {
            name:'id',
            title: 'ID',
            id: true

          },
          {
            name:'title',
            title: 'Title'

          },
          {
            name:'body',
            title: 'Content'

          }
        ],
        modalTitle: 'Post'
      }
    }
  }
</script>

<style scoped>

</style>
