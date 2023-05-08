<!-- 这是一个现代化的注册页面 跟登陆界面保持相同的风格 组件大小，样式保持相同-->
<template>
    <div class="register">
        <div class="register-box">
            <div class="register-title">注册</div>
            <div class="register-input">
                <input type="text" placeholder="请输入用户名" v-model="username">
                <input type="password" placeholder="请输入密码" v-model="password">
                <input type="password" placeholder="请再次输入密码" v-model="password">
            </div>
            <div class="register-error">{{ error }}</div>
            <div class="register-btn">
                <button @click="doRegister">注册</button>
                <router-link to="/login">去登陆</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {userStore} from '@/stores/userStore'
import {useRouter} from 'vue-router'
import {register} from '@/request/api'

const store = userStore()
const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')
const doRegister = async () => {
    register({username: username.value, password: password.value}).then(res => {
        console.log(res)
        if (res.data.code === 200) {
            try {
                store.setuserInfo({id: 1, username: username.value})
                router.push('/')
            } catch (err) {
                console.log(err);
            }
        }else {
            error.value = res.data.msg
        }
    })

}
</script>

<style scoped>
.register {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, white, pink, orange, pink, white);
    display: flex;
    justify-content: center;
    align-items: center;
}

.register-box {
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

.register-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

.register-input {
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.register-input input {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    outline: none;
}

.register-error {
    color: red;
    font-size: 12px;
    margin-top: 10px;
}

.register-btn {
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.register-btn button {
    width: 100px;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
}

.register-btn button:hover {
    background-color: #ccc;
}

.register-btn button:active {
    background-color: #ccc;
    color: #000;
}

.register-btn a {
    color: #000;
    text-decoration: none;
    font-size: 12px;
}

.register-btn a:hover {
    text-decoration: underline;
}

.register-btn a:active {
    color: #ccc;
}

</style>