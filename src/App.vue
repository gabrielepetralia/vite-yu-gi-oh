<script>
import axios from "axios"
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import { store } from "./data/store"

export default {
  name : "App",

  components : {
    Header,
    Main,
  },

  data() {
    return {
      store,
    }
  },

  methods : {
    getApi() {
      axios.get(store.apiUrl)
      .then(res => {
        store.apiRes = res.data.data;
        console.log(store.apiRes);
      })
    }
  },

  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <Header/>
  <Main/>
</template>

<style lang="scss">
  @import "bootstrap/scss/bootstrap.scss";

</style>