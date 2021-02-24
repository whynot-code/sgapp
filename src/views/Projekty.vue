<template>
    <section>
        <NewOrderModal :modalOn="modalOn" />
        <header>
            <button @click="openModal()">Nowy Projekt</button>
        </header>
        <table>
            <tr>
                <td></td><td>Nazwa</td> <td>Projekt</td> <td>PPB</td> <td>Numeracja</td> <td>Wypis/Wyrys</td> <td>Zajęcie Pasa</td> <td>Etapówka</td> <td>Powykonawcza</td> <td>Faktura</td>
            </tr>
        </table>
        
    </section>
</template>

<script>
import NewOrderModal from "@/components/NewOrderModal.vue"

export default {
    name: "Projekty",
    components: {
        NewOrderModal,
    },
    data() {
        return {
            currOrders: [],
            modalOn: false,
        }
    },
    methods: {
        openModal(){
            return this.modalOn = !this.modalOn
        },
        createOrder() {

        },
        addOrder() {
            
        }
    }
}
</script>

<style scoped>
    button {
        background: green;
        border-radius: 50px;
        border: none;
        font-size: 20px;
        text-align: center;
        padding: 5px 15px;
    }
    header {
        padding: 8px;
    }
    button:focus {
        outline: none;
    }
    table {
        width: 100%;
        border-spacing: 0;
    }
    td {
        border: 1px solid black;
        padding: 7px;
    }
    tr > td:first-of-type {width: 40px;}
    tr > td:nth-of-type(2) {width: 30%;}
</style>