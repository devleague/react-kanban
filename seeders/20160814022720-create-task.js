'use strict';

const faker = require('faker');

var taskObject = [];
for (var i = 0; i < 3; i++){
  var temp = {
    Title: faker.lorem.word(),
    Priority: i,
    Status: "Queue",
    CreatedBy: faker.name.lastName() + ", " + faker.name.firstName(),
    AssignedTo: faker.name.lastName() + ", " + faker.name.firstName(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  taskObject.push(temp);
}
for (var i = 0; i < 3; i++){
  var temp = {
    Title: faker.lorem.word(),
    Priority: i,
    Status: "Progress",
    CreatedBy: faker.name.lastName() + ", " + faker.name.firstName(),
    AssignedTo: faker.name.lastName() + ", " + faker.name.firstName(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  taskObject.push(temp);
}
for (var i = 0; i < 3; i++){
  var temp = {
    Title: faker.lorem.word(),
    Priority: i,
    Status: "Done",
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
