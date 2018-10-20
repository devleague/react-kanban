
const bookshelf = require('./bookshelf')

const Status = bookshelf.Model.extend({
  tableName: 'status',
  hasTimestamps: true
})

module.exports = Status