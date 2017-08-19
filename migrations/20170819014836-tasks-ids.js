'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.renameColumn('tasks', 'status', 'status_id');
      queryInterface.renameColumn('tasks', 'priority', 'priority_id');
      queryInterface.renameColumn('tasks', 'created_by', 'created_by_id');
      queryInterface.renameColumn('tasks', 'assigned_to', 'assigned_to_id');
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
