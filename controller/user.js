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

      ctx.body = ctx.method === 'POST' ? ctx.body : ctx.query

    }

  }

}

module.exports = user