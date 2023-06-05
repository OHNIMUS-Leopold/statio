<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import homeIcon from '@/components/icons/homeIcon.vue';
import docsIcon from '@/components/icons/docsIcon.vue';
import mapIcon from '@/components/icons/mapIcon.vue';
import translateIcon from '@/components/icons/translateIcon.vue';
import messagesIcon from '@/components/icons/messagesIcon.vue';

const route = useRoute(); // Récupère le chemin de la page active
</script>

<template>
    <footer>
    <div class="fixed bottom-0 w-full z-10 bg-darkblue px-7 py-6 rounded-t-3xl">
      <nav class="flex justify-between">
        <li class="list-none">
          <RouterLink to="/home" :class="route.path !== '/' ? 'opacity-60' : 'opacity-100'">
            <homeIcon />
          </RouterLink>
        </li>
        <li class="list-none">
          <RouterLink to="/docs" :class="route.path !== '/docs' ? 'opacity-60' : 'opacity-100'">
            <docsIcon />
          </RouterLink>
        </li>
        <li class="list-none">
          <RouterLink to="/map" :class="route.path !== '/map' ? 'opacity-60' : 'opacity-100'">
            <mapIcon />
          </RouterLink>
        </li>
        <li class="list-none">
          <RouterLink to="/translate" :class="route.path !== '/translate' ? 'opacity-60' : 'opacity-100'">
            <translateIcon />
          </RouterLink>
        </li>
        <li class="list-none">
          <RouterLink to="/chatpage" :class="route.path !== '/chatpage' ? 'opacity-60' : 'opacity-100'">
            <messagesIcon />
          </RouterLink>
        </li>
      </nav>
    </div>
  </footer>
</template>