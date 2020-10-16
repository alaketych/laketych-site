const express = require('express')
const database = require('../pages/api/controllers/database')

const router = express.Router()

module.exports = { router, database }