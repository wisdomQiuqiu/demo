export default {
  api: {
    login: 'login',
    auth: 'api/users/v1/auth',
    orgTree: 'api/org/v1/orgTree',
    casLogin: process.env.VUE_APP_API_CAS + 'oauth/v1/get/user/accesstoken',
    accesstoken: process.env.VUE_APP_API_CAS + 'oauth/v1/check/user/accesstoken'
  },
  imgPrefix: 'https://lerke.oss-cn-shenzhen.aliyuncs.com/'
}
