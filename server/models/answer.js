var mongoose = require( 'mongoose' );

var optionAnswered = new mongoose.Schema({
    _id : {
      type : String,
      required: true
    },
    text: {
      type : String,
      required: true
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

var questionAsked = new mongoose.Schema({
    _id : false,
    idQuestion : {
      type : String,
      required: true
    },
    title: {
      type : String,
      required: true
    },
    type: {
      type : Boolean,
      required: true
    },
    optionsAnswered: [optionAnswered]
});

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

var answerSchema = new mongoose.Schema({
    idProject : {
      type : String,
      required: true
    },
    currentPos : {
      type : Number,
      required: true
    },
    questionsAsked: [questionAsked],
    remarks: [message]
});


module.exports = mongoose.model('Answer', answerSchema);
