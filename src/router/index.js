import router from './router'
import { ACCESS_TOKEN, ROLE, MEUNS } from '@/config/constant'

router.beforeEach((to, form, next) => {
  if (to.path === '/login') {
    // 在登录页清除存储信息
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(ROLE)
    localStorage.removeItem(MEUNS)
  }

  let token = localStorage.getItem(ACCESS_TOKEN)
  // 没有token 则重定向到登录页
  if (!token && to.path !== 'login') {
    next({ path: '/login' })
  } else {
    next()
  }
})
