<script>
export default {
  name : 'Header',

  data() {
    return {
      logo : "yugioh-logo.png",
      title : "Yu-Gi-Oh Api"
    }
  },

  methods : {
    getImage(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <header>
    <div class="container d-flex align-items-center">
      <div class="logo me-4">
        <img class="img-fluid" :src="getImage(logo)" alt="logo">
      </div>
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>

<style lang='scss' scoped>
  header {
    background-color : white;
    padding : 20px 0;

    .logo {
      width: 100px;
    }
  }
</style>