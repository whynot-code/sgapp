<template>
    <section :class="{overflow: newOrderModalOn}">
        <NewOrderModal :newOrderModalOn="newOrderModalOn" @closeModal="openCloseNewOrder" />
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
                <td>Dziennik</td>
                <td>Numeracja</td>
                <td>Wypis/Wyrys</td>
                <td>Zajęcie Pasa</td>
                <td>Etapówka</td>
                <td>Powykonawcza</td>
                <td>Faktura</td> 
            </tr>

            <p v-if="typeof currOrders === 'string'"> {{ currOrders }}</p>

            <tr class="order" v-else v-for="item in currOrders" :key="item.id">
                <td>{{ getCurrOrders.indexOf(item)+1 }}.</td>
                <td @dblclick="openCloseDetails(item.id)">{{ item.name }} </td>
                <td>{{ item.termin }}</td>
                <td>
                    {{ !item.projekt.set ? setStatus(item.projekt.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Projekt', item.id)" class="edit" v-if="item.projekt.needed && !item.projekt.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.ppb.set ? setStatus(item.ppb.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'PPB', item.id)" class="edit" v-if="item.ppb.needed && !item.ppb.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.dz.set ? setStatus(item.dz.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Dziennik', item.id)" class="edit" v-if="item.dz.needed && !item.dz.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.numeracja.set ? setStatus(item.numeracja.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Numeracja', item.id)" class="edit" v-if="item.numeracja.needed && !item.numeracja.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/> 
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.wypis.set ? setStatus(item.wypis.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Wypis', item.id)" class="edit" v-if="item.wypis.needed && !item.wypis.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.zajecie.set ? setStatus(item.zajecie.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Zajęcie pasa', item.id)" class="edit" v-if="item.zajecie.needed && !item.zajecie.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.etapowka.set ? setStatus(item.etapowka.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Etapówka', item.id)" class="edit" v-if="item.etapowka.needed && !item.etapowka.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.powyk.set ? setStatus(item.powyk.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Powykonawcza', item.id)" class="edit" v-if="item.powyk.needed && !item.powyk.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.faktura.set ? setStatus(item.faktura.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Faktura', item.id)" class="edit" v-if="item.faktura.needed && !item.faktura.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td> 
            </tr>
        </table>
    </section>
</template>

<script>
import NewOrderModal from "@/components/NewOrderModal.vue"
import UpdatePanel from "@/components/QuickUpdateModal.vue"

import { mapGetters, mapActions } from "vuex"

export default {
    name: "Projekty",
    components: {
        NewOrderModal,
        UpdatePanel
    },
    data() {
        return {
            newOrderModalOn: false,
            viewDetailsModalOn: false,
        }
    },
    methods: {
        ...mapActions(["mutateCurrDetails", "mutateQuickUpdatedData", "setOpenDetails"]),
        openCloseNewOrder(){
            this.newOrderModalOn = !this.newOrderModalOn
        },
        openCloseDetails(order){
            this.mutateCurrDetails(order)
            this.setOpenDetails(true)
        },
        setStatus(status) {
            return status ? "+" : "-"
        },
        showUpdatePanel(...param) {
            this.mutateQuickUpdatedData(param)
            this.mutateCurrDetails(param[2])
        },
    },
    computed: {
        ...mapGetters(['getCurrOrders', 'searchedData']),
        currOrders() {
            return this.searchedData.length > 0 ? this.searchedData : this.getCurrOrders
        }
    },
    
}
</script>

<style scoped>
    section {
        height: 92vh;
        overflow-y: scroll;
        position: relative;
        z-index: 1;
    }
    button {
        background: rgba(0, 15, 218, 0.363);
        border-radius: 2px;
        border: none;
        font-size: 20px;
        text-align: center;
        padding: 5px 10px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;
    }
    button:hover {
        background: rgba(0, 15, 218, 0.486);
        transform: translateY(-2px);
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
        z-index: 1;
    }
    td {
        border: 0.5px solid black;
        border-collapse: collapse;
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
    tr > td {text-align: center; word-break: break;}
    tr > td:first-of-type {width: 60px; text-align: left; min-width: 0;}
    tr > td:nth-of-type(2) {width: 30%;}

    tr{
        background: cornsilk;
    }
    
    .order:hover {
        background: rgb(199, 199, 199);
        cursor: pointer;
    }   
    #updatePanel {
        z-index: 1;
    }

    table > p {
        font-size: 30px;
        position: absolute;
        left: 38%;
        text-align: center;
        padding: 50px 0;
    }
    .overflow {
        overflow: hidden;
    }
</style>