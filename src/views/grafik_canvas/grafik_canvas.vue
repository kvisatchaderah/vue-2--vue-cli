<template>
  <section id="grafik_canvas" class="grafik_canvas">
    <div class="game_control">
      <!-- settings -->
      <input
        v-model="game_settings_in_node.row_quantity"
        type="number"
        min="1"
        max="10"
        @keydown.stop
      />
      <input
        v-model="game_settings_in_node.col_quantity"
        type="number"
        min="1"
        max="10"
        @keydown.stop
      />
      <input
        v-model="game_settings_in_node.row_quantity"
        type="number"
        min="1"
        max="10"
        @keydown.stop
      />
      <input
        v-model="game_settings_in_node.col_quantity"
        type="number"
        min="1"
        max="10"
        @keydown.stop
      />
      <!-- /settings -->
    </div>
  </section>
</template>

<script>
  import script from './grafik_canvas.js'
  export default script
</script>

<style lang="sass" scoped>
  @import 'grafik_canvas.sass'
</style>
