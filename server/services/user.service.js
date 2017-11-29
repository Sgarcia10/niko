
var express = require('express');
var userController = require('../controllers/user.controller');


exports.authenticate = function(req, res){
    userController.authenticate(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
                res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

exports.getRole = function(_id)
{
  return userController.getRole(_id);
}

//////////////////PRUEBAS////////////////////////////

exports.prueba1 = function(req, res){
  userController.prueba1(req.body.pass)
    .then(m => res.json({ success: true }))
    .catch(err => console.log(error.message));
}
