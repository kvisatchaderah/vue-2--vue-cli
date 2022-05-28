<template>
  <section id="grafik_canvas" class="grafik_canvas">
    <!-- settings -->
    <div class="settings d-flex mb-3">
      <span class="m-1"> X: </span>
      <b-form-input
        v-model="grafik_settings_in_node.x_max"
        class="gc__btn btn-dark m-1"
        type="number"
        min="1"
        max="10"
        @keydown.stop
        @keydown.enter="start_grafik"
      />
      <span class="m-1"> Y: </span>
      <b-form-input
        v-model="grafik_settings_in_node.y_max"
        class="gc__btn btn-dark m-1"
        type="number"
        min="1"
        max="10"
        @keydown.stop
        @keydown.enter="start_grafik"
      />
    </div>
    <!-- /settings -->

    <!-- functions -->
    <div class="functions d-flex mb-3">
      <a
        v-for="(f, index) in functions"
        :key="index"
        class="m-1 mr-3 pb-3 pr-3"
        v-html="f.title"
        @click="new_function(f.function)"
      ></a>
    </div>
    <!-- /functions -->

    <!-- grids -->
    <canvas
      id="grids"
      class="grids"
      :style="{
        width: grafik_settings.width + 'px',
        height: grafik_settings.height + 'px',
      }"
    ></canvas>
    <!-- /grids -->
  </section>
</template>

<script>
  import script from './grafik_canvas.js'
  export default script
</script>

<style lang="sass" scoped>
  @import 'grafik_canvas.sass'
</style>
