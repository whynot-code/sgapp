<template>
  <main class="main">
      <Calendar />
      <router-view></router-view>
  </main>
</template>

<script>
import Calendar from "@/components/Calendar.vue"
export default {
    name: "Main",
    components: {
        Calendar,
    }

}
</script>

<style scoped>
    .main {
        width: 70vw;
        height: 92vh;
        border: 1px solid black;
        float: left;
    }
</style>