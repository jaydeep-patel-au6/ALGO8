const { Router } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../controllers/userCotroller')


const user = new User()

router.get('/', user.homePage) //home page route

router.post('/api/register', user.signUp) //register user route

router.post('/api/login', user.login) // login user route



module.exports = router