// const express = require('express')
// const database = require('../pages/api/controllers/database')

// const router = express.Router()

// module.exports = { router, database }

const nextRoutes = require('next-routes')
const route = module.exports = nextRoutes()

route.add('posts', '/posts')
route.add('post', '/posts/:slug')