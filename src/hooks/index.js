// hooks 封装逻辑，提供响应式数据。
// 数据懒加载
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
export const useLazyData = (apiFn) => {
  const target = ref(null)
  const result = ref([])
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        // 调用api获取数据
        apiFn().then((data) => {
        //   console.log(data.result)
          result.value = data.result
        })
      }
    },
    {
      // threshold 容器和可视区交叉的占比（进入的面积/容器完整面试） 取值，0-1 之间，
      // 默认比0大，所以需要滚动较多才能触发进入可视区域事件。
      threshold: 0
    }
  )
  return { target, result }
}
