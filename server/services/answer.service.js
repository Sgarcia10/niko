
var express = require('express');
var answerController = require('../controllers/answer.controller');

exports.create = function(req, res){
    answerController.create(req.body)
      .then(answer => res.send(answer))
      .catch(err => res.status(400).send('No se pudo guardar: '+err));
}

exports.getResult = function(req, res){
    answerController.getResult(req.params.idProject)
      .then(remarks => res.send(remarks))
      .catch(err => res.status(400).send('No se encuentran las respeustas: '+err));
}

exports.getById = function(req, res){
    answerController.getById(req.params._id)
      .then(ans => res.send(ans))
      .catch(err => res.status(400).send('No se encuentran las respeustas: '+err));
}

exports.remove = function(req, res){
    answerController.remove(req.params._id)
      .then(ans => res.send(ans))
      .catch(err => res.status(400).send('No se puede eliminar respuesta: '+err));
}

exports.getByPos = function(req, res){
    answerController.getByPos(req.params._pos, req.params._idProject)
      .then(ans => res.send(ans))
      .catch(err => res.status(400).send('No se puede eliminar respuesta: '+err));
}

// exports.getByUserId = function(req, res){
//     projectController.getByUserId(req.params._id)
//       .then(projects => res.send(projects))
//       .catch(err => res.status(400).send('No se pudo guardar: '+err));
// }

// exports.update = function(req, res){
//     questionController.update(req.body)
//       .then(category => res.send(category))
//       .catch(err => res.status(400).send('No se pudo actualizar: '+err));
// }
//
// exports.getById = function(req, res){
//     questionController.getById(req.params._id)
//       .then(question => res.send(question))
//       .catch(err => res.status(400).send('No se puede buscar: '+err));
// }
//
// exports.getAll = function(req, res){
//     questionController.getAll()
//       .then(questions => res.send(questions))
//       .catch(err => res.status(400).send('No se puede buscar: '+err));
// }
//
// exports.getByPos = function(req, res){
//     questionController.getByPos(req.params.pos)
//       .then(question => res.send(question))
//       .catch(err => res.status(400).send('No se puede buscar: '+err));
// }
//
// exports.delete = function(req, res){
//     questionController.delete(req.body)
//     .then(category => res.send(category))
//     .catch(err => res.status(400).send('No se pudo eliminar: '+err));
// }
