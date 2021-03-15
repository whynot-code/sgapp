<template>
  <section class="rightSection">
     <Reminder />
  </section>
</template>

<script>
import Reminder from "@/components/Reminder.vue"
export default {
    name: "RightSection",
    components: {
        Reminder,
    }
}
</script>

<style scoped>
    .rightSection {
        width: 18vw;
        height: 92vh;
        border: 1px solid black;
        float: left;

        display: flex;
        justify-content: center;
    }
</style>