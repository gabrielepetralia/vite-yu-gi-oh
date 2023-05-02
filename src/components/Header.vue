<script>
export default {
  name : 'Header',

  data() {
    return {
      title : "Yu-Gi-Oh Api"
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>

<style lang='scss' scoped>
  header {
    background-color : white;
    padding : 20px 0;
  }
</style>