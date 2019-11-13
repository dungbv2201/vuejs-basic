<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">LOgo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="home" tag="a" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="about" tag="a" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="login" tag="a" class="nav-link">Login</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  export default {
    name: "Menu"
  }
</script>

<style scoped>

</style>