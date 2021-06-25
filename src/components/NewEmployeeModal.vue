<template> 
    <div v-if="newEmployee" class="newContact">
        <button @click="newEmployeeActive(false)" class="closeModal"></button>
        <h1>Nowy Pracownik:</h1>
        <form action="" name="contactForm">
            <label for="name">Nazwa:</label>
            <input type="text" v-model="newEmployeeData.name" name="name" id="name">

            <label for="email">E-mail:</label>
            <input type="text" v-model="newEmployeeData.email" name="email" id="email">

            <label for="tel">Tel:</label>
            <input type="text" v-model="newEmployeeData.tel" name="tel" id="tel">
    
            <button @click.prevent="addNewEmployee()" class="addOrder">Dodaj</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "NewEmployeeModal",
    data() {
        return {
            newEmployeeData: {
                name: "",
                email: "",
                tel: "",
            }
        }
    },
    computed: {
        ...mapGetters(["newEmployee", "currEmployees"]),
        nextId() {
            return this.currEmployees[0].id
        }
    },
    methods: {
        ...mapActions(["newEmployeeActive", "addEmployee"]),
        closeModal() {
            this.newEmployeeActive(false)
            this.clearForm()
        },
        clearForm() {
            for(let key in this.newEmployeeData) {
                this.newEmployeeData[key] = "";
            }
        },
        addNewEmployee() {
            let nameInput = document.querySelector("#name");

            if(!this.newEmployeeData.name) {   //VALIDATE EMPTY ORDER
                nameInput.setAttribute("placeholder", "Brak nazwy! :(") ;
                nameInput.style.border = '1px solid red';
            } 
                else{
                nameInput.style.border = 'none';

                let data = {
                    id: this.nextId+1,
                    name: this.newEmployeeData.name,
                    email: this.newEmployeeData.email,
                    tel: this.newEmployeeData.tel,
                }

                this.addEmployee(data);
                data = "";
                this.closeModal()
            }   
        },
        fixDate(el) {
            return el < 10 ? `0${el}` : el
        }  
    }
}
</script>

<style scoped>
    .newContact {
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
        width: 35px;
        height: 3px;
        border-radius: 5px;
        left: 92%;
        top: 50px;
        position: absolute;
        background: black;
        transform: rotate(45deg);
        border: none;
        cursor: pointer;
    }
    .closeModal::before {
        position: absolute;
        content: "";
        width: 35px;
        height: 3px;
        background: black;
        transform: rotate(-90deg) translate(2px,-18px);
    }
    .closeModal:hover {
        transform: rotate(45deg) scale(1.1);
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
    textarea {
        width: 55%;
        height: 80px;
        padding: 3px;
    }
  
    h1 {
        padding: 20px;
        font-size: 40px;
    }
      .addOrder {
        font-size: 20px;
        padding: 5px;
        margin: 15px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }
    .addOrder:hover {
        transform: translateY(-2px);
    }
    .hidden {
        display: none;
    }
</style>