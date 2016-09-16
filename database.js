'use strict';

const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/pugpizza'
// const MONGODB_URL = 'mongodb://pugspizza:jmoran@ds033116.mlab.com:33116/pugpizza'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()