<!-- 这是一个现代化的登陆界面 本页面宽高为一整屏 包含登陆功能和去注册功能 背景采用全屏背景渐变色 使用圆角风格按钮-->
<template>
    <div class="login">
        <div class="login-box">
            <div class="login-title">登陆</div>
            <div class="login-input">
                <input type="text" placeholder="请输入用户名" v-model="username">
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="login-error">{{ error }}</div>
            <div class="login-btn">
                <el-button @click="doLogin" :loading="loading">登陆</el-button>
                <router-link to="/register">去注册</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {userStore} from '@/stores/userStore'
import {useRouter} from 'vue-router'
import {login} from '@/request/api'
import {ElMessage} from 'element-plus'
import {sleep} from '@/utils/timeUtils'

const store = userStore()
const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)


const doLogin = async () => {
    loading.value = true
    await sleep(1000)
    login({username: username.value, password: password.value}).then(res => {
        if (res["retCode"] == 0) {
            ElMessage({
                message: '登陆成功',
                type: 'success',
            })
            store.setuserInfo({id: res.data.id, userName: res.data.userName})
            router.push('/')
        } else {
            ElMessage({
                message: '用户名或密码错误',
                type: 'error',
            })
        }
    })
    loading.value = false
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, white, pink, orange, pink, white);
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-box {
    width: 400px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

.login-input {
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.login-input input {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    outline: none;
}

.login-input input:focus {
    border: 1px solid #000;
}

.login-error {
    color: red;
    font-size: 12px;
    margin-top: 10px;
}

.login-btn {
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.login-btn button {
    width: 100px;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
}

.login-btn button:hover {
    background-color: #ccc;
}

.login-btn button:active {
    background-color: #ccc;
    color: #000;
}

.login-btn a {
    color: #000;
    text-decoration: none;
    font-size: 12px;
}

.login-btn a:hover {
    text-decoration: underline;
}

.login-btn a:active {
    color: #ccc;
}
</style>
