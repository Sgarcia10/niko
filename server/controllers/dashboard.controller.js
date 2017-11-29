var mongo = require('mongoose');
var _ = require('lodash');
var Q = require('q');
var Question = require('../models/question');
var Survey = require('../models/survey');
var Answer = require('../models/answer');
var Project = require('../models/project');
var User = require('../models/user');

exports.getQuestions = function(idSurvey){
    return Question.find({'idSurvey': idSurvey}, 'title').lean().exec();
}

exports.stats = function(idQuestion, idSurvey){
    return Answer.find({'idQuestion': idQuestion, 'idSurvey': idSurvey}).lean().exec();
}

exports.getAllAnswers = function(){
    return Answer.find({}, 'posQuestion idSurvey idProject title type optionsAnswered')
      .sort('posQuestion idProject')
      .lean().exec();
}

exports.getAllProjects = function(){
    return Project.find({})
      .sort( '_id' )
      .lean().exec();
}

exports.getAllUsers = function(){
    return User.find({'role': 'user'}, 'username name code').lean().exec();
}
