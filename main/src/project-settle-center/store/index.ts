import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import app from './app/index'
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app
  }
})
