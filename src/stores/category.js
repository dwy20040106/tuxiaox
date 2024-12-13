import { ref } from 'vue'
import { getCategoryAPI } from "@/apis/layout";
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
    //state获取列表数据
    const categoryList = ref([]);
    //action获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI();
        categoryList.value = res.result;
    };
    return {
        categoryList,
        getCategory
    }
})
