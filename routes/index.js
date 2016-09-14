'use strict'

const { Router } = require('express')
const Contact = require('../models/contact')
const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/about', (req, res) => {
  res.render('about', {
    page: 'About'
  })
})

router.get('/contact', (req, res) => {
  res.render('contact', {
    page: 'Contact'
  })
})

router.post('/contact', (req, res) => {
	const msg = new Contact(req.body)
	msg.save()
		.then(() => res.redirect('/'))
		.catch(() => res.send('BAD'))
})

router.get('/order', (req, res) => {
	res.render('order', {
		page: 'Order'
	})
})

module.exports = router
