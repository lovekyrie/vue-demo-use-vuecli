import Home from './components/home.vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/tab',
    name: 'tabs',
    component: () => import('./components/tabs/index'),
  },
  {
    path: '/timeout',
    name: 'timeout',
    component: () => import('./components/setTimeout/index'),
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import('./components/scroll/index.vue'),
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('./components/transferProps/index.vue'),
  },
  {
    path: '/drag',
    name: 'drag',
    component: () => import('./components/drag/dragIndex.vue'),
  },
]

const router = new VueRouter({ routes })
export default router
