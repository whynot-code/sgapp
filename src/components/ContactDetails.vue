<template>
    <div v-if="openContactDetails" class="details">
        <button @click.stop.prevent="closeModal()" class="closeModal">x</button>
        <h1>{{ contact.name }}</h1>
        
        <article>
            <h3>Informacje</h3>
            <ul id="info">
                <DetailsEditor />
                <li>Nazwa: {{ contact.name }}<img class="edit" @click="openParamEditor('nazwa', contact.name)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Firma: {{ contact.company }} <img class="edit" @click="openParamEditor('firma', contact.company)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Miejscowość: {{ contact.location }}<img class="edit" @click="openParamEditor('miejscowosc', contact.location)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Stanowisko: {{ contact.position }}<img class="edit" @click="openParamEditor('stanowisko', contact.position)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>E-mail: {{ contact.email }}<img class="edit" @click="openParamEditor('email', contact.email)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Tel: {{ contact.tel }}<img class="edit" @click="openParamEditor('tel', contact.tel)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Opis: <img class="edit" @click="openParamEditor('opis', contact.tel)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/><br /><br /> {{ contact.description }}</li>
            </ul>
        </article>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DetailsEditor from "@/components/DetailsEditor.vue"

export default {
    name: "ContactDetails",
    components: {
        DetailsEditor,
    },
    data() {
        return{
            paramEdtior: "",
        }
    },
    methods: {
        ...mapActions(["contactDetailsActive", "setContactId"]),
        closeModal() {
            this.setContactId("")
            this.contactDetailsActive(false)
        },
        openParamEditor(...param){
           this.mutateParamEditor(param)
        },
    },
    computed: {
        ...mapGetters(["currContacts", "currContactId", "openContactDetails"]),
        contact(){ 
            let currContact = 0;
            this.currContacts.forEach(contact => {
                contact.id === this.currContactId ? currContact = contact : null
            })
            return currContact
        },
    },
}
</script>

<style scoped>
    .details {
        width: 100%;
        position: absolute;

        background: rgba(255, 250, 205, 0.925);
        
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 25px;
        z-index: 2;
    }
    .closeModal {
        padding: 3px 7px;
        border: 1px solid black;
        border-radius: 5px;
        background: rgb(0, 140, 255);
        position: relative;
        left: 92%;
        position: absolute
    }
  
    h1 {
        width: 100%;
        text-align: center;
        font-size: 37px;
        margin-bottom: 20px;
    }
    h3 {
        font-size: 25px;
    }
    aside {
        width: 45%;
        height: 60vh;
    }
    .table {
        height: 55vh;
        width: 100%;
        overflow-y: scroll;
        background: white;
    }
    table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        overflow-y: scroll;
        }

    td { 
        border: 1px solid black;
        padding: 7px;
        position: relative;
        max-width: 280px;
        word-wrap: break-word;
    }
    tr {
        line-height: 18px;
    }


    article {
        width: 51.5%;
        padding: 0 25px 25px 25px;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: vh;
    }
    ul {
        list-style-type: none;
        font-size: 20.5px;
        background: white;
        padding: 10px 20px;
        position: relative;
    }
    li {
        padding: 8px;
        width: 100%;
        position: relative;
        word-wrap: break-word;
    }
    li:last-of-type{
        text-align: center;
        margin-top: 15px;
    }
    .edit, .accept, .decline {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
        cursor: pointer;
    }

</style>