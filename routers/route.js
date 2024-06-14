
const {login,dashboard} = require('../controllers/function')

const express = require('express')
const app = express()
const authmiddleware = require('../middleware/auth')
const router = express.Router()

router.route('/login').post(login)

router.route('/dashboard').get(authmiddleware,dashboard)

module.exports = router