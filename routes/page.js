const router = require('koa-router')()
const loginCheck = require('./middleware/loginCheck')
const controller = require('../controller/index')


router
//首页
  .get('/', controller.page.index())
  //登录页
  .get('/login', controller.page.login())
  //用户页
  .get('/user', loginCheck(), controller.page.user())

module.exports = router