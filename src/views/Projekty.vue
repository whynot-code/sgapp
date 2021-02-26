<template>
    <section>
        <NewOrderModal :modalOn="modalOn" @closeModal="openCloseModal" />
        <header>
            <button @click="openCloseModal()">Nowy Projekt</button>
        </header>
        <table>
            <tr>
                <td></td>
                <td>Nazwa</td>
                <td>Termin</td>
                <td>Projekt</td>
                <td>PPB</td>
                <td>Numeracja</td>
                <td>Wypis/Wyrys</td>
                <td>Zajęcie Pasa</td>
                <td>Etapówka</td>
                <td>Powykonawcza</td>
                <td>Faktura</td> 
            </tr>
            <tr v-for="item in getCurrOrders" :key="getCurrOrders.indexOf(item)">
                <td>{{ getCurrOrders.indexOf(item) }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.termin }}</td>
                <td>{{ !item.projekt.set ? item.projekt.needed : item.projekt.set }}</td>
                <td>{{ !item.ppb.set ? item.ppb.needed : item.ppb.set }}</td>
                <td>{{ !item.numeracja.set ? item.numeracja.needed : item.numeracja.set }}</td>
                <td>{{ !item.wypis.set ? item.wypis.needed : item.wypis.set }}</td>
                <td>{{ !item.zajecie.set ? item.zajecie.needed : item.zajecie.set }} </td>
                <td>{{ !item.etapowka.set ? item.etapowka.needed : item.etapowka.set }}</td>
                <td>{{ !item.powyk.set ? item.powyk.needed : item.powyk.set }}</td>
                <td>{{ !item.faktura.set ? item.faktura.needed : item.faktura.set }}</td> 
            </tr>
        </table>
        
    </section>
</template>

<script>
import NewOrderModal from "@/components/NewOrderModal.vue"
import { mapGetters, mapActions } from "vuex"

export default {
    name: "Projekty",
    components: {
        NewOrderModal,
    },
    data() {
        return {
            modalOn: false,
        }
    },
    methods: {
        ...mapActions(['mutate']),
        openCloseModal(){
            this.modalOn = !this.modalOn
        },
        createOrder() {

        },
        addOrder() {
            
        },
    
    },
    computed: mapGetters(['getCurrOrders']),
}
</script>

<style scoped>
    section {
        height: 92vh;
        overflow-y: scroll;
        position: relative;
    }
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