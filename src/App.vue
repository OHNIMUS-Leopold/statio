<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HomeIcon from '@/components/icons/homeIcon.vue';
import DocsIcon from '@/components/icons/docsIcon.vue';
import MapIcon from '@/components/icons/mapIcon.vue';
import TranslateIconVue from '@/components/icons/translateIcon.vue';
import MessagesIconVue from '@/components/icons/messagesIcon.vue';

const route = useRoute(); // Récupère le chemin de la page active
</script>

<template>

    <RouterView />

    <footer>
      <div class="fixed bottom-0 w-full z-10 bg-darkblue px-7 py-6 rounded-t-3xl">
        <nav class="flex justify-between">
          <li class="list-none">
            <RouterLink to="/" :class="route.path !== '/' ? 'opacity-60' : 'opacity-100'">
              <HomeIcon />
            </RouterLink>
          </li>
          <li class="list-none">
            <RouterLink to="/docs" :class="route.path !== '/docs' ? 'opacity-60' : 'opacity-100'">
              <DocsIcon />
            </RouterLink>
          </li>
          <li class="list-none">
            <RouterLink to="/map" :class="route.path !== '/map' ? 'opacity-60' : 'opacity-100'">
              <MapIcon />
            </RouterLink>
          </li>
          <li class="list-none">
            <RouterLink to="/translate" :class="route.path !== '/translate' ? 'opacity-60' : 'opacity-100'">
              <TranslateIconVue />
            </RouterLink>
          </li>
          <li class="list-none">
            <RouterLink to="/chatpage" :class="route.path !== '/chatpage' ? 'opacity-60' : 'opacity-100'">
              <MessagesIconVue />
            </RouterLink>
          </li>
        </nav>
      </div>
    </footer>
    
</template>
