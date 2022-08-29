import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 封装一个请求工具

// 导出基准地址
// http://pcapi-xiaotuxian-front-devtest.itheima.net/
export const baseURL = 'https://apipc-xiaotuxian-front.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})
instance.interceptors.request.use(
  (config) => {
    const { profile } = store.state.user
    if (profile.token) {
      config.headers.Authorization = `Bearer ${profile.token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response && err.response.status === 401) {
      // 清空无效用户信息
      store.commit('user/setUser', {})
      // 当前路由地址
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      // 跳转至登录页
      router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
  }
)

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
