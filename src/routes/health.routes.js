const express =  require('express')
const router = express.Router()
const healthCheck = require('../controllers/healthcheck.controller')
router.get('/healthcheck',healthCheck)

module.exports = router