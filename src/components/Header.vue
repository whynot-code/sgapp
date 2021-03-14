<template>
  <header class="header">
    <div>
      <input v-model="givenValue" @keyup="searchIt" type="search" name="search" id="search">
      <tr v-for="order in result" :key="order.id">
        <p>{{ order.name }}</p>
      </tr>
    </div>
    <Clock />
    <h1>SG Sakowicz Tarakan</h1>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
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
    searchIt(){
      this.result = []
      if(this.givenValue){
      this.getCurrOrders.forEach(order => {
        order.name.toUpperCase().includes(this.givenValue.toUpperCase()) ? this.result.unshift(order) : null
      })
      }
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
  
  
</style>
