const Login = () => import(/* webpackChunkName: 'login'*/ '../views/Login.vue')
const Home = () => import(/* webpackChunkName: 'home'*/ '../views/Home.vue')
const About = () => import(/* webpackChunkName: 'about'*/ '../views/About.vue')
const Layout = () => import(/* webpackChunkName: 'layout'*/ '../Layout.vue')

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        // 存放按钮权限信息
        meta: {
          btnPermissions: ['admin', 'visitor'],
        },
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
          btnPermissions: ['admin'],
        },
      },
      {
        path: '/tab',
        name: 'tabs',
        component: () => import('../views/tabs/index'),
      },
      {
        path: '/timeout',
        name: 'timeout',
        component: () => import('../views/setTimeout/index'),
      },
      {
        path: '/scroll',
        name: 'scroll',
        component: () => import('../views/scroll/index.vue'),
      },
      {
        path: '/props',
        name: 'props',
        component: () => import('../views/transferProps/index.vue'),
      },
      {
        path: '/drag',
        name: 'drag',
        component: () => import('../views/drag/index.vue'),
      },
      {
        path: '/slot',
        name: 'slot',
        component: () => import('../views/slot/index.vue'),
        meta: {
          btnPermissions: ['admin', 'visitor'],
        },
      },
      {
        path: '/scopeSlot',
        name: 'scopeSlot',
        component: () => import('../views/scopeSlot/de-construction-slot-prop.vue'),
      },
    ],
  },
]

export default routes
