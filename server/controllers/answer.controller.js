var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var QuestionAnswered = require('../models/answer');
var Project = require('../models/project');

exports.create = function(ans){
    var questionAnswered = null;
    var promise1=null;
    if(ans._id){
      questionAnswered = new QuestionAnswered(ans);
      promise1 = QuestionAnswered.findByIdAndUpdate(ans._id, ans).exec();
    }
    else{
      questionAnswered = new QuestionAnswered(_.omit(ans,['_id']));
      promise1 = questionAnswered.save();
    }
    var idAnswer = questionAnswered._id;
    var idProject= questionAnswered.idProject;
    return promise1.then(()=>{
      return Project.findByIdAndUpdate(
        idProject, { $set: { 'currentAnswerId': idAnswer }}
        ).lean().exec();
    });
}

exports.remove = function(id){
    return QuestionAnswered.findByIdAndRemove(id).exec();
}

exports.getByPos = function(pos, idProject)
{
  return QuestionAnswered.findOne({'posQuestion': pos, 'idProject': idProject}).lean().exec()
            .then((doc)=>{
              var idAns = doc._id;
              Project.findByIdAndUpdate(
                idProject, { $set: { 'currentAnswerId': idAns }}, (err, doc1)=>{
                  if(err) return Promise.reject(err);
                  return Promise.resolve(doc);
                });
              return Promise.resolve(doc);
            });
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
