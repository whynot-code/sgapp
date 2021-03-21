<template>
  <header class="header">
    <div>
      <input v-model="givenValue" @keyup="searchIt" type="search" name="search" id="search">
    </div>
    <button>
      <img src="../assets/icons/calendar.svg" alt="Calendar-button">
    </button>
    <Clock />
    <h1>SG Sakowicz Tarakan</h1>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Clock from "@/components/Clock.vue"

export default {
  name: 'Header',
  components: {
    Clock,
  },
  data() {
    return{
      givenValue: "",
      result: []
      }
    },
  computed: {
    ...mapGetters(["getCurrOrders"]),
  },
  methods: {
    ...mapActions(["setSearchedData"]),
    searchIt(){
      this.result = []
      if(this.givenValue){
      this.getCurrOrders.forEach(order => {
        order.name.toUpperCase().includes(this.givenValue.toUpperCase()) ? this.result.push(order) : null
      })
      }
      this.givenValue && this.result.length === 0 ? this.result = "Brak pasujących wyników!" : null
      this.setSearchedData(this.result)
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
    width: 100%;
  }
  tr {
    position: absolute;
    height: 30px;
    width: 30%;
    background: gray;
    border: 1px solid black;
    z-index: 2;
  }
  div {
    width: 30%;
  }
  
  button {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background: rgb(105, 105, 105);
  }
  button:focus {outline:none;}
  button:active {background: rgb(73, 73, 73);;}
  button img {
    width: 30px;
    height: 30px;
  }
  
</style>
