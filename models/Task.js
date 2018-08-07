'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    Title: DataTypes.STRING,
    Priority: DataTypes.INTEGER,
    Status: DataTypes.STRING,
    CreatedBy: DataTypes.STRING,
    AssignedTo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};