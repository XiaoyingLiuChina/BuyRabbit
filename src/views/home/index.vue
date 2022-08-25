<template>
  <div class="page-home">
    <!-- 首页入口 -->
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <home-category></home-category>
        <!-- 轮播图 -->
        <home-banner></home-banner>
      </div>
    </div>
  </div>
</template>
<script>
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
export default {
  name: 'app-home-page',
  components: { HomeCategory, HomeBanner }
}
</script>

<style scoped lang="less"></style>
