<template>
    <div class="not-found">
        <div class="not-found-box">
            <div class="not-found-title">404</div>
            <div class="not-found-text">页面不存在</div>
            <div class="not-found-btn">
                <router-link to="/">返回首页</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, white, pink, orange, pink, white);
    display: flex;
    justify-content: center;
    align-items: center;
}

.not-found-box {
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

.not-found-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

.not-found-text {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}

.not-found-btn {
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #ccc;
}

.not-found-btn a {
    color: #000;
    font-size: 16px;
    font-weight: bold;
}
</style>