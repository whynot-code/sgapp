<template>
  <section>
      Planowanie {{ test }}
  </section>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Planowanie",
    computed: mapGetters(['test'])
}
</script>

<style scoped>

</style>