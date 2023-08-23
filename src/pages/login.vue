<template>
  <div class="login">
    <AButton type="primary" @click="login">登录</AButton>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/useUserStore.ts';

const router = useRouter();

const login = async () => {
  await useUserStore().login();
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
