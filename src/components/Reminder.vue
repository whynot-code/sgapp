<template>
   <article id="reminder">
          <table>
                <tr>
                    <td>Pruszcz Gałczyńskiego</td><td>15.03.2021</td><td>7 dni</td>
                </tr>
                <tr>
                    <td>Tczew Ogrodowa</td><td>Termin</td><td>1 dzień</td>
                </tr>
                <tr>
                    <td>Tczew Norwida</td><td>Termin</td><td>13 dni</td>
                </tr>
                <tr>
                    <td>DEKPOL</td><td>Termin</td><td>4 dni</td>
                </tr>
                <tr>
                    <td>Cośtak</td><td>Termin</td><td>3 dni</td>
                </tr>
          </table>
      </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Reminder",
    data(){
        return{
            
        }
    },
    computed: {
        ...mapGetters(["currTime", "getCurrOrders"])
    },
    methods: {
        checkTerm(){
            // let closestTerms = [];
            const {monthDay, month, year} = this.currTime
            console.log(month, monthDay, year)
            console.log(this.currTime)
            // this.getCurrOrders.forEach((order, idx) => {
                
            // })
        }
    },
    mounted(){
        this.checkTerm();
    },
    updated(){
        this.checkTerm();
    }
}
</script>

<style scoped>
    #reminder {
        width: 80%;
        height: 300px;
        background: white;
        margin-top: 30px;
    }
    table {
        width: 100%;
        font-size: 13px;
        border-spacing: 0;
    }
    tr {
        padding: 1px;
        width: 100%;
    }
    td{
        border: 1px solid black;   
        text-align: center;
    }
    tr > td:first-of-type {width: 50%;}
    tr > td:nth-of-type(2) {width: 35%;}
</style>