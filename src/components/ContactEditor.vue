<template>
    <div class="bg" v-if="paramEditor">
        <div id="editModal">
        <h3>{{ paramEditor[0] }}</h3>
        <div>
            <label for="newValue">Zmień datę:</label>
            <input type="text" v-model="newValue" name="newValue" id="newValue">
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
            newValue: "",
            updatedData: "",
        }
    },
    methods: {
        ...mapActions(["mutateParamEditor", "updateCurrOrder"]),
        closeEditor() {
            this.mutateParamEditor("")
        },
        editParam(){
                input = input.querySelector('input')
                if(!this.newValue) {
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
        contact(){ 
            return this.currContacts[this.currContactId]
        },
    },
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