const bookshelf = require('./bookshelf')

const priorities = bookshelf.Model.extend({
  tableName: 'priorities',
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = priorities