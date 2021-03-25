<template>
   <section :class="{overflow: newOrderModalOn}">
        <NewOrderModal :newOrderModalOn="newOrderModalOn" @closeModal="openCloseNewOrder" />
        <ProjectDetails />
        <header>
            <button @click="openCloseNewOrder()">Nowy Projekt</button>
        </header>
        <table>

            <tr>
                <td></td>
                <td>Nazwa</td>
                <td>Firma</td>
                <td>Miejscowość</td>
                <td>Stanowisko</td>
                <td>Opis</td>
            </tr>

            <p v-if="typeof currOrders === 'string'"> {{ currOrders }}</p>

            <tr class="order" v-else v-for="item in currOrders" :key="item.id">
                <td>{{ getCurrOrders.indexOf(item)+1 }}.</td>
                <td @dblclick="openCloseDetails(item.id)">{{ item.name }} </td>
                <td>{{ item.termin }}</td>
                <td>
                    {{ !item.projekt.set ? setStatus(item.projekt.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Projekt', item.id)" class="edit" v-if="item.projekt.needed && !item.projekt.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.ppb.set ? setStatus(item.ppb.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'PPB', item.id)" class="edit" v-if="item.ppb.needed && !item.ppb.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.dz.set ? setStatus(item.dz.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Dziennik', item.id)" class="edit" v-if="item.dz.needed && !item.dz.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.numeracja.set ? setStatus(item.numeracja.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Numeracja', item.id)" class="edit" v-if="item.numeracja.needed && !item.numeracja.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/> 
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.wypis.set ? setStatus(item.wypis.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Wypis', item.id)" class="edit" v-if="item.wypis.needed && !item.wypis.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.zajecie.set ? setStatus(item.zajecie.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Zajęcie pasa', item.id)" class="edit" v-if="item.zajecie.needed && !item.zajecie.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.etapowka.set ? setStatus(item.etapowka.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Etapówka', item.id)" class="edit" v-if="item.etapowka.needed && !item.etapowka.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.powyk.set ? setStatus(item.powyk.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Powykonawcza', item.id)" class="edit" v-if="item.powyk.needed && !item.powyk.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td>
                <td>
                    {{ !item.faktura.set ? setStatus(item.faktura.needed) : "✔" }} 
                    <img @click="showUpdatePanel($event, 'Faktura', item.id)" class="edit" v-if="item.faktura.needed && !item.faktura.set" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                    <div id="updatePanel">
                        <UpdatePanel />
                    </div>
                </td> 
            </tr>
        </table>
    </section>
</template>

<script>
export default {
    name: "Kontakty",
}
</script>

<style scoped>

</style>