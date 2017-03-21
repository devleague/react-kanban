'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    task: DataTypes.STRING,
    type: DataTypes.STRING,
    priority: DataTypes.STRING,
    by: DataTypes.STRING,
    to: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Card;
};