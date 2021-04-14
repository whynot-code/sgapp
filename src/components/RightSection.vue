<template>
  <section class="rightSection">
      <h2>Terminy</h2>
     <Reminder />
     <Reminder1 />
  </section>
</template>

<script>
import Reminder from "@/components/Reminder.vue"
import Reminder1 from "@/components/Reminder1.vue"
export default {
    name: "RightSection",
    components: {
        Reminder,
        Reminder1
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
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    h2{
        margin-top: 8px;
        padding: 0px 1vw;
        width: 100%;
    }
</style>