var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var Answer = require('../models/answer');

exports.create = function(a){
    var deferred = Q.defer();
    var answer = new Answer(_.omit(a, ['_id']));
    answer.save((err, doc)=>{
      if(err) deferred.reject(err);
      if(doc) {
        deferred.resolve(doc);
      }
    });

    return deferred;
}
