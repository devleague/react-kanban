const bookshelf = require('./bookshelf');

const Users = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Users