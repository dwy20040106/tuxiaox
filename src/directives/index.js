//定义赖加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        //赖加载指令逻辑

        // 定义全局指令
        app.directive('img-lazy', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(
                    // el是指令绑定的那个元素 img
                    //binding  binding.value 指令等于号后面绑定的表达式的值
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            //进入视口区域
                            el.src = binding.value
                            // observer.unobserve(el)
                            stop()
                        }
                    },
                )
            }
        })
    }
}