'use strict';
module.exports = function(sequelize, DataTypes) {
    var Priority = sequelize.define('priority', {
      name: DataTypes.STRING
    }
  });

    Priority.associate = function(models) {
    Priority.hasMany(models.tasks);
  };
  return priority;
};