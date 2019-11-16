<template>
    <div class="d-flex mt-5">
        <button class="btn btn-success" @click="increment()">increment +</button>
        <button class="btn btn-danger" @click="decrement()">decrement -</button>
    </div>
</template>

<script>
  export default {
    name: "Counter",
    props:{
      count:{
        require: true,
        type: Number,
        default: 0
      }
    },
    data(){
      return{
        count2: this.count
      }
    },
    methods:{
      increment(){
        this.$emit('increment',this.count2++)
      },
      decrement(){
        this.$emit('decrement', this.count2--)
      }
    }
  }
</script>

<style scoped>

</style>