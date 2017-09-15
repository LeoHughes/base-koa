const util = require('../util/util')

/**
 * 
 * 
 * @class user
 */
class user extends util {

  constructor() {
    super()
  }

  login() {

    return ctx => {

      ctx.body = ctx.request.body

    }

  }

}

module.exports = user