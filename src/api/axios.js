import axios from 'axios'

import {
    Toast
} from 'vant';

const instance = axios.create({
    baseURL: 'http://api.w0824.com/api/',
    timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    });
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    Toast.clear();
    // 对响应数据做点什么
    return response.data // 直接返回响应的data数据
}, function (error) {
    layer.closeAll(); //疯狂模式，关闭所有层
    Toast.clear();
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 导出axios实例
export default instance