/**
 * 公用api接口
 */

const router = require('koa-router')()
const controller = require('../../controller/index')

router
//验证码图片地址
  .get('/codeImg', controller.util.createImgCode())

module.exports = router