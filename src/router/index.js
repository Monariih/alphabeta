import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import WhoWeAre from '@/pages/WhoWeAre.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/quem-somos', component: WhoWeAre },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router