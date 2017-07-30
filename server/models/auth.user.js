var mongoose = require( 'mongoose' );

var authUserSchema = new mongoose.Schema({
  name: {
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
