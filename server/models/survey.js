var mongoose = require( 'mongoose' );

var surveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  finished: {
    type: Boolean,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Survey', surveySchema);
