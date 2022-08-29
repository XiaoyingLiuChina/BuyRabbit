import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 安装重置样式的包
import 'normalize.css'
// 项目公共样式
import '@/assets/styles/common.less'
import ui from './components/library'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ui)
app.mount('#app')
