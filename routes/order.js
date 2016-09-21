'use strict';

const { Router } = require('express')
const router = Router()

const Order = require('../models/order')
const Size = require('../models/size')
const Topping = require('../models/topping')

router.get('/order', (req, res) => {
	Promise.all([
		Size.find().sort({inches: 1}),
		Topping.find().sort({name: 1})
	])
	.then(([sizes, toppings]) => res.render('order',{page: 'Order', sizes, toppings}))
})

router.post('/order', (req, res, err) => {
	Order
	.create(req.body)
	.then(() => res.redirect('/'))
	.catch(err)	
})

module.exports = router