import axios from "./axios.js"

export function gainGoodsImages(id) {
    return axios.get(`/getthumbimages/${id}`)
}