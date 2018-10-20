
const bookshelf = require('./bookshelf')

const Priorities = bookshelf.Model.extend({
  tableName: 'priority',
  hasTimestamps: true
})

module.exports = Priorities