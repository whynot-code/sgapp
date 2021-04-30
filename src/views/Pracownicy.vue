<template>
   <section>
       <NewEmployeeModal />
       <EmployeeDetails />
            <header>
                <button @click="newEmployeeActive(true)">Nowy Pracownik</button>
            </header>
        <table>
            <tr>
                <td></td>
                <td>Nazwa</td>
                <td>Email</td>
                <td>Tel:</td>
 
            </tr>

            <p v-if="typeof employees === 'string'"> {{ employees }}</p>

            <tr class='employees' v-for="emp in employees" :key="employees.indexOf(emp)">
                <td>{{ employees.indexOf(emp)+1 }}.</td>
                <td @dblclick="openCloseDetails(emp.id)">{{ emp.name }}</td>
                <td>{{ emp.email }}</td>
                <td>{{ emp.tel }}</td>

            </tr>
        </table>
    </section>
</template>

<script>
import EmployeeDetails from "@/components/EmployeeDetails.vue"
import NewEmployeeModal from "@/components/NewEmployeeModal.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Kontakty",
    components: {
        NewEmployeeModal,
        EmployeeDetails
    },
    computed: {
        ...mapGetters(['searchedData', 'currEmployees']),
        employees() {
            return this.searchedData.length > 0 ? this.searchedData : this.currEmployees
        },
    },
    methods: {
        ...mapActions(['newEmployeeActive', "employeeDetailsActive", "setEmployeeId"]),
        openCloseDetails(id){
            this.setEmployeeId(id)
            this.employeeDetailsActive(true)
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
    }
    
    .employees:hover {
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
</style>