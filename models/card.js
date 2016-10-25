'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    Title: DataTypes.STRING,
    Priority: DataTypes.STRING,
    Status: DataTypes.STRING,
    Createdby: DataTypes.STRING,
    Assignedto: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Card;
};