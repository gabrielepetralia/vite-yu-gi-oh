<script>
import axios from 'axios';
import Header from "./components/Header.vue"

export default {
  name : 'App',

  components : {
    Header,
  }
}
</script>

<template>
  <Header/>
</template>

<style lang='scss'>
  @import 'bootstrap/scss/bootstrap.scss';

</style>