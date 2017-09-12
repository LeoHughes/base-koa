const fs = require('fs')

/** 
 * @class controller
 * 
 */

class controller {

  constructor() {

    let arr = fs.readdirSync(__dirname, 'utf-8')

    arr.forEach((el) => {

      if (el !== 'index.js') {

        let objName = el.replace('.js', '')

        let obj = require(`./${objName}`)

        this[objName] = new obj()

      }

    })

  }

}

module.exports = new controller()