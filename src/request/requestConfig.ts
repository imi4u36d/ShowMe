// 这里是封装axios的地方
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 在发送请求之前做些什么
        return config
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        const { data } = response
        if (data.code !== 200) {
            //
        }
        return data
    }
)

export default service