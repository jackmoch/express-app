'use strict';

const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/pugpizza'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()