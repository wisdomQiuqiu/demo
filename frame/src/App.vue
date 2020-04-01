<template>
  <div id="subapp-container">
    <template v-if="authPass && appContent">
      <div v-html="appContent" />
    </template>
    <login v-show="!authPass" />
  </div>
</template>

<script>
import login from './components/login'
export default {
  name: 'App',
  data() {
    return {
      appContent: '',
      loading: true,
      authPass: true
    }
  },
  created() {
    document.addEventListener(
      'updateAuth',
      event => {
        console.log('===============')
        console.log(event)
        this.authPass = event.authPass === 1
      },
      false
    )
  },
  components: {
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
