<template>
  <div id="app">
    <b-container>
      <!-- nav -->
      <b-row class="my-3">
        <b-col class="text-center">
          <router-link to="/"> home </router-link></b-col
        >
        <b-col class="text-center">
          <router-link to="/fifteen_canvas"> пятнашки canvas </router-link>
        </b-col>
        <b-col class="text-center">
          <router-link to="/fifteen_node"> пятнашки node </router-link>
        </b-col>
        <b-col class="text-center">
          <router-link to="/grafik_canvas"> grafik_canvas </router-link>
        </b-col>
        <b-col class="text-center">
          <router-link to="/chart"> chart </router-link>
        </b-col>
      </b-row>
      <!-- nav -->

      <!-- router-view -->
      <router-view />
      <!-- /router-view -->
    </b-container>
  </div>
</template>

<script>
  import { BContainer, BRow, BCol } from 'bootstrap-vue'

  export default {
    components: {
      BContainer,
      BRow,
      BCol,
    },
  }
</script>
