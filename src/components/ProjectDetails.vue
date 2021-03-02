<template>
    <div :class="{hidden: !viewDetailsModalOn}" class="details">
        <button @click.stop.prevent="closeModal()" class="closeModal">x</button>
        <h1>Pruszcz Gałczyńskiego</h1>
        <aside>
            <h3>Dziennik </h3>
            <div class='table'>
                <table>
                    <tr>
                        <td>Data</td><td>Temat</td><td>Wpis</td>
                    </tr>
                    <tr>
                        <td>01.03.2021 13.06</td><td>PPB</td><td>Przekazano plac budowy - Tomasz Freza</td>
                    </tr>
                    <tr>
                        <td>01.03.2021 13.06</td><td>PPB</td><td>Przekazano plac budowysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss - Tomasz Freza</td>
                    </tr>
                    <tr>
                        <td>01.03.2021 13.06</td><td>PPB</td><td>Przekazano plac budowy - Tomasz Freza</td>
                    </tr>
                </table>
            </div>
            <form>
                <textarea type="text" name="wpis" id="wpis" cols="77" rows="3" placeholder="Treść Wpisu"></textarea><br/>
                <select name="" id="">
                    <option value="projekt">Projekt</option>
                    <option value="ppb">PPB</option>
                    <option value="numeracja">Numeracja</option>
                    <option value="wypis">Wypis/Wyrys</option>
                    <option value="zajecie">Zajęcie pasa</option>
                    <option value="etapowka">Etapówka</option>
                    <option value="powyk">Powykonawcza</option>
                    <option value="faktura">Faktura</option>
                    <option value="inny">Inny</option>
                </select> 
                <button>Dodaj wpis</button>
            </form>
        </aside>

        <article>
            <h3>Informacje</h3>
            <ul>
                <li>
                    Termin: 17.12.2021
                    <img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/>
                </li>
                <li>Projekt: wymaga<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>PPB: wymaga<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Numeracja: wymaga<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Wypis: wymaga<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Zajecie: wymaga<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Etapówka: wymaga<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Dokumentacja Powykonawcza: wymaga<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>Faktura: brak<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/></li>
                <li>
                    Dodatkowe Informacje:<img class="edit" src="@/assets/icons/edit.svg" alt="Edit-Icon"/> 
                    <p>sadsadsadsadsadadsadas</p>
                </li>
            </ul>
        </article>

        <footer>
            <h3>Notatki <img class="edit" src="@/assets/icons/plus.svg" alt="Edit-Icon"/> </h3>
            <div id="note"></div>
        </footer>
        
    </div>
</template>

<script>
export default {
    name: "ProjectDetails",
    props: {
        viewDetailsModalOn: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit("closeModal", this.viewDetailsModalOn)
        },
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
        height: 75vh;
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
</style>