<template>
  <div>
    <button @click="login">
      login
    </button>
  </div>
</template>

<script lang="ts" setup>


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

