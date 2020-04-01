<template>
  <span class="component-icon">
    <i :class="customClass" :style="customStyle" />
    <slot />
  </span>
</template>

<script lang="ts">
export default {
  name: 'UiIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 14
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    customClass() {
      return ['iconfont', this.icon]
    },
    customStyle() {
      return {
        fontSize: Number(this.size) ? `${this.size}px` : this.size,
        color: this.color
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.component-icon
  position: relative
</style>
