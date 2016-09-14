'use strict';

const { model } = require('mongoose')

module.exports = mongoose.model('Contact', {
	name: String,
	email: String,
	phone: String,
	message: String
}) 