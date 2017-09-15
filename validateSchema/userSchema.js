const joi = require('joi')

/**
 * 用户接口规则校验类
 * 
 * @class userChema
 */
class userChema {

  constructor() {

    //邮箱验证
    this.email = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/

    //电话验证
    this.phone = /(^[1][3][0-9]{9}$)|(^[1][4][0-9]{9}$)|(^[1][5][0-9]{9}$)|(^[1][7][0-9]{9}$)|(^[1][8][0-9]{9}$)/

    //ip验证
    this.ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/

    //中文验证
    this.CN = /.*[\u4e00-\u9fa5]+.*$/

  }


  loginSchema() {

    return joi.object({
      userName: joi.string().min(6).max(15).required(),
      passWord: joi.string().min(6).max(15).required(),
      email: joi.string().regex(this.email).required(),
      name: joi.string().regex(this.CN)
    })

  }

}


module.exports = userChema