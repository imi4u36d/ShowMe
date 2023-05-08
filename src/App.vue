<template>
    <div id="app">
        <RouterView/>
    </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>

<!-- 设置宽高为一整屏 -->
<style scoped>
body, html, #app {
    line-height: 1.5;
    width: 100%;
    height: 100vh;
}
</style>
