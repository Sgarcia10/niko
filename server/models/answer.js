var mongoose = require( 'mongoose' );

var downloadURL = new mongoose.Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  }
});

var message = new mongoose.Schema({
    title: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
    downloadURL: downloadURL,
});


var optionAnswered = new mongoose.Schema({
    _id : {
      type : String,
      required: true
    },
    text: {
      type : String,
      default : ""
    },
    checked: {
      type : Boolean,
      required: true
    },
    ans: {
      type : String,
      default : ""
    }
});

var questionAnswered = new mongoose.Schema({
    posQuestion : {
      type : Number,
      required: true
    },
    idSurvey: {
      type : String,
      required: true
    },
    idProject: {
      type : String,
      required: true
    },
    prevPos : {
      type : Number,
      required: true
    },
    title: {
      type : String,
      required: true
    },
    type: {
      type : String,
      required: true
    },
    optionsAnswered: [optionAnswered],
    remarks: [message]
});



module.exports = mongoose.model('QuestionAnswered', questionAnswered);
