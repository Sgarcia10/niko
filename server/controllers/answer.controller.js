var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var QuestionAnswered = require('../models/answer');
var Project = require('../models/project');

exports.create = function(a){
    var questionAnswered = new QuestionAnswered(_.omit(a, ['_id']));
    var idProject = questionAnswered.idProject;
    var posQuestion = questionAnswered.posQuestion;
    var promise1 = questionAnswered.save();
    var promise2 = promise1.then(()=>{
      return Project.findByIdAndUpdate(
        idProject, { $set: { 'currentQuestionPos': posQuestion }}
        ).lean().exec();
    });
    return promise1.then(promise2);
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
