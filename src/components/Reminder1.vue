<template>
   <article id="reminder">
          <table>   
                <tr  @dblclick="openCloseDetails(term[3])" v-for="term in termsToDisplay" :key="termsToDisplay.indexOf(term)">
                    <td>
                        {{ term[0] }}
                    </td>
                    <td>
                        {{ term[1] }}
                    </td>
                    <td :class="{ green: term[2] >= 8, yellow: term[2] < 8 && term[2] > 0, red: term[2] === 0}">
                        {{ 
                            term[2] == 1 ? `Jutro` : null
                        }}
                        {{
                            term[2] == 0 ? `Dzisiaj` : null
                        }}
                        {{
                            term[2] > 1 ? `${term[2]} dni`: null
                        }}
                    </td>

                </tr>
          </table>
      </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Reminder1",
    data(){
        return{
            termsArray: []
        }
    },
    computed: {
        ...mapGetters(["currTime", "allTodos"]),
        termsToDisplay() {
            let arr = new Array;
            if(this.termsArray){
                this.termsArray.forEach((el) => { if(el[2] >= 0) {arr.push(el)} })
                arr
            }
            return arr
        },
        status() {
            const arr = [];
            this.allTodos.forEach(el => arr.push(el.status))
            return arr
        }
    },
    methods: {
        ...mapActions([]),
        async checkTerm(){
            setTimeout(() => {
            let fix;  //If term day == 1, program crashed. Don't know why.
            
            this.termsArray = [];

            this.allTodos.forEach((todo) => {
               let count = 0;

                let {month, monthDay, daysInMonth, year} = this.currTime;
                
                month = month+1
                
                const termin = todo.termin.split('.').map(el => Number(el))
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
                
                todo.status == "open" ? this.termsArray.push([todo.task, todo.termin, count]) : null
           
                this.termsArray.sort((a, b) => {
                    return Number(a[2]) - Number(b[2])
                })
            })
            }, 1000)
        },
    },
    mounted(){
        this.checkTerm();
    },
    watch: {
        allTodos: function(){
            this.checkTerm();
        },  
        status: function(){
            this.checkTerm();
        },  
    }
}
</script>

<style scoped>
    #reminder {
        width: 90%;
        height: 39.5vh;
        background: white;
        overflow: hidden;
        position: relative;
    }
    table {
        width: 100%;
        height: 300px;
        font-size: 12px;
        border-spacing: 0;
        display: flex;
        flex-direction: column-reverse;
        border-collapse: collapse;
        user-select: none;
    }
    tr {
        display: flex;
        position: relative;
        justify-content: center;
        cursor: pointer;
    }
    tr:hover {
        background: whitesmoke;
    }
    td{
        border-bottom: 1px solid black;   
        text-align: center;
        padding: 2px;
    }
    tr > td:nth-of-type(1) {width: 50%;}
    tr > td:nth-of-type(2) {width: 30%;}
    tr > td:nth-of-type(3) {width: 20%;}

    .green {color: rgb(0, 204, 0)}
    .yellow {color: rgb(184, 184, 2)}
    .red {color: red}
</style>