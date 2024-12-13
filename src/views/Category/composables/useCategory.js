//封装分类数据代码
import { onBeforeRouteUpdate } from "vue-router";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router"
import { getCategoryAPI } from "@/apis/category";
export function useCategory() {
    const route = useRoute();
    const categoryData = ref({});
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
    };
    onMounted(() => getCategory());
    //路由参数改变时候调用
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id);
    });
    return {
        categoryData
    }
}