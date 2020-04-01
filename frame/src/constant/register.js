let genActiveRule = routerPrefix => {
  return location => location.pathname.startsWith(routerPrefix)
}
export default {
  production: [
    {
      name: 'main',
      entry: '//localhost:6060',
      activeRule: genActiveRule('/main'),
      chineseName: '平台'
    },
    {
      name: 'settle-center',
      entry: '//localhost:6161',
      activeRule: genActiveRule('/settle-center'),
      chineseName: '结算中心'
    },
    {
      name: 'supply-chain-manage',
      entry: '//localhost:6262',
      activeRule: genActiveRule('/supply-chain-manage'),
      chineseName: '供应链'
    }
  ],
  test: [
    {
      name: 'main',
      entry: '//localhost:6060',
      activeRule: genActiveRule('/main'),
      chineseName: '平台'
    },
    {
      name: 'settle-center',
      entry: '//localhost:6161',
      activeRule: genActiveRule('/settle-center'),
      chineseName: '结算中心'
    },
    {
      name: 'supply-chain-manage',
      entry: '//localhost:6262',
      activeRule: genActiveRule('/supply-chain-manage'),
      chineseName: '供应链'
    }
  ],
  debugger: [
    {
      name: 'main',
      entry: '//localhost:6060',
      activeRule: genActiveRule('/main'),
      chineseName: '平台'
    },
    {
      name: 'settle-center',
      entry: '//localhost:6161',
      activeRule: genActiveRule('/settle-center'),
      chineseName: '结算中心'
    },
    {
      name: 'supply-chain-manage',
      entry: '//localhost:6262',
      activeRule: genActiveRule('/supply-chain-manage'),
      chineseName: '供应链'
    }
  ]
}
