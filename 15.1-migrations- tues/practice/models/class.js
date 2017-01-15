'use strict';
module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define('Class', {
    classname: DataTypes.STRING,
    classsize: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Class;
};