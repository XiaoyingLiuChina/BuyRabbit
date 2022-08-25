<template>
  <!-- 顶部通栏 -->
  <app-topnav></app-topnav>
  <app-header></app-header>
  <!-- 吸顶头部 -->
  <app-header-sticky></app-header-sticky>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <app-footer></app-footer>
</template>
<script>
import AppHeader from '../components/app-header.vue'
import AppTopnav from '../components/app-topnav.vue'
import AppFooter from '../components/app-footer.vue'
import AppHeaderSticky from '../components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'app-layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    // 获取下拉分类数据
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
<style lang="less" scoped>
</style>
