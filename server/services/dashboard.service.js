
var express = require('express');
var dashboardController = require('../controllers/dashboard.controller');

exports.getQuestions = function(req, res){
    dashboardController.getQuestions(req.params.idSurvey)
      .then(questions => res.send(questions))
      .catch(err => res.status(400).send('No se puden obtener preguntas: '+err));
}
//
// exports.getByUserId = function(req, res){
//     projectController.getByUserId(req.params._id)
//       .then(projects => res.send(projects))
//       .catch(err => res.status(400).send('No se encuentras los proyectos: '+err));
// }
//
// exports.getActiveSurvey = function(req, res){
//     projectController.getActiveSurvey()
//       .then(survey => res.send(survey))
//       .catch(err => res.status(400).send('No se encuentras los proyectos: '+err));
// }
//
// exports.delete = function(req, res){
//     projectController.delete(req.params._id)
//     .then(project => res.send(project))
//     .catch(err => res.status(400).send('No se pudo eliminar: '+err));
// }

// exports.update = function(req, res){
//     questionController.update(req.body)
//       .then(category => res.send(category))
//       .catch(err => res.status(400).send('No se pudo actualizar: '+err));
// }
