<script>
export default {
  name : "Card",

  props : {
    gameCard : Object,
  }
}
</script>

<template>
  <div class="col">
    <div class="gp-card text-center mb-4">
      <div class="gp-card-img">
        <img class="img-fluid" :src="gameCard.card_images[0].image_url">
      </div>

      <div class="gp-card-text p-3 d-flex flex-column justify-content-between">
        <h5 class="text-white">{{ gameCard.name }}</h5>
        <span class="fs-5">{{ gameCard.type }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .gp-card {
    background-color : #d48f38;

    .gp-card-text {
      min-height: 150px;
    }
  }
</style>