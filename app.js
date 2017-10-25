const path = require('path')
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const static = require('koa-static')
const redis = require('redis')
const session = require('koa-session')
const redisStore = require('koa-redis')
const config = require('./config')
const router = require('./routes/index')


// error handler
onerror(app)

app.proxy = true


// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(static(path.join(__dirname, './public')))
app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}))


// session
app.keys = ['keys', config.secret]

let client = redis.createClient(config.redisOption)

app.use(session({
  key: `${config.proName}:sess`,
  maxAge: config.maxage,
  httpOnly: true,
  store: redisStore({
    client: client
  })
}, app))


// logger
app.use(async(ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.ip} ==> ${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes
app.use(router.routes())
app.use(router.allowedMethods())


// catch 404 or 500
app.use(async(ctx) => {

  switch (ctx.status) {
    case 404:
      await ctx.render('404', {
        title: 'Not Found'
      });
      break
    case 500:
      await ctx.render('500', {
        title: 'Error'
      })
      break
  }

})

module.exports = app