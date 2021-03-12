<template>
    <div class="bg" v-if="paramEditor">
        <div id="editModal">
        <h3>{{ paramEditor[0] }}</h3>
        <div v-if="paramEditor[0]==='Termin'">
            <label for="date">Zmień datę:</label>
            <input type="date" v-model="date" name="date" value="1" id="date">
        </div>
        <div v-else-if="paramEditor[0]==='Extra'">
            iosahfdoisaifd
        </div>
        <div v-else>
            <label for="needed">Wymaga</label>
            <input type="radio" v-model="flag" name="needed" value="1" id="needed">
            <label for="notneeded">Nie wymaga</label>
            <input type="radio" v-model="flag" name="needed" value="0"  id="notneeded"><br />
            
            <label for="done">Wykonano</label>
            <input :disabled="flag == '0' || flag == ''" v-model="check" type="checkbox" name="done" id="done"><br />

            <label for="info">Dodatkowe informacje:</label><br />
            <textarea v-model="textArea" :disabled="!check || flag == '0'" name="info" id="" cols="35" rows="5" placeholder="np. data, sygnatura, kto przekazał itp." ></textarea><br />
        </div>

        <button @click="editParam()">Aktualizuj</button>
        <button @click="closeParamEditor()">Anuluj</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "DetailsEditor",
    data(){
        return{
            date: "",
            flag: "",
            check: "",
            updatedData: "",
            textArea: ""
        }
    },
    methods: {
        ...mapActions(["mutateParamEditor", "updateCurrOrder"]),
        closeParamEditor() {
            this.mutateParamEditor("")
        },
        editParam(){
            if(this.paramEditor[0]==="Termin"){ //Termin Update
                let input = document.querySelector('#editModal')
                input = input.querySelector('input')
                
                if(!this.date) {
                    input.classList.add('invalid')
                }
                else {
                    input.classList.remove('invalid')
                    this.updatedData = this.paramEditor
                    this.updatedData[1] = this.date.split("-").reverse().join(".")

                    this.updateCurrOrder(this.updatedData)
                    
                    this.closeParamEditor()
                }
            }
            else { //Other details Update
                this.flag === "0" ? this.flag = false : this.flag = true

                !this.check || !this.flag ? this.textArea = "" : null
                this.check && this.flag && this.textArea === "" ? this.textArea = true : null

                this.updatedData = [this.paramEditor[0], { needed: this.flag, set: this.textArea }]
    
                this.updateCurrOrder(this.updatedData)
                this.closeParamEditor()
                this.textArea = ""
            }
        }
    },
    computed: {
        ...mapGetters(["paramEditor", 'currDetails', 'getCurrOrders', 'currTime']),
        neededFlag() {
            if(this.paramEditor) {
                 return this.paramEditor[1].needed ? "1" : "0"
            } else return ""
        },
        checked(){
            if(this.paramEditor) {
                 return this.paramEditor[1].set ? true : false
            } else return false
        },
        order(){ 
            return this.getCurrOrders[this.currDetails]
        },
        set(){
            if(this.paramEditor) {
            return this.paramEditor[1].set
            } else return ""
         },
    },
    watch: {
        neededFlag() {
           return this.flag = this.neededFlag
        },
        checked(){
            return this.check = this.checked
        },
        set(){
            return this.textArea = this.set
        }
    }
}
</script>

<style scoped>
     #editModal {
        background: rgb(255, 255, 255);
        position: absolute;
        width: 70%;
        left: 15%;
        top: 20%;
        z-index: 2;
        box-shadow: 0px 0px 5px black;
        padding: 5%;
        text-align: center;
        z-index: 1;
    }
    #editModal input, #editModal textarea {
        margin: 10px 10px;
    }
    #editModal button {
        padding: 7px;
        margin: 0 30px;
    }
    #editModal button:nth-of-type(2) {
        background: red;
    }
    button {
        background: green;
        padding: 3px;
        border-radius: 4px;
        border: none;
    }

    .bg {
        position: absolute;
        width: 100%;
        height: 66vh;
        background: rgba(0, 0, 0, 0.048);
        left: 0;
        top: 0;
        z-index: 1;
    }
</style>