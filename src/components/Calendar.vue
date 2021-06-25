<template>
  <section class="calendar">
    <header>
      <h1>Kalendarz</h1>
      <nav>
        <button @click="changeMonth('prev')">⬅</button>
        <h2>{{ currTime.months[month] }} {{ year }}</h2>
        <button @click="changeMonth('next')">➡</button>
      </nav>
    </header>
    <table>
      <tr>
        <th v-for="day in currTime.days" :key="currTime.days.indexOf(day)">
          {{ day }}
        </th>
      </tr>
      <tr>
        <td
          :class="{ activeCell: cell[1] }"
          v-for="cell in monthCells"
          :key="cell[0]"
        >
          {{ cell[1] }}
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Calendar",
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: new Date().getDate(),
    };
  },
  methods: {
    changeMonth(dir) {
      if (dir == "next") {
        this.month++;
        if (this.month == 12) {
          this.year++;
          this.month = 0;
        }
      } else {
        this.month--;
        if (this.month == -1) {
          this.year--;
          this.month = 11;
        }
      }
      this.updateInfo();
    },
    updateInfo() {
      const currMonth = `.${this.month + 1 < 10 ? "0" : null}${
        this.month + 1
      }.${this.year}`;
      console.log(currMonth);
    },
  },
  computed: {
    ...mapGetters(["currTime", "getCurrOrders"]),
    monthCells() {
      let cells = [];

      for (let i = 1; i <= 42; i++) {
        i >= this.firstMonthDay &&
        i <= this.currMonthDays + this.firstMonthDay - 1
          ? cells.push([i, i - this.firstMonthDay + 1])
          : cells.push([i]);
      }

      return cells;
    },
    firstMonthDay() {
      return new Date(this.year, this.month, 1).getDay();
    },
    currMonthDays() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
  },
};
</script>

<style scoped>
.calendar {
  width: 100%;
  height: 92vh;

  background: rgba(255, 250, 205, 0.925);

  padding: 25px;

  display: flex;
  flex-direction: column;

  align-items: center;

  z-index: 2;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
nav {
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;
  position: relative;
}
button {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}
button:first-of-type {
  left: 0;
}
button:nth-of-type(2) {
  right: 0;
}
table {
  width: 95%;
  table-layout: fixed;
  padding: 3%;
}
tr {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-around;
}
tr:nth-of-type(2) {
  height: 60vh;
}
th {
  width: 13.5%;
  text-align: end;
  padding-top: 25px;
  padding-right: 5px;
  font-size: 14px;
  font-weight: 400;
  background: rgba(31, 154, 255, 0.26);
  margin-bottom: 5px;
}
td {
  width: 13.5%;
  height: 9vh;
  background: rgba(134, 134, 134, 0.205);
}
h1 {
  font-size: 40px;
  margin-top: 20px;
  text-transform: uppercase;
}
h2 {
  font-size: 35px;
}
.activeCell {
  background: rgba(255, 166, 0, 0.479);
  cursor: pointer;
}
.activeCell:hover {
  background: rgba(255, 166, 0, 0.753);
}
</style>