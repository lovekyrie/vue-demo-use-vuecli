const Koa = require('koa2')
const app = new Koa()
const cors = require('koa2-cors')
const router = require('./router/index')

const cosWhiteList = /localhost/
// 注意使用app.use时是分先后顺序的，先配置跨域，再配置路由，否则跨域无效
app.use(
  cors({
    origin: ctx => {
      const requestOrigin = ctx.get('Origin')
      console.log(requestOrigin, 'requestOrigin')
      console.log(cosWhiteList, 'cosWhiteList')
      if (cosWhiteList.test(requestOrigin)) {
        return requestOrigin
      }
      return false
    },
  })
) // 先设置跨域

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000, () => {
  console.log('server is listening on port 4000')
})
