import axios from 'axios'
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from '@/stores/user';
import router from '@/router';
const httpInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})
//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {

    //从pinia拿去数据
    const useStore = useUserStore()
    //按照后端破解数据
    const token = useStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const useStore = useUserStore()
    //统一提示错误
    ElMessage({
        type: "warning",
        message: e.response.data.message
    })
    //401请求处理
    //清除本地用户数据 - - -> 跳转到登录页

    if (e.response.status === 401) { useStore.clearUserInfo(), router.push('/login') }
    return Promise.reject(e)
})

export default httpInstance