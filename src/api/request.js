import axios from 'axios';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css'


// 1。创建axios
const request = axios.create({
    baseURL: '/api',
    timeout: '5000',
})

// 请求拦截器
request.interceptors.request.use(config => {
    nprogress.start()
    return config;
})

// 响应拦截器
request.interceptors.response.use(res => {
    nprogress.done()
    return res

}, (err) => {
    return Promise.reject(new Error('faile'))
})

export default request;

