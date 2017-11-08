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
});

var option = new mongoose.Schema({
  _id: {
    type : String,
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
    required: true,
    default: false,
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
  help : message,
  videoURL : {
    type : String,
  },
  imageURL : {
    type : String,
  },
  idSurvey : {
    type : String,
    required: true
  }
});

module.exports = mongoose.model('Question', questionSchema);
// module.exports = mongoose.model('Option', option);
// module.exports = mongoose.model('Message', message);
// module.exports = mongoose.model('DownloadURL', downloadURL);
