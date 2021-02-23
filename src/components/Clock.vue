<template>
    <div class="clock">
        <div>
            <h2>{{ fixDisplay(this.currTime.hours) }}:{{ fixDisplay(this.currTime.minutes) }}</h2>
            <h3>{{ currTime.year }}-{{ fixDisplay(this.currTime.month) }}-{{fixDisplay(this.currTime.monthDay)}}</h3>
        </div>
        <h1>{{ dayName }}</h1>
    </div>
</template>

<script>
export default {
    name: "Clock",
    data() {
        return {
            currTime: "",
            days: [
                "Niedziela",
                "Poniedziałek",
                "Wtorek",
                "Środa",
                "Czwartek",
                "Piątek",
                "Sobota"
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
    }
},
    computed: {
        dayName(){
            return this.days[this.currTime.weekDay]
        },
        monthName(){
            return this.months[this.currTime.month-1]
        },
    },
    methods: {
       getTime() {
           setInterval(() => {
               return this.currTime = {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth() + 1,
                    monthDay: new Date().getDate(),
                    weekDay: new Date().getDay(),
                    seconds: new Date().getSeconds(),
                    minutes: new Date().getMinutes(),
                    hours: new Date().getHours(),
               }
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
        height: 5vh;
        display: flex;
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
