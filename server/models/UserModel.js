const bookshelf = require('./bookshelf');

const UserModel = bookshelf.Model.extend({
    tableName: 'users_table',
    idAttribute: 'user_id',
    hasTimestamps: true    
});

module.exports = UserModel;