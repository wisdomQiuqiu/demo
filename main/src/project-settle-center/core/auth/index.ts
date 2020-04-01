import AuthCore from './authCore'
import authDirective from './authDirective'
import { VueConstructor } from 'vue'
const auth = new AuthCore()
export const authCore = auth
export default (Vue: VueConstructor<Vue>) => {
  Vue.prototype.$auth = auth
  Vue.directive('auth', authDirective(auth))
}
