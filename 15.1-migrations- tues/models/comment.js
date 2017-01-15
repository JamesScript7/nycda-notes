'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    photo_id: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        models.Comment.belongsTo(models.Photo);
      }
    }
  });
  return Comment;
};