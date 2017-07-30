
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

exports.verifyRole = function(req, res)
{
    userController.verifyRole(req.decoded._id)
        .then( role => {
            if (role) {
                // authentication successful
                res.send(role);
            } else {
                // authentication failed
                res.status(400).send('Token invalid');
            }
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

//////////////////PRUEBAS////////////////////////////

exports.prueba1 = function(req, res){
  userController.prueba1(req.body.pass)
    .then(m => res.json({ success: true }))
    .catch(err => console.log(error.message));
}
