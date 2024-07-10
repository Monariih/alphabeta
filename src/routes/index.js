import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './HomePage.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/quem-somos', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})