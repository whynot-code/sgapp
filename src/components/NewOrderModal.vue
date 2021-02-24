<template>
    <div :class="{hidden: !modalOn}" class='bg'>
        <div class="newOrder">
            <button @click="closeModal()" class="closeModal">x</button>
            <h1>Nowe Zlecenie:</h1>
            <form action="" name="orderForm">
                <label for="name">Nazwa zlecenia:</label><br />
                <textarea type="text" v-model="newOrderData.name" name="name" id="name"></textarea> <br />

                <label for="projekt">Projekt: </label>
                <input type="checkbox" v-model="newOrderData.projekt" name="projekt" id="projekt">

                <label for="ppb">PPB:</label>
                <input type="checkbox" v-model="newOrderData.ppb" name="ppb" id="ppb">

                <label for="numerajca">Numeracja:</label>
                <input type="checkbox" v-model="newOrderData.numeracja" value="true"  name="numeracja" id="numeracja">

                <label for="wypis">Wypis/Wyrys:</label>
                <input type="checkbox" v-model="newOrderData.wypis" value="true" name="wypis" id="wypis">

                <label for="zejecie">Zajęcie Pasa:</label>
                <input type="checkbox" v-model="newOrderData.zajecie" value="true" name="zajecie" id="zajecie">

                <label for="etapowka">Etapówka:</label>
                <input type="checkbox" v-model="newOrderData.etapowka" value="true" name="etapowka" id="etapowka">

                <label for="powyk">Dok. Powykonawcza:</label>
                <input type="checkbox" v-model="newOrderData.powyk" value="true" name="powyk" id="powyk">

                <label for="faktura">Faktura:</label>
                <input type="checkbox" v-model="newOrderData.faktura" value="true" name="faktura" id="faktura" checked disabled> <br />

                <label for="dodatkowe" class="extra">Dodatkowe informacje:</label><br />
                <textarea placeholder="np. wymagane zgłoszenia do konserwatora, wód polskich itp." v-model="newOrderData.extra" name="dodatkowe" id="dodatkowe" cols="50" rows="10"></textarea><br />
            {{ newOrderData }}
                <button @click.stop.prevent="addOrder()" class="addOrder">Dodaj</button>
            </form>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "NewOrderModal",
    data() {
        return {
            newOrderData: {
                name: "",
                projekt: "",
                ppb: "",
                numeracja: "",
                wypis: "",
                zajecie: "",
                etapowka: "",
                powyk: "",
                faktura: true,
                extra: ""
            }
        }
    },
    props: {
        modalOn: Boolean,
    },
    methods: {
        closeModal() {
            return this.modalOn = !this.modalOn
        },
        addOrder() {
            let nameInput = document.querySelector("#name");
            if(!this.newOrderData.name) {   //VALIDATE EMPTY ORDER
                nameInput.setAttribute("placeholder", "Bez nazwy nie polecimy! :(") ;
                nameInput.style.border = '1px solid red';
            } else{
                nameInput.style.border = 'none';
            }


            
        }
        
    }

}
</script>

<style scoped>
    .newOrder {
        width: 60vw;
        position: relative;

        background: lemonchiffon;
        top: 5px;
        left: 5px;
        
        padding: 25px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bg {
        position: absolute;
        left: 0;
        top: 0;

        width: 100vw;
        height: 100vh;

        background: rgba(0, 0, 0, 0.534);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .closeModal {
        padding: 3px 7px;
        border: 1px solid black;
        border-radius: 5px;
        background: red;
        position: relative;
        left: 92%;
        position: absolute
    }
    form {
        font-size: 20px;
        width: 80%;
        text-align: center;
    }
    input {
        margin: 10px 10px;
        width: 20px;
        height: 20px
    }
    label:last-of-type, label:first-of-type {
        display: block;
        margin: 20px 0 0 0;
        padding-left: 0;
    }
    #name::placeholder {
        color: red;
    }
    #name {
        width: 55%;
        padding: 15px 20px;
        font-size: 20px;
    }
    textarea:last-of-type {
        padding: 15px 20px;
        font-size: 16px;
    }
    h1 {
        padding: 20px;
        font-size: 40px;
    }
    .addOrder {
        font-size: 25px;
        margin: 15px;
    }
    label {
        padding-left: 30px;
    }
    .hidden {
        display: none;
    }
</style>