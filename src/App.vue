<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeIcon from '@/components/icons/homeIcon.vue';
import DocsIcon from '@/components/icons/docsIcon.vue';
import MapIcon from '@/components/icons/mapIcon.vue';
import TranslateIconVue from '@/components/icons/translateIcon.vue';
import MessagesIconVue from '@/components/icons/messagesIcon.vue';
</script>

<template>

    <RouterView />

    <footer>
      <div class="fixed bottom-0 w-full z-10 bg-darkblue px-7 py-6 rounded-t-3xl">
        <div class="flex justify-between">
          <RouterLink to="/">
            <HomeIcon class="opacity-60" />
          </RouterLink>
          <RouterLink to="/docs">
            <DocsIcon class="opacity-60" />
          </RouterLink>
          <RouterLink to="/map">
            <MapIcon class="opacity-60" />
          </RouterLink>
          <RouterLink to="/translate">
            <TranslateIconVue class="opacity-60" />
          </RouterLink>
          <RouterLink to="/chatpage">
            <MessagesIconVue class="opacity-60" />
          </RouterLink>
        </div>
      </div>
    </footer>
    
</template>
