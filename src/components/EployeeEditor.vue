<template>
    <div class="bg" v-if="eployeeEditor">
        <div id="editModal">
        <h3>{{ eployeeEditor[0] }}</h3>
        <div>
            <label for="newValue">Zmień datę:</label>
            <input type="text" v-model="newValue" name="newValue" id="newValue">
        </div>
    {{ newValue }}
        <button @click="editParam()">Aktualizuj</button>
        <button @click="closeEditor()">Anuluj</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "EmployeeEditor",
    data(){
        return{
            newValue: "",
            updatedData: "",
        }
    },
    methods: {
        ...mapActions(["eployeeEditorActive", "updateCurrEmployee"]),
        closeEditor() {
            this.eployeeEditorActive("");
            this.newValue = "";
        },
        editParam(){
            const input = document.querySelector('#newValue')
            if(!this.newValue) {
                input.classList.add('invalid')
            }
            else {
                input.classList.remove('invalid')
                this.updatedData = [this.eployeeEditor[0], this.newValue]

                this.updateCurrEmployee(this.updatedData)
                this.updatedData = ""
                this.closeEditor()
            }
        }
    },
    computed: {
        ...mapGetters(["eployeeEditor", "currEmployees", "currEmployeeId"]),
        contact(){ 
            return this.currEmployees[this.currEmployeeId]
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
    .invalid {
        border: 1px solid red;
    }
</style>