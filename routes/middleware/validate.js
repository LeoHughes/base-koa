/**
 * 接口校验中间件
 */

const joi = require('joi')

module.exports = schema => {

  return async(ctx, next) => {

    const input = ctx.method === 'POST' ? ctx.body : ctx.query

    const { error, value } = await joi.validate(input, schema)

    if (error) {

      ctx.body = error

    } else {

      next()

    }

  }

}