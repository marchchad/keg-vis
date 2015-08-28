var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Chad\'s Node App'});
});

/* GET menu page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET menu page. */
router.get('/ontap', function(req, res, next) {
  res.render('menu');
});

/* GET menu page. */
router.get('/brewing', function(req, res, next) {
  res.render('brewing');
});

/* GET menu page. */
router.get('/projects', function(req, res, next) {
  res.render('projects');
});


/* 
  Catch all to route anything that doesn't 
  match back to the home page. 
*/
router.get('/*', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
