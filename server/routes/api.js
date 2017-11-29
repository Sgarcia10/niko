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
const dashboardService = require('../services/dashboard.service');

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
  if (req.headers.authorization && req.headers.authorization.split('&')[0] === 'NIKO') {
      token = req.headers.authorization.split('&')[1];
  }
	// decode token
	if (token) {

		// verifies secret and checks exp
    var secret = process.env.SECRET || config.secret;
		jwt.verify(token, secret, function(err, decoded) {
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

router.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
  userService.getRole(req.decoded._id)
  .then((role) => {
    if(role && (role==='user' || role==='admin')){
      return next();
    }
    else{
      return res.status(401).send('Acceso invalido');
    }
  })
  .catch(function (err) {
      return res.status(401).send('Intente mas tarde');
  });
});

router.get('/user/questions/pos/:pos,:idSurvey', questionService.getByPos);

router.post('/user/projects/create', projectService.create);
router.get('/user/projects/user/:_id', projectService.getByUserId);
router.get('/user/projects/activeSurvey', projectService.getActiveSurvey);
router.put('/user/projects/finish/:_id', projectService.finish);
router.delete('/user/projects/:_id', projectService.delete);

router.post('/user/answer/create', answerService.create);
router.get('/user/answers/remarks/:idProject', answerService.getResult);
router.get('/user/answer/:_id', answerService.getById);
router.delete('/user/answer/:_id', answerService.remove);
router.get('/user/answers/position/:_pos,:_idProject', answerService.getByPos);

router.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
  userService.getRole(req.decoded._id)
  .then((role) => {
    if(role && (role==='admin')){
      return next();
    }
    else{
      return res.status(401).send('Acceso invalido');
    }
  })
  .catch(function (err) {
      return res.status(401).send('Intente mas tarde');
  });
});


router.post('/admin/surveys/create', surveyService.create);
router.put('/admin/surveys/update', surveyService.update);
router.delete('/admin/surveys/:_id', surveyService.delete);
router.get('/admin/surveys', surveyService.getAll);
router.post('/admin/surveys/clone/', surveyService.clone);
router.put('/admin/surveys/activate/:_id,:currentActive', surveyService.activate);
router.put('/admin/surveys/finish/:_id', surveyService.finish);
router.get('/admin/surveys/getRedable/:_id', surveyService.getRedable);

router.post('/admin/categories/create', categoryService.create);
router.put('/admin/categories/:_id', categoryService.update);
router.delete('/admin/categories/:_id', categoryService.delete);
router.get('/admin/categories/:_id', categoryService.getBySurveyId);

router.post('/admin/questions/create', questionService.create);
router.put('/admin/questions/update', questionService.update);
router.delete('/admin/questions/:_id,:pos', questionService.delete);
router.get('/admin/questions/', questionService.getAll);
router.get('/admin/question/:_id', questionService.getById);

router.get('/admin/dashboard/questions/:idSurvey', dashboardService.getQuestions);
router.get('/admin/dashboard/stats/:idQuestion,:idSurvey', dashboardService.stats);
router.get('/admin/dashboard/stats/getAllAnswers', dashboardService.getAllAnswers);
router.get('/admin/dashboard/stats/getAllProjects', dashboardService.getAllProjects);
router.get('/admin/dashboard/stats/getAllUsers', dashboardService.getAllUsers);


module.exports = router;
