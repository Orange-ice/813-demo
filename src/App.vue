<template>
  <RouterView v-slot="{Component}">
    <Suspense>
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </RouterView>
</template>
<script setup lang="ts">
</script>
