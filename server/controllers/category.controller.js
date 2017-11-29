var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongo = require('mongoose');
var _ = require('lodash');
var Category = require('../models/category');


exports.create = function(cat){
    var category = new Category(_.omit(cat, ['_id','questions._id']));
    return category.save();
}

exports.update = function(id, category){
    return  Category.findByIdAndUpdate(id, category).exec();
}

exports.getBySurveyId = function(id){
    return Category.find({idSurvey: id}).sort('pos').lean().exec();
}

exports.delete = function(id)
{
    return new Promise((resolve, reject) => {
      Category.findByIdAndRemove(id, (err, docDel)=> {
        if(err) reject(err);
        if(docDel) {
          var posDelete = docDel.pos;
          Category.updateMany({pos:{$gt:posDelete}},{$inc: {pos:-1}}, (err, docs)=>{
            if(err) reject(err);
            if(docs) resolve(docDel);
          });
        }
      });
    });
}
