import Vue from 'vue'
import App from './app.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/sass/template.sass'

// require('@core/assets/fonts/feather/iconfont.css')

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')

Vue.use(BootstrapVue)
