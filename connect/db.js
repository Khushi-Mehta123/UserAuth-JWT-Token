
const mongoose = require('mongoose')

const connectstr = 
'mongodb://localhost:27017/Jwt-Token'
const connectDB = mongoose.connect(connectstr)

module.exports = connectDB