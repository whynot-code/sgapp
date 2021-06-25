<template>
  <div style="display: none" id="updatePanel">
    <h3>{{ quickUpdatedData[1] }}</h3>
    <textarea v-model="value" name="info" id="" placeholder="np. data, sygnatura, kto przekazał itp." ></textarea>
    <button @click="update">Potwierdź</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "QuickUpdateModal",
    data() {
        return{
            activePanel: "",
            value: ""
        }
    },
    methods: {
        ...mapActions(["mutateQuickUpdatedData", "updateCurrOrder"]),
        update(){
            this.value ? null : this.value = true;
            let updatedData = [this.quickUpdatedData[1], { needed: true, set: this.value }]
            this.updateCurrOrder(updatedData)
            this.activePanel.style.display = "none"
            this.value = ""
        }
    },
    computed: {
        ...mapGetters(["quickUpdatedData", "currClick"]),
    },
    watch: {
        quickUpdatedData(){
            this.activePanel ? this.activePanel.style.display = 'none' : null
            this.activePanel = this.quickUpdatedData[0].target.nextElementSibling;
            this.activePanel = this.activePanel.firstElementChild;
            this.activePanel.style.display = 'block';
        },
        currClick(){
            if(this.activePanel) {
                let editButton = this.quickUpdatedData[0].target
                let panel = this.activePanel
                let title = this.activePanel.firstElementChild
                let textarea = panel.querySelector('textarea')
                let button = panel.querySelector('button')
                if(this.currClick !== panel && this.currClick !== title && this.currClick !== textarea && this.currClick !== editButton && this.currClick !== button){
                    this.activePanel.style.display = "none"
                }
            }
        }
    }
}
</script>

<style scoped>
    #updatePanel {
        width: 200px;
        height: 150px;
        max-height: 200px;
        background: rgb(156, 156, 156);
        position: absolute;
        bottom: -115px;
        left: -102px;
        padding: 4px;
        font-size: 13px;
        box-shadow: 0px 1px 3px 0px;
    }
    button {
        width: 50%;
    }
    button, h3, textarea {
        margin-top: 7px;
    }
    textarea{
        max-width: 190px;
        min-width: 190px;
        min-height: 80px;
        padding: 10px;
        font-size: 10px;
    }

</style>