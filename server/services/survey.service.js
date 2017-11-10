
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

exports.activate = function(req, res){
    surveyController.activate(req.params._id, req.params.currentActive)
      .then(survey => res.send(survey))
      .catch(err => res.status(400).send('No se puede activar: '+err));
}

exports.finish = function(req, res){
    surveyController.finish(req.params._id)
      .then(survey => res.send(survey))
      .catch(err => res.status(400).send('No se puede finalizar: '+err));
}

exports.clone = function(req, res){
    surveyController.clone(req.body)
      .then(survey => res.send(survey))
      .catch(err => res.status(400).send('No se puede clonar: '+err));
}

exports.getRedable = function(req, res){
    surveyController.getRedable(req.params._id)
      .then(survey => res.send(survey))
      .catch(err => res.status(400).send('No se puede obtener la encuesta: '+err));
}
