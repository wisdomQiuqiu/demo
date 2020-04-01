<template>
  <div class="com-project">
    <div v-for="(item, i) in projectList" :key="i" @click="push(item.name)">
      {{ item.chineseName }}
    </div>
  </div>
</template>
<script lang="ts">
// :class="{ checkClass: nowProject === item.name }"
import Vue from 'vue'
export default class Project extends Vue {
  get projectList() {
    return [...window.eventBus.registerList]
  }
  push(name: string) {
    const subapp = `/${name}/home`
    // window.location.href = subapp
    window.history.pushState(null, subapp, subapp)
  }
}
</script>
<style lang="stylus" scoped>
.com-project
  display inline-flex
  flex-wrap start
  justify-content center
  height 60px
  .checkClass
    color #5087fe
  & > div
    margin-left 40px
    color #233047
    font-size 14px
    line-height 60px
    cursor pointer
    &:hover
      color #5087fe
</style>
