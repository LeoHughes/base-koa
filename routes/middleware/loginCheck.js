/**
 * 检查是否登录中间件，未登录则跳转登录页
 */
module.exports = (checkName = 'user') => {

  return (ctx, next) => {

    if (!ctx.session[checkName]) {

      ctx.redirect('/login')

    } else {

      next()

    }

  }

}