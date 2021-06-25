<template> 
    <div v-if="newContact" class="newContact">
        <button @click="newContactActive(false)" class="closeModal"></button>
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

            <label for="email">E-mail:</label>
            <input type="text" v-model="newContactData.email" name="email" id="email">

            <label for="tel">Tel:</label>
            <input type="text" v-model="newContactData.tel" name="tel" id="tel">

            <label for="description">Opis:</label>
            <textarea type="text" v-model="newContactData.description" name="description" id="description"></textarea>
    
            <button @click.prevent="addNewContact()" class="addOrder">Dodaj</button>
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
                position: "",
                email: "",
                tel: "",
                description: "",
            }
        }
    },
    computed: {
        ...mapGetters(["newContact", "currContacts"]),
        nextId() {
            return this.currContacts[0].id
        }
    },
    methods: {
        ...mapActions(["newContactActive", "addContact"]),
        closeModal() {
            this.newContactActive(false)
            this.clearForm()
        },
        clearForm() {
            for(let key in this.newContactData) {
                this.newContactData[key] = "";
            }
        },
        addNewContact() {
            let nameInput = document.querySelector("#name");

            if(!this.newContactData.name) {   //VALIDATE EMPTY ORDER
                nameInput.setAttribute("placeholder", "Brak nazwy! :(") ;
                nameInput.style.border = '1px solid red';
            } 
                else{
                nameInput.style.border = 'none';

               

                let newContact = {
                    id: this.nextId+1,
                    name: this.newContactData.name,
                    company: this.newContactData.company,
                    location: this.newContactData.location,
                    position: this.newContactData.position,
                    email: this.newContactData.email,
                    tel: this.newContactData.tel,
                    description: this.newContactData.description
                }

                this.addContact(newContact);
                newContact = "";
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