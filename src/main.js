import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 安装重置样式的包
import 'normalize.css'
// 项目公共样式
import '@/assets/styles/common.less'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
