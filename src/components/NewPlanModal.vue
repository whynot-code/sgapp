<template> 
    <div v-if="newPlan" class="newPlan">
        <button @click="newPlanActive(false)" class="closeModal">x</button>
        <h1>Nowy Plan:</h1>
        <form name="planForm">
            <label for="projekt">Projekt:</label>

            <div id="typeProject">
                <input type="text" @keyup.prevent="searchProject(newPlanData.project)" autocomplete="off" v-model="newPlanData.project" name="project" id="project">
                <ul v-if="projectResults.length > 0" >
                    <li @mouseover="changeFocus()" @click="changeFocus()" class="result" v-for="el in projectResults" :key="projectResults.indexOf(el)">
                        {{ el.name }}
                    </li>
                    
                </ul>
            </div>
            

            <label for="company">Firma:</label>
            <input type="text" v-model="newPlanData.company" name="company" id="company"> 

            <label for="location">Miejscowość: </label>
            <input type="text" v-model="newPlanData.location" name="location" id="location">

            <label for="position">Stanowisko:</label>
            <input type="text" v-model="newPlanData.position" name="position" id="position">

            <label for="email">E-mail:</label>
            <input type="text" v-model="newPlanData.email" name="email" id="email">

            <label for="tel">Tel:</label>
            <input type="text" v-model="newPlanData.tel" name="tel" id="tel">

            <label for="description">Opis:</label>
            <textarea type="text" v-model="newPlanData.description" name="description" id="description"></textarea>
    
            <button @click.prevent="" class="addOrder">Dodaj</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "NewPlanModal",
    data() {
        return {
            newPlanData: {
                project: "",
                company: "",
                location: "",
                position: "",
                email: "",
                tel: "",
                description: "",
            },
            projectResults: [],
            currPos: {
                idx: -1,
                el: ""
            }
        }
    },
    computed: {
        ...mapGetters(["newPlan", "getCurrOrders"]),
        nextId() {
            return this.currContacts[0].id
        },
        orders() {
            return this.getCurrOrders ? this.getCurrOrders : null
        }
    },
    methods: {
        ...mapActions(["newPlanActive", "addContact"]),
        searchProject(value) {
            this.projectResults = [];
            this.orders.forEach(el => {
                el.name.toUpperCase().includes(value.toUpperCase()) ? this.projectResults.push(el) : null
                !value || el.name.toUpperCase() == value.toUpperCase()  ? this.projectResults = [] : null
            })
            if(this.projectResults.length > 0){
                event.key == "ArrowDown" || event.key == "ArrowUp" || event.key == "Enter"? this.changeFocus(event.key) : null
            }
        },
        changeFocus(key){
            const arrayOfEl = document.querySelectorAll(".result")

            if(key){
            key == "ArrowDown" ? this.currPos.idx++ : this.currPos.idx--
            this.currPos.idx < -1 ? this.currPos.idx = -1 : null
            this.currPos.idx > arrayOfEl.length ? this.currPos.idx = arrayOfEl.length : null
            console.log(this.currPos.idx)
           } 
           else {
               this.currPos.idx = Array.from(arrayOfEl).indexOf(event.target)
               console.log(this.currPos.idx)
               
           }

           arrayOfEl.forEach( (el, idx) => {
               el.style.background = "transparent"
               if(this.currPos.idx == idx) {
                   el.style.background = "blanchedalmond"
               }
           })
           this.currPos.idx > -1 && this.currPos.idx < arrayOfEl.length ? this.currPos.el = this.projectResults[this.currPos.idx].name : null
           if(key == "Enter" || event.type == "click") {
               this.newPlanData.project = this.currPos.el
               this.projectResults = []
               this.currPos.idx = -1
           }
        },
        closeModal() {
            this.newPlanActive(false)
            this.clearForm()
        },
        clearForm() {
            for(let key in this.newPlanData) {
                this.newPlanData[key] = "";
            }
        },
        addnewPlan() {
            let nameInput = document.querySelector("#name");

            if(!this.newPlanData.name) {   //VALIDATE EMPTY ORDER
                nameInput.setAttribute("placeholder", "Brak nazwy! :(") ;
                nameInput.style.border = '1px solid red';
            } 
                else{
                nameInput.style.border = 'none';

               

                let newPlan = {
                    id: this.nextId+1,
                    name: this.newPlanData.name,
                    company: this.newPlanData.company,
                    location: this.newPlanData.location,
                    position: this.newPlanData.position,
                    email: this.newPlanData.email,
                    tel: this.newPlanData.tel,
                    description: this.newPlanData.description
                }

                this.addContact(newPlan);
                newPlan = "";
                this.closeModal()
            }   
        },
        fixDate(el) {
            return el < 10 ? `0${el}` : el
        }  
    },
    watch: {

    }
}
</script>

<style scoped>
    .newPlan {
        width: 100%;
        height: 92vh;
        position: absolute;

        background: rgba(255, 250, 205, 0.925);
        
        padding: 25px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
  
    .closeModal {
        padding: 3px 7px;
        border: 1px solid black;
        border-radius: 5px;
        background: red;
        left: 92%;
        top: 5%;
        position: absolute;
    }
    form {
        font-size: 20px;
        width: 80%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        width: 35%;
        margin: 5px 0 10px 0;
        padding: 3px;
    }

  
    h1 {
        padding: 20px;
        font-size: 40px;
    }
    .hidden {
        display: none;
    }
    #typeProject {
        position: relative;
        width: 35%;
    }
    #typeProject > input {
        width: 100%;
    }
    #typeProject > ul {
        width: 100%;
        max-height: 120px;
        overflow: hidden;
        background: white;
        border: 1px solid black;
        position: absolute;
        top: 30px;
    }
    #typeProject li:hover {
        cursor: pointer;
    }
</style>