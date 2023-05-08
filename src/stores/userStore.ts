// 这里是存储用户信息的地方 用于全局共享
import { defineStore } from "pinia";

export const userStore = defineStore(('login'), {
  // other options...
  state: () => ({
    id: 0,
    userName: '未登陆'
  }),
  getters: {
    // getters...
  },
  actions: {
    setuserInfo(userInfo: any) {
      // 设置用户信息
      this.id = userInfo.id;
      this.userName = userInfo.userName;
    }
  }
})