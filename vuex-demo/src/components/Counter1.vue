<template>
    <div>
        <h1>counter 1</h1>
        <h2 class="text-success">{{ counter }}</h2>
        <h3 class="text-success">{{ name }}</h3>
        <button class="btn btn-success" @click="count()">Increment</button>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: "Counter1",
    computed: {
      ...mapState({
        counter: 'count'
      }),
      ...mapGetters({
        name: 'upperCase'
      }),
      hello() {
        return 'hello'
      }
    },
    methods:{
      ...mapMutations(['updateCount']),
      ...mapActions(['increment']),
      async count(){
        // this.$store.commit('increment')
        // try{
        //   let msg = await this.increment()
        //   alert(msg)
        // }catch (msg) {
        //   alert(msg)
        // }
        this.increment()
          .then(msg =>{
            alert(msg)
          })
          .catch(msg=>{
            alert(msg)
          })
      },


    }
  }
</script>

<style scoped>

</style>