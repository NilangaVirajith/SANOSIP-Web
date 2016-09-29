var mongoose = require('mongoose');

module.exports('Student', {
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