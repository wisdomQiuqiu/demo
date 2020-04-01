<template>
  <div class="home">
    <p>~~~main~~~</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm)
    })
  }
}
</script>
<style lang="stylus" scoped>
.home
  p
    display inline-block
    width 100px
    textOver()
    fsColor(12px,red)
    color $color
</style>
