const bookshelf = require('./bookshelf')

const users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = users