<template>
  <div class="login">
    <Button type="primary" @click="login">登录</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@arco-design/web-vue';

import useHttp from '../service/http.ts';
import { API } from '../service/API.ts';

const { execute, data } = useHttp(API.login, { immediate: false }).post({
  username: 'yiyi',
  password: '123456',
  sysTemType: 'CARBON_DATA',
}).json();

const login = async () => {
  await execute();
  console.log(data.value);
};

</script>

<style scoped>
.login {
  margin-top: 100px;
  text-align: center;
}
</style>
