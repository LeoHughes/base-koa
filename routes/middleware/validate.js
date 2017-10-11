/**
 * 接口校验中间件
 */

module.exports = validateSchema => {

  return (ctx, next) => {

    const input = ctx.method === 'POST' ? ctx.request.body : ctx.request.query

    const { error } = validateSchema.validate(input)

    if (error) {

      ctx.body = error

    } else {

      next()

    }

  }

}