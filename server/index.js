const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const index = require('./router/index')

app.use(cors)
app.use(index.routes(), index.allowedMethods())

app.listen(4000, () => {
  console.log('server is listening on port 4000')
})
