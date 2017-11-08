var mongoose = require( 'mongoose' );

var questionBasic = new mongoose.Schema({
  idQuestion: {type: String, required: true},
  pos: {type: Number, required: true},
  title: {type: String, required: true},
  idCategory : {type: String, required: true}
});

var categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pos : {
    type : Number,
    required: true,
    unique: true
  },
  questions: [questionBasic],
  idSurvey: {
    type : String,
    required: true,
  }
});

module.exports = mongoose.model('Category', categorySchema);
