import axios from "./axios.js"

export function gainGoodslist(page = 1, pagesize = 10) {
    return axios.get(`/getgoods?pageindex=${page}&pagesize=${pagesize}`)
}