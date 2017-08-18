'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('users', {
    name: DataTypes.STRING
  }
});

  Users.associate = function(models) {
  Users.hasMany(models.tasks);
};
  return Users;
};