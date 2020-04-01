<template>
  <div class="login">
    <el-button
      :loading="loginLoad"
      style="width: 100%;"
      type="primary"
      class="loginBtn"
      @click="login('form')"
      >登录</el-button
    >
  </div>
</template>

<script>
import * as cookies from 'tiny-cookie'
import initApp from '../utils/initApp'
const QRCODE_LIST = [
  {
    img: 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1552647684167',
    name: ''
  },
  {
    img: 'https://lerke.oss-cn-shenzhen.aliyuncs.com/AP1552647656339',
    name: ''
  }
]
export default {
  data() {
    return {
      form: {
        loginName: '',
        password: ''
      },
      checked: true,
      loginLoad: false,
      qrcodeList: QRCODE_LIST,
      rules: {
        loginName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            min: 1,
            max: 30,
            message: '长度在 1 到 30 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    homePageUrl() {
      return 'https://www.dahuange.com/'
    }
  },
  activated() {
    let self = this
    document.addEventListener('keyup', self.listenerFn, false)
  },
  destroyed() {
    let self = this
    document.removeEventListener('keyup', self.listenerFn, false)
  },
  methods: {
    listenerFn(event) {
      if (event.keyCode === 13) {
        this.login('form')
      }
    },
    login() {
      this.loginLoad = true
      new Prmise((resolve, reject) => {
        setTimeout(() => {
          const event = new Event('updateAuth')
          event.authPass = 1
          document.dispatchEvent(event)
          resolve()
        }, 2000)
      })
    }
  }
}
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background-color: #f8fafd;
  .website {
    cursor: pointer;
    font-size: 14px;
    color: #4a4a4a;
    position: absolute;
    top: 26px;
    right: 46px;
    a {
      font-size: 14px;
      color: #4a4a4a;
    }
  }

  .content {
    box-shadow: 0 2px 6px 0 rgba(180, 205, 239, 0.5);
    display: inline-block;
    background-color: #fff;
    width: 668px;
    height: 370px;
    border-radius: 8px;
    position: relative;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 0 54px;
    .contentTop {
      height: 270px;
      display: inline-flex;
      align-items: center;
      justify-self: space-between;
      & > img {
        width: 210px;
        height: 166px;
        margin: 0 20px;
      }
      .loginWrap {
        width: 278px;
        height: 100%;
        & > p {
          font-size: 16px;
          color: #0f1728;
          height: 64px;
          line-height: 64px;
        }
        .el-form-item {
          margin-bottom: 16px;
        }
        .changeInput {
          & > input {
            height: 36px !important;
          }
        }
        .loginBtn {
          padding: 11px 24.5px;
          margin-top: 4px;
        }
      }
    }
    .contentBottom {
      border-top: 1px solid #d3dce6;
      width: 100%;
      height: 100px;
      display: inline-flex;
      align-items: center;
      justify-self: flex-start;
      padding: 0 58px;
      .bottomTips {
        text-align: center;
        font-size: 12px;
        color: #0f1728;
      }
      .imgWrap {
        display: inline-flex;
        align-items: flex-start;
        justify-self: flex-start;
        margin-right: 42px;
        & > img {
          display: inline-block;
          width: 70px;
          height: 70px;
        }
        & > span {
          display: inline-block;
          font-size: 12px;
          color: #717888;
          width: 12px;
          margin-bottom: 6px;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
