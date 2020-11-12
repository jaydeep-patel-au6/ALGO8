const { Router } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../controllers/userCotroller')
const auth  = require('../middlewares/auth')


const user = new User()

router.get('/', user.homePage) //home page route

router.post('/api/register', user.signUp) //register user route

router.post('/api/login', user.login) // login user route

router.get('/api/profile', auth, user.profile) // user profile route

router.get('/api/logout',auth, user.logout) //user logout route

module.exports = router