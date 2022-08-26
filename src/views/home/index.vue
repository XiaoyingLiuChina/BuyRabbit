<template>
  <!-- <div class="page-home"> -->
    <!-- 首页入口 -->
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <home-category></home-category>
        <!-- 轮播图 -->
        <home-banner></home-banner>
      </div>
    </div>
    <!-- 新鲜好物 -->
    <home-new></home-new>
    <!-- 人气推荐 -->
    <home-hot></home-hot>
    <!-- 热门品牌 -->
    <home-brand></home-brand>
    <!-- 商品区域 -->
    <home-product></home-product>
    <!-- 最新专题 -->
    <home-special></home-special>
  <!-- </div> -->
</template>
<script>
import HomeBanner from './components/home-banner.vue'
import HomeBrand from './components/home-brand.vue'
import HomeCategory from './components/home-category.vue'
import HomeHot from './components/home-hot.vue'
import HomeNew from './components/home-new.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
export default {
  name: 'app-home-page',
  components: { HomeCategory, HomeBanner, HomeHot, HomeNew, HomeBrand, HomeProduct, HomeSpecial }
}
</script>

<style scoped lang="less"></style>
