const express =  require('express')
const router = express.Router()
const healthCheck = require('../controllers/healthcheck.controller.js')
router.get('/healthcheck',healthCheck)

module.exports = router