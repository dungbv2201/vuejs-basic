<template>
   <div>
       <h1>User Detail</h1>
       <button class="btn btn-success" @click="backToUser()">back to users</button>
        <Counter :count="1" @increment="count = $event" @decrement="count = $event"></Counter>
       <h1>{{ count }}</h1>
   </div>
</template>

<script>
    import Counter from "../../components/Counter";
  export default {
    name: "UserDetail",
    data(){
      return{
        id: this.$route.params.id,
        count: 1
      }
    },
    components:{
      Counter
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