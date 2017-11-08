var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var Project = require('../models/project');

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

// exports.update = function(question){
//
//     var s = new Question(question);
//     var deferred = Q.defer();
//     Question.findByIdAndUpdate(s._id, question, (err, doc)=>{
//       if(err) deferred.reject(err);
//       if(doc) {
//         Category.findOneAndUpdate({"questions.idQuestion": question._id},
//         { $set: {"questions.$.title" :s.title}}, (err1, doc1) =>{
//           if(err1) deferred.reject(err1);
//           if(doc1) deferred.resolve(doc);
//         });
//       }
//     })
//
//     return deferred.promise;
//
// }
//
// exports.getById = function(id){
//     return Question.findById(id).exec();
// }
//
// exports.getAll = function(){
//     return Question.find({}).exec();
// }
//
// exports.getByPos = function(pos){
//   var deferred = Q.defer();
//   Category.findOne({"questions.pos": pos}, {"_id":0,"questions" : {$elemMatch: {"pos" :pos}}}, (err1, doc1) =>{
//     if(err1) deferred.reject(err1);
//     else if(doc1){
//       Question.findById(doc1.questions[0].idQuestion, (err2, doc2) =>{
//         if(err2) deferred.reject(err2);
//         else if(doc2) deferred.resolve(doc2);
//         else deferred.reject("Database error2");
//       });
//     }
//     else deferred.resolve("");
//   });
//
//   return deferred.promise;
// }
//
// exports.delete = function(question)
// {
//   var deferred = Q.defer();
//   var _id = String(question.idQuestion);
//   Category.update({}, {$pull: { "questions": {"idQuestion": _id }}, },{ multi: true },
//     (err, docDel)=> {
//     if(err) deferred.reject(err);
//     else if(docDel) {
//       var pos = question.pos;
//       Category.updateMany({"questions.pos":  {$gte:pos}}, {$inc: {"questions.$.pos" :-1}}, (err1, docs1)=>{
//         if(err1) deferred.reject(err1);
//         else if (docs1)
//           Question.findByIdAndRemove(_id, (err1, docs)=>{
//             if(err1) deferred.reject(err1);
//             else if(docs) deferred.resolve(docDel);
//             else deferred.reject("DB error");
//           });
//         else deferred.reject("Database error");
//       });
//     }
//     else deferred.reject("DB error");
//   });
//   return deferred.promise;
// }
