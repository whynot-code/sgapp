<template>
  <aside class="nav">
      <nav>
          <ul>
              <router-link to="/"><li>Projekty</li></router-link>
              <router-link to="/Kontakty"><li>Kontakty</li></router-link>
              <router-link to="/Pracownicy"><li>Pracownicy</li></router-link>
              <router-link to="/Todo"><li>To Do</li></router-link>
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
        transition: transform 0.1s ease-in-out;
        transition: transform 0.1s ease-in-out;
    }
    a{
        text-decoration: none;
        color: rgb(49, 49, 48);
        cursor: pointer;
    }
    li:hover {
        transform: translateX(5px);
        color: rgb(27, 27, 27);
        background: rgba(49, 49, 49, 0.37);
        border-radius:  0 25px 25px 0 ;
    }
    li:active {
        color: rgb(139, 139, 139);
        transform: translateX(-5px)
    }
</style>