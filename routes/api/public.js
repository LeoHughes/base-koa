/**
 * 公用api接口
 */

const router = require('koa-router')()
const controller = require('../../controller/index')

//middleware
const validate = require('../middleware/validate')


router
//验证码图片地址
  .get('/codeImg', controller.util.createImgCode())
  //测试接口数据校验中间件
  .post('/login', validate(controller.validate.loginSchema()), controller.user.login())

module.exports = router