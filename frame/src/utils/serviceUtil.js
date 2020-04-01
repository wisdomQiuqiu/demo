/*
 * description:
 * 	1)5秒的超时验证
 * 	2)POST的设置
 * 	3)统一的response封装
 * */
import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.baseURL = process.env.VUE_APP_API_ADDRESS
axios.defaults.timeout = 60000 // 60s
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json;charset=UTF-8'
  }
  return config
})

// code状态码200判断
axios.interceptors.response.use(
  response => {
    if (response && response.data && response.data.code < 0) {
      Message.error(response.data.message)
      return Promise.reject(response.data.message)
    }
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除所有信息
          localStorage.clear()
          sessionStorage.clear()
          const event = new Event('updateAuth')
          event.authPass = 0
          document.dispatchEvent(event)
          return Promise.reject(error.response.data) // 返回接口返回的错误信息
      }
    }
    Message.error(error.message)
    return Promise.reject(error)
  }
)
export default axios
