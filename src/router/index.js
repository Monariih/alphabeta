import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import WhoWeAre from '@/pages/WhoWeAre.vue'
import ContactUs from '@/pages/ContactUs.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/quem-somos', component: WhoWeAre },
  { path: '/fale-conosco', component: ContactUs },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router