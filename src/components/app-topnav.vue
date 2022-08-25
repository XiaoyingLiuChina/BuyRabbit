<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- <li>
          <a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a>
        </li> -->
        <template v-if="profile.token">
          <li><a href="javascript:'"><i class="iconfont icon-user"></i>{{profile.account}}</a></li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:'">请先登录</a></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>

        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">免费注册</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'AppTopnav',
  setup () {
    const store = useStore()
    const profile = computed(() => {
      return store.state.user.profile
    })
    return { profile }
  }
}
</script>
<style lang="less" scoped>
.app-topnav {
  background-color: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        // line-height: 1;
        // display:inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        // &代表上一层选择器的名字 li
        &:hover {
          color: @appColor;
        }
      }
      // border-left: 2px solid #666;
      // ~的意思是让它在浏览器上计算
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
