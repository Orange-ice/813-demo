import { defineStore } from 'pinia';
import useHttp from '../service/http.ts';
import { API } from '../service/API.ts';
import { setToken } from '../utils/auth.ts';
import { ref } from 'vue';

// import type { UserDetail } from './user';

interface UserState extends UserDetail {

}


export const useUserStore = defineStore('user', () => {

  const { execute: executeLogin, data: loginData } = useHttp(API.login, { immediate: false }).post({
    username: 'yiyi',
    password: '123456',
    sysTemType: 'CARBON_DATA',
  }).json<ResponseData<{ accesstoken: string }>>();
  const {
    execute: executeUserDetail,
    data: userDetailData
  } = useHttp(`${API.userDetail}?projectType=ghg`, { immediate: false }).get().json<ResponseData<UserDetail>>();

  const user = ref<UserState>({
    id: '',
    company: { id: '', name: '' },
    industry: { id: '', name: '' },
    about: '',
    username: '',
    name: '',
  });

  async function login() {
    await executeLogin();
    if (loginData.value) {
      setToken(loginData.value!.data.accesstoken);
    }
  }

  async function getUserInfo() {
    await executeUserDetail();
    if (userDetailData.value?.data) {
      user.value = { ...user.value, ...userDetailData.value.data };
    }
  }


  return { user, login, getUserInfo };
});
