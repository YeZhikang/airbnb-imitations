import axios from 'axios'
import router from "../router";

const instance = axios.create({
    timeout: 1000,
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

// if (process.env.NODE_ENV == 'development') {
//     instance.defaults.baseURL = 'http://127.0.0.1:5000/api/';
// } else if (process.env.NODE_ENV == 'debug') {
//     instance.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//     instance.defaults.baseURL = 'http://www.yezhikang.site/api/';
// }

instance.defaults.baseURL = 'http://127.0.0.1:3020/api/'
instance.defaults.timeout = 10000;
// 设置请求拦截器
instance.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token')
    /*
    或者：
    const token = store.state.token
    token && ( config.headers.Authorization = token );
    `&&` 表示如果没有 token ，则后面的设置头部的操作就无用。
    */
    return config
}, (error) => {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    if(response.status === 200){
        if(response.data.needAuthorization){
            router.push({name: 'login'})
        }
        return Promise.resolve(response.data)
    }else{
        return Promise.reject(response)
    }
}, (error) => {
    return Promise.reject(error);
});

export default instance
