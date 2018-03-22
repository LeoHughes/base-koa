/**
 * 实例化的ProxyModel
 */

const path = require('path')
const ProxyModel = require('interfaceproxy')

let proxy = new ProxyModel(path.resolve(__dirname, '../interface.json'))

module.exports = proxy