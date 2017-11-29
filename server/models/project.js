var mongoose = require( 'mongoose' );


var user = new mongoose.Schema({
    _id : false,
    userId: {
      type : String,
      required: true
    },
    username: {
      type : String,
      required: true
    },
    code: {
      type : String,
      required: true
    }
});

var projectSchema = new mongoose.Schema({
    idSurvey : {
      type: String,
      required: true
    },
    currentAnswerId : {
      type: String
    },
    title : {
      type: String,
      required: true
    },
    adviser : {
      type: String
    },
    subject : {
      type: String,
      required: true
    },
    activity : {
      type: String,
      required: true
    },
    type : {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    program: {
      type: String,
      required: true
    },
    user: user
});

module.exports = mongoose.model('Project', projectSchema);
