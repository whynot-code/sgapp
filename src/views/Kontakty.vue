<template>
   <section>
       <NewContactModal />
       <ContactDetails />
            <header>
                <button @click="newContactActive(true)">Nowy Kontakt</button>
            </header>
        <table>
            <tr>
                <td></td>
                <td>Nazwa</td>
                <td>Firma</td>
                <td>Miejscowość</td>
                <td>Stanowisko</td>
                <td>Email</td>
                <td>Tel:</td>
                <td>Opis</td>
            </tr>

            <p v-if="typeof searchedData === 'string'"> {{ searchedData }}</p>

            <tr v-else class='contact' v-for="con in contacts" :key="contacts.indexOf(con)">
                <td>{{ contacts.indexOf(con)+1 }}.</td>
                <td @dblclick="openCloseDetails(con.id)">{{ con.name }}</td>
                <td>{{ con.company}}  </td>
                <td>{{ con.location }}</td>
                <td>{{ con.position }}</td>
                <td>{{ con.email }}</td>
                <td>{{ con.tel }}</td>
                <td>{{ con.description}}</td>
            </tr>
        </table>
    </section>
</template>

<script>
import NewContactModal from "@/components/NewContactModal.vue"
import ContactDetails from "@/components/ContactDetails.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Kontakty",
    components: {
        NewContactModal,
        ContactDetails
    },
    computed: {
        ...mapGetters(['searchedData', 'currContacts']),
        contacts() {
            return this.searchedData.length > 0 ? this.searchedData : this.currContacts
        },
    },
    methods: {
        ...mapActions(['newContactActive', "contactDetailsActive", "setContactId"]),
        openCloseDetails(id){
            this.setContactId(id)
            this.contactDetailsActive(true)
        },
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
    tr > td {text-align: center; word-break: break;}


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