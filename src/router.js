import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('@/views/index/index.vue'),
    },
    {
      name: 'fifteen_canvas',
      path: '/fifteen_canvas',
      component: () => import('@/views/fifteen_canvas/fifteen_canvas.vue'),
    },
    {
      name: 'fifteen_node',
      path: '/fifteen_node',
      component: () => import('@/views/fifteen_node/fifteen_node.vue'),
    },
    {
      name: 'grafik_canvas',
      path: '/grafik_canvas',
      component: () => import('@/views/grafik_canvas/grafik_canvas.vue'),
    },
    {
      name: 'chart',
      path: '/chart',
      component: () => import('@/views/chart/chart.vue'),
    },
  ],
})
