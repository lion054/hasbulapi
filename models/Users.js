const mongoose = require('mongoose');

//user schema 
const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports =  mongoose.model("user", schema)