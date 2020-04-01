import {
  addGlobalUncaughtErrorHandler,
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start
} from 'qiankun'
import App from '../App.vue'
//注册子应用
export default (registerList, authPass) => {
  let app = null,
    render = ({ appContent, loading }) => {
      if (!app) {
        app = new Vue({
          render: h => h(App),
          data: {
            appContent: appContent,
            loading: loading,
            authPass: authPass
          }
        }).$mount('#subapp-container')
      } else {
        app.$children[0].appContent = appContent
        app.$children[0].loading = loading
      }
    }
  registerMicroApps(
    registerList.reduce((current, item) => {
      return [...current, { ...item, render }]
    }, []),
    {
      beforeLoad: [
        app => {
          console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
        }
      ],
      beforeMount: [
        app => {
          console.log(
            '[LifeCycle] before mount %c%s',
            'color: green;',
            app.name
          )
        }
      ],
      afterUnmount: [
        app => {
          console.log(
            '[LifeCycle] after unmount %c%s',
            'color: green;',
            app.name
          )
        }
      ]
    }
  )
  //设置默认进入的子应用
  setDefaultMountApp('/main')
  // 启动应用
  start({
    prefetch: true,
    jsSandbox: true,
    singular: true
  })
  addGlobalUncaughtErrorHandler(event => console.log(event))
  runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted')
  })
}
