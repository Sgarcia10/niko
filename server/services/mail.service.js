var express = require('express');
var mailController = require('../controllers/mail.controller');

exports.sendMail = function(req, res){
    mailController.sendMail()
      .then(info => res.send(info))
      .catch(err => res.status(400).send('No se puede enviar correo: '+err));
}
