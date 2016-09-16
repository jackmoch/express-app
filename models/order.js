'use strict';

const mongoose = require('mongoose')

const HTML5_EMAIL_VALIDATION = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

module.exports = mongoose.model('Order', {
	name: { type: String, required: [true, 'Please enter a name'] },
	email: { 
		type: String, 
		required: true, 
		lowercase: true,
		match: [HTML5_EMAIL_VALIDATION, 'Please fill with a valid email']
	},
	phone: { type: String, required: [true, 'Please enter your phone number'] },
	size: { type: String, required: [true, 'Please choose a valid size'] },
	toppings: { type: [String], default: ['Cheese']}
})