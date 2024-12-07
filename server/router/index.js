const Router = require('koa-router')
const router = new Router()

let accessToken = 'init_s_token'
let role = ''
let menus = []

// 5s刷新token
setInterval(() => {
  accessToken = 's_tk' + Math.random()
}, 5000)

/** 登录接口获取 */
router.get('/login', async ctx => {
  const { name } = ctx.query
  switch (name) {
    case 'admin':
      role = 'admin'
      menus = ['home', 'about', 'admin']
      break

    default:
      role = 'visitor'
      menus = ['home', 'about']
      break
  }
  ctx.body = {
    accessToken,
    role,
    menus,
  }
})

/** 获取应用数据 */
router.get('/getData', async ctx => {
  let { authorization } = ctx.headers
  if (authorization !== accessToken) {
    ctx.body = {
      returncode: 104,
      info: 'token过期，重新登录',
    }
  } else {
    ctx.body = {
      code: 200,
      returncode: 0,
      data: { id: Math.random() },
    }
  }
})

module.exports = router