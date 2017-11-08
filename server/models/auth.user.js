var mongoose = require( 'mongoose' );

var authUserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  jwt: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AuthUser', authUserSchema);
