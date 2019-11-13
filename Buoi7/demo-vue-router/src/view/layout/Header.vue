<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link tag="a" class="nav-link" :to="{path:'/users',query:{ name: 'vuejs'}}" active-class="active" exact>
                User
            </router-link>
        </li>

        <li class="nav-item">
            <router-link
                    tag="a"
                    class="nav-link"
                    :to="{
                       name: 'userDetail',
                        params:{
                            id:10,
                            name: 'shirt'
                        }
                    }"
                    active-class="active">
                User Detail
            </router-link>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>