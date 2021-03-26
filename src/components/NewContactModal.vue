<template> 
    <div class="newContact">
        <button class="closeModal">x</button>
        <h1>Nowy Kontakt:</h1>
        <form action="" name="contactForm">
            <label for="name">Nazwa:</label>
            <input type="text" v-model="newContactData.name" name="name" id="name">

            <label for="company">Firma:</label>
            <input type="text" v-model="newContactData.company" name="company" id="company"> 

            <label for="location">Miejscowość: </label>
            <input type="text" v-model="newContactData.location" name="location" id="location">

            <label for="position">Stanowisko:</label>
            <input type="text" v-model="newContactData.position" name="position" id="position">

            <label for="description">Opis:</label>
            <textarea type="text" v-model="newContactData.description" name="description" id="description"></textarea>
    
            <button class="addOrder">Dodaj</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "NewContactModal",
    data() {
        return {
            newContactData: {
                name: "",
                company: "",
                location: "",
                pposition: "",
                description: "",
            }
        }
    },
    computed: {
        ...mapGetters([]),
        nextId() {
            return this.getCurrContacts[0].id
        }
    },
    methods: {
        ...mapActions([]),
        closeModal() {
            this.clearForm()
        },
        clearForm() {
            for(let key in this.newContactData) {
                this.newContactData[key] = "";
            }
        },
        addOrder() {
            let nameInput = document.querySelector("#name");

            if(!this.newContactData.name) {   //VALIDATE EMPTY ORDER
                nameInput.setAttribute("placeholder", "Bez nazwy nie polecimy! :(") ;
                nameInput.style.border = '1px solid red';
            } 
                else{
                nameInput.style.border = 'none';

               

                let newOrder = {
                    id: this.nextId+1,
                    name: this.newContactData.name,
                    company: this.newContactData.company,
                    location: this.newContactData.location,
                    position: this.newContactData.position,
                    description: this.newContactData.description
                }

                this.mutateCurrOrders(newOrder);
                newOrder = "";
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
        font-size: 25px;
        margin: 15px;
    }
    .hidden {
        display: none;
    }
</style>