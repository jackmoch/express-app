'use strict';

const Order = require('../models/order')
const Size = require('../models/size')
const Topping = require('../models/topping')

module.exports.new = (req, res) => {
	Promise.all([
		Size.find().sort({inches: 1}),
		Topping.find().sort({name: 1})
	])
	.then(([sizes, toppings]) => res.render('order',{page: 'Order', sizes, toppings}))
}

module.exports.create = (req, res, err) => {
	Order
	.create(req.body)
	.then(() => res.redirect('/'))
	.catch(err)	
}