const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var config = require('../config.json');

const userService = require('../services/user.service');
const categoryService = require('../services/category.service');
const questionService = require('../services/question.service');
const projectService = require('../services/project.service');
const answerService = require('../services/answer.service');
const surveyService = require('../services/survey.service');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/user/authenticate', userService.authenticate);
router.post('/user/prueba1', userService.prueba1);

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
router.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      token = req.headers.authorization.split(' ')[1];
  }
	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, config.secret, function(err, decoded) {
			if (err) {

				return res.status(401).send({
    			success: false,
    			message: 'Failed to authenticate token.'
    		});
			} else {
				// if everything is good, save to request for use in other routes
        req.decoded = decoded;
				return next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(401).send({
			success: false,
			message: 'No token provided.'
		});

	}

});

router.post('/user/verifyRole', userService.verifyRole);

router.post('/admin/surveys/create', surveyService.create);
router.put('/admin/surveys/update', surveyService.update);
router.delete('/admin/surveys/:_id', surveyService.delete);
router.get('/admin/surveys', surveyService.getAll);

router.post('/admin/categories/create', categoryService.create);
router.put('/admin/categories/:_id', categoryService.update);
router.delete('/admin/categories/:_id', categoryService.delete);
router.get('/admin/categories/:_id', categoryService.getBySurveyId);

router.post('/admin/questions/create', questionService.create);
router.put('/admin/questions/update', questionService.update);
router.delete('/admin/questions/:_id,:pos', questionService.delete);
router.get('/admin/questions/', questionService.getAll);
router.get('/admin/questions/:_id', questionService.getById);
router.get('/admin/questions/pos/:pos', questionService.getByPos);

router.post('/user/projects/create', projectService.create);
router.get('/user/projects/:_id', projectService.getByUserId);

router.post('/user/answer/create', answerService.create);

module.exports = router;
