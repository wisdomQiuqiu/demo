import Vue from 'vue'
import VueRouter from 'vue-router'
import { authCore } from '@settle/core/auth'
import '@common/public-path'
import account from '@settle/views/account.vue'
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
    name: 'home',
    component: account
  }
]

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/settle-center' : '/',
  mode: 'history',
  routes
})
// 路由跳转之前执行判断是否需要跳转
router.beforeEach((to, from, next) => {
  authCore.initAuth(to, from, next)
})
export default router
