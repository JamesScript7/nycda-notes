var supertest = require("supertest");
var app = require("../app");

describe('POST /uploads', function() {
	it("should allow uploading of photo with caption", function(done) {

		supertest(app)
			.post('/uploads')
			.send({caption: "My cat photo"})
			.attach('file-to-upload', 'test/fixtures/homeboy.jpg')
			.expect(200) //status code
			// .expect('Content-Type', /html/)
			.expect(/My cat photo/i) //i = case insensitive
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