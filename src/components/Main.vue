<template>
  <main class="main">
      <router-view></router-view>
  </main>
</template>

<script>
export default {
    name: "Main",

}
</script>

<style scoped>
    .main {
        width: 70vw;
        height: 92vh;
        background: green;
        float: left;
    }
</style>