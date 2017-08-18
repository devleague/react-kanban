'use strict';
module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define('tasks', {
      task: DataTypes.STRING,
      created_by: DataTypes.NUMBER,
      assigned_to: DataTypes.NUMBER,
      status: DataTypes.NUMBER,
      priority: DataTypes.NUMBER
    }
  });

    Tasks.associate = function(models) {
    Tasks.belongsTo(models.status);
    Tasks.belongsTo(models.users);
    Tasks.belongsTo(models.priority);
  };

  return tasks;
};