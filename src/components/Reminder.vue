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
          {{ currTime.daysInMonth(currTime.month, currTime.year) }}
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
            setTimeout(() => {
            let clostestTerms = [];
            let daysRemain = 0;
          //  const {month, monthDay, daysInMonth, year} = this.currTime;
          const {daysInMonth} = this.currTime
            
            this.getCurrOrders.forEach((order) => {
             //   const termArray = order.termin.split(".")
              //  const yearsDiffrence = Number(termArray[2]) - year   
                // const moreThanYear = () => {
                //         let count = 0;
                //         yearsDiffrence > 1 ? count += ((yearsDiffrence-1) * 365) : null     //All years after first
                //          for(let i = 1; i <= Number(termArray[1]); i++){    // Months from next year
                //                 count += daysInMonth(i, Number(termArray[2]))
                //         }
                //         count += Number(termArray[0])

                //         for(let i = month+1; i <= 12; i++){    // Months left in this year
                //         count += daysInMonth(i, year)
                //         }
                //         const currMonthDaysLeft = monthDay - daysInMonth(month, year)
                //         count += currMonthDaysLeft

                //         return count
                // }
                    
                // const lessThanYear = () => {
                //     let count = 0;
                //     if(Number(termArray[1]) - month) {
                //         for(let i = month+1; i < Number(termArray[1]); i++) {
                //         count += daysInMonth(i, year)
                //     }
                //     count += Number(termArray[0])
                //     count += daysInMonth(month, year) - monthDay
                //     }
                //     else {
                //         count += Number(termArray[0]) - monthDay 
                //     }
                //     return count
                // }

                const overTime= () => {
                    let count = 0;
                    let d = 20
                    let d1 = 5
                    let m = 5
                    let m1 = 6
                    let r = 2021
                    // let r1 = 2021
                    while (d1 != d && m1 != m){
                        if(m === 12) {
                            r++
                            m = 1
                        }
                        if(d === daysInMonth(m, r)) {
                            m++
                            d = 0
                        }
                        console.log('yhm')
                        count++
                        d++
                    }
                        console.log(count)
                }
                
                // daysRemain = lessThanYear()
                overTime()
                clostestTerms.push([order.name, order.termin, daysRemain])
            })
           console.log(clostestTerms)
            }, 1000)
        }
    },
    mounted(){
         this.checkTerm();
    },
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
        border-bottom: 1px solid black;   
        text-align: center;
    }
    tr > td:first-of-type {width: 50%;}
    tr > td:nth-of-type(2) {width: 35%;}
</style>