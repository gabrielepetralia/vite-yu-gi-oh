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
          type : store.typeToSearch,
        }
      })
      .then(res => {
        store.apiRes = res.data.data;
      })
    },

    getTypes() {
      axios.get(store.apiUrl)
      .then(res => {
        res.data.data.forEach( card => {
          if(!store.listType.includes(card.type)) store.listType.push(card.type)
        })
      })
    }
  },

  mounted() {
    this.getApi();
    this.getTypes()
  }
}
</script>

<template>
  <Header/>
  <Main @getApi="getApi"/>
  <Footer @changePage="getApi"/>
</template>

<style lang="scss">
  @import "bootstrap/scss/bootstrap.scss";

</style>