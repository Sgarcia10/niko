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
    var deferred = Q.defer();
    Survey.findOne({'active' : true}, '_id', (err, doc)=> {
        if (err) deferred.reject(err);
        if (doc) deferred.resolve(doc);
    });
    return deferred.promise;
}

exports.delete = function(id){
    var deferred = Q.defer();
    var promise1 = Project.findByIdAndRemove(id).exec();
    var promise2 = promise1.then(()=>{
      return Answer.remove({'idProject': id}).lean().exec()
    });

    return promise2;
}
