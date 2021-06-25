<template>
  <main class="main">
      <Calendar v-if="calendar" />
      <ProjectDetails />
      <router-view></router-view>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Calendar from "@/components/Calendar.vue"
import ProjectDetails from "@/components/ProjectDetails.vue"
export default {
    name: "Main",
    components: {
        Calendar,
        ProjectDetails
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
        float: left;
        position: relative;
    }
</style>