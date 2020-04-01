<template>
  <div id="app">
    <header-com :userInfo="userInfo" :companyInfo="companyInfo" />
    <div class="wrap-bottom">
      <menu-com :menuList="menuList" />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import headerCom from '@common/components/layout/header/index.vue'
import menuCom from '@common/components/layout/menu/index.vue'
import { State } from 'vuex-class'
@Component({
  components: {
    headerCom,
    menuCom
  }
})
export default class App extends Vue {
  @State app: any
  get companyInfo() {
    return {
      ...this.app.baseInfo.systemSetting,
      orgName: sessionStorage.getItem('orgName')
    }
  }
  get userInfo() {
    return this.app.baseInfo.userInfo
  }
  get menuList() {
    return this.app.menuInfo
  }
}
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .wrap-bottom
    display flex
    height calc(100vh - 60px)
    & > div:last-of-type
      flex 1
</style>
