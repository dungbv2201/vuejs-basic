<template>
    <div class="container-fluid">
        <div class="row">
            <div class="w-100" style="position:fixed;z-index:3">
                <HeaderLayout></HeaderLayout>
            </div>
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderLayout from "../view/Layout/HeaderLayout";
  export default {
    name: "LayoutComponent",
    components:{
      HeaderLayout
    }
  }
</script>

<style scoped>

</style>