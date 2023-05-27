<script setup lang="ts">
import HomeIcon from '@/components/icons/homeIcon.vue';
import DocsIcon from '@/components/icons/docsIcon.vue';
import MapIcon from '@/components/icons/mapIcon.vue';
import TranslateIconVue from '@/components/icons/translateIcon.vue';
import MessagesIconVue from '@/components/icons/messagesIcon.vue';
</script>

<template>
  <div>
    <RouterView />
    <!-- <RouterLink></RouterLink> -->

    <div class="bg-darkblue px-7 py-6 rounded-t-3xl">   
      <div class="flex justify-between">
        <RouterLink to="">
          <HomeIcon />
        </RouterLink>
        <RouterLink to="">
          <DocsIcon />
        </RouterLink>
        <RouterLink to="">
          <MapIcon />
        </RouterLink>
        <RouterLink to="">
          <TranslateIconVue />
        </RouterLink>
        <RouterLink to="">
          <MessagesIconVue />
        </RouterLink>
      </div>
    </div>
    
  </div>
</template>
