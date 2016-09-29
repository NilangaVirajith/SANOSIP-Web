var mongoose = require('mongoose');
var Student = require('../public/datasets/students');

module.exports.create = function(req, res){
    var student = new Student(req.body);
    student.save();
    res.send(req.body);
}