const bookshelf = require('./bookshelf');

const Statuses = bookshelf.Model.extend({
    tableName: 'statuses',
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Statuses;