<script>
import Card from "./partials/Card.vue"
import { store } from "../data/store"
import CardsCounter from "./CardsCounter.vue"

export default {
  name : "CardsContainer",

  components : {
    Card,
    CardsCounter,
  },

  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="cards-container p-5">
    <CardsCounter/>

    <div class="row row-cols-5">
      <Card
        v-for="(gameCard, index) in store.apiRes"
        :key="index"
        :gameCard="gameCard"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cards-container {
    background-color : white;
  }
</style>