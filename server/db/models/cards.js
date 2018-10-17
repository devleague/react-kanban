const bookshelf = require('./bookshelf')

const Cards = bookshelf.Model.extend({
  tableName: 'cards',
  hasTimestamps: true
})

module.exports = Cards