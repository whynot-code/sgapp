<template>
   <article id="reminder">
          <table>
                <tr v-for="term in termsArray" :key="termsArray.indexOf(term)">
                    <td>{{ term[0] }}</td><td>{{ term[1] }}</td><td>{{ term[2] }}dni</td>
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
            termsArray: []
        }
    },
    computed: {
        ...mapGetters(["currTime", "getCurrOrders"])
    },
    methods: {
        checkTerm(){
            setTimeout(() => {
            let fix;  //If term day == 1, program crashed. Don't know why.
            
            this.termsArray = [];

            this.getCurrOrders.forEach((order) => {
               let count = 0;

                let {month, monthDay, daysInMonth, year} = this.currTime;
                
                const termin = order.termin.split('.').map(el => Number(el))
                let day = monthDay

                if((termin[2] < year) || (termin[2] <= year && termin[1] < month) || (termin[2] <= year && termin[1] <= month && termin[0] < day)){
                    
                    while (day != termin[0] || month != termin[1] || year != termin[2]) {
                    if (day === 0) {
                        month--;
                        day = daysInMonth(month, year);
                    }
                    if(month === 0){
                        year--
                        month = 12
                    }
                    day--;
                    count--;
                }

                }
                else{

                    if(termin[0] == 1) {termin[0]++ ; fix = true} //fix Function

                    while (day != termin[0] || month != termin[1] || year != termin[2]) {
                    if (day === daysInMonth(month, year)+1) {
                        month++;
                        day = 1;
                    }
                    if(month === 13){
                        year++
                        month = 1
                    }

                    day++;
                    count++;
                }
                }  

                fix ? count-- : null //fix Function
                
                this.termsArray.push([order.name, order.termin, count])

                this.termsArray.sort((a, b) => {
                    return a[2] - b[2]
                }) 
            })
            }, 1000)
            console.log(this.termsArray)
        }
    },
    mounted(){
        this.checkTerm();
    },
    watch: {
        getCurrOrders: function(){
            this.checkTerm();
        }      
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
        font-size: 12px;
        border-spacing: 0;
        display: flex;
        flex-direction: column-reverse;
    }
    tr {
        width: 100%;
        position: relative;
    }
    td{
        border-bottom: 1px solid black;   
        text-align: center;
        height: 20px;
    }
    tr > td:nth-of-type(1) {width: 60%;}
    tr > td:nth-of-type(3) {width: 20%;}
 
</style>