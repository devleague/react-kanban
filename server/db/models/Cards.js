const Users = require('./Users')
const bookshelf = require('./bookshelf')

const Cards = bookshelf.Model.extend({
  tableName: 'cards',
  hasTimestamps: true,
  idAttribute: 'card_id'
  // assigned_to: function () {
  //   return this.belongsTo(Users)
  // }
})

module.exports = Cards