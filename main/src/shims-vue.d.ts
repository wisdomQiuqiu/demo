// shims-vue.d.ts
import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { Store } from 'vuex'
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
    $store: Store<any>
    prototype: any
    directive: any
    //element
    $elMsgbox: any
    $elMessage: any
    $elLoading: any
    // 以下是在main.ts中挂载到Vue.prototype上的变量
    $baseUrl: any
  }
}
