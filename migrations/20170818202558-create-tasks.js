'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'}
      },
      assigned_to: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'}
      },
      status: {
        type: Sequelize.INTEGER,
        references: { model: 'statuses', key: 'id'}
      },
      priority: {
        type: Sequelize.INTEGER,
        references: { model: 'priorities', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('tasks');
  }
};