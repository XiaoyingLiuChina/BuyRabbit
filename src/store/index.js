import { createStore } from 'vuex'
// 使用插件进行持久化:让在vuex中管理的状态数据同时存储在本地。可免去自己存储的环节。
// 在开发的过程中，像用户信息（名字，头像，token）需要vuex中存储且需要本地存储。
// 再例如，购物车如果需要未登录状态下也支持，如果管理在vuex中页需要存储在本地。
// 我们需要category模块存储分类信息，但是分类信息不需要持久化。
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
export default createStore({
  // 数据
  state: {
  },
  // 改数据函数
  mutations: {
  },
  // 请求数据函数
  actions: {
  },
  // 分模块
  modules: {
    user,
    cart,
    category
  },
  // vuex的计算属性
  getters: {},
  plugins: [
    createPersistedstate({
      key: 'my-app',
      paths: ['user', 'cart']
    })
  ]
})

// 注意：

// ===> 默认是存储在localStorage中

// ===> key是存储数据的键名

// ===> paths是存储state中的那些数据，如果是模块下具体的数据需要加上模块名称，如user.token

// ===> 修改state后触发才可以看到本地存储数据的的变化。
