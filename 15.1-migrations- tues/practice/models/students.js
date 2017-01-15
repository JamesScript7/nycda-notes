'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    studentname: DataTypes.STRING,
    studentclass: DataTypes.STRING,
    classId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Students;
};