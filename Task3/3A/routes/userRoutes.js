const { Router } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../controllers/userCotroller')

const user = new User()

router.get('/', user.homePage) //home page route

module.exports = router