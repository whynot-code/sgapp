<template>
    <div v-if="openContactDetails" class="details">
        <button @click.stop.prevent="closeModal()" class="closeModal">x</button>
        <h1>{{ contact.name }}</h1>
        
        <article>
            <h3>Informacje</h3>
            <ul id="info">
                <DetailsEditor />
                <li>Nazwa: {{ contact.name }}<img class="edit" @click="openParamEditor('Termin', order.termin)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Firma: {{ contact.company }} <img class="edit" @click="openParamEditor('Projekt', order.projekt)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Miejscowość: {{ contact.location }}<img class="edit" @click="openParamEditor('PPB', order.ppb)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Stanowisko: {{ contact.position }}<img class="edit" @click="openParamEditor('Numeracja', order.numeracja)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>E-mail: {{ contact.email }}<img class="edit" @click="openParamEditor('Numeracja', order.numeracja)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Tel: {{ contact.tel }}<img class="edit" @click="openParamEditor('Numeracja', order.numeracja)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Opis: {{ contact.description }}<img class="edit" @click="openParamEditor('Dziennik', order.dz)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
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
    .hidden {
        display: none;
    }
    h1 {
        width: 100%;
        text-align: center;
        font-size: 37px;
        margin-bottom: 20px;
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
    .accept { 
        right: 5%; 
        top: 70%;
        z-index: 1;
    }
    li > p {
        width: 100%;
        height: 120px;
        margin-top: 10px;
        font-size: 15px;
        position: relative;
        padding: 8px;
        text-align: left;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
   p > textarea {
       font-size: 15px;
       padding: 8px;
       position: absolute;
       left: 0;
       top: 0;
       background: transparent;
       width: 100%;
       max-width: 100%;
       height: 13vh;
       max-height: 13vh;
       font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
       background: rgba(128, 128, 128, 0.932);
   }
    footer {
        position: relative;
        width: 100%;
    }
    footer > h3 {
        font-size: 30px;
        position: relative;
    }
    #note {
        width: 100%;
        min-height: 300px;
        background: white;
        padding: 15px;
    }
    .plus {
        width: 30px;
        height: 30px;
    }
  

    form {
        position: relative;
        width: 100%;
        height: 200px;
        padding: 5px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #wpis {
       text-align: center;
       padding: 8px;
       width: 80%;
    }
    select {
        height: 30px;
        margin: 6px;
    }
    form > button {
        height: 30px;
        margin: 6px;
        padding: 8px;
    }
    .invalid {
        border: 1px solid red;
        outline: 1px solid red;
    }
    .hidden {
        display: none;
    }
</style>