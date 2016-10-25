'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Cards', [{
        Title: 'Go to the gym',
        Priority: 'High',
        Status: 'Queue',
        Createdby: 'Aaron',
        Assignedto: 'Bryan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Title: 'Eat dinner',
        Priority: 'High',
        Status: 'Done',
        Createdby: 'Bryan',
        Assignedto: 'Aaron',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Title: 'Drink water',
        Priority: 'High',
        Status: 'Progress',
        Createdby: 'Aaron',
        Assignedto: 'Bryan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Title: 'Fart',
        Priority: 'High',
        Status: 'Queue',
        Createdby: 'Bryan',
        Assignedto: 'Aaron',
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Cards', null, {});

  }
};
