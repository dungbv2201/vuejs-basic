<template>
    <div class="container-fluid">
        <div class="row">
            <div class="w-100">
                <HeaderLayout></HeaderLayout>
            </div>
            <router-view></router-view>
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