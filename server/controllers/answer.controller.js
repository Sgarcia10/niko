var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var QuestionAnswered = require('../models/answer');
var Project = require('../models/project');

exports.create = function(a){
    var questionAnswered = null;
    var promise1=null;
    if(a._id){
      questionAnswered = new QuestionAnswered(a);
      console.log(a);
      promise1 = QuestionAnswered.findByIdAndUpdate(a._id, a).exec();
    }
    else{
      questionAnswered = new QuestionAnswered(_.omit(a,['_id']));
      promise1 = questionAnswered.save();
    }
    var idAnswer = questionAnswered._id;
    var idProject= questionAnswered.idProject;
    var promise2 = promise1.then(()=>{
      return Project.findByIdAndUpdate(
        idProject, { $set: { 'currentAnswerId': idAnswer }}
        ).lean().exec();
    });
    return promise1;
}

exports.getResult = function(idProject){
  var deferred = Q.defer()
    QuestionAnswered.find({'idProject': idProject}, (err,docs)=>{
      if(docs){
        var remarks = [];
        for (var i = 0; i < docs.length; i++) {
          remarks = remarks.concat(docs[i].remarks);
        }
        deferred.resolve(remarks);
      }
      if(err) deferred.reject(err);
    });
  return deferred.promise;
}

exports.getById = function(id){
  return QuestionAnswered.findById(id).lean().exec();
}
