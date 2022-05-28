<template>
  <div id="app">
    <nav>
      <router-link to="/"> home </router-link>
      <router-link to="/fifteen_canvas"> пятнашки canvas </router-link>
      <router-link to="/fifteen_node"> пятнашки node 1 </router-link>
      <router-link to="/grafik_canvas"> grafik_canvas </router-link>
    </nav>

    <router-view />
  </div>
</template>

<style lang="sass">
  @import 'sass/template.sass'
</style>

<style lang="scss"></style>
