<template>
  <div class="login">
    <AButton type="primary" @click="login">登录</AButton>
  </div>
</template>

<script lang="ts" setup>
import useHttp from '../service/http.ts';
import { API } from '../service/API.ts';
import { useRouter } from 'vue-router';

const router = useRouter();
const { execute, data } = useHttp(API.login, { immediate: false }).post({
  username: 'yiyi',
  password: '123456',
  sysTemType: 'CARBON_DATA',
}).json();

const login = async () => {
  await execute();
  console.log(data.value);
  router.push({
    name: 'CarbonData'
  });
};

</script>

<style scoped>
.login {
  margin-top: 100px;
  text-align: center;
}
</style>
