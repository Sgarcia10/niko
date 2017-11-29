
var express = require('express');
var dashboardController = require('../controllers/dashboard.controller');

exports.getQuestions = function(req, res){
    dashboardController.getQuestions(req.params.idSurvey)
      .then(questions => res.send(questions))
      .catch(err => res.status(400).send('No se puden obtener preguntas: '+err));
}

exports.stats = function(req, res){
    dashboardController.stats(req.params.idQuestion, req.params.idSurvey)
      .then(answers => res.send(answers))
      .catch(err => res.status(400).send('No se puden obtener respuestas: '+err));
}

exports.getAllAnswers = function(req, res){
    dashboardController.getAllAnswers()
      .then(answers => res.send(answers))
      .catch(err => res.status(400).send('No se puden obtener respuestas: '+err));
}

exports.getAllProjects = function(req, res){
    dashboardController.getAllProjects()
      .then(projects => res.send(projects))
      .catch(err => res.status(400).send('No se puden obtener proyectos: '+err));
}

exports.getAllUsers = function(req, res){
    dashboardController.getAllUsers()
      .then(users => res.send(users))
      .catch(err => res.status(400).send('No se puden obtener ususarios: '+err));
}
