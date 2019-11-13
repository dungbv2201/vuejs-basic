<template>
   <div>
       <h1>User Detail</h1>
       <button class="btn btn-success" @click="backToUser()">back to users</button>
       <h2>{{ id }}</h2>
       <h2>{{ $route.params.name }}</h2>
   </div>
</template>

<script>
  export default {
    name: "UserDetail",
    data(){
      return{
        id: this.$route.params.id
      }
    },
    beforeRouteEnter(to, from, next){
      next()
    },
    beforeRouteLeave(){
      alert('ban chac chan muon thoat k')
    },
    methods:{
      backToUser(){
        this.$router.push({
          name: 'users'
        })
      }
    }
  }
</script>

<style scoped>

</style>