// 导入 axios
import instance from "./axios.js";


// 导出 获取轮播图的方法
export function gainSwipe() {
    return instance.get("/api/getlunbo")
}

// 商品列表数据
export function gainGoods(page = 1, limit = 10) {
    return instance.get(`/api/recommend?page=${page}&limit=${limit}`)
}