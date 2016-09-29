var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require('./server/authentication-controller');
var studentcontroller = require('./server/student-controller');

app.use('/public', express.static(__dirname + "/public"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/sanosip_2');


app.get('/', function(req, res){
    res.sendfile('public/index.html');
  //  res.send("From Server");
});

app.post('/user/login', authenticationController.login);

app.post('/user/signup', authenticationController.signup);

app.post('/student/createstudent', studentcontroller.create);

app.listen(3000, function(){
    console.log("Server running on port 3000");
});