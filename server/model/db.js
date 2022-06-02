const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/hostelrenteen"
mongoose.connect(url)
const db = mongoose.connection
console.log("Succefully Connected..")
module.exports = db