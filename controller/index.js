const fs = require('fs')
const Util = require('../util/util')
const util = new Util()


/** 
 * @class controller
 * 
 */

class controller {

  constructor() {

    const mountClass = util.mountClass()

    mountClass(this, __dirname)

  }


}

module.exports = new controller()