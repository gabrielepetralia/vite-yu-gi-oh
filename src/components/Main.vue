<script>
import CardsContainer from "./CardsContainer.vue"
import SelectType from "./partials/SelectType.vue"
import { store } from "../data/store"

export default {
  name : "Main",

  components : {
    CardsContainer,
    SelectType,
  },

  data() {
    return {
      store,
    }
  },

  methods : {
    filter() {
      store.apiRes = [];
      this.$emit('getApi')
    },

    reset() {
      store.apiRes = [];
      store.typeToSearch = null;
      this.$emit('getApi')
    }
  }
}
</script>

<template>
  <main>
    <div class="container">
      <SelectType @filter="filter" @reset="reset"/>
      <CardsContainer/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    min-height: calc(100vh - 166px);
    background-color : #d48f38;
    padding : 40px 0;
  }
</style>