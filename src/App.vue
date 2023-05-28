<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HomeIcon from '@/components/icons/homeIcon.vue';
import DocsIcon from '@/components/icons/docsIcon.vue';
import MapIcon from '@/components/icons/mapIcon.vue';
import TranslateIcon from '@/components/icons/translateIcon.vue';
import MessagesIcon from '@/components/icons/messagesIcon.vue';
import userFoto from '@/components/userFoto.vue';

const route = useRoute(); // Récupère le chemin de la page active
</script>

<template>

  <header>
    <div class="flex px-5 pt-12 justify-between items-center">
      <p class="logo">
        Statio
      </p>
      <userFoto imgPath="./src/assets/img/template/user.png" />
    </div>
  </header>
  
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
            <TranslateIcon />
          </RouterLink>
        </li>
        <li class="list-none">
          <RouterLink to="/chatpage" :class="route.path !== '/chatpage' ? 'opacity-60' : 'opacity-100'">
            <MessagesIcon />
          </RouterLink>
        </li>
      </nav>
    </div>
  </footer>
    
</template>

