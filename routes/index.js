'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')

const router = Router()

const contact = require('./contact')
const login = require('./login')
const register = require('./register')
const about = require('./about')
const home = require('./home')
const order = require('./order')
const logout = require('./logout')

router.use(home)
router.use(login)
router.use(register)
router.use(about)
router.use(contact)

// guard middleware
router.use((req, res, next) => {
	if(req.session.email) {
		next()
	} else {
		res.redirect('/login')
	}
})

router.use(order)
router.use(logout)

module.exports = router
