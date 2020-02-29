import Vue from 'vue'
import VueRouter from 'vue-router'
import seller from '../views/seller.vue'
import commodity from '../views/commodity.vue'
import goods from '../views/goods.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/goods',
    name: '/goods',
    component: goods
  },
  {
    path: '/',
    name: '/',
    component: seller
  },
  {
    path: '/seller',
    name: '/seller',
    component: seller
  },
  {
    path: '/commodity',
    name: '/commodity',
    component: commodity
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router