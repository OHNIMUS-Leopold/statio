<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import footerComp from './components/footer.vue';

</script>

<template>

  <main>
    <RouterView />
  </main>

  <footerComp />
    
</template>

