<script>
import CardsContainer from "./CardsContainer.vue"

export default {
  name : "Main",

  components : {
    CardsContainer
  }
}
</script>

<template>
  <main>
    <div class="container">
      <select class="form-select">
        <option value="alien">Alien</option>
      </select>
      
      <CardsContainer/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    background-color : #d48f38;
    padding : 40px 0;

    select {
      width: 200px;
      margin-bottom : 40px;
    }
  }
</style>