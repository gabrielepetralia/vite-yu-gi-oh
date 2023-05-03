<script>
import { store } from '../data/store';

export default {
  name: 'Footer',
  data() {
    return {
      store,
    }
  },
  methods: {
    nextPrev (value) {
      store.cardOffset += value;
      this.$emit('changePage');
    }
  }
}
</script>

<template>
  <footer>
    <div class="buttons-container d-flex justify-content-center my-2 py-3">
      <button class="btn fw-medium text-white me-3" @click="nextPrev(-store.cardNumber)" v-if="store.cardOffset">Prev</button>
      <button class="btn fw-medium text-white" @click="nextPrev( store.cardNumber)">Next</button>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  button {
    background-color : #212529;

    &:hover {
      background-color : #212529;
      transform : scale(1.05)
    }
  }
</style>