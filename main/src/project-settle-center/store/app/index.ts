export default {
  namespaced: true,
  state: {
    baseInfo: {},
    menuInfo: []
  },
  mutations: {
    SET_BASE_INFO(state: Iobject, data: Iobject) {
      state.baseInfo = data
    },
    SET_MENU_INFO(state: Iobject, data: Iobject) {
      state.menuInfo = data
    }
  },
  actions: {
    initBaseInfo(ctx: Iobject, data: Iobject) {
      ctx.commit('SET_BASE_INFO', data.baseInfo)
      ctx.commit('SET_MENU_INFO', data.menuInfo)
    }
  }
}
