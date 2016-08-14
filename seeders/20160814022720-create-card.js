'use strict';

const faker = require('faker');

var cardObject = [];
for (var i = 0; i < 10; i++){
  var temp = {
    Title: faker.lorem.word(),
    Priority: "Low",
    Status: "Queue",
    CreatedBy: faker.name.lastName() + ", " + faker.name.firstName(),
    AssignedTo: faker.name.lastName() + ", " + faker.name.firstName(),
    CreatedAt: new Date(),
    UpdatedAt: new Date()
  }
  cardObject.push(temp);
}

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cards', cardObject, {})
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users');
  }
};
