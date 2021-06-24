<template>
  <header class="header">
    <div>
      <input v-model="givenValue" placeholder="Szukaj.." @keyup="searchIt" type="search" name="search" id="search">
    </div>
    <button @click="openCalendar(!calendar)">
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
    ...mapGetters(["getCurrOrders", "calendar","currContacts", "currEmployees", "allTodos"]),
    currRoute(){
      return this.$route.name
    }
  },
  methods: {
    ...mapActions(["setSearchedData", "openCalendar"]),
    searchIt(){
      this.result = []

      if(this.$route.name === "Kontakty") {
        if(this.givenValue){
        this.currContacts.forEach(value => {
         value.name.toUpperCase().includes(this.givenValue.toUpperCase()) || value.description.toUpperCase().includes(this.givenValue.toUpperCase()) || value.company.toUpperCase().includes(this.givenValue.toUpperCase()) || value.location.toUpperCase().includes(this.givenValue.toUpperCase()) || value.position.toUpperCase().includes(this.givenValue.toUpperCase()) ? this.result.push(value) : null
          })
        } 
      }
      if(this.$route.name === "Projekty"){
        if(this.givenValue){
          this.getCurrOrders.forEach(order => {
            order.name.toUpperCase().includes(this.givenValue.toUpperCase()) ? this.result.push(order) : null
          })
        }
      }
         if(this.$route.name === "Pracownicy") {
        if(this.givenValue){
        this.currEmployees.forEach(value => {
         value.name.toUpperCase().includes(this.givenValue.toUpperCase()) ? this.result.push(value) : null || value.email.toUpperCase().includes(this.givenValue.toUpperCase()) ? this.result.push(value) : null
          })
        } 
      }
       if(this.$route.name === "Todo") {
        if(this.givenValue){
        this.allTodos.forEach(value => {
         value.task.toUpperCase().includes(this.givenValue.toUpperCase()) ? this.result.push(value) : null
          })
        } 
      }
      this.givenValue && this.result.length === 0 ? this.result = "Brak pasujących wyników!" : null
      this.setSearchedData(this.result)
      console.log(this.setSearchedData(this.result))
      
    }
  },
  watch: {
    currRoute: function(){
      this.result = [];
      this.givenValue = "";
     this.setSearchedData(this.result)
    },

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
    border: none;
  }
  input {
    height: 30px;
    width: 100%;
    outline: none;
    border-radius: 10px;
    border: none;
    padding: 2px 10px;
  }
  input:focus {
    background: rgb(221, 221, 221);
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
    transition: transform 0.1s ease-in-out;
  }
  button:hover {
    background: rgb(105, 105, 105);
    transform: scale(1.05);
  }
  button img {
    transition: transform 0.1s ease-in-out;
  }
  button:hover img {
    transform: translateY(-1px);
  }
  button:focus {outline:none;}
  button:active {background: rgb(73, 73, 73);;}
  button img {
    width: 30px;
    height: 30px;
  }
  
</style>
