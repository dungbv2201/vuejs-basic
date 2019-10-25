<template>
    <div class="col-sm-12">
        <div class="row my-5">
            <div class="col-sm-6">
                <slot></slot>
            </div>
            <div class="col-sm-6">
                <button class="btn btn-success">Create</button>
            </div>
        </div>
        <div class="row my-5">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col" v-for="field in fields" :key="field.name">{{ field.title }}</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(record,index) in list" :key="index+Math.random()">
                    <th v-for="(item,index2) in fields" :key="index2 +Math.random()">
                        <template v-if="item.type == 'image' ">
                            <img :src="record[item.name]">
                        </template>
                        <template v-else>
                            {{ record[item.name]}}
                        </template>
                    </th>
                    <th style="width: 15%" class="d-flex">
                        <button class="btn btn-primary mx-3">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ListComponent",
    props: {
      fields: {
        require: true,
        type: Array,
        default: null
      },
      listApi: {
        require: true,
        type: Function
      }
    },
    created(){
      this.getList()
    },
    data() {
      return {
        list: []
      }
    },
    methods:{
      getList(){
        this.listApi()
          .then(response=>{
            this.list = response.data
          })
      }
    }
  }
</script>

<style scoped>

</style>