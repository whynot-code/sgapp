<template>
  <main class="main">
      <Calendar v-if="calendar" />
      <router-view></router-view>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Calendar from "@/components/Calendar.vue"
export default {
    name: "Main",
    components: {
        Calendar,
    },
    computed: {
        ...mapGetters(["calendar"])
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