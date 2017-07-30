
var express = require('express');
var categoryController = require('../controllers/category.controller');

exports.create = function(req, res){
    categoryController.create(req.body)
      .then(category => res.send(category))
      .catch(err => res.status(400).send('No se pudo guardar: '+err));
}

exports.update = function(req, res){
    categoryController.update(req.params._id, req.body)
      .then(category => res.send(category))
      .catch(err => res.status(400).send('No se pudo actualizar: '+err));
}

exports.getAll = function(req, res){
    categoryController.getAll()
      .then(categories => res.send(categories))
      .catch(err => res.status(400).send('No se puede buscar: '+err));
}

exports.delete = function(req, res){
    categoryController.delete(req.params._id)
    .then(category => res.send(category))
    .catch(err => res.status(400).send('No se pudo eliminar: '+err));
}
