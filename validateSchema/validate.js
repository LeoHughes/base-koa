const Util = require('../util/util')
const util = new Util()

/**
 * 封装接口数据校验规则
 * 
 * @class validate
 */

class validate {

  constructor() {

    const mountClass = util.mountClass()

    mountClass(this, __dirname, 'validate')

  }

}

module.exports = new validate()