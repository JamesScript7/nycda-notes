var BlogPost = sequelize.define('blogPost', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	body: Sequelize.STRING
});