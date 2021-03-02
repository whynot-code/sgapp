<template>
    <div :class="{hidden: !viewDetailsModalOn}" class="details">
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
            <ul>
                <li>
                    Termin: 17.12.2021
                    <img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                </li>
                <li>Projekt: {{ setStatus(order.projekt) }} <img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>PPB: {{ setStatus(order.ppb) }}<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Numeracja: {{ setStatus(order.numeracja) }}<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Wypis: {{ setStatus(order.wypis) }}<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Zajecie: {{ setStatus(order.zajecie) }}<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Etapówka: {{ setStatus(order.etapowka) }}<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Dokumentacja Powykonawcza: {{ setStatus(order.powyk) }}<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Faktura: {{ setStatus(order.faktura) }}<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>
                    Dodatkowe Informacje:<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/> 
                    <p>{{order.extra}}</p>
                </li>
            </ul>
        </article>
        <footer>
       
            <h3>Notatki <img class="edit" src="@/assets/icons/plus.svg" alt="Edit-Icon"/></h3>
            <div id="note"></div>
        </footer>
        {{currTime}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "ProjectDetails",
    data() {
        return{
            newEntry: {data: "", typ: "", wpis: ""},
        }
    },
    props: {
        viewDetailsModalOn: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit("closeModal", this.viewDetailsModalOn)
        },
        setStatus(status) {
            if(status.set) {
                return `${status.set}  ✅`
            } else if(status.needed) {
                return `wymaga`
            } else {
                return `Nie wymaga`
            }
        },
        addNewEntry() {
            const entryTextArea = document.querySelector('textarea')
            const entrySelect = document.querySelector('select')
            console.log( `${new Date().getDate()}` )

            if(!this.newEntry.wpis) { //VALIDATE NEW ENTRY
                entryTextArea.classList.add('invalid')
            } else if(!this.newEntry.typ){
                entrySelect.classList.add('invalid')
            } else {
                entrySelect.classList.remove('invalid')
                entryTextArea.classList.remove('invalid')

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
        }
    },
    computed: {
        ...mapGetters(['currDetails', 'getCurrOrders', 'currTime']),
        order(){ 
            return this.getCurrOrders[this.currDetails]
        }
    }
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
        background: red;
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
        width: 55%;
        padding: 0 25px 25px 25px;
        height: 80vh;
    }
    ul {
        list-style-type: none;
        font-size: 20.5px
    }
    li {
        padding: 8px;
        width: 100%;
        position: relative;
    }
    .edit {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
    }
    li > p {
        width: 100%;
        height: 120px;
        background: white;
        margin-top: 10px;
        padding: 8px;
        font-size: 18px;
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
    button {
        background: green;
        padding: 3px;
        border-radius: 4px;
        border: none;
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
</style>