import Vue, { VueConstructor } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@babel/polyfill'
//router
import Component from 'vue-class-component'
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
//组件
import '@/common/components/element'
//全局配置api前缀
import baseUrl from '@supply-chain/constant/url'
Vue.prototype.$baseUrl = baseUrl
//过滤器
import filters from '@/common/filter/index'
Object.keys(filters).forEach((key: string): void => {
  Vue.filter(key, (filters as { [key: string]: any })[key])
})

//
import authInit from '@supply-chain/core/auth/index'
authInit(Vue)
//
Vue.config.productionTip = false

let instance: any
function render() {
  instance = new Vue({
    store,
    router,
    render: (h: any) => h(App)
  }).$mount('#supply-chain-manage')
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
const env = process.env.NODE_ENV
//挂载前
export async function bootstrap(props: any) {
  debugger
  console.log('=======bootstrap========')
}

export async function mount(props: any) {
  debugger
  store.dispatch('app/initBaseInfo', {
    baseInfo: window.eventBus.baseInfo,
    menuInfo:
      window.eventBus.menuInfo[
        process.env.VUE_APP_PROJECT || 'supply-chain-manage'
      ]
  })
  render()
}
export async function unmount() {
  instance.$destroy()
  instance = null
}
