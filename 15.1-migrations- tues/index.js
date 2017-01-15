var models = require('./models');
var Photo = models.Photo;

// or like this
// models.Photo.create({...

Photo.create({
        filename: 'John.png',
        multer_id: '2472o3twelufisfd'
}).then(function(photo) {
	console.log("created a photo");
//hasmany
	photo.createComment({
		text: "here is my comment";
	});

	console.log(photo.dataValues);

	return Photo.findById(id);
}).then(function(comment) {
	console.log("created a comment");
	console.log(comment.dataValues);
	
	var photo_id = comment.dataValues.photo_id;
	return photo.getComments();
	
}).then(function(photo) {

	return photo.

})

