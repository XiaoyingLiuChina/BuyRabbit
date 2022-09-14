<template>
  <div class="page-login">
    <login-header>欢迎登录</login-header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;" :class="{ active: 'account' === activeName }" @click="activeName = 'account'">账户登录</a>
          <a href="javascript:;" :class="{ active: 'qrcode' === activeName }" @click="activeName = 'qrcode'">扫码登录</a>
        </nav>
        <!-- 表单 -->
         <LoginForm v-if="activeName==='account'"></LoginForm>
        <!-- 二维码 -->
        <div v-if="activeName === 'qrcode'" class="qrcode-box">
          <img src="@/assets/images/qrcode.jpg" alt="" />
          <p>打开 <a href="javascript:;">小兔鲜App</a> 扫码登录</p>
        </div>
      </div>
    </section>
    <login-footer></login-footer>
  </div>
</template>
<script>
import { ref } from 'vue'
import LoginFooter from './components/login-footer.vue'
import loginHeader from './components/login-header.vue'
import LoginForm from './components/login-form.vue'
export default {
  name: 'PageLogin',
  components: { loginHeader, LoginFooter, LoginForm },
  setup() {
    const activeName = ref('account')
    // const clickWay = (value) => {
    //   activeName.value = value
    //   console.log(activeName.value)
    // }
    return { activeName }
  }
}
</script>
<style scoped lang="less">
.login-section {
  height: 488px;
  background: url(../../assets/images/login-bg.png) no-repeat center/cover;
  position: relative;
  .wrapper {
    width: 380px;
    min-height: 400px;
    background: #fff;
    position: absolute;
    top: 54px;
    left: 50%;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    nav {
      height: 55px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      align-items: center;
      //   justify-content: center;
      a {
        flex: 1;
        line-height: 1;
        text-align: center;
        font-size: 18px;
        &:first-child {
          border-right: 1px solid #f5f5f5;
        }
        &.active {
          color: @appColor;
          font-weight: bold;
        }
      }
    }
    // 二维码容器
    .qrcode-box {
      text-align: center;
      padding-top: 40px;
      p {
        margin-top: 20px;
        a {
          color: @appColor;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
