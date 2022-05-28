<template>
  <div id="app">
    <b-container>
      <b-row class="my-3">
        <b-col><router-link to="/"> home </router-link></b-col>
        <b-col>
          <router-link to="/fifteen_canvas"> пятнашки canvas </router-link>
        </b-col>
        <b-col>
          <router-link to="/fifteen_node"> пятнашки node </router-link>
        </b-col>
        <b-col>
          <router-link to="/grafik_canvas"> grafik_canvas </router-link>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <router-view />
    </b-container>

    <FifteenNode />
  </div>
</template>

<script>
  import { BContainer, BRow, BCol } from 'bootstrap-vue'
  import FifteenNode from '@/views/fifteen_node/fifteen_node.vue'

  export default {
    components: {
      BContainer,
      BRow,
      BCol,
      FifteenNode,
    },
  }
</script>

<style lang="sass">
  @import 'sass/template.sass'
</style>
