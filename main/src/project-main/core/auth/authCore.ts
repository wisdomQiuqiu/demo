import { isFunction } from 'lodash'
class AuthCore {
  //静态数据
  public userInfo: object = {}
  public rules: string[] = []
  //
  constructor() {}
  public async initAuth(
    to: { [key: string]: any },
    from: { [key: string]: any },
    next: any
  ) {
    //获取auth
    await this.getAuth()
    //获取token
    await this.getCasToken()
    next()
  }
  private treeMapFormat = (list: Array<any>): Array<any> => {
    if (!Array.isArray(list)) {
      return []
    }
    return list.reduce((ls: Array<object>, item) => {
      return [
        ...ls,
        [item.orgId, item],
        ...(item.childrenOrg && item.childrenOrg.length
          ? this.treeMapFormat(item.childrenOrg)
          : [])
      ]
    }, [])
  }
  private async getCasToken() {}
  private async getAuth() {}
  public checkAuth(codes: any): boolean {
    if (!this.rules || !this.userInfo) {
      return false
    }
    if (isFunction(codes)) {
      return codes(this, this.userInfo, this.rules)
    }

    const realCodes: Array<any> = Array.isArray(codes)
      ? codes
      : codes.split(',')
    return realCodes.reduce((check, code) => {
      return check || ~this.rules.findIndex(m => String(m) === String(code))
    }, false)
  }
}
export default AuthCore
