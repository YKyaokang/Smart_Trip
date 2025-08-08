import axios from 'axios'

// 根据环境设置不同的baseURL
const isDevelopment = import.meta.env.DEV;
const baseURL = isDevelopment ? 'http://localhost:5174/api' : '/api';  // 修改为实际运行的项目地址的端口

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use((config) => {
    // 添加token
    let token = localStorage.getItem('token') || '';
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
})
// 响应拦截 
axios.interceptors.response.use((data) => {
    return data.data
})

export default axios