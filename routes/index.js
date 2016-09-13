'use strict'

const { Router } = require('express')
const router = Router()

module.exports = function(db) {

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
		db.collection('contact')
			.insertOne(req.body)
			.then(() => res.redirect('/'))
			.catch(res.send('BAD'))
	})

	return router
} 