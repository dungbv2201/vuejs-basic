<template>
    <div class="container-fluid">
        <div class="row">
            <div class="w-100">
                <HeaderApp></HeaderApp>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import Header from "./Header";

  export default {
    name: "LayoutComponent",
    components:{
      HeaderApp: Header
    }

  }
</script>

<style scoped>

</style>