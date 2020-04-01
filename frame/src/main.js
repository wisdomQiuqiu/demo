import Vue from 'vue'
import registerList from './constant/register'
import baseUrl from './constant/urlConfig'
import './utils/eventBus'
import initApp from './utils/initApp'
import serviceUtil from './utils/serviceUtil'
window.$service = serviceUtil
Vue.prototype.$service = serviceUtil
Vue.prototype.baseUrl = baseUrl
Vue.config.productionTip = false
window.eventBus.registerList = registerList[process.env.NODE_ENV]
;(async () => {
  const res = await eventBus.initAuth()
  const event = new Event('updateAuth')
  event.authPass = 0
  if (res) {
    event.authPass = 1
  }
  document.dispatchEvent(event)
  initApp(window.eventBus.registerList, event.authPass === 1)
})()
