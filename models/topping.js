'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Meat', {
	name: String,
}) 