<template>
    <div v-if="openDetails" :class="{hidden: !currDetails}" class="details">
        <button @click.stop.prevent="closeModal()" class="closeModal">x</button>
        <h1>{{ order.name }}</h1>
        <aside>
            <h3>Dziennik</h3>
            <div class='table'>
                <table>
                    <tr>
                        <td>Data</td><td>Temat</td><td>Wpis</td>
                    </tr>
                    <tr v-for="detail in order.dziennik" :key="order.dziennik.indexOf(detail)">
                        <td>{{ detail.data }}</td><td>{{ detail.typ }}</td><td>{{ detail.wpis }}</td>
                    </tr>
                </table>
            </div>
            <form>
                <textarea v-model="newEntry.wpis" name="wpis" id="wpis" cols="77" rows="3" placeholder="Treść Wpisu"></textarea><br/>
                <select v-model="newEntry.typ" name="" id="">
                    <option value="Projekt">Projekt</option>
                    <option value="PPB">PPB</option>
                    <option value="Numeracja">Numeracja</option>
                    <option value="Wypis/Wyrys">Wypis/Wyrys</option>
                    <option value="Zajecie">Zajęcie pasa</option>
                    <option value="Etapowka">Etapówka</option>
                    <option value="Powykonawcza">Powykonawcza</option>
                    <option value="Faktura">Faktura</option>
                    <option value="Inny">Inny</option>
                </select> 
                <button @click.prevent.stop="addNewEntry()">Dodaj wpis</button>
            </form>
        </aside>

        <article>
            <h3>Informacje</h3>
            <ul id="info">
                <DetailsEditor />

                <li>Termin: 
                    <img class="edit" @click="openParamEditor('Termin', order.termin)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>{{ order.termin }}</div>
                </li>
                <li>Projekt: 
                     <img class="edit" @click="openParamEditor('Projekt', order.projekt)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                     <div>{{ setStatus(order.projekt) }}</div>
                     </li>
                <li>PPB: 
                    <img class="edit" @click="openParamEditor('PPB', order.ppb)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>{{ setStatus(order.ppb) }}</div>
                </li>
                <li>Numeracja: 
                    <img class="edit" @click="openParamEditor('Numeracja', order.numeracja)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>{{ setStatus(order.numeracja) }}</div>
                </li>
                <li>Dziennik Budowy: 
                    <img class="edit" @click="openParamEditor('Dziennik', order.dz)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>{{ setStatus(order.dz) }}</div>
                </li>
                <li>Wypis/Wyrys: 
                    <img class="edit" @click="openParamEditor('Wypis', order.wypis)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>{{ setStatus(order.wypis) }}</div>
                </li>
                <li>Zajecie:
                    <img class="edit" @click="openParamEditor('Zajęcie pasa', order.zajecie)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div> {{ setStatus(order.zajecie) }}</div>
                </li>
                <li>Etapówka: 
                    <img class="edit" @click="openParamEditor('Etapówka', order.etapowka)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>{{ setStatus(order.etapowka) }}</div>
                </li>
                <li>Dokumentacja Powykonawcza: 
                    <img class="edit" @click="openParamEditor('Powykonawcza', order.powyk)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>{{ setStatus(order.powyk) }}</div>
                </li>
                <li>Faktura: 
                    <img class="edit" @click="openParamEditor('Faktura', order.faktura)" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div>{{ setStatus(order.faktura) }}</div>
                </li>
                <li> Dodatkowe Informacje:
                    <img class="accept" v-if="extra" @click="editExtra('Extra', order.extra)" src="@/assets/icons/checked.svg" alt="Accept-Icon"/>
                    <p>
                        <textarea @keyup="extra = true" v-model="order.extra"></textarea>
                    </p>
                </li>
            </ul>
           
        </article>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DetailsEditor from "@/components/DetailsEditor.vue"

export default {
    name: "ProjectDetails",
    components: {
        DetailsEditor,
    },
    data() {
        return{
            newEntry: {data: "", typ: "", wpis: ""},
            paramEdtior: "",
            neededFlag: "",
            checked: false,
            extra: false,
        
        }
    },
    props: {
        viewDetailsModalOn: Boolean,
    },
    methods: {
        ...mapActions(["mutateParamEditor", "mutateCurrDetails", "updateCurrOrder", "setOpenDetails"]),
        closeModal() {
            this.mutateCurrDetails("")
            this.setOpenDetails(false)
        },
        setStatus(status) {
            if(status.set) {
                return typeof status.set === 'boolean' ? `✅` : `${status.set}  ✅`
            } else if(status.needed) {
                return `wymaga ❕`
            } else {
                return `Nie wymaga`
            }
        },
        addNewEntry() {
            const entryTextArea = document.querySelector('#wpis')
            const entrySelect = document.querySelector('select')
            
            !this.newEntry.wpis ? entryTextArea.classList.add('invalid') : entryTextArea.classList.remove('invalid')
            !this.newEntry.typ ? entrySelect.classList.add('invalid') : entrySelect.classList.remove('invalid')
              
             if(this.newEntry.wpis && this.newEntry.typ) { //ADD ENTRY
        
                const date = { 
                    dzien: new Date().getDate(),
                    miesiac: new Date().getMonth()+1,
                    rok: new Date().getFullYear(),
                    godzina: new Date().getHours(),
                    minuta: new Date().getMinutes(),
                    fixDate(el) {
                        return el < 10 ? `0${el}` : el
                    }
                }
                this.newEntry.data = `${date.fixDate(date.dzien)}.${date.fixDate(date.miesiac)}.${date.rok} ${date.fixDate(date.godzina)}:${date.fixDate(date.minuta)}`
                const data = {
                    data: this.newEntry.data,
                    typ: this.newEntry.typ,
                    wpis: this.newEntry.wpis
                }
                this.order.dziennik.unshift(data)

                this.newEntry.data = "",
                this.newEntry.typ = "",
                this.newEntry.wpis = ""
                
            }
        },
        openParamEditor(...param){
           this.mutateParamEditor(param)
        },
        editExtra(...param){
            this.updateCurrOrder(param)
            this.extra = false
        }
    },
    computed: {
        ...mapGetters(['currDetails', 'getCurrOrders', 'currTime', "openDetails"]),
        order(){ 
            let currOrder = 0;
            this.getCurrOrders.forEach(order => {
                order.id === this.currDetails ? currOrder = order : null
            })
            return currOrder
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
        overflow: scroll;
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
        background: white;
        padding: 5px 20px;
        position: relative;
        font-size: 20px;
    }
    li {
        padding: 8px;
        width: 100%;
        position: relative;
        word-wrap: break-word;
        padding: 20px;
    }
    li:hover{
        background: rgba(128, 128, 128, 0.411);
    }
    li:last-of-type{
        text-align: center;
        margin-top: 15px;
    }
    li > div {
        position: relative;
        padding: 10px 40px 10px 10px;
        font-size: 15px;
    }
    .edit, .accept, .decline {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
        cursor: pointer;
    }
    .edit{
    right: 0;
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
        font-size: 10px;
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