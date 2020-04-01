import request from './index'
import qs from 'qs'
const formatUrl = (url: string, params: object): string => {
  return (
    Object.keys(params).reduce((newUrl: string, key: string) => {
      return newUrl.replace(`{${key}}`, (params as { [key: string]: any })[key])
    }, url) || ''
  )
}
export function get(url: string, preParams = {}) {
  return (params = {}, options = {}) => {
    return request.get(formatUrl(url, params), {
      ...options,
      params: {
        ...preParams,
        ...params
      }
    })
  }
}

export function post(url: string, preParams = {}) {
  return (config: { [key: string]: any }, options = {}) => {
    return request.request({
      url: formatUrl(url, config.data ? config.data : config),
      method: 'post',
      ...(config.data
        ? {
            ...options,
            ...config,
            data: {
              ...preParams,
              ...config.data
            }
          }
        : {
            ...options,
            data: {
              ...preParams,
              ...config
            }
          })
    })
  }
}
export function postQS(url: string, preParams = {}) {
  return (config: { [key: string]: any }, options = {}) => {
    return request.request({
      url: formatUrl(url, config.data ? config.data : config),
      method: 'post',
      ...(config.data
        ? {
            ...options,
            ...config,
            data: qs.stringify({
              ...preParams,
              ...config.data
            })
          }
        : {
            ...options,
            data: qs.stringify({
              ...preParams,
              ...config
            })
          })
    })
  }
}
export function put(url: string, preParams = {}) {
  return (config: { [key: string]: any }, options = {}) => {
    return request.request({
      url: formatUrl(url, config.data ? config.data : config),
      method: 'put',
      ...(config.data
        ? {
            ...options,
            ...config,
            data: {
              ...preParams,
              ...config.data
            }
          }
        : {
            ...options,
            data: {
              ...preParams,
              ...config
            }
          })
    })
  }
}

export function deleteReq(url: string, preParams = {}) {
  return (config: { [key: string]: any }, options = {}) => {
    return request.delete(formatUrl(url, config.data ? config.data : config), {
      ...(config.data
        ? {
            ...options,
            ...config,
            data: {
              ...preParams,
              ...config.data
            }
          }
        : {
            ...options,
            data: {
              ...preParams,
              ...config
            }
          })
    })
  }
}

export function postFile(url: string) {
  return (config = {}) => {
    return request.request({
      url: formatUrl(url, config),
      method: 'post',
      data: config,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}

//导出Excel
export function downLoad(url: string) {
  return (params = {}) => {
    return request.request({
      url: formatUrl(url, params),
      method: 'get',
      responseType: 'blob',
      headers: { filename: 'gbk' },
      params: {
        ...params
      }
    })
  }
}

// 直接打开下载Excel
export function openDownLoad(url: string) {
  return (params: object): void => {
    const realUrl = formatUrl(url, params)
    window.open(realUrl)
  }
}
