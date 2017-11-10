var mongoose = require( 'mongoose' );

var surveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  finished: {
    type: Boolean,
    required: true,
    default: false
  },
  active: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('Survey', surveySchema);
