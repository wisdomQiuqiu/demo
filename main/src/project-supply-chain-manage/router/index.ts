import Vue from 'vue'
import VueRouter from 'vue-router'
import { authCore } from '@supply-chain/core/auth'
import '@common/public-path'
import Home from '@supply-chain/views/Home.vue'
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
  }
]

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/supply-chain-manage' : '/',
  mode: 'history',
  routes
})
// 路由跳转之前执行判断是否需要跳转
router.beforeEach((to, from, next) => {
  authCore.initAuth(to, from, next)
})
export default router
