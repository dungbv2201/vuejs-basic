<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderLayout from "./view/Layout/HeaderLayout";
export default {
  name: 'app',
  components:{
    HeaderLayout
  }
}
</script>

<style>
@import "styles/loading.scss";
</style>
