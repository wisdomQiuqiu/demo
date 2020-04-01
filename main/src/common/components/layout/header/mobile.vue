<template>
  <div class="layout-header-mobile">
    <ul>
      <li v-for="(item, index) of list" :key="index">
        <img :src="item.img" />
        <div>{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
const QRCODE_LIST = [
  {
    img: 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1552647656339',
    name: '运营小程序'
  },
  {
    img: 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1552647684167',
    name: '运营公众号'
  }
]
export default {
  data() {
    return {
      list: QRCODE_LIST
    }
  }
}
</script>

<style lang="stylus">
.layout-header-mobile
  position: absolute
  z-index: 110
  border-radius: 8px
  background: #ffffff
  border: 1px solid #f3f3f3
  box-shadow: 0 5px 13px 0 rgba(225, 237, 250, 0.5)
  padding: 22px 22px 8px
  transform: translateX(-60%)
  left: 50%
  top: 50px
  &::before
    content: ''
    position: absolute
    left: 60%
    transform: translateX(-50%)
    top: -10px
    width: 0
    height: 0
    border-left: 10px solid transparent
    border-right: 10px solid transparent
    border-bottom: 10px solid #f3f3f3
  &::after
    content: ''
    position: absolute
    left: 60%
    transform: translateX(-50%)
    top: -8px
    width: 0
    height: 0
    border-left: 8px solid transparent
    border-right: 8px solid transparent
    border-bottom: 8px solid #fff
  ul
    display: flex
    li
      flex: 1
      text-align: center
      margin-right: 44px
      color: #717888
      font-size: 12px
      line-height: 22px
      img
        width: 88px
        height: 88px
      &:last-child
        margin-right: 0
</style>
