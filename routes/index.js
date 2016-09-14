'use strict'

const { Router } = require('express')
const Contact = require('../models/contact')
const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  })
})

router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  })
})

router.post('/contact', (req, res) => {
	const msg = new Contact(req.body)
	msg.save()
		.then(() => res.redirect('/'))
		.catch(() => res.send('BAD'))
})

module.exports = router
