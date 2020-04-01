import $baseUrl from '@main/constant/url'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import * as cookies from 'tiny-cookie'
const TIMEOUT_TIME = 60000
const redirectLogin = (): void => {
  if (!~window.location.href.indexOf('login')) {
    sessionStorage.clear()
    window.location.href = `${$baseUrl.PATHNAME}#/login`
  }
}
const requestConfig = {
  withCredentials: true,
  // crossOrigin: true,
  timeout: TIMEOUT_TIME,
  baseURL: $baseUrl.API_HTTP_GATEWAY
}

const request: AxiosInstance = axios.create(requestConfig)
request.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json;charset=UTF-8',
      access_token: cookies.get('casToken')
    }
    return config
  },
  (err: any) => {
    return Promise.reject(err)
  }
)
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return new Promise((resolve, reject) => {
      const { data } = response
      if (data.code < 0) {
        reject(data)
      } else {
        resolve(data)
      }
    })
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        redirectLogin()
      }
    }
    return Promise.reject(error)
  }
)
export default request
