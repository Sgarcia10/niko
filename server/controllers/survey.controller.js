var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var Survey = require('../models/survey');
var Question = require('../models/question');
var Category = require('../models/category');
var CategoryFull = require('../models/categoryFull');

exports.create = function(s){
    var deferred = Q.defer();
    var survey = new Survey(_.omit(s, ['_id']));
    survey.save((err, doc)=>{
      if(err) deferred.reject(err);
      if(doc) {
        deferred.resolve(doc);
      }
    });

    return deferred.promise;
}

exports.getAll = function(){
    return Survey.find().lean().exec();
}

exports.update = function(survey){
    if(survey._id==='')
      survey = new Survey(_.omit(survey, ['_id']));
    return  Survey.findByIdAndUpdate(survey._id, survey, {'upsert':true}).exec();
}

exports.delete = function(id)
{
    var promise1 = Survey.findByIdAndRemove(id).lean().exec();
    var promise2 = Category.deleteMany({'idSurvey':id}).exec();
    var promise3 = Question.deleteMany({'idSurvey':id}).exec();

    return promise1
      .then(promise2)
      .then(promise3);
}

exports.activate = function(id, currentActive)
{
    var promise1 = Survey.updateMany({'active' : true},{$set : {'active' : false}}).exec();
    var promise2 = Survey.findByIdAndUpdate(id, {$set : {'active' : true}}).exec();

    if(currentActive==='false'){
        return promise1;
    }
    else{
      return promise1.then(()=>{
        return promise2.then(()=>{
          return Promise.resolve(true);
        });
      });
    }
}

exports.finish = function(id)
{
    return promise = Survey.findByIdAndUpdate(id, {$set : {'finished' : true}}).exec();
}

exports.clone = function(survey){
    var deferred = Q.defer();
    var id = survey._id;
    var promise1 = new Promise((resolve, reject) => {
      Survey.findById(id, (err, doc)=>{
        if(err) reject(err);
        if(doc) {
          var s = new Survey({name: doc.name+'_copy'});
          resolve(s.save());
        }
      });
    });

    var promise2 = promise1.then(newSurvey => {
      var newIdSurvey = newSurvey._id;
      var promise3 = new Promise((resolve, reject) => {
        Category.find({'idSurvey':id}, (err, docs)=>{
          if(err) reject(err);
          if(docs) {
            for (var i = 0; i < docs.length; i++) {
              docs[i]._id = mongo.Types.ObjectId();
              docs[i].idSurvey = newIdSurvey;
            }
            return resolve(Category.insertMany(docs));
          }
        });
      });
      return promise3.then(()=>{
        Question.find({'idSurvey':id}, (err, docs)=>{
          if(err) return Promise.reject(err);
          if(docs) {
            for (var i = 0; i < docs.length; i++) {
              docs[i]._id = mongo.Types.ObjectId();
              docs[i].idSurvey = newIdSurvey;
            }
            return Promise.resolve(Question.insertMany(docs));
          }
        });
      });

    });

    return promise2;
}

exports.getRedable = function(id){
    var deferred = Q.defer();
    Category.find({'idSurvey':id}, (err,docs)=>{
      if(err) deferred.reject(err);
      if(docs){
        var promisesCat = [];
        for (var i = 0; i < docs.length; i++) {
          var questions=docs[i].questions;
          var promises = [i];
          for (var j = 0; j < questions.length; j++) {
            var idQuestion = questions[j].idQuestion;
            var promise = Question.findById(idQuestion).lean().exec();
            promises.push(promise);

          }
          var prom = Promise.all(promises).then(values => {
            var n=values[0];
            questions = values.slice(1, values.length);
            var cat = new CategoryFull(docs[n]);
            cat.questions = questions;
            return cat;
          });
          promisesCat.push(prom);

        }
        deferred.resolve(Promise.all(promisesCat));
      }
    });
    return deferred.promise;
}
