<template>
  <HomePanel title="最新专题">
    <template v-slot:right>
      <XtxMore />
    </template>
    <div class="special-list" ref="homeSpecial">
      <div class="special-item" v-for="item in list" :key="item.id">
        <RouterLink to="/">
          <img :src="item.cover" alt />
          <div class="meta">
            <p class="title">
              <span class="top ellipsis">{{ item.title }}</span>
              <span class="sub ellipsis">{{ item.summary }}</span>
            </p>
            <span class="price">&yen;{{ item.lowestPrice }}起</span>
          </div>
        </RouterLink>
        <div class="foot">
          <span class="like"><i class="iconfont icon-hart1"></i>{{ item.collectNum }}</span>
          <span class="view"><i class="iconfont icon-see"></i>{{ item.viewNum }}</span>
          <span class="reply"><i class="iconfont icon-message"></i>{{ item.replyNum }}</span>
        </div>
      </div>
    </div>
  </HomePanel>
</template>

<script>
import HomePanel from './home-panel'
import { findSpecial } from '@/api/home'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeSpecial',
  components: { HomePanel },
  setup() {
    const { target, result } = useLazyData(findSpecial)
    console.log(result)
    return { homeSpecial: target, list: result }
  }
}
</script>

<style scoped lang="less">
.home-panel {
  background: #f5f5f5;
}
.special-list {
  height: 380px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  .special-item {
    width: 404px;
    background: #fff;
    .hoverShadow();
    a {
      display: block;
      width: 100%;
      height: 288px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .meta {
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 50%);
        width: 100%;
        height: 288px;
        .title {
          position: absolute;
          bottom: 0;
          left: 0;
          padding-left: 16px;
          width: 70%;
          height: 70px;
          .top {
            color: #fff;
            font-size: 22px;
            display: block;
          }
          .sub {
            display: block;
            font-size: 19px;
            color: #999;
          }
        }
      }
    }
    .foot {
      height: 72px;
      line-height: 72px;
      padding: 0 20px;
      font-size: 16px;
      i {
        display: inline-block;
        width: 15px;
        height: 14px;
        margin-right: 5px;
        color: #999;
      }
      .like,
      .view {
        float: left;
        margin-right: 25px;
        vertical-align: middle;
      }
      .reply {
        float: right;
        vertical-align: middle;
      }
    }
  }
}
</style>
