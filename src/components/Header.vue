<template>
  <header class="header">
    <input type="search" name="search" id="search">
    <Clock />
    <h1>SG Sakowicz Tarakan</h1>
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
    width: 88vw;
    height: 8vh;
    float: left;

    display: flex;
    align-items: center;
    border: 1px solid black;
    position: relative;

    justify-content: space-around;
    padding: 0;
  }
  input {
    height: 30px;
    width: 30%;
  }
  
</style>
