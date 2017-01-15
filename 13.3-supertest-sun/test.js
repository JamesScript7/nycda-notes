var request = require('supertest');
var app = require('./app')

request(app)
	.get('/hello')
	.expect(200) //status code
	.expect('Content-Type', /html/)
	.end(function(err,res) {
		if (err) throw err;
	});

