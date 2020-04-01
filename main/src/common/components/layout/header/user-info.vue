<template>
  <div class="layout-header-user">
    <div class="base-info">
      <img :src="userInfo.avatarUrl" alt="头像" class="avatar" />
      <span class="ellipsis">{{
        userInfo.chineseName || userInfo.userName
      }}</span>
      <button @click="logoutHandle">退出登录</button>
    </div>

    <div class="func-list">
      <ul>
        <li
          v-for="(item, index) of funcList"
          :key="index"
          :class="{ fixed: item.fixed }"
          @mouseenter="activeFunc = index"
          @click.stop="navHandle(item)"
        >
          <span>
            {{ item.name }}
            <UiIcon v-if="item.icon" :icon="item.icon" />
          </span>
        </li>
      </ul>
      <div class="func-msg">
        <div>
          <img :src="funcMsg.img" :alt="funcMsg.title" />
          <div class="msg-title">{{ funcMsg.title }}</div>
          <div class="tip">{{ funcMsg.tip }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UiIcon from '../../icon/index.vue'

const FUNC_LIST = [
  {
    name: '设置中心',
    title: '设置中心',
    img: 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1542441704989',
    tip: '管理个人信息、企业信息以及权限分配。'
    // router: (vm: Iobject) => {
    //   // const { pathname } = window.location
    //   // if (pathname === '/') {
    //   //   // vm.$router.push('/changeLogo')
    //   // } else {
    //   //   window.location.href = '/#/changeLogo'
    //   // }
    // }
  },
  {
    name: '帮助中心',
    title: '帮助中心',
    img: 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1542441716991',
    tip: '为您解决您的一切困难与疑惑。'
  },
  {
    name: '简体中文',
    title: '语言',
    img: 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1542442890899',
    tip: '这里可选择切换您熟悉的语言。',
    fixed: true,
    icon: 'icon-international'
  }
]
export default {
  components: {
    UiIcon
  },
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    },
    onClose: {
      type: Function,
      defualt: () => {}
    }
  },
  data() {
    return {
      activeFunc: 0
    }
  },
  computed: {
    funcList() {
      return FUNC_LIST
    },
    funcMsg() {
      return this.funcList[this.activeFunc] || {}
    }
  },
  methods: {
    async logoutHandle() {
      const { code } = await window.$service({
        url: 'login/loginOut',
        methods: 'delete'
      })

      if (code !== 100) {
        return false
      }

      sessionStorage.clear()
      localStorage.removeItem('oneDayShowTimeStamp')

      window.location.href =
        window.process.env.ENV === 'dev'
          ? `http://${window.process.env.PATHNAMEP}#/login`
          : `${window.process.env.PATHNAME}#/login`
    },
    navHandle(item: Iobject) {
      const { router } = item
      if (router) {
        this.onClose()

        router(this)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout-header-user
  position: absolute
  z-index: 110
  border-radius: 4px
  background: #ffffff
  border: 1px solid #f3f3f3
  box-shadow: 0 5px 13px 0 rgba(225, 237, 250, 0.5)
  right: -40px
  top: 52px
  width: 300px
  color: #606266
  line-height: 1.4
  text-align: justify
  font-size: 14px
  &::before
    content: ''
    position: absolute
    right: 80px
    top: -10px
    width: 0
    height: 0
    border-left: 10px solid transparent
    border-right: 10px solid transparent
    border-bottom: 10px solid #f3f3f3
  &::after
    content: ''
    position: absolute
    right: 81px
    top: -8px
    width: 0
    height: 0
    border-left: 8px solid transparent
    border-right: 8px solid transparent
    border-bottom: 8px solid #fff
  .base-info
    display: flex
    align-items: center
    height: 60px
    padding: 0 12px
    border-bottom: 1px solid #eef1f3
    > img
      margin-right: 14px
      width: 40px
      height: 40px
      border-radius: 50%
    > span
      font-size: 14px
      color: #253046
      flex: 1
    > button
      padding: 10px 20px
      border-radius: 18px
      color: #8c8c8c
      display: inline-block
      line-height: 1
      white-space: nowrap
      cursor: pointer
      background: #fff
      border: 1px solid #dcdfe6
      text-align: center
      box-sizing: border-box
      margin: 0
      transition: 0.1s
      font-weight: 500
      font-size: 12px
      &:hover
        outline: none
        border-color: #c6e2ff
        background-color: #ecf5ff

      &:active,
      &:focus
        outline: none
  .func-list
    display: flex
    margin-top: 10px
    padding: 0 12px
    height: 300px
    > ul
      width: 130px
      position: relative
      > li
        margin-right: 20px
        font-size: 14px
        display: flex
        align-items: center
        height: 50px
        border-bottom: 1px solid #eef1f3
        cursor: pointer
        &.fixed
          position: absolute
          bottom: 0
          width: 100%
          border: 0
          border-top: 1px solid #eef1f3
          > i
            margin-left: 10px
        &:hover
          > span
            display: inline-block
            background-color: #e1f1f8
            border-radius: 30px


        > span
          padding: 6px 18px
          box-sizing: border-box

    > .func-msg
      flex: 1
      display: flex
      align-items: center
      background-color: #c2e4fd
      border-radius: 10px
      margin-bottom: 20px
      padding: 0 20px
      > div
        text-align: center
        > img
          width: 70px
        > .msg-title
          padding: 8px 0 10px 0
          font-weight: 700
          font-size: 14px
        .tip
          font-size: 12px
          color: #82a2af
</style>
