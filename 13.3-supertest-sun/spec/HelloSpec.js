//functional test

var supertest = require("supertest");
var app = require("../app");

describe('GET /hello', function() {
	it("should return \"Hello, World\"", function(done) {

		supertest(app)
			.get('/hello')
			.expect(200) //status code
			.expect('Content-Type', /html/)
			.end(function(err,res) {
			if (err) {
				done.fail(err);
				throw err;
			} else {
				done();
			}
		});
	})
})