var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var Survey = require('../models/survey');

exports.create = function(s){
    var deferred = Q.defer();
    var survey = new Survey(_.omit(s, ['_id']));
    survey.save((err, doc)=>{
      if(err) deferred.reject(err);
      if(doc) {
        deferred.resolve(doc);
      }
    });

    return deferred;
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
    return Survey.findByIdAndRemove(id).lean().exec();
}
