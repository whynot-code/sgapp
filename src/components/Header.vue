<template>
  <header class="header">
    <input type="search" name="search" id="search">
    <div class="clock">{{ clock.date }}</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return{
      clock: {
        date: new Date(),
      }
    }
  },
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
