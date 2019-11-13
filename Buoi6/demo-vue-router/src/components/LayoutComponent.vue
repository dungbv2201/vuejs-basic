<template>
    <div class="container-fluid">
        <MenuHeader></MenuHeader>
        <router-view></router-view>
        <footer> hehe </footer>
    </div>
</template>

<script>
    import MenuHeader from "../view/MenuHeader";
  export default {
    name: "LayoutComponent",
    components:{
      MenuHeader
    }
  }
</script>

<style scoped>

</style>