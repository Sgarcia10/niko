
var express = require('express');
var questionController = require('../controllers/question.controller');

exports.create = function(req, res){
    questionController.create(req.body.question, req.body.questionDetail, req.body.idCategory)
      .then(question => res.send(question))
      .catch(err => res.status(400).send('No se pudo guardar: '+err));
}

exports.update = function(req, res){
    questionController.update(req.params._id, req.body.question, req.body.questionDetail)
      .then(category => res.send(category))
      .catch(err => res.status(400).send('No se pudo actualizar: '+err));
}

exports.getById = function(req, res){
    questionController.getById(req.params._id)
      .then(question => res.send(question))
      .catch(err => res.status(400).send('No se puede buscar: '+err));
}

exports.delete = function(req, res){
    questionController.delete(req.body)
    .then(category => res.send(category))
    .catch(err => res.status(400).send('No se pudo eliminar: '+err));
}
