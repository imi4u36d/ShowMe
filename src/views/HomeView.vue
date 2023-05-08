<template>
    <div class="home">
        <div class="header">
            <div class="header-logo">
                <span>Show Me</span>
            </div>
            <div class="header-menu">
                <router-link to="/">首页</router-link>
                <router-link to="/about">关于</router-link>
                <router-link to="/contact">联系</router-link>
            </div>
            <div class="header-btn">
                <router-link to="/login" v-show="!hasLogin">登陆</router-link>
                <span>{{ userName }}</span>
                <router-link to="/login" v-show="hasLogin">退出</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {userStore} from "@/stores/userStore";

let hasLogin = false
let userName = ''
const store = userStore()
if (store.id != 0) {
    hasLogin = true
    userName = store.userName
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
}

.header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.header-logo {
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.header-logo span {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
}

.header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 100%;
    font-family: "siteFont";
    font-size: 20px;
}

.header-btn {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-family: "siteFont";
    font-size: 20px;
}

</style>