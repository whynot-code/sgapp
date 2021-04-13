<template>
   <section>
       <NewPlanModal />
            <header>
                <button @click="newPlanActive(true)">Planuj</button>
            </header>
        <table>
            <tr>
                <td></td>
                <td>Projekt</td>
                <td>Data</td>
                <td>Pracownik</td>
                <td>Opis pracy</td>
            </tr>

            <p v-if="typeof currOrders === 'string'"> {{ currOrders }}</p>
            <tr class='contact' v-for="job in allJobs" :key="allJobs.indexOf(job)">
                <td>{{ allJobs.indexOf(job)+1 }}.</td>
                <td>{{ job[0] }}</td>
                <td>{{ job[1].data }}  </td>
                <td>{{ job[1].kto }}</td>
                <td>{{ job[1].opis }} <img @click="dataToDelete = job" src="../assets/icons/erase.svg" alt="erase-image"></td>
            </tr>
        </table>
        <div v-if="dataToDelete" id="confirmBg">
            <div id="confirm">
                <h3>Usunąć wpis?</h3>

                <button @click="deletePlan(dataToDelete), dataToDelete = ''">Potwierdź</button>
                <button @click="dataToDelete = ''">Anuluj</button>
            </div>
        </div>
        
    </section>
</template>

<script>
import NewPlanModal from "@/components/NewPlanModal.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Planowanie",
    data() {
        return{
            dataToDelete: "",
        }
    },
    components: {
        NewPlanModal,
    },
    computed: {
        ...mapGetters(['getCurrOrders', 'searchedData']),
        contacts() {
            return this.currContacts ? this.currContacts : null
        },
        currOrders() {
            return this.searchedData.length > 0 ? this.searchedData : this.getCurrOrders
        },
        allJobs() {
            const jobs = []
                this.currOrders.forEach(el => {
                    if(el.plan) {
                        el.plan.forEach(item => {
                            jobs.push([el.name, item])
                        })
                    }
                })
            return jobs
        }
    },
    methods: {
        ...mapActions(['deletePlan', 'newPlanActive']),
        openCloseDetails(id){
            this.setContactId(id)
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
        overflow-x: hidden;
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
    tr > td {text-align: center; word-break: break;}


    tr{
        background: cornsilk;
        position: relative;
    }

    td > img {
        position: absolute;
        width: 20px;
        height: 20px;
        right: 1%;
        top: 5px;
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
    
    #confirm {
        position: absolute;
        width: 35%;
        height: 15vh;
        background: white;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 5px;
        border: 1px solid black;

        top: 30vh;
        left: 32%;
        z-index: 0;
    }
    #confirmBg {
        position: absolute;
        width: 69vw;
        height: 92vh;
        background: rgba(0, 0, 0, 0.336);
        top: 0;
        left: 0;
    }
    #confirm > button {
        width: 25%;
        height: 30px;
        border-radius: 6px;
        font-size: 13px;
        cursor: pointer;
    }
    #confirm > h3 {
        width: 100%;
        text-align: center;
    }
    #confirm > button:nth-of-type(2) {background: red;}
    .hidden {
        display: none;
    }
</style>