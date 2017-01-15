var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

	models.Users.findAll().then(function(results) {
	  res.send(results);
	});
});

module.exports = router;
