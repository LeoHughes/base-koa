const util = require('../util/util')

/**
 * 
 * 
 * @class page
 */

class page extends util {

  constructor() {
    super()
  }

  /**
   * 验证码图片地址
   * 
   * @returns 
   * @memberof page
   */
  codeImg() {

    return this.createImgCode()

  }

  /**
   * 首页
   * 
   * @returns 
   * @memberof page
   */
  index() {

    return async(ctx) => {

      await ctx.render('index', {
        title: 'hello'
      })

    }

  }

  /**
   * 登录页
   * 
   * @returns 
   * @memberof page
   */
  login() {

    return async(ctx) => {

      await ctx.render('login', {
        title: 'login'
      })

    }

  }

  /**
   * 用户页
   * 
   * @returns 
   * @memberof page
   */
  user() {

    return async(ctx) => {

      await ctx.render('user')

    }

  }

}

module.exports = page