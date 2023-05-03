<script>
import { store } from "../../data/store"

export default {
  name : "SelectType",

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div class="d-flex align-items-center pb-4">
    <h6 class="text-white">Search by type :</h6>
    <select v-model.trim="store.typeToSearch" class="form-select me-3">
      <option v-for="Type in store.listType" :key="Type" :value="Type">{{ Type }}</option>
    </select>

    <button class="btn fw-medium text-white me-3" @click="$emit('filter')">Search</button>

    <button class="btn fw-medium text-white" @click="$emit('reset')">Reset</button>
  </div>
</template>

<style lang="scss" scoped>

  h6 {
    margin-top: 8px;
    padding: 9.5px 15px;
    background-color : #212529;
    border-radius: 8px 0 0 8px;
  }
  select {
    width: 200px;
    border-radius: 0 8px 8px 0;
  }

  button {
    background-color : #212529;
    height: auto;

    &:hover,
    &:focus {
      background-color : #212529;
      transform : scale(1.05)
    }
  }
</style>