'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('users', {
    name: DataTypes.STRING
  });

    Users.associate = function(models) {
    Users.hasMany(models.tasks, {foreignKey: 'created_by_id'});
    Users.hasMany(models.tasks, {foreignKey: 'assigned_to_id'});
  };
  return Users;
};