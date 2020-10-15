const nextRoutes = require('next-routes')
const route = module.exports = nextRoutes()

route.add('posts', '/posts')
route.add('post', '/posts/:slug')
