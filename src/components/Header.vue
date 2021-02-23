<template>
  <header class="header">
    <input type="search" name="search" id="search">
    <Clock />
  </header>
</template>

<script>
import Clock from "@/components/Clock.vue"
export default {
  name: 'Header',
  components: {
    Clock,
  },
  data() {
    return{
    
      }
    }
}
</script>

<style scoped>
  header {
    background: grey;
    width: 88vw;
    height: 8vh;
    float: left;

    display: flex;
    align-items: center;
  }
  input {
    height: 30px;
    width: 30%;
    margin-left: 50px;
  }
</style>
