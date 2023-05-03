<script>
import axios from "axios"
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"
import { store } from "./data/store"

export default {
  name : "App",

  components : {
    Header,
    Main,
    Footer
  },

  data() {
    return {
      store,
    }
  },

  methods : {
    getApi() {
      axios.get(store.apiUrl, {
        params : {
          num : store.cardNumber,
          offset : store.cardOffset,
        }
      })
      .then(res => {
        store.apiRes = res.data.data;
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
  <Footer @changePage="getApi"/>
</template>

<style lang="scss">
  @import "bootstrap/scss/bootstrap.scss";

</style>