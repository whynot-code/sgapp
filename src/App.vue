<template>
  <div id="app">
    <Nav />
    <Header />
    <Main />
    <RightSection />
    <Loading />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Nav from "@/components/Nav.vue"
import Main from "@/components/Main.vue"
import RightSection from "@/components/RightSection.vue"
import Loading from "@/components/Loading.vue"
import { mapActions } from 'vuex'

export default {
  name: "app",
  components: {
    Header,
    Nav,
    Main,
    RightSection,
    Loading
  },
  methods: {
    ...mapActions(["mutateCurrClick"])
  },
  data(){
    return{
    }
  },
  mounted() {
      return window.addEventListener('click', ( {target} ) => {
          this.mutateCurrClick(target)
      })
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: rgba(180, 180, 180, 0.562);
  overflow: hidden;
}
#app {
  width: 100vw;
  position: relative;
}
.invalid {
    border: 2px solid red;
}
</style>
