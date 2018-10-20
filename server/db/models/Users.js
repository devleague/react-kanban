const Cards = require('./Cards')
const bookshelf = require('./bookshelf')

const Users = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  // cards: function () {
  //   return this.hasMany(Cards)
  // }
})

module.exports = Users