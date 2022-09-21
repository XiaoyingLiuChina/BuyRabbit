<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <app-header-nav></app-header-nav>
      <!-- <ul class="navs">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li><a href="#">美食</a></li>
        <li><a href="#">餐厨</a></li>
        <li><a href="#">艺术</a></li>
        <li><a href="#">电器</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">洗护</a></li>
        <li><a href="#">孕婴</a></li>
        <li><a href="#">服装</a></li>
        <li><a href="#">杂货</a></li>
      </ul> -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input
          type="text"
          placeholder="搜一搜"
        >
      </div>
     <app-header-cart></app-header-cart>
    </div>
  </header>
</template>
<script>
import AppHeaderCart from './app-header-cart.vue'
import appHeaderNav from './app-header-nav.vue'
export default {
  components: { appHeaderNav, AppHeaderCart },
  name: 'AppHeader'
}
</script>

<style lang="less" scoped>
.app-header {
  background-color: #fff;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    a {
      display: block;
      width: 100%;
      height: 132px;
      text-indent: -9999px;
      background: url(../assets/images/logo.png) no-repeat center 18px / contain;
    }
  }
//   .navs {
//     width: 820px;
//     padding-left: 40px;
//     display: flex;
//     justify-content: space-around;
//     li {
//       margin-right: 40px;
//       width: 38px;
//       text-align: center;
//       a {
//         display: inline-block;
//         height: 32px;
//         font-size: 16px;
//         line-height: 32px;
//       }
//       &:hover {
//         a {
//           color: @appColor;
//           border-bottom: 1px solid @appColor;
//         }
//       }
//     }
//   }
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  .cart {
    width: 50px;
    a {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
      .icon-cart {
        font-size: 22px;
      }
      em {
        font-style: normal;
        position: absolute;
        top: 0;
        right: 0;
        padding: 1px 6px;
        line-height: 1;
        background: @helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
