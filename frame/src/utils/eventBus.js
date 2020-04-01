import Vue from 'vue'
const treeMapFormat = list => {
  if (!Array.isArray(list)) {
    return []
  }

  return list.reduce((ls, item) => {
    return [
      ...ls,
      [item.orgId, item],
      ...(item.childrenOrg && item.childrenOrg.length
        ? treeMapFormat(item.childrenOrg)
        : [])
    ]
  }, [])
}
const redirectLogin = () => {
  const event = new Event('updateAuth')
  event.authPass = 0
  document.dispatchEvent(event)
}
let bus = new Vue({
  data: () => {
    return {
      baseInfo: {},
      //默认
      menuInfo: {
        main: [
          {
            name: '首页',
            path: '/home',
            icon: 'icon-shouye_weixuanze'
          },
          {
            name: '机器',
            path: '/machineActivate',
            icon: 'icon-jiqi_weixuanze',
            children: [
              {
                authCode: '0107,0105,0112,0113',
                name: '注册激活',
                path: '/machineActivate'
              }
            ]
          }
        ],
        'supply-chain-manage': [
          {
            name: '首页',
            path: '/home',
            icon: 'icon-shouye_weixuanze'
          }
        ],
        'settle-center': [
          {
            name: '结算中心',
            icon: 'icon-zhuanduoduo_weixuanze',
            path: '/account',
            children: [
              {
                name: '账户与提现',
                path: '/account'
              }
            ]
          }
        ]
      },
      accessToken: '',
      treeMap: []
    }
  },
  methods: {
    async initAuth() {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 2000)
      })
    }
  }
})
window.eventBus = bus
