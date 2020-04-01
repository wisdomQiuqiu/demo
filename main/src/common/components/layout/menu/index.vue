<template>
  <div class="component_menu">
    <el-menu default-active="2" class="com-el-menu" @select="selecMenu">
      <template v-for="(item, i) in menuList">
        <el-submenu
          :index="item.path"
          :key="i"
          v-if="item.children && item.children.length > 0"
        >
          <template slot="title">
            <i :class="[item.icon, 'iconfont']"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="obj.path"
              :key="j"
              v-for="(obj, j) in item.children"
            >
              {{ obj.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.path" :key="i" v-else>
          <i :class="[item.icon, 'iconfont']"></i>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  props: {
    menuList: {
      type: Array,
      required: true,
      default: [] // 默认属性的默认值
    }
  }
})
export default class Menu extends Vue {
  selecMenu(key: string) {
    if (this.$route.path === key) {
      return false
    }
    this.$router.push({
      path: key
    })
  }
}
</script>
<style lang="stylus">
.component_menu
  width 200px
  height calc(100vh - 60px)
  .com-el-menu
    height 100%
</style>
