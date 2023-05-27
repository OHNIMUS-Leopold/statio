import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsView from '../views/DocsView.vue'
import MapView from '../views/MapView.vue'
import TranslateView from '../views/TranslateView.vue'
import ChatPageView from '../views/ChatPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',              name: 'home',           component: HomeView       },
    { path: '/docs',          name: 'docs',           component: DocsView       },
    { path: '/map',           name: 'map',            component: MapView        },
    { path: '/translate',     name: 'translate',      component: TranslateView  },
    { path: '/chatpage',      name: 'chatpage',       component: ChatPageView   },
  ]
})

export default router
