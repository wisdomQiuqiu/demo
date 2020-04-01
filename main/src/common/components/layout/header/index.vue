<template>
  <div class="layout-header">
    <project />
  </div>
</template>

<script lang="ts">
// import UiIcon from '../../icon/index.vue'
// import MobileTip from './mobile.vue'
// import UserTip from './user-info.vue'
import Project from './project.vue'
const demoAccount = ['lerke_yiyatong', 'youkai']
const AVATARURl = 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1552645762440'
export default {
  components: {
    // UiIcon,
    // MobileTip,
    // UserTip,
    Project
  },
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    },
    companyInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showMobileTip: false,
      showUserTip: false,
      avatarUrl: AVATARURl
    }
  },
  computed: {
    webLogoUrlMax() {
      return demoAccount.includes(this.userInfo.userName)
        ? 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1553500469807'
        : this.companyInfo.webLogoUrlMax
    },
    webLogoUrlMin() {
      return demoAccount.includes(this.userInfo.userName)
        ? 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1553501226012'
        : this.companyInfo.webLogoUrlMin ||
            'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1553501226012'
    },
    orgName() {
      return demoAccount.includes(this.userInfo.userName)
        ? '星链智能'
        : this.companyInfo.orgName
    }
  },
  mounted() {
    document.addEventListener('click', this.docClickHandle)
  },
  destory() {
    document.removeEventListener('click', this.docClickHandle)
  },
  methods: {
    docClickHandle() {
      this.showUserTip = false
    },
    msgHandle() {
      // this.$router.push('/msgList')
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout-header
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 60px
  background-color: #fff
  display: flex
  align-items: center
  box-shadow: 0 2px 4px 0 rgba(225, 237, 250, 0.5)
  padding: 0 50px 0 25px
  z-index: 2000
  .info
    flex: 1
    font-size: 18px
    color: #253046
    font-weight: bold
    display: flex
    align-items: center
    .logo
      width: 30px
      height: 30px
      border-radius: 4px

    > span
      margin-left: 8px
      letter-spacing: 2px
  .tools
    display: flex
    align-items: center
    > .icon
      margin: 0 10px
      padding: 0 10px
      cursor: pointer
      color: #717888
      &:hover
        color: #0f1728
    .v-line
      height: 28px
      width: 1px
      background-color: rgba(37, 49, 71, 0.15)
      margin: 0 28px 0 8px
    .user-info
      display: flex
      align-items: center
      position: relative
      cursor: pointer
      .avatar
        width: 28px
        height: 28px
        border-radius: 50%
        overflow: hidden
      .nickname
        margin: 0 10px
        font-size: 16px
        color: #233047
</style>
