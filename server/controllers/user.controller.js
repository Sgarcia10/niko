var config = require('../config.json');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongo = require('mongoose');
var User = require('../models/user');
var AuthUser = require('../models/auth.user');


exports.authenticate = function(username, password){
  return new Promise((resolve, reject) => {
    User.findOne({ username: username }, function(err, user){
      if (err) reject(err);
      if (user){
        bcrypt.compare(password, user.hash, (err0, res) =>{
          if (err0) reject(err);
          if (res){
            var token = jwt.sign({_id: user._id}, config.secret, {
    					expiresIn: 86400*2 // expires in 24 hours
    				});
            var authUser = new AuthUser({
              _id : user._id,
              username: user.username,
              code: user.code,
              role: user.role,
              jwt: token
            });
            resolve(authUser);
          }
          else resolve();
        });
      }
      else resolve();
    });
  });
}

exports.verifyRole = function(userid){
    return new Promise((resolve, reject) => {
        var query = User.findOne({_id: userid}, (err,user) => {
            if(err) reject(err);
            if(user) resolve({role:user.role});
            else reject();
        });
    });
}


//////////////////PRUEBAS////////////////////////////

exports.prueba1 = function (pass){
  var hash = bcrypt.hashSync(pass, 8);
	// create a sample user
	var nick = new User({
    username: 'user',
    name: 'user',
		hash: hash,
		role: 'user'
	});
  var promise = nick.save();
	return promise;
};
