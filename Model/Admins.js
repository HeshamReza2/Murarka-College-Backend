const mongoose = require('mongoose')
const Admins = new mongoose.Schema({
    user_id: { type: String },
    password: { type: String },
    department: { type: String }
})

module.exports = mongoose.model('Admins', Admins)