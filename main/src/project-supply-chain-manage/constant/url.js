let API_HTTP_GATEWAY = '',
  API_HTTP_CAS = '',
  PATHNAME = ''
if (process.env.NODE_ENV == 'production') {
  //正式
  API_HTTP_GATEWAY = '"https://gateway.api.dahuange.com/"'
  API_HTTP_CAS = '"https://cas.dahuange.com/"'
  PATHNAME = ''
} else if (process.env.NODE_ENV == 'test') {
  //测试
  API_HTTP_GATEWAY = '"http://test.lerke.cn:11600/"'
  API_HTTP_CAS = '"http://test.lerke.cn:10570/"'
  PATHNAME = ''
} else if (process.env.NODE_ENV == 'debugger') {
  API_HTTP_GATEWAY = '"http://gateway.frp.lerke.cn/"'
  API_HTTP_CAS = '"http://cas.frp.lerke.cn/"'
  PATHNAME = ''
} else {
  API_HTTP_GATEWAY = '"http://gateway.frp.lerke.cn/"'
  API_HTTP_CAS = '"http://cas.frp.lerke.cn/"'
  PATHNAME = 'http://localhost:6060/#/'
}
export default { API_HTTP_GATEWAY, API_HTTP_CAS, PATHNAME }
