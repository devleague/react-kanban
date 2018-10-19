const bookshelf = require('./bookshelf');
const CardModel = require('./CardModel.js');

const UserModel = bookshelf.Model.extend({
    tableName: 'users_table',
    idAttribute: 'user_id',
    idAttribute: 'first_name',
    idAttribute: 'last_name',
    idAttribute: 'email',   
    hasTimestamps: true    
});

module.exports = UserModel;