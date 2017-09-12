/**
 * 私有api接口
 */

const router = require('koa-router')()
const controller = require('../../controller/index')

router
  .get('/getUserName', async(ctx) => {
    ctx.body = {
      statusCode: 200,
      message: 'this interface is private'
    }
  })

module.exports = router