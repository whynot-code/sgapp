<template>
    <section id="todo">
        <div class="form">
            <input v-model="newTask.task" placeholder="Nowe zadanie" type="text">
            <span>Nazwa musi zawierać przynajmniej 8 znaków.</span>
            <input v-model="newTask.date" type="date" name="date" id="date">
            <span>Podaj datę.</span>
            <button @click="addNewTask()">Dodaj zadanie</button>
        </div>
       <table>
           <tr>
               <th>Zadanie</th>
               <th>Termin</th>
               <th>Status</th>
               <th>Akcja</th>
           </tr>

            <p v-if="typeof searchedData === 'string'"> {{ searchedData }}</p>

           <tr v-else :class="{ done: todo.status == 'done'}" v-for="todo in todos" :key="todos.indexOf(todo)">
               <td>{{ todo.task }}</td>
               <td>{{ todo.termin }}</td>
               <td>{{ todo.status == "open" ? "Otwarte" : "Zakończono"}}</td>
               <td>
                   <button @click.prevent="doneTodo(todo)" v-if="todo.status == 'open'">Zrobione</button>
                   <button @click.prevent="deleteTodo(todo)" >Usuń</button>
               </td>
           </tr>
       </table>
       {{ newTask.date }}
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
    name: "Todo",
    data() {
        return{
            newTask: {
                task: "",
                date: "",
            }
        }
    },
    computed: {
        ...mapGetters(["allTodos", "searchedData"]),
        todos(){
            return this.searchedData.length > 0 ? this.searchedData : this.allTodos
        }
    },
    methods: {
        ...mapActions(["deleteTodo", "doneTodo", "addTodo"]),
        addNewTask() {
            const nameInput = document.querySelector('[type="text"]'),
                  errMsgs = document.querySelectorAll('span'),
                  dateInput = document.querySelector('[type="date"]')
            
            if(this.newTask.task.length < 8){
                nameInput.classList.add('invalid')
                errMsgs[0].style.transform = "translateY(15px)"
            } else {
                nameInput.classList.remove('invalid')
                errMsgs[0].style.transform = "translateY(0px)"
            }
            if(!this.newTask.date) {
                dateInput.classList.add('invalid')
                errMsgs[1].style.transform = "translateY(15px)"
            } else {
                dateInput.classList.remove('invalid')
                errMsgs[1].style.transform = "translateY(0px)"
            }

            if(this.newTask.task.length > 7 && this.newTask.date) {
                const newData = {
                    task: this.newTask.task,
                    termin: this.newTask.date.split("-").reverse().join("."),
                    status: "open"
                }
                this.addTodo(newData)
                this.newTask.task = "";
                this.newTask.date = "";
            }
        }
    }
}
</script>

<style scoped>
    #todo {
        width: 100%;
    }
    div {
        position: relative;
        width: 100%;
        padding: 3vh 0;
        height: 7vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input {
        width: 50%;
        padding: 4px;
        font-size: 18px;
        position: relative;
        z-index: 1;
    }
    input[type="date"] {
        width: 15%;
        height: 3.5vh;
        margin-left: 1vw;
    }
    div > button {
        font-size: 18px;
        padding: 4px;
        margin-left: 1vw;
    }
    table {
        table-layout: fixed;
        border-collapse: collapse;
        width: 100%;
    }
    tr {
        width: 100%;
        user-select: none;
        padding: 10px;
        
    }
    th {
        border: 1px solid black;
        padding: 1vh;
    }
    th:first-of-type {
        width: 65%;
    }
    td{
        text-align: center;
        padding: 0.5vh;
    }
    tr:hover {
        background: rgba(255, 250, 240, 0.295);
    }
    td button {
        font-size: 12px;
        margin: 0 2px;
        padding: 1px;
    }
    .done {
        background: rgba(0, 49, 0, 0.452) !important;
        text-decoration: line-through;
    }
    .invalid {
        transition: border .2s ease-in-out;
        border: 1px solid red;
    }
    span {
        position: absolute;
        color: rgb(189, 0, 0);
        font-size: 12px;
        transition: transform 0.2s ease-in-out;
    }
    span:first-of-type{ bottom:18px; left:8vw;}
    span:last-of-type{ bottom:18px ; left:44vw;}

    p {
        font-size: 30px;
        position: absolute;
        left: 38%;
        text-align: center;
        padding: 50px 0;
    }
    button{
        cursor: pointer;
    }
</style>