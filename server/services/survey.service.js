
var express = require('express');
var surveyController = require('../controllers/survey.controller');

exports.create = function(req, res){
    surveyController.create(req.body)
      .then(survey => res.send(survey))
      .catch(err => res.status(400).send('No se puede guardar: '+err));
}

exports.update = function(req, res){
    surveyController.update(req.body)
      .then(survey => res.send(survey))
      .catch(err => res.status(400).send('No se puede actualizar: '+err));
}

exports.getAll = function(req, res){
    surveyController.getAll()
      .then(surveys => res.send(surveys))
      .catch(err => res.status(400).send('No se pueden obtener los cuestionarios: '+err));
}

exports.delete = function(req, res){
    surveyController.delete(req.params._id)
      .then(survey => res.send(survey))
      .catch(err => res.status(400).send('No se puede eliminar: '+err));
}
