<template>
   <section>
       <NewContactModal />
            <header>
                <button>Nowy Wpis</button>
            </header>
        <table>
            <tr>
                <td></td>
                <td>Nazwa</td>
                <td>Firma</td>
                <td>Miejscowość</td>
                <td>Stanowisko</td>
                <td>Opis</td>
            </tr>

            <p v-if="typeof currOrders === 'string'"> {{ currOrders }}</p>

            <tr class='contact' v-for="con in contacts" :key="contacts.indexOf(con)">
                <td>{{ contacts.indexOf(con)+1 }}.</td>
                <td>{{ con.name }}</td>
                <td>{{ con.company}}  </td>
                <td>{{ con.location }}</td>
                <td>{{ con.position }}</td>
                <td>{{ con.description}}</td>
            </tr>
        </table>
    </section>
</template>

<script>
import TestContacts from "@/assets/testContacts.js"
import NewContactModal from "@/components/NewContactModal.vue"
import { mapGetters } from 'vuex'

export default {
    name: "Kontakty",
    components: {
        NewContactModal,
    },
    computed: {
        ...mapGetters(['getCurrOrders', 'searchedData']),
        contacts() {
            return TestContacts ? TestContacts : null
        },
         currOrders() {
            return this.searchedData.length > 0 ? this.searchedData : this.getCurrOrders
        },
    }

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
        width: 200px;
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
        z-index: 1;
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
    tr > td {text-align: center; word-break: break-all;}


    tr{
        background: cornsilk;
    }
    
    .contact:hover {
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