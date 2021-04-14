<template>
  <aside class="nav">
      <nav>
          <ul>
              <router-link to="/"><li>Projekty</li></router-link>
              <router-link to="/Planowanie"><li>Planowanie</li></router-link>
              <router-link to="/Kontakty"><li>Kontakty</li></router-link>
              <li>Mapa</li>
              <router-link to="/Pracownicy"><li>Pracownicy</li></router-link>
              <router-link to="/Todo"><li>To Do</li></router-link>
              <li>Ustawienia</li>
          </ul>
      </nav>
  </aside>
</template>

<script>
export default {
    name: "Nav",

}
</script>

<style scoped>
    .nav {
        width: 12vw;
        height: 100vh;
        border: 1px solid black;
        float: left;
    }
    ul {
        width: 80%;
        font-size: 23px;
        margin-top: 8vh;
    }
    li {
        line-height: 26px;
        padding: 5px 30px;
    }
</style>