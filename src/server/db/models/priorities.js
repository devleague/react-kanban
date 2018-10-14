const bookshelf = require('./bookshelf');

const Priorities = bookshelf.Model.extend({
    tableName: 'priorities',
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Priorities;