import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Window {
    __webpack_public_path__: string
    __POWERED_BY_QIANKUN__: string
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
    eventBus: { [key: string]: any }
    $service: any
    process: any
  }
}
