/**
 * 检测是否授权访问私有接口
 */

module.exports = () => {

  return (ctx, next) => {

    if (!ctx.session.user) {

      ctx.status = 403

      ctx.body = {
        statusCode: 403,
        message: 'is not authorized'
      }

    } else {

      next()

    }

  }

}