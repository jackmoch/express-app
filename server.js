'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const {
  cyan, 
  red
} = require('chalk')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const routes = require('./routes/') // same as ./routes/index.js
const { connect } = require('./database')

const app = express()

const port = process.env.PORT || 3000
app.set('port', port)

// middlewares
app.use(session({
  store: new RedisStore(),
  secret: 'superSecretKey'
}))

app.use((req, res, next) => {
  app.locals.email = req.session.email
  next()
})

app.use(({ method, url, headers: { 'user-agent': agent } }, res, next) => {
	const timeStamp = new Date()
  console.log(`[${timeStamp}] "${cyan(`${method} ${url}`)}" "${agent}"`)
  next()
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: false
}))

// pug config
app.set('view engine', 'pug')

app.locals.company = 'Pug Pizza'
app.locals.errors = {}
app.locals.body = {}

// routes
app.use(routes)

app.use((req, res, next) => {
  // const err = Error('Not Found')
  // err.status =  404
  // next(err)
  console.log(red('Error 404'))
  res.render('404')
})

// Error handling middleware
app.use((err, { method, url, headers: { 'user-agent': agent } }, res, next) => {
	const timeStamp = new Date()
	res.sendStatus(err.status || 500)
	console.error(`[${timeStamp}] "${red(`${method} ${url}`)}" Error (${red(`${res.statusCode}`)}): "${red(`${res.statusMessage}`)}"`)
})	

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Express server listening on port ${port}`)
    })
  })
  .catch(console.error)
