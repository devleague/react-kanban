'use strict';
module.exports = function(sequelize, DataTypes) {
    var Status = sequelize.define('statuses', {
      name: DataTypes.STRING
    });
    Status.associate = function(models) {
    Status.hasMany(models.tasks, {foreignKey: 'status_id'});
  };
  return Status;
};