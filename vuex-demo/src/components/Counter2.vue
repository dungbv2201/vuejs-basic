<template>
    <div>
        <h1>counter 2</h1>
        <h2 class="text-success">{{ counter }}</h2>
        <h3 class="text-success">{{ name }}</h3>
    </div>
</template>

<script>
  export default {
    name: "Counter2",
    computed:{
      counter(){
        return this.$store.state.count
      },
      name(){
        return this.$store.getters.upperCase
      }
    }
  }
</script>

<style scoped>

</style>