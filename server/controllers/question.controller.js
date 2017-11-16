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

exports.create = function(questionBasic, question){
    var q = _.omit(question, ['_id', 'help._id', 'options.message._id']);
    var s = new Question(q);
    var idQuestion ;
    var idCategory = questionBasic.idCategory;
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

exports.update = function(question){

    var s = new Question(question);
    var deferred = Q.defer();
    Question.findByIdAndUpdate(s._id, question, (err, doc)=>{
      if(err) deferred.reject(err);
      if(doc) {
        Category.findOneAndUpdate({"questions.idQuestion": question._id},
        { $set: {"questions.$.title" :s.title}}, (err1, doc1) =>{
          if(err1) deferred.reject(err1);
          if(doc1) deferred.resolve(doc);
        });
      }
    })

    return deferred.promise;

}

exports.getById = function(id, idSurvey){
    var deferred = Q.defer();
    return Question.find(id, (err, doc)=>{
      if (doc){
        deferred.resolve(doc);
      }
      if(err){
         deferred.reject(err);
     }
    });
}

exports.getAll = function(){
    return Question.find({}).exec();
}

exports.getByPos = function(pos, idSurvey){
  var deferred = Q.defer();
  Category.findOne({"questions.pos": pos, 'idSurvey': idSurvey}, {"_id":0,"questions" : {$elemMatch: {"pos" :pos}}}, (err1, doc1) =>{
    if(err1) deferred.reject(err1);
    else if(doc1){
      Question.findById(doc1.questions[0].idQuestion, (err2, doc2) =>{
        if(err2) deferred.reject(err2);
        else if(doc2) deferred.resolve(doc2);
        else deferred.reject("Database error2");
      });
    }
    else deferred.resolve("");
  });

  return deferred.promise;
}

exports.delete = function(id, pos)
{
  var deferred = Q.defer();
  Category.update({}, {$pull: { "questions": {"pos": pos }}, },{ multi: true },
    (err, docDel)=> {
    if(err) deferred.reject(err);
    else if(docDel) {
      Category.updateMany({"questions.pos":  {$gte:pos}}, {$inc: {"questions.$.pos" :-1}}, (err1, docs1)=>{
        if(err1) deferred.reject(err1);
        else if (docs1)
          Question.findByIdAndRemove(id, (err1, docs)=>{
            if(err1) deferred.reject(err1);
            else if(docs) deferred.resolve(docs);
            else deferred.reject("DB error");
          });
        else deferred.reject("Database error");
      });
    }
    else deferred.reject("DB error");
  });
  return deferred.promise;
}
