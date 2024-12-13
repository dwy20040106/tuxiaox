//引入初始化样式
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { lazyPlugin } from "@/directives/index.js"
import App from './App.vue'
import router from './router'

//引入全局组件
import { componentPlugin } from '@/components/index'
const app = createApp(App)
const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(componentPlugin)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
