<template>

  <div v-if="paramEditor" id="editModal">
    <h3>{{ paramEditor[0] }}</h3>
    <div v-if="paramEditor[0]==='Termin'">
        <label for="date">Zmień datę:</label>
        <input type="date" v-model="date" name="date" value="1" id="date">
    </div>
    <div v-else>
        <label for="needed">Wymaga</label>
        <input type="radio" v-model="neededFlag" name="needed" value="1" id="needed">
        <label for="notneeded">Nie wymaga</label>
        <input type="radio" v-model="neededFlag" name="needed" value="0"  id="notneeded"><br />
        
        <label for="done">Wykonano</label>
        <input :disabled="neededFlag == '0' || neededFlag == ''" v-model="checked" type="checkbox" name="done" id="done"><br />

        <label for="info">Dodatkowe informacje:</label><br />
        <textarea :disabled="!checked || neededFlag == '0'" name="info" id="" cols="35" rows="5" placeholder="np. data, sygnatura, kto przekazał itp." ></textarea><br />
    </div>

    <button @click="editParam()">Aktualizuj</button>
    <button @click="closeParamEditor()">Anuluj</button>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "DetailsEditor",
    data(){
        return{
            date: "",
            updatedData: ""
        }
    },
    methods: {
        ...mapActions(["mutateParamEditor"]),
        closeParamEditor() {
            this.mutateParamEditor("")
        },
        editParam(){
            if(this.paramEditor[0]==="Termin"){
                let input = document.querySelector('#editModal')
                input = input.querySelector('input')
                
                if(!this.date) {
                    input.classList.add('invalid')
                }
                else {
                    input.classList.remove('invalid')
                    this.updatedData = this.paramEditor
                    this.updatedData[1] = this.date.split("-").reverse().join(".")
                    console.log(this.updatedData)
                    this.mutateParamEditor(this.updatedData)
                    this.closeParamEditor()
                }
            }
            else {
                null
            }
        }
    },
    computed: {
        ...mapGetters(["paramEditor"]),
        neededFlag() {
            if(this.paramEditor) {
                 return this.paramEditor[1].needed ? "1" : "0"
            } else return ""
        },
        checked(){
            if(this.paramEditor) {
                 return this.paramEditor[1].set ? true : false
            } else return false
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
</style>