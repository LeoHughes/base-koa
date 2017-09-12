const router = require('koa-router')()
const page = require('./page')
const API_public = require('./api/public')
const API_private = require('./api/private')

// middleware
const isAuthorize = require('./middleware/isAuthorize')


// page router
router.use('', page.routes(), page.allowedMethods())

// public api router
router.use('/api', API_public.routes(), API_public.allowedMethods())

// private api router
router.use('/api', isAuthorize(), API_private.routes(), API_private.allowedMethods())

module.exports = router