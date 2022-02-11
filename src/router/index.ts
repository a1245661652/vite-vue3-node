import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import Vuex from '../views/vuex.vue'
import Test from '../views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axiox',
    component: () => import('../views/axios.vue') // 懒加载组件
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
