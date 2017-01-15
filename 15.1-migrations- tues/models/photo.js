'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    filename: DataTypes.STRING,
    filesize: DataTypes.INTEGER,
    multer_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.Photo.hasMany(models.Comment);
      }
    }
  });
  return Photo;
};