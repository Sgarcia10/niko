var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var Project = require('../models/project');
var Survey = require('../models/survey');
var Answer = require('../models/answer');

exports.create = function(p){

    var project = new Project(_.omit(p, ['_id']))

    return project.save();
}

exports.getByUserId = function(id){

    var deferred = Q.defer();
    Project.find({"user.userId": id}, (err, doc)=>{
      if(err) deferred.reject(err);
      if(doc) {
        deferred.resolve(doc);
      }
    });

    return deferred.promise;
}

exports.getActiveSurvey = function(){
    return Survey.findOne({'active' : true}, '_id').lean().exec();
}

exports.delete = function(id){
    var deferred = Q.defer();
    Project.findByIdAndRemove(id, (err, doc)=>{
      if(err) deferred.reject(err);
      if(doc) {
        Answer.findOneAndRemove({'idProject': id}, (err1, doc1)=>{
          if(err1) deferred.reject(err1);
          if(doc1) {
            deferred.resolve(doc);
          }
        });
        deferred.resolve(doc);
      }
    });

    return deferred.promise;
}
