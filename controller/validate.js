/**
 * 封装接口数据校验规则
 * 
 * @class validate
 */

const joi = require('joi')

class validate {

  constructor() {}


  loginSchema() {

    return joi.object({
      userName: joi.string().min(6).max(15).required(),
      passWord: joi.string().min(6).max(15).required()
    })

  }

}

module.exports = validate