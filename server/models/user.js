var mongoose = require( 'mongoose' );

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
