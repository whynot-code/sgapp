<template>
    <div class="clock">
        {{ clock.seconds }} {{ clock.minutes }} {{ clock.weekDay }}
    </div>
</template>

<script>
export default {
    name: "Clock",
    data() {
        return {
            clock: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                monthDay: new Date().getDate(),
                weekDay: new Date().getDay(),
                seconds: new Date().getSeconds(),
                minutes: new Date().getMinutes(),
                hours: new Date().getHours(),
            },
            days: [
                "Niedziela",
                "Poniedziałek",
                "Wtorek",
                "Środa",
                "Czwartek",
                "Piątek",
                "Sobota"
            ]   
    }
},
    computed: {
        
    }
}
</script>

<style>

</style>