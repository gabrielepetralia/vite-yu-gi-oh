<script>
import { store } from "../data/store"

export default {
  name: "CardsCounter",

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div class="cards-counter p-4 mb-4">
    <h5 class="text-white">Found {{ store.apiRes.length }} cards</h5>
  </div>
</template>

<style lang="scss" scoped>
  .cards-counter {
    background-color: #212529;
  }
</style>