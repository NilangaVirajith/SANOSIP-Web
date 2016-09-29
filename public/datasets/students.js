var mongoose = require('mongoose');

module.exports = mongoose.model('Student', {
    name: String,
    parent: String,
    class: String,
    dob: Date,
    gender: String,
    address: String,
    phone: String,
    email: String,
    password: String
});