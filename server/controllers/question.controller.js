var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var Question = require('../models/question');
var Category = require('../models/category');
// var Option = require('../models/question');
// var Message = require('../models/question');
// var DownloadURL = require('../models/question');

exports.create = function(questionBasic, question, idCategory){
    var q = _.omit(question, ['_id', 'help._id', 'options.message._id']);
    var s = new Question(q);
    var idQuestion ;
    var idCategory
    var deferred = Q.defer();
    var qB = questionBasic;

    s.save((err, doc, p)=>{
      if(err) deferred.reject(err);
      else if(doc) {
        idQuestion = doc._id;
        qB.idQuestion=idQuestion;
        var posNew = qB.pos;
        Category.updateMany({"questions.pos":  {$gte:posNew}}, {$inc: {"questions.$.pos" :1}}, (err1, docs1)=>{
          if(err1) { deferred.reject(err1); }
          else if(docs1 && docs1.ok){
            Category.findByIdAndUpdate(
              { _id: idCategory },
              { $push: { "questions": qB } },
              {safe: true},
              (err2, doc2) => {
                if(err2) deferred.reject(err2);
                else if(doc2) {
                  deferred.resolve(doc2);
                }
                else {
                  deferred.reject("Database error");
                }
            });
          }
          else deferred.reject("Database error");
        });
      }
      else
        deferred.reject("Database error");
    });

    return deferred.promise;
}

exports.update = function(idCategory, questionBasic, question){

    var s = new Question(question);
    var deferred = Q.defer();
    Question.findByIdAndUpdate(question._id, question, (err, doc)=>{
      if(err) deferred.reject(err);
      if(doc) {
        Category.findOneAndUpdate({questions: {_id:questionBasic._id}}, questionBasic, (err1, doc1) =>{
          if(err1) deferred.reject(err1);
          if(doc1) deferred.resolve(doc);
        });
      }
    })

    return deferred.promise;

}

exports.getById = function(id){
    return Question.findById(id).exec();
}

exports.delete = function(question)
{
  var deferred = Q.defer();
  var _id = String(question.idQuestion);
  Category.update({}, {$pull: { "questions": {"idQuestion": _id }}, },{ multi: true },
    (err, docDel)=> {
    if(err) deferred.reject(err);
    else if(docDel) {
      var pos = question.pos;
      Category.updateMany({"questions.pos":  {$gte:pos}}, {$inc: {"questions.$.pos" :-1}}, (err1, docs1)=>{
        if(err1) deferred.reject(err1);
        else if (docs1)
          Question.findByIdAndRemove(_id, (err1, docs)=>{
            if(err1) deferred.reject(err1);
            else if(docs) deferred.resolve(docDel);
            else deferred.reject("DB error");
          });
        else deferred.reject("Database error");
      });
    }
    else deferred.reject("DB error");
  });
  return deferred.promise;
}
