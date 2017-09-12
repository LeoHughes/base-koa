/**
 * 检查是否登录中间件，未登录则跳转登录页
 */
module.exports = () => {

  return (ctx, next) => {

    if (!ctx.session.user) {

      ctx.redirect('/login')

    } else {

      next()

    }

  }

}