'use strict'

const { Router } = require('express')
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
  console.log(req.body)
  res.redirect('/')
})

module.exports = router