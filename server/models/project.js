var mongoose = require( 'mongoose' );

var period = new mongoose.Schema({
    _id : false,
    year : {
      type : Number,
      required : true
    },
    semester : {
      type : Number,
      required : true
    }
  });

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
    period: period,
    program: {
      type: String,
      required: true
    },
    user: user
});

module.exports = mongoose.model('Project', projectSchema);
