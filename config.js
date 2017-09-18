/**项目配置文件 */


//项目名称
const proName = 'base-koa'

exports.proName = proName


//访问端口设置
exports.port = 3000


//cookie有效时间
exports.maxage = 60 * 60 * 1000

//cookie secret
exports.secret = 'super-secret-key'


//token key
exports.tokenKey = `${proName}`

//redis相关配置
exports.redisOption = {
  host: '192.168.254.62', //redis 地址
  port: '6379', //端口
  password: '', //数据库密码
  db: 1, //使用的数据库索引，默认 0
  prefix: `${proName}:` //key前缀，默认 sess：
}


//MongoDB配置 mongodb://username:password@host:port/database
exports.dbURL = "mongodb://192.168.1.90:27017/beBetter"