<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
</script>

<template>
  <Suspense>
    <RouterView />  
  </Suspense>
</template>

