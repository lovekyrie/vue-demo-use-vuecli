import routes from '@/router/routes'
import { has } from '@/utils'

export default {
  inserted: (el, binding, vnode) => {
    // 获取页面按钮权限
    const btnPermissionsArr = vnode.context.$route.meta.btnPermissions
    console.log('sss', btnPermissionsArr)
    if (!has(btnPermissionsArr)) {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  },
}
