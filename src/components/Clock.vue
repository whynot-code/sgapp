<template>
    <div class="clock">
        <div>
            <h2>{{ fixDisplay(this.currTime.hours) }}:{{ fixDisplay(this.currTime.minutes) }}:{{ fixDisplay(this.currTime.seconds)}}</h2>
            <h3>{{ fixDisplay(this.currTime.monthDay) }}-{{ fixDisplay(this.currTime.month+1) }}-{{ currTime.year }}</h3>
        </div>
        <h1>{{ dayName }}</h1>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: "Clock",
    data() {
        return {
            currTime: "",
    }
},
    
    computed: {
        dayName(){
            return this.currTime.weekDay == 0 ? this.currTime.days[6] : this.currTime.days[this.currTime.weekDay-1]
        },
        monthName(){
            return this.currTime.month == 1 ? this.currTime.months[7] :this.currTime.months[this.currTime.month]
        },
        
    },
    methods: {
         ...mapActions(['mutateCurrTime']),
       getTime() {
           setInterval(() => {
               this.currTime = {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth(),
                    monthDay: new Date().getDate(),
                    weekDay: new Date().getDay(),
                    seconds: new Date().getSeconds(),
                    minutes: new Date().getMinutes(),
                    hours: new Date().getHours(),
                    daysInMonth(month, year) {
                        return new Date(year, month, 0).getDate();
                    },
                    days: [
                        "Poniedziałek",
                        "Wtorek",
                        "Środa",
                        "Czwartek",
                        "Piątek",
                        "Sobota",
                        "Niedziela"
                    ],
                     months: [
                        "Styczeń",
                        "Luty",
                        "Marzec",
                        "Kwiecień",
                        "Maj",
                        "Czerwiec",
                        "Lipiec",
                        "Sierpień",
                        "Wrzesień",
                        "Październik",
                        "Listopad",
                        "Grudzień"
                    ]
               };
               return this.mutateCurrTime(this.currTime)
           }, 1000)
       },
       fixDisplay(el){
            return el < 10 ? `0${el}` : el
        }
    },
    mounted(){
        this.getTime()
    },
}
</script>

<style scoped>
    .clock {
        height: 7vh;
        display: flex;
        align-items: center;
    }
    h1{
        text-transform: uppercase;
        margin-left: 15px;
        font-size: 35px;
        padding: 5px;
    }
    div{
        text-align: center;
    }
</style>
