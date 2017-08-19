'use strict';
module.exports = function(sequelize, DataTypes) {
    var Priority = sequelize.define('priorities', {
      name: DataTypes.STRING
    });

    Priority.associate = function(models) {
    Priority.hasMany(models.tasks, {foreignKey: 'priority_id'});
  };
  return Priority;
};