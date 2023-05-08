import request from '@/request/requestConfig'


// 登陆
export const login = (data: any) => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

// 注册
export const register = (data: any) => {
    return request({
        url: '/register',
        method: 'post',
        data
    })
}