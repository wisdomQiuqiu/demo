const moment = require('moment')
/**
 * 返回时间格式'YYYY-MM-DD HH:mm:ss' 字符串
 * @param {date} val
 * @return {string}
 */
const formatDateTime = (
  val: string | object,
  format = 'YYYY-MM-DD HH:mm:ss'
): string => {
  return moment(val).format(format)
}
/**
 *返回时间格式'YYYY-MM-DD' 字符串
 * @param {date} val
 * @return {string}
 */
const formatDate = (
  val: string | object,
  format = 'YYYY-MM-DD' as string
): string => {
  return moment(val).format(format)
}
/**
 * 列表中查找某字段值相同的item
 * @param {*} value
 * @param {*} keyName
 * @param {*} list
 */
const dealType = (
  value: string | number,
  keyName: string,
  list: object[]
): object => {
  const key = list.findIndex((item: { [key: string]: any }): boolean => {
    return item[keyName] == value
  })
  return ~key === 0 ? {} : list[key]
}

export default { dealType, formatDateTime, formatDate }
