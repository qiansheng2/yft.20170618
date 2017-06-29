import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import YftTop from '@/components/YftTop'
import Total from '@/components/Total.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/yftTop',
      name: 'YftTop',
      component: YftTop
    },
    {
      path: '/total',
      name: 'Total',
      component: Total
    }

  ]
})
