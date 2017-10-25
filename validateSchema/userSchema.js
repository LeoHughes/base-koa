const joi = require('joi')
const regex = require('../util/regex')

/**
 * 用户接口规则校验类
 * 
 * @class userChema
 */
class userChema {

  constructor() {}


  loginSchema() {

    return joi.object({
      userName: joi.string().min(6).max(15).required(),
      passWord: joi.string().min(6).max(15).required(),
      email: joi.string().regex(regex.email, 'email').required(),
      name: joi.string().regex(regex.CN, 'chinese')
    })

  }

}


module.exports = userChema