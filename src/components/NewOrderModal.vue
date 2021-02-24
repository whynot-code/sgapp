<template>
    <div :class="{hidden: !modalOn}" class='bg'>
        <div class="newOrder">
            <button @click="closeModal()" class="closeModal">x</button>
            <h1>Nowe Zlecenie:</h1>
            <form action="" name="orderForm">
                <label for="name">Nazwa zlecenia:</label><br />
                <textarea type="text" v-model="name" name="name" id="name"></textarea> <br />

                <label for="projekt">Projekt: </label>
                <input type="checkbox" v-model="projekt" value="true" name="projekt" id="projekt">

                <label for="ppb">PPB:</label>
                <input type="checkbox" v-model="ppb" value="true" name="ppb" id="ppb">

                <label for="numerajca">Numeracja:</label>
                <input type="checkbox" v-model="numeracja" value="true"  name="numeracja" id="numeracja">

                <label for="wypis">Wypis/Wyrys:</label>
                <input type="checkbox" v-model="wypis" value="true" name="wypis" id="wypis">

                <label for="zejecie">Zajęcie Pasa:</label>
                <input type="checkbox" v-model="zajecie" value="true" name="zajecie" id="zajecie">

                <label for="etapowka">Etapówka:</label>
                <input type="checkbox" v-model="etapówka" value="true" name="etapowka" id="etapowka">

                <label for="powyk">Dok. Powykonawcza:</label>
                <input type="checkbox" v-model="powyk" value="true" name="powyk" id="powyk">

                <label for="faktura">Faktura:</label>
                <input type="checkbox" v-model="faktura" value="true" name="faktura" id="faktura" checked disabled> <br />

                <label for="dodatkowe" class="extra">Dodatkowe informacje:</label><br />
                <textarea placeholder="np. wymagane zgłoszenia do konserwatora, wód polskich itp." v-model="extra" name="dodatkowe" id="dodatkowe" cols="50" rows="10"></textarea><br />
            {{ newOrderData.name }}
                <button class="addOrder">Dodaj</button>
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
            }
        }
    },
    props: {
        modalOn: Boolean,
    },
    methods: {
        closeModal() {
            console.log('dziala')
            return this.modalOn = !this.modalOn
        },
        
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
    textarea:first-of-type {
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