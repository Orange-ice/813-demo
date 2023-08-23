import { defineStore } from 'pinia';
import useHttp from '../service/http.ts';
import { API } from '../service/API.ts';
import { setToken } from '../utils/auth.ts';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {

  const { execute: executeLogin, data: loginData } = useHttp(API.login, { immediate: false }).post({
    username: 'yiyi',
    password: '123456',
    sysTemType: 'CARBON_DATA',
  }).json<ResponseData<{ accesstoken: string }>>();

  const state = ref({});

  async function login() {
    await executeLogin();
    if (loginData.value) {
      setToken(loginData.value!.data.accesstoken);
    }
  }

  async function getUserInfo() {
  }


  return { state, login, getUserInfo };
});
