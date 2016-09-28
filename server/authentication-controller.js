var mongoose = require('mongoose');
var User = require('../public/datasets/users');

module.exports.login = function(req, res){
    User.find(req.body, function(err, results){
        if(err){
            console.log("Error");
        }
        if(results && results.length === 1){
            var UserData = results[0];
            res.json({email: req.body.email,
                     _id: UserData._id,
                      type: UserData.usertype
                     });
        }
    })
}

module.exports.signup = function(req, res){
    var user = new User(req.body);
    user.save();
    res.send(req.body);
}