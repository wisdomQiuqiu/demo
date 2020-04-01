import Vue from 'vue'
import VueRouter from 'vue-router'
import { authCore } from '@main/core/auth'
import '@common/public-path'
import Home from '@main/views/Home.vue'
import machineActivate from '@main/views/machineActivate/index.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/machineActivate',
    name: 'machineActivate',
    component: machineActivate
  }
]

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/main' : '/',
  mode: 'history',
  routes
})
// 路由跳转之前执行判断是否需要跳转
router.beforeEach((to, from, next) => {
  authCore.initAuth(to, from, next)
})
export default router
