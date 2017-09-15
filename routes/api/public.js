/**
 * 公用api接口
 */

const router = require('koa-router')()
const controller = require('../../controller/index')

//middleware
const validate = require('../middleware/validate')

//validate
const validateSchema = require('../../validateSchema/validate')


router
//测试接口数据校验中间件
  .post('/login', validate(validateSchema.userSchema.loginSchema()), controller.user.login())

module.exports = router