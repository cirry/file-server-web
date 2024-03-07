import axios from "axios";

// 配置axios请求
localStorage.baseUrlPort = window.location.port;

if (process.env.NODE_ENV === 'production') {
  localStorage.baseUrl = window.location.origin;
} else {
  // 测试环境
  localStorage.baseUrl = 'http://192.168.6.36:3000'; // 高服务器
}

const axiosInstance = axios.create({
  baseURL: localStorage.baseUrl
})

axiosInstance.interceptors.request.use(config => {
  return config
}, (err) => {
  return Promise.reject(err)
})

axiosInstance.interceptors.response.use(response => {
  return Promise.resolve(response)
}, (err) => {

  return Promise.reject(err)
})

export {
  axiosInstance
}
