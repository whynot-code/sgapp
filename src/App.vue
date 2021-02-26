<template>
  <div id="app">
    <Nav />
    <Header />
    <Main />
    <RightSection />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Nav from "@/components/Nav.vue"
import Main from "@/components/Main.vue"
import RightSection from "@/components/RightSection.vue"

export default {
  name: "app",
  components: {
    Header,
    Nav,
    Main,
    RightSection,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: grey;
  overflow: hidden;
}
#app {
  width: 100vw;
}
</style>
