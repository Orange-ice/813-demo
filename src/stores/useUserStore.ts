import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({}),
  actions: {
    // 用户登录
    async login() {
      console.log('login');
    },
    // 用户登出
    async logout() {
      console.log('logout');
    },
    // 获取用户信息
    async getUserInfo() {
      console.log('getUserInfo');
    }
  }
});
