const bookshelf = require('./bookshelf')

const statuses = bookshelf.Model.extend({
  tableName: 'statuses',
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = statuses