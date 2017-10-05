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
  isUploadURL: {
    type: Boolean,
    required: true
  },
  uploadURL: {
    type: String,
    required: true
  }
});

var option = new mongoose.Schema({
  _id: {
    type : String,
    required: true
  },
  selected : {
    type: Boolean,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  jump: {
    type: Number,
    required: true
  },
  isTextArea: {
    type: Boolean,
  },
  textArea: {
    type: String,
  },
  message: message
});


var questionSchema = new mongoose.Schema({
  title : {
    type : String,
    required: true
  },
  type : {
    type : String,
    required: true
  },
  options : [option],
  help : message
});

module.exports = mongoose.model('Question', questionSchema);
// module.exports = mongoose.model('Option', option);
// module.exports = mongoose.model('Message', message);
// module.exports = mongoose.model('DownloadURL', downloadURL);
