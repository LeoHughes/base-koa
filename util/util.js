const fs = require('fs')
const path = require('path')
const captchapng = require('captchapng')
const jwt = require('jwt-simple')

/**
 * 
 * 公用方法类
 */

class util {

  constructor() {}


  /**
   * 过滤html标签
   * 
   * @param {any} str 需要过滤的值
   */
  filterHTML(str) {

    return str.replace(/<\/?[^>]*>/g, '')

  }


  /**
   * 根据时间毫秒数输出格式化时间
   * 
   * @param {any}    time   毫秒数
   * @param {string} dsper  日期分隔符
   * @param {string} tsper  时间分隔符
   */
  dateToLocaleString(time, dsper = '-', tsper = ':') {

    if (!time) return

    let date = new Date(parseInt(time))

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return `${year}${dsper}${month}${dsper}${day} ${hours}${tsper}${minutes}${tsper}${seconds}`

  }

  /**
   * 
   * 生成时间戳
   */
  now() {

    let time = this.dateToLocaleString(new Date().getTime(), '', '')

    return time.replace(/ /g, '')

  }


  /**
   * 
   * 生成验证码图片
   */
  createImgCode() {

    return (ctx) => {

      let code = parseInt(Math.random() * 9000 + 1000)
      let p = new captchapng(80, 30, code)

      p.color(30, 0, 10, 0)
      p.color(80, 80, 80, 255)

      let img = p.getBase64()
      let imgbase64 = Buffer.from(img, 'base64')

      //将验证码值存入session
      if (ctx.session) ctx.session.imgCode = code

      ctx.type = 'image/png'
      ctx.body = imgbase64
    }

  }


  /**
   * 根据数据生成token
   * 
   * @param {any} payload    需要加密的信息
   * @param {any} key        加密key
   */
  createToken(payload, key) {

    return jwt.encode(payload, key)

  }


  /**
   * token解析
   * 
   * @param {any} token   需要解密的token值 
   * @param {any} key     加密key
   */
  tokenDecode(token, key) {

    return jwt.decode(token, key)

  }

  /**
   * 遍历目录下的class并挂载到传入对象上
   * 
   * @param {any}    object     需要挂载的对象
   * @param {string} modulePath 需要遍历的路径
   * @param {string} output     需要输出的主对象名称
   * @memberof util
   */
  mountClass() {

    return (object, modulePath, output = 'index', ) => {

      try {

        let arr = fs.readdirSync(modulePath, 'utf-8')

        arr.forEach((el) => {

          let objName = el.replace('.js', '')

          if (objName !== output) {

            let obj = require(path.join(modulePath, objName))

            object[objName] = new obj()

          }

        })

      } catch (error) {

        throw (error)

      }

    }

  }

}

module.exports = util