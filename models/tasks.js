'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define('tasks', {
    task: DataTypes.STRING,
    created_by_id: DataTypes.INTEGER,
    assigned_to_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    priority_id: DataTypes.INTEGER
  });

  Tasks.associate = function(models) {
    Tasks.belongsTo(models.statuses, {foreignKey: 'status_id'});
    Tasks.belongsTo(models.users, {foreignKey: 'created_by_id'});
    Tasks.belongsTo(models.users, {foreignKey: 'assigned_to_id'});
    Tasks.belongsTo(models.priorities, {foreignKey: 'priority_id'});
  };

  return Tasks;
};