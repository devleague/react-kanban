'use strict';

const faker = require('faker');

var taskObject = [];
for (var i = 0; i < 10; i++){
  var temp = {
    Title: faker.lorem.word(),
    Priority: "Low",
    Status: "Queue",
    CreatedBy: faker.name.lastName() + ", " + faker.name.firstName(),
    AssignedTo: faker.name.lastName() + ", " + faker.name.firstName(),
    createdAt: new Date(),
    updatedAt: new Date()

  }
  taskObject.push(temp);
}

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', taskObject, {})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Tasks');
  }
};
