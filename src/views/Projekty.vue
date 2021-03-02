<template>
    <section>
        <NewOrderModal :newOrderModalOn="newOrderModalOn" @closeModal="openCloseNewOrder" />
        <ProjectDetails :viewDetailsModalOn="viewDetailsModalOn" @closeModal="openCloseDetails()" />
        <header>
            <button @click="openCloseNewOrder()">Nowy Projekt</button>
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

            <tr class="order" v-for="item in getCurrOrders" :key="getCurrOrders.indexOf(item)">
                <td>{{ getCurrOrders.indexOf(item)+1 }}.</td>
                <td @dblclick="openCloseDetails(getCurrOrders.indexOf(item))">{{ item.name }} </td>
                <td>{{ item.termin }}</td>
                <td>
                    {{ !item.projekt.set ? setStatus(item.projekt.needed) : item.projekt.set }} 
                    <img @click="showUpdatePanel(getCurrOrders.indexOf(item))" class="edit" v-if="item.projekt.needed && !item.projekt.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>
                    </div>
                </td>
                <td>
                    {{ !item.ppb.set ? setStatus(item.ppb.needed) : item.ppb.set }} 
                    <img @click="showUpdatePanel(getCurrOrders.indexOf(item))" class="edit" v-if="item.ppb.needed && !item.ppb.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div></div>
                </td>
                <td>
                    {{ !item.numeracja.set ? setStatus(item.numeracja.needed) : item.numeracja.set }} 
                    <img @click="showUpdatePanel(getCurrOrders.indexOf(item))" class="edit" v-if="item.numeracja.needed && !item.numeracja.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/> 
                    <div></div>
                </td>
                <td>
                    {{ !item.wypis.set ? setStatus(item.wypis.needed) : item.wypis.set }} 
                    <img @click="showUpdatePanel(getCurrOrders.indexOf(item))" class="edit" v-if="item.wypis.needed && !item.wypis.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div></div>
                </td>
                <td>
                    {{ !item.zajecie.set ? setStatus(item.zajecie.needed) : item.zajecie.set }} 
                    <img @click="showUpdatePanel(getCurrOrders.indexOf(item))" class="edit" v-if="item.zajecie.needed && !item.zajecie.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div></div>
                </td>
                <td>
                    {{ !item.etapowka.set ? setStatus(item.etapowka.needed) : item.etapowka.set }} 
                    <img @click="showUpdatePanel(getCurrOrders.indexOf(item))" class="edit" v-if="item.etapowka.needed && !item.etapowka.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div></div>
                </td>
                <td>
                    {{ !item.powyk.set ? setStatus(item.powyk.needed) : item.powyk.set }} 
                    <img @click="showUpdatePanel(getCurrOrders.indexOf(item))" class="edit" v-if="item.powyk.needed && !item.powyk.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div></div>
                </td>
                <td>
                    {{ !item.faktura.set ? setStatus(item.faktura.needed) : item.faktura.set }} 
                    <img @click="showUpdatePanel(getCurrOrders.indexOf(item))" class="edit" v-if="item.faktura.needed && !item.faktura.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div></div>
                </td> 
            </tr>
            
        </table>

    </section>
</template>

<script>
import NewOrderModal from "@/components/NewOrderModal.vue"
import ProjectDetails from "@/components/ProjectDetails.vue"

import { mapGetters, mapActions } from "vuex"

export default {
    name: "Projekty",
    components: {
        NewOrderModal,
        ProjectDetails,
    },
    data() {
        return {
            newOrderModalOn: false,
            viewDetailsModalOn: false,
            quickUpdatedData: "",
        }
    },
    methods: {
        ...mapActions(["mutateCurrDetails"]),
        openCloseNewOrder(){
            this.newOrderModalOn = !this.newOrderModalOn

        },
        openCloseDetails(order){
            !order ? order = Number(0) : order
            this.mutateCurrDetails(order)
            this.viewDetailsModalOn = !this.viewDetailsModalOn
            
        },
        setStatus(status) {
            return status ? "+" : "-"
        }
        // showUpdatePanel(idxOfUpdate)  {                             Dokończ to
        //     const updatePanel = event.target.nextElementSibling;
        //     updatePanel.classList.remove('hidden')
        //     this.quickUpdatedData = idxOfUpdate;
        // },
        // quickUpdate() {
            
        // }
    
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
        position: relative;
        min-width: 88px;
    }
    .edit {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 5px;
        border-radius: 2px;
        padding: 2px
    }
    .edit:hover {
        cursor: pionter;
        background: rgb(75, 75, 75);
    }
    tr > td {text-align: center}
    tr > td:first-of-type {width: 40px; text-align: left; min-width: 0;}
    tr > td:nth-of-type(2) {width: 30%;}
    
    .order:hover {
        background: rgb(199, 199, 199);
        cursor: pointer;
    }   
</style>