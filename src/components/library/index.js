// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import XtxMore from './xtx-more.vue'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-bread-item.vue'
// import defaultImg from '@/assets/images/200.png'
// 指令
const defineDirective = (app) => {
  // 图片懒加载指令
  app.directive('lazyload', {
    mounted(el, binding) {
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 取消观察
            observer.unobserve(el)
            // el.onerror = () => {
            //   el.src = defaultImg
            // }
            el.src = binding.value
          }
        },
        {
          threshold: 0.01
        }
      )
      observer.observe(el)
    }
  })
}
// 自动批量注册组件
// require.context() 是webpack提供的一个自动导入的API
// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
const importFn = require.context('./', false, /\.vue$/)
export default {
  install(app) {
    // 批量注册全局组件 keys() 获取读取到的所有文件列表
    importFn.keys().forEach((key) => {
      // 导入组件
      const component = importFn(key).default
      // 注册组件
      app.component(component.name, component)
    })

    // 定义指令
    defineDirective(app)
  }
}

// // 全局注册
// export default {
//   install(app) {
//     app.component(XtxSkeleton.name, XtxSkeleton)
//     app.component(XtxCarousel.name, XtxCarousel)
//     app.component(XtxMore.name, XtxMore)
//     app.component(XtxBread.name, XtxBread)
//     app.component(XtxBreadItem.name, XtxBreadItem)
//     defineDirective(app)
//   }
// }

// 创建观察对象实例
// const observer = new IntersectionObserver(callback[, options])
// callback 被观察dom进入可视区离开可视区都会触发
// - 两个回调参数 entries , observer
// - entries 被观察的元素信息对象的数组 [{元素信息},{}]，信息中isIntersecting判断进入或离开
// - observer 就是观察实例
// options 配置参数
// - 三个配置属性 root rootMargin threshold
// - root 基于的滚动容器，默认是document
// - rootMargin 容器有没有外边距
// - threshold 交叉的比例

// 实例提供两个方法
// observe(dom) 观察哪个dom
// unobserve(dom) 停止观察那个dom
