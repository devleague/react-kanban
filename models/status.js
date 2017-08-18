'use strict';
module.exports = function(sequelize, DataTypes) {
    var status = sequelize.define('status', {
      name: DataTypes.STRING
    }
  });
    Priority.associate = function(models) {
    Priority.hasMany(models.tasks);
  };
  return status;
};