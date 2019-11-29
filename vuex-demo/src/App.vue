<template>
  <div id="app">
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-6">
          <Counter1></Counter1>
        </div>
        <div class="col-sm-6">
          <Counter2></Counter2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

export default {
  name: 'app',
  components: {
    Counter1,
    Counter2
  }
}
</script>

<style>

</style>
